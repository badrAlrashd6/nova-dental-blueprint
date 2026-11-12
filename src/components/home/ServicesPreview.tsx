import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { Button } from "@/components/ui/button";
import { featuredServices } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function ServicesPreview() {
  const { t, isAr } = useLang();
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <Section className="bg-secondary/30">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={t(ui.servicesEyebrow)}
          title={t(ui.servicesTitle)}
          description={t(ui.servicesDesc)}
        />
        <Button asChild variant="outline" size="lg" className="shrink-0 rounded-full">
          <Link to="/services">
            {t(ui.allServices)}
            <Arrow className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((s, i) => (
          <Reveal key={s.slug} delay={i * 80}>
            <Link
              to="/services"
              hash={s.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <Media
                src={s.image}
                alt={t(s.alt)}
                className="rounded-none border-0 shadow-none"
                imgClassName="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{t(s.title)}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(s.description)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {t(ui.learnMore)}
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
