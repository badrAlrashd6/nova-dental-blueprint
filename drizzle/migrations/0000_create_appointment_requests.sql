CREATE TYPE public.appointment_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

CREATE TABLE public.appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_key uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  service_slug text NOT NULL,
  doctor_slug text,
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  note text,
  locale text NOT NULL DEFAULT 'ar',
  status public.appointment_status NOT NULL DEFAULT 'pending',
  CONSTRAINT appointment_requests_request_key_key UNIQUE (request_key),
  CONSTRAINT appointment_requests_full_name_len CHECK (char_length(btrim(full_name)) BETWEEN 2 AND 100),
  CONSTRAINT appointment_requests_phone_format CHECK (phone ~ '^\+?[0-9][0-9 ()-]{5,23}$'),
  CONSTRAINT appointment_requests_email_format CHECK (email IS NULL OR (char_length(email) <= 254 AND email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$')),
  CONSTRAINT appointment_requests_note_len CHECK (note IS NULL OR char_length(note) <= 500),
  CONSTRAINT appointment_requests_locale CHECK (locale IN ('ar', 'en')),
  CONSTRAINT appointment_requests_service CHECK (service_slug IN ('implants','orthodontics','hollywood-smile','veneers','whitening','root-canal','general','pediatric','emergency','cosmetic')),
  CONSTRAINT appointment_requests_doctor CHECK (doctor_slug IS NULL OR doctor_slug IN ('layla-al-sabah','yousef-al-rashed','hana-mansour','omar-al-fadhli')),
  CONSTRAINT appointment_requests_time_slot CHECK (preferred_time IN ('09:00','10:30','12:00','14:00','16:00','18:00','20:00'))
);

CREATE INDEX appointment_requests_preferred_date_idx ON public.appointment_requests (preferred_date);
CREATE INDEX appointment_requests_status_created_idx ON public.appointment_requests (status, created_at DESC);
CREATE INDEX appointment_requests_created_idx ON public.appointment_requests (created_at DESC);
CREATE INDEX appointment_requests_phone_idx ON public.appointment_requests (phone);
CREATE INDEX appointment_requests_name_lower_idx ON public.appointment_requests (lower(full_name));

-- Insert rules depend on today's date, so they live in a trigger rather than a CHECK.
CREATE OR REPLACE FUNCTION public.appointment_requests_before_insert()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.status := 'pending';
  NEW.created_at := now();
  NEW.updated_at := now();
  IF NEW.preferred_date < (now() AT TIME ZONE 'Asia/Damascus')::date
     OR NEW.preferred_date > (now() AT TIME ZONE 'Asia/Damascus')::date + 180 THEN
    RAISE EXCEPTION 'preferred_date out of range' USING ERRCODE = '22023';
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.appointment_requests_touch_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER appointment_requests_before_insert
BEFORE INSERT ON public.appointment_requests
FOR EACH ROW EXECUTE FUNCTION public.appointment_requests_before_insert();

CREATE TRIGGER appointment_requests_touch_updated_at
BEFORE UPDATE ON public.appointment_requests
FOR EACH ROW EXECUTE FUNCTION public.appointment_requests_touch_updated_at();

-- Single-administrator allowlist: verified identity from auth.users, never client input.
CREATE OR REPLACE FUNCTION public.is_nova_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users u
    WHERE u.id = auth.uid()
      AND lower(u.email) = 'badralrashd6@gmail.com'
      AND u.email_confirmed_at IS NOT NULL
  );
$$;
REVOKE ALL ON FUNCTION public.is_nova_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_nova_admin() TO authenticated;

REVOKE ALL ON public.appointment_requests FROM anon, authenticated;
GRANT SELECT, DELETE ON public.appointment_requests TO authenticated;
GRANT UPDATE (status) ON public.appointment_requests TO authenticated;
GRANT ALL ON public.appointment_requests TO service_role;

ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can read appointment requests"
ON public.appointment_requests FOR SELECT TO authenticated
USING (public.is_nova_admin());

CREATE POLICY "Admin can update appointment requests"
ON public.appointment_requests FOR UPDATE TO authenticated
USING (public.is_nova_admin()) WITH CHECK (public.is_nova_admin());

CREATE POLICY "Admin can delete appointment requests"
ON public.appointment_requests FOR DELETE TO authenticated
USING (public.is_nova_admin());