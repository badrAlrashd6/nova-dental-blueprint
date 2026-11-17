import { z } from "zod";
import { doctors, services } from "@/content/clinic";

/**
 * Booking rules shared by the browser form and the server function.
 * The database repeats the same allowlists as CHECK constraints, so a
 * change here must be mirrored in a migration.
 */
export const timeSlotValues = [
  "09:00",
  "10:30",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
] as const;
export const bookingStatuses = ["pending", "confirmed", "cancelled", "completed"] as const;
export type BookingStatus = (typeof bookingStatuses)[number];

export const MAX_DAYS_AHEAD = 180;

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];
const doctorSlugs = doctors.map((d) => d.slug) as [string, ...string[]];

/** Today's date in Damascus as YYYY-MM-DD, so browser and server agree on "today". */
export function damascusToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Damascus" }).format(now);
}

export function addDays(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

const emptyToNull = (v: unknown) => (typeof v === "string" && v.trim() === "" ? null : v);

export const bookingSchema = z
  .object({
    requestKey: z.string().uuid(),
    fullName: z.string().trim().min(2).max(100),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[0-9][0-9 ()-]{5,23}$/)
      .refine((v) => v.replace(/\D/g, "").length >= 8),
    email: z.preprocess(emptyToNull, z.string().trim().max(254).email().nullable()),
    service: z.enum(serviceSlugs),
    doctor: z.preprocess(emptyToNull, z.enum(doctorSlugs).nullable()),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    time: z.enum(timeSlotValues),
    note: z.preprocess(emptyToNull, z.string().trim().max(500).nullable()),
    locale: z.enum(["ar", "en"]),
  })
  .superRefine((v, ctx) => {
    const today = damascusToday();
    if (v.date < today || v.date > addDays(today, MAX_DAYS_AHEAD)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["date"], message: "out_of_range" });
    }
  });

export type BookingInput = z.infer<typeof bookingSchema>;
export type BookingField =
  | "fullName"
  | "phone"
  | "email"
  | "service"
  | "doctor"
  | "date"
  | "time"
  | "note";

export type SubmitBookingResult =
  | { ok: true; duplicate: boolean }
  | { ok: false; reason: "validation"; fields: BookingField[] }
  | { ok: false; reason: "server" };

export function invalidFields(error: z.ZodError): BookingField[] {
  const out = new Set<BookingField>();
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && key !== "requestKey" && key !== "locale")
      out.add(key as BookingField);
  }
  return [...out];
}
