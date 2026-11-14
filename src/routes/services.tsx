import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, HeartPulse } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { services } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا | عيادة نوفا لطب الأسنان — Services" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      { property: "og:title", content: "خدماتنا | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content:
          "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t(ui.servicesHeroEyebrow)}
        breadcrumb={t(ui.services)}
        title={t(ui.servicesHeroTitle)}
        description={t(ui.servicesHeroDesc)}
      />

      <Section>
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <Media
                  src={s.image}
                  alt={t(s.alt)}
                  imgClassName="aspect-[4/3]"
                  className={i % 2 === 1 ? "lg:order-2" : undefined}
                />
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {t(s.title)}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {t(s.description)}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{t(ui.demoService)}</p>

                  <p className="mt-7 text-xs font-semibold tracking-wide text-foreground uppercase">
                    {t(ui.benefitsLabel)}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li
                        key={b.en}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        {t(b)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t(ui.duration)}
                      </p>
                      <p className="mt-1.5 text-sm text-foreground">{t(s.duration)}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <HeartPulse className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t(ui.recovery)}
                      </p>
                      <p className="mt-1.5 text-sm text-foreground">{t(s.recovery)}</p>
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-7 rounded-full bg-gradient-primary px-7">
                    <Link to="/book">{t(ui.book)}</Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
