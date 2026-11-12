import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { doctors, services } from "@/content/clinic";
import { useLang, type L } from "@/lib/i18n";
import { navLinks, site, timeSlots, ui } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "احجز موعد | عيادة نوفا لطب الأسنان — Book an Appointment" },
      {
        name: "description",
        content:
          "احجز موعدك في عيادة نوفا لطب الأسنان في دمشق، سوريا. اختر العلاج والطبيب والوقت المناسب ونؤكد خلال ساعة عمل واحدة.",
      },
      { property: "og:title", content: "احجز موعد | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content: "احجز استشارتك في عيادة نوفا لطب الأسنان، دمشق، سوريا.",
      },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

type Fields = "name" | "phone" | "email" | "service" | "date" | "time";

function BookPage() {
  const { t } = useLang();
  const crumb = navLinks.find((l) => l.to === "/book")?.label ?? ui.bookHeroEyebrow;
  const [errors, setErrors] = useState<Partial<Record<Fields, L>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Partial<Record<Fields, L>> = {};

    if (get("name").length < 3) next.name = ui.errName;
    if (get("phone").replace(/\D/g, "").length < 8) next.phone = ui.errPhone;
    const email = get("email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = ui.errEmail;
    if (!get("service")) next.service = ui.errService;
    if (!get("date")) next.date = ui.errDate;
    if (!get("time")) next.time = ui.errTime;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      form.reset();
    }, 700);
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
                    <FieldError error={errors.name} />
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
                  </div>

                  <div>
                    <label htmlFor="date" className="text-sm font-medium text-foreground">
                      {t(ui.dateField)}
                    </label>
                    <input id="date" name="date" type="date" className={fieldClass} />
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
                        <option key={slot.en} value={slot.en}>
                          {t(slot)}
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
                      placeholder={t(ui.notesPh)}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
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
