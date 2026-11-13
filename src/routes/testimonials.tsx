import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { CTASection } from "@/components/site/CTASection";
import { testimonials } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { navLinks, ui } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "آراء المرضى | عيادة نوفا لطب الأسنان — Patient Stories" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      { property: "og:title", content: "آراء المرضى | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content: "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { t } = useLang();
  const crumb = navLinks.find((l) => l.to === "/testimonials")?.label ?? ui.home;

  return (
    <>
      <PageHero
        eyebrow={t(ui.testiHeroEyebrow)}
        breadcrumb={t(crumb)}
        title={t(ui.testiHeroTitle)}
        description={t(ui.testiHeroDesc)}
      >
        <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-primary/15 bg-card/70 px-4 py-2 text-xs text-muted-foreground">
          {t(ui.demoPeople)}
        </p>
      </PageHero>

      <Section className="pt-0">
        <TestimonialSlider />
      </Section>

      <Section className="bg-secondary/30 pt-0">
        <div className="grid gap-6 pt-20 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name.en}
              delay={i * 70}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <p className="mb-3 text-xs text-muted-foreground">{t(ui.demoItem)}</p>
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(item.quote)}
              </p>
              <div className="mt-6 flex items-center gap-3">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={t(item.name)}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="h-11 w-11 rounded-full border border-border object-cover"
                  />
                ) : (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {item.initials}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(item.name)}</p>
                  <p className="text-xs text-muted-foreground">{t(item.treatment)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
