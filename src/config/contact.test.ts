import { test, expect } from "bun:test";
import { contactConfig, contactLinks } from "./contact";

test("all clinic contact values and opening hours remain null", () => {
  expect(contactConfig).toEqual({
    phone: null,
    whatsapp: null,
    email: null,
    address: null,
    mapUrl: null,
    social: { instagram: null, facebook: null, x: null },
    businessHours: null,
  });
});

test("missing contact values produce no actionable contact links", () => {
  expect(contactLinks).toEqual({ phoneHref: null, whatsappHref: null, emailHref: null });
});