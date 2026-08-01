import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { useLang } from "@/lib/i18n";
import { navLinks, site, ui } from "@/lib/site";
import location from "@/assets/clinic-location.jpg";
import aboutClinic from "@/assets/about-clinic.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | مركز بيرل لطب الأسنان — Contact" },
      {
        name: "description",
        content:
          "مركز بيرل لطب الأسنان — شارع سالم المبارك، مجمع بيرل، السالمية، الكويت. من السبت إلى الخميس ٩ صباحاً - ٩ مساءً.",
      },
      { property: "og:title", content: "تواصل معنا | مركز بيرل لطب الأسنان" },
      {
        property: "og:description",
        content: "العنوان وساعات العمل وطرق التواصل مع مركز بيرل في السالمية، الكويت.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const crumb = navLinks.find((l) => l.to === "/contact")!.label;

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
                  <p className="mt-1 text-sm text-muted-foreground">{t(site.address)}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.phoneLabel)}</p>
                  <a href={site.phoneHref} dir="ltr" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.emailLabel)}</p>
                  <a href={site.emailHref} dir="ltr" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(ui.workingHours)}</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {site.hoursList.map((h) => (
                      <li key={h.day.en} className="flex justify-between gap-6">
                        <span>{t(h.day)}</span>
                        <span>{t(h.time)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-primary">{t(site.emergency)}</p>
                </div>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-primary px-7">
                <a href={site.mapsHref} target="_blank" rel="noreferrer">
                  <MapPin className="h-4 w-4" />
                  {t(ui.directions)}
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7">
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  {t(ui.whatsapp)}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <Media
              src={location}
              alt={t({
                ar: "مدخل مجمع بيرل في السالمية مساءً",
                en: "Entrance of Pearl Complex in Salmiya at dusk",
              })}
              imgClassName="aspect-[4/3]"
            />
            <Media
              src={aboutClinic}
              alt={t({ ar: "استقبال مركز بيرل لطب الأسنان", en: "Pearl Dental Center reception" })}
              imgClassName="aspect-[16/9]"
            />
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
