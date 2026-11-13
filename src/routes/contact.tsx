import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { useLang } from "@/lib/i18n";
import { ContactValue } from "@/components/site/ContactValue";
import { navLinks, site, ui } from "@/lib/site";
import location from "@/assets/clinic-location.jpg";
import aboutClinic from "@/assets/about-clinic.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | عيادة نوفا لطب الأسنان — Contact" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      { property: "og:title", content: "تواصل معنا | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content: "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const crumb = navLinks.find((l) => l.to === "/contact")?.label ?? ui.home;

  return (
    <>
      <PageHero
        eyebrow={t(ui.contactHeroEyebrow)}
        breadcrumb={t(crumb)}
        title={t(ui.contactHeroTitle)}
        description={t(ui.contactHeroDesc)}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {t(ui.contactInfo)}
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.addressLabel)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {site.address ? t(site.address) : t(site.pending)}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.phoneLabel)}</p>
                  <ContactValue
                    value={site.phone}
                    href={site.phoneHref}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  />
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.emailLabel)}</p>
                  <ContactValue
                    value={site.email}
                    href={site.emailHref}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  />
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.workingHours)}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {(site.hoursList ?? [{ day: ui.workingHours, time: site.pending }]).map((h) => (
                      <li key={h.day.en} className="flex justify-between gap-6">
                        <span>{t(h.day)}</span>
                        <span>{t(h.time)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              {site.mapsHref && (
                <Button asChild className="rounded-full bg-gradient-primary px-7">
                  <a href={site.mapsHref} target="_blank" rel="noreferrer">
                    <MapPin className="h-4 w-4" />
                    {t(ui.directions)}
                  </a>
                </Button>
              )}
              {site.whatsappHref && (
                <Button asChild variant="outline" className="rounded-full px-7">
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    {t(ui.whatsapp)}
                  </a>
                </Button>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <Media
              src={location}
              alt={t({
                ar: "مدخل مبنى العيادة مساءً",
                en: "Entrance of the clinic building at dusk",
              })}
              imgClassName="aspect-[4/3]"
            />
            <Media
              src={aboutClinic}
              alt={t({ ar: "استقبال عيادة نوفا لطب الأسنان", en: "Nova Dental Clinic reception" })}
              imgClassName="aspect-[16/9]"
            />
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
