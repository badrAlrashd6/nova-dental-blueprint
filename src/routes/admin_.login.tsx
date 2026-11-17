import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { LockKeyhole, MailCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { useLang, type L } from "@/lib/i18n";
import { adminUi } from "@/lib/site";

export const Route = createFileRoute("/admin_/login")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) throw redirect({ to: "/admin" });
  },
  head: () => ({
    meta: [
      { title: "دخول المسؤول | Nova Dental Clinic — Admin sign-in" },
      { name: "description", content: "Private administrator sign-in for the Nova academic demo." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin sign-in | Nova Dental Clinic" },
      { property: "og:description", content: "Private administrator area of an academic demo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminLoginPage,
});

const emailSchema = z.string().trim().email().max(254);

function AdminLoginPage() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<L | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const parsed = emailSchema.safeParse(new FormData(e.currentTarget).get("email"));
    if (!parsed.success) {
      setError(adminUi.invalidEmail);
      return;
    }
    setError(null);
    setStatus("sending");
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: parsed.data.toLowerCase(),
      // Never creates accounts; the single admin is invited by the owner.
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/admin/login`,
      },
    });
    // Unknown emails get the same neutral message, so the form cannot be
    // used to discover which address is authorized.
    if (otpError && otpError.status !== 400 && otpError.status !== 422) {
      setStatus("idle");
      setError(adminUi.linkError);
      return;
    }
    setStatus("sent");
  }

  return (
    <Section className="py-20">
      <div className="mx-auto max-w-md rounded-[2rem] border border-border bg-card p-8 shadow-elevated sm:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <LockKeyhole className="h-6 w-6" aria-hidden />
        </span>
        <h1 className="mt-6 text-2xl font-semibold text-foreground">{t(adminUi.loginTitle)}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{t(adminUi.loginDesc)}</p>

        {status === "sent" ? (
          <p
            role="status"
            className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary/60 p-4 text-sm text-foreground"
          >
            <MailCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            {t(adminUi.linkSent)}
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8">
            <label htmlFor="admin-email" className="text-sm font-medium text-foreground">
              {t(adminUi.emailLabel)}
            </label>
            <input
              id="admin-email"
              name="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-start text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {error && (
              <p role="alert" className="mt-2 text-xs text-destructive">
                {t(error)}
              </p>
            )}
            <Button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-gradient-primary"
            >
              {status === "sending" ? t(adminUi.sendingLink) : t(adminUi.sendLink)}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
