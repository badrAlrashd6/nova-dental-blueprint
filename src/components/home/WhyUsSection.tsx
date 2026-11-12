import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { whyUs } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function WhyUsSection() {
  const { t } = useLang();

  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow={t(ui.whyEyebrow)}
        title={t(ui.whyTitle)}
        description={t(ui.whyDesc)}
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((f, i) => (
          <Reveal
            key={f.title.en}
            delay={i * 80}
            className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{t(f.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(f.description)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
