import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  bookingSchema,
  bookingStatuses,
  invalidFields,
  type BookingStatus,
  type SubmitBookingResult,
} from "@/lib/booking";

/**
 * Public endpoint: the only way to create a booking. Visitors have no table
 * privileges, so the insert runs with the server-only client after strict
 * validation; the unique request key makes retries idempotent.
 */
export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<SubmitBookingResult> => {
    const parsed = bookingSchema.safeParse(data);
    if (!parsed.success)
      return { ok: false, reason: "validation", fields: invalidFields(parsed.error) };
    const v = parsed.data;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("appointment_requests").insert({
      request_key: v.requestKey,
      full_name: v.fullName,
      phone: v.phone,
      email: v.email,
      service_slug: v.service,
      doctor_slug: v.doctor,
      preferred_date: v.date,
      preferred_time: v.time,
      note: v.note,
      locale: v.locale,
    });

    if (!error) return { ok: true, duplicate: false };
    // Same request key already stored: a double click or network retry.
    if (error.code === "23505") return { ok: true, duplicate: true };
    if (error.code === "23514" || error.code === "22023") {
      return { ok: false, reason: "validation", fields: [] };
    }
    console.error("[booking] insert failed", error.code, error.message);
    return { ok: false, reason: "server" };
  });

type AuthedContext = {
  supabase: SupabaseClient<Database>;
  claims: { email?: unknown };
};

const ADMIN_EMAIL = "badralrashd6@gmail.com";

/** Server-side gate run before every admin read or write. */
async function assertAdmin(context: AuthedContext): Promise<void> {
  const claimEmail =
    typeof context.claims.email === "string" ? context.claims.email.trim().toLowerCase() : "";
  if (claimEmail !== ADMIN_EMAIL) throw new Error("Forbidden");
  const { data, error } = await context.supabase.rpc("is_nova_admin");
  if (error || data !== true) throw new Error("Forbidden");
}

export type AdminBooking = {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  time: string;
  service: string;
  doctor: string | null;
  fullName: string;
  phone: string;
  email: string | null;
  note: string | null;
  locale: string;
  status: BookingStatus;
};

export const checkAdminAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    try {
      await assertAdmin(context);
      return { allowed: true as const };
    } catch {
      return { allowed: false as const };
    }
  });

const listSchema = z.object({
  status: z.enum(["all", ...bookingStatuses]).default("all"),
  // Only characters that cannot break the PostgREST filter syntax.
  q: z
    .string()
    .trim()
    .max(60)
    .transform((s) => s.replace(/[^\p{L}\p{N} +@.-]/gu, ""))
    .default(""),
});

export const listBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => listSchema.parse(input ?? {}))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const sb = context.supabase;

    let query = sb
      .from("appointment_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (data.status !== "all") query = query.eq("status", data.status);
    if (data.q) {
      const like = `%${data.q}%`;
      query = query.or(`full_name.ilike.${like},phone.ilike.${like},email.ilike.${like}`);
    }
    const { data: rows, error } = await query;
    if (error) {
      console.error("[admin] list failed", error.code);
      throw new Error("Could not load bookings");
    }

    const counts: Record<BookingStatus | "total", number> = {
      total: 0,
      pending: 0,
      confirmed: 0,
      cancelled: 0,
      completed: 0,
    };
    const { data: all, error: countErr } = await sb.from("appointment_requests").select("status");
    if (countErr) throw new Error("Could not load bookings");
    for (const r of all ?? []) {
      counts.total += 1;
      counts[r.status] += 1;
    }

    const bookings: AdminBooking[] = (rows ?? []).map((r) => ({
      id: r.id,
      createdAt: r.created_at,
      updatedAt: r.updated_at,
      date: r.preferred_date,
      time: r.preferred_time.slice(0, 5),
      service: r.service_slug,
      doctor: r.doctor_slug,
      fullName: r.full_name,
      phone: r.phone,
      email: r.email,
      note: r.note,
      locale: r.locale,
      status: r.status,
    }));
    return { bookings, counts };
  });

export const updateBookingStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(bookingStatuses) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: rows, error } = await context.supabase
      .from("appointment_requests")
      .update({ status: data.status })
      .eq("id", data.id)
      .select("id");
    if (error) throw new Error("Could not update booking");
    if (!rows || rows.length === 0) throw new Error("Booking not found");
    return { ok: true as const };
  });

export const deleteBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: rows, error } = await context.supabase
      .from("appointment_requests")
      .delete()
      .eq("id", data.id)
      .select("id");
    if (error) throw new Error("Could not delete booking");
    if (!rows || rows.length === 0) throw new Error("Booking not found");
    return { ok: true as const };
  });
