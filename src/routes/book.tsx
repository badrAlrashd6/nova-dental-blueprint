import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { doctors, services } from "@/content/clinic";
import { useLang, type L } from "@/lib/i18n";
import { navLinks, site, timeSlots, ui } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  MAX_DAYS_AHEAD,
  addDays,
  bookingSchema,
  damascusToday,
  invalidFields,
  type BookingField,
} from "@/lib/booking";
import { submitBooking } from "@/lib/booking.functions";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "احجز موعد | عيادة نوفا لطب الأسنان — Book an Appointment" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      { property: "og:title", content: "احجز موعد | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content:
          "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

type Fields = BookingField;

const fieldMessages: Record<BookingField, L> = {
  fullName: ui.errName,
  phone: ui.errPhone,
  email: ui.errEmail,
  service: ui.errService,
  doctor: ui.errService,
  date: ui.errDateRange,
  time: ui.errTime,
  note: ui.errNote,
};

function newRequestKey(): string {
  return crypto.randomUUID();
}

function BookPage() {
  const { t, lang } = useLang();
  const crumb = navLinks.find((l) => l.to === "/book")?.label ?? ui.bookHeroEyebrow;
  const [errors, setErrors] = useState<Partial<Record<Fields, L>>>({});
  const [formError, setFormError] = useState<L | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // One key per filled-in form: retries and double clicks reuse it, so the
  // server stores the request at most once.
  const [requestKey, setRequestKey] = useState<string | null>(null);
  const [today, setToday] = useState<string | null>(null);
  const submit = useServerFn(submitBooking);

  useEffect(() => {
    setRequestKey(newRequestKey());
    setToday(damascusToday());
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending || !requestKey) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "");
    const payload = {
      requestKey,
      fullName: get("name"),
      phone: get("phone"),
      email: get("email"),
      service: get("service"),
      doctor: get("doctor"),
      date: get("date"),
      time: get("time"),
      note: get("notes"),
      locale: lang,
    };

    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Partial<Record<Fields, L>> = {};
      for (const f of invalidFields(parsed.error)) next[f] = fieldMessages[f];
      setErrors(next);
      setFormError(ui.errCheckFields);
      return;
    }

    setErrors({});
    setFormError(null);
    setSending(true);
    try {
      const result = await submit({ data: payload });
      if (result.ok) {
        setSent(true);
        form.reset();
        setRequestKey(newRequestKey());
      } else if (result.reason === "validation") {
        const next: Partial<Record<Fields, L>> = {};
        for (const f of result.fields) next[f] = fieldMessages[f];
        setErrors(next);
        setFormError(ui.errCheckFields);
      } else {
        setFormError(ui.errSubmit);
      }
    } catch {
      setFormError(ui.errSubmit);
    } finally {
      setSending(false);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <PageHero
        eyebrow={t(ui.bookHeroEyebrow)}
        breadcrumb={t(crumb)}
        title={t(ui.bookHeroTitle)}
        description={t(ui.bookHeroDesc)}
      />

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="rounded-[2rem] border border-border bg-card p-7 shadow-elevated sm:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden />
                <h2 className="mt-6 text-2xl font-semibold text-foreground">
                  {t(ui.successTitle)}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {t(ui.successDesc)}
                </p>
                <Button
                  className="mt-8 rounded-full bg-gradient-primary px-7"
                  onClick={() => setSent(false)}
                >
                  {t(ui.bookAnother)}
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="text-xl font-semibold text-foreground">{t(ui.formTitle)}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{t(ui.bookHeroDesc)}</p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t(ui.fullName)}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t(ui.fullNamePh)}
                      className={fieldClass}
                    />
                    <FieldError error={errors.fullName} />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      {t(ui.phoneField)}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      placeholder={t(ui.phonePh)}
                      className={cn(fieldClass, "text-start")}
                    />
                    <FieldError error={errors.phone} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t(ui.emailField)}{" "}
                      <span className="text-xs text-muted-foreground">({t(ui.optional)})</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      dir="ltr"
                      placeholder={t(ui.emailPh)}
                      className={cn(fieldClass, "text-start")}
                    />
                    <FieldError error={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      {t(ui.serviceField)}
                    </label>
                    <select id="service" name="service" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        {t(ui.servicePh)}
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {t(s.title)}
                        </option>
                      ))}
                    </select>
                    <FieldError error={errors.service} />
                  </div>

                  <div>
                    <label htmlFor="doctor" className="text-sm font-medium text-foreground">
                      {t(ui.doctorField)}
                    </label>
                    <select id="doctor" name="doctor" defaultValue="" className={fieldClass}>
                      <option value="">{t(ui.doctorAny)}</option>
                      {doctors.map((d) => (
                        <option key={d.slug} value={d.slug}>
                          {t(d.name)}
                        </option>
                      ))}
                    </select>
                    <FieldError error={errors.doctor} />
                  </div>

                  <div>
                    <label htmlFor="date" className="text-sm font-medium text-foreground">
                      {t(ui.dateField)}
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={today ?? undefined}
                      max={today ? addDays(today, MAX_DAYS_AHEAD) : undefined}
                      className={fieldClass}
                    />
                    <FieldError error={errors.date} />
                  </div>

                  <div>
                    <label htmlFor="time" className="text-sm font-medium text-foreground">
                      {t(ui.timeField)}
                    </label>
                    <select id="time" name="time" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        {t(ui.timePh)}
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {t(slot.label)}
                        </option>
                      ))}
                    </select>
                    <FieldError error={errors.time} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className="text-sm font-medium text-foreground">
                      {t(ui.notesField)}{" "}
                      <span className="text-xs text-muted-foreground">({t(ui.optional)})</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      maxLength={500}
                      placeholder={t(ui.notesPh)}
                      className={fieldClass}
                    />
                    <FieldError error={errors.note} />
                  </div>
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="mt-6 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    {t(formError)}
                  </p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending || !requestKey}
                  aria-busy={sending}
                  className="mt-8 w-full rounded-full bg-gradient-primary px-7 shadow-glow sm:w-auto"
                >
                  {sending ? t(ui.sending) : t(ui.send)}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-secondary/40 p-8">
              <h2 className="text-lg font-semibold text-foreground">{t(ui.bookHeroEyebrow)}</h2>
              <ul className="mt-5 space-y-4">
                {[ui.bookAside1, ui.bookAside2, ui.bookAside3, ui.bookAside4].map((p) => (
                  <li key={p.en} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <p className="text-sm font-semibold text-foreground">{t(ui.prefer)}</p>
              <div className="mt-5 flex flex-col gap-3">
                {site.phoneHref && (
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4 text-primary" />
                      {t(ui.call)}
                    </a>
                  </Button>
                )}
                {site.whatsappHref && (
                  <Button asChild className="rounded-full bg-gradient-primary">
                    <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      {t(ui.whatsapp)}
                    </a>
                  </Button>
                )}
              </div>
              {!site.phoneHref && !site.whatsappHref && (
                <p className="text-sm text-muted-foreground">{t(ui.contactPendingNote)}</p>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function FieldError({ error }: { error?: L }) {
  const { t } = useLang();
  if (!error) return null;
  return <p className="mt-2 text-xs text-destructive">{t(error)}</p>;
}
