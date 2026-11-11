import type { L } from "@/lib/i18n";

/**
 * Single source of truth for the clinic's contact details.
 *
 * Every value is a PLACEHOLDER (`null`) until the project owner supplies the
 * real information. Components must treat `null` as "not available yet":
 * they hide the related call/WhatsApp/email/map/social links and show a
 * "to be announced" label instead, so nothing fake is ever linked.
 *
 * To go live, replace a `null` with the real value, e.g.
 *   phone: "+963 11 000 0000"
 */
export type BusinessHoursEntry = { day: L; time: L };

export const contactConfig: {
  /** Display phone number, international format. */
  phone: string | null;
  /** WhatsApp number, international format (digits are extracted for wa.me). */
  whatsapp: string | null;
  email: string | null;
  address: L | null;
  /** Full Google Maps (or other) URL for directions. */
  mapUrl: string | null;
  social: {
    instagram: string | null;
    facebook: string | null;
    x: string | null;
  };
  /** Opening hours. `null` = not announced yet. */
  businessHours: BusinessHoursEntry[] | null;
} = {
  phone: null, // PLACEHOLDER — real phone number to be provided
  whatsapp: null, // PLACEHOLDER — real WhatsApp number to be provided
  email: null, // PLACEHOLDER — real email address to be provided
  address: null, // PLACEHOLDER — real street address in Damascus to be provided
  mapUrl: null, // PLACEHOLDER — real map location to be provided
  social: {
    instagram: null, // PLACEHOLDER
    facebook: null, // PLACEHOLDER
    x: null, // PLACEHOLDER
  },
  businessHours: null, // PLACEHOLDER — real working hours to be provided
};

const digits = (v: string) => v.replace(/[^\d+]/g, "");

/** Derived, safe-to-render link targets (null when the value is missing). */
export const contactLinks = {
  phoneHref: contactConfig.phone ? `tel:${digits(contactConfig.phone)}` : null,
  whatsappHref: contactConfig.whatsapp
    ? `https://wa.me/${digits(contactConfig.whatsapp).replace("+", "")}`
    : null,
  emailHref: contactConfig.email ? `mailto:${contactConfig.email}` : null,
};

/** Label shown wherever a contact detail has not been provided yet. */
export const pendingLabel: L = { ar: "سيُعلن قريباً", en: "To be announced" };
