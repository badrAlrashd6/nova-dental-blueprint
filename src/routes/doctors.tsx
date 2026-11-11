import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Languages } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { doctors } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { navLinks, ui } from "@/lib/site";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "الأطباء | عيادة نوفا لطب الأسنان — Our Doctors" },
      {
        name: "description",
        content:
          "استشاريون وأخصائيون في زراعة الأسنان والتقويم والتجميل وطب أسنان الأطفال في عيادة نوفا، دمشق، سوريا.",
      },
      { property: "og:title", content: "الأطباء | عيادة نوفا لطب الأسنان" },
      {
        property: "og:description",
        content: "تعرّف على الفريق الطبي في عيادة نوفا لطب الأسنان بسوريا.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const { t } = useLang();
  const crumb = navLinks.find((l) => l.to === "/doctors")!.label;

  return (
    <>
      <PageHero
        eyebrow={t(ui.doctorsHeroEyebrow)}
        breadcrumb={t(crumb)}
        title={t(ui.doctorsHeroTitle)}
        description={t(ui.doctorsHeroDesc)}
      />

      <Section>
        <div className="space-y-8">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={i * 60}>
              <article className="grid gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-elevated sm:p-8 lg:grid-cols-[280px_1fr] lg:gap-12">
                <Media
                  src={d.image}
                  alt={t(d.name)}
                  width={800}
                  height={1000}
                  className="rounded-3xl"
                  imgClassName="aspect-[4/5]"
                />
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {t(d.name)}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-primary">{t(d.specialty)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t(d.experience)}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t(d.bio)}</p>

                  <dl className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground uppercase">
                        <GraduationCap className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t(ui.educationLabel)}
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{t(d.education)}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground uppercase">
                        <Languages className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t(ui.languagesLabel)}
                      </dt>
                      <dd className="mt-2 text-sm text-muted-foreground">{t(d.languages)}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-foreground uppercase">
                        <Award className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t(ui.certificatesLabel)}
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {d.certificates.map((c) => (
                          <span
                            key={c.en}
                            className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {t(c)}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <Button asChild className="mt-7 rounded-full bg-gradient-primary px-7">
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
