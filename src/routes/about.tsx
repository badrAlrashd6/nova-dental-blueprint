import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/site/CTASection";
import { coreValues, timeline } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import aboutClinic from "@/assets/about-clinic.jpg";
import team from "@/assets/clinic-team.jpg";
import suite from "@/assets/clinic-suite.jpg";
import tech from "@/assets/clinic-tech.jpg";
import care from "@/assets/patient-care.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | عيادة نوفا لطب الأسنان — About Nova Dental Clinic" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      { property: "og:title", content: "من نحن | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content:
          "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t(ui.aboutHeroEyebrow)}
        breadcrumb={t(ui.aboutHeroEyebrow)}
        title={t(ui.aboutHeroTitle)}
        description={t(ui.aboutHeroDesc)}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Media
              src={aboutClinic}
              alt={t({
                ar: "منطقة استقبال عيادة نوفا لطب الأسنان",
                en: "Reception area at Nova Dental Clinic",
              })}
              imgClassName="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow={t(ui.aboutHeroEyebrow)} title={t(ui.storyTitle)} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t(ui.storyP1)}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(ui.storyP2)}</p>
          </Reveal>
        </div>
      </Section>

      <StatsSection />

      <Section>
        <SectionHeading
          align="center"
          eyebrow={t(ui.facilityEyebrow)}
          title={t(ui.facilityTitle)}
          description={t(ui.facilityDesc)}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: suite, label: ui.facilitySuite },
            { src: tech, label: ui.facilityTech },
            { src: team, label: ui.facilityTeam },
            { src: care, label: ui.facilityCare },
          ].map((f, i) => (
            <Reveal key={f.label.en} delay={i * 80}>
              <Media src={f.src} alt={t(f.label)} overlay imgClassName="aspect-[3/4]" />
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                {t(f.label)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading align="center" eyebrow={t(ui.valuesEyebrow)} title={t(ui.valuesTitle)} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v, i) => (
            <Reveal
              key={v.title.en}
              delay={i * 80}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow duration-500 hover:shadow-elevated"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <v.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{t(v.title)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {t(v.description)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow={t(ui.timelineEyebrow)}
          title={t(ui.timelineTitle)}
        />
        <ol className="mx-auto mt-14 max-w-3xl space-y-6 border-primary/15 ltr:border-l rtl:border-r">
          {timeline.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 70} className="relative ltr:pl-8 rtl:pr-8">
              <span className="absolute top-2 h-3 w-3 rounded-full bg-gradient-primary ltr:-left-[6.5px] rtl:-right-[6.5px]" />
              <p className="text-sm font-semibold text-primary" dir="ltr">
                {m.year}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-foreground">{t(m.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(m.description)}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTASection />
    </>
  );
}
