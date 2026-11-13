import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { Button } from "@/components/ui/button";
import { doctors } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function DoctorsPreview() {
  const { t, isAr } = useLang();
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={t(ui.doctorsEyebrow)}
          title={t(ui.doctorsTitle)}
          description={t(ui.doctorsDesc)}
        />
        <Button asChild variant="outline" size="lg" className="shrink-0 rounded-full">
          <Link to="/doctors">
            {t(ui.allDoctors)}
            <Arrow className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d, i) => (
          <Reveal key={d.slug} delay={i * 80}>
            <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
              <Media
                src={d.image}
                alt={t(d.name)}
                width={800}
                height={900}
                overlay
                className="rounded-none border-0 shadow-none"
                imgClassName="aspect-[4/5]"
              />
              <div className="p-6">
                <p className="mb-2 text-xs text-muted-foreground">{t(ui.demoItem)}</p>
                <h3 className="text-base font-semibold text-foreground">{t(d.name)}</h3>
                <p className="mt-1.5 text-sm text-primary">{t(d.specialty)}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t(d.experience)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
