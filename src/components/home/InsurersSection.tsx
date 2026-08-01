import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { insurers } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function InsurersSection() {
  const { t } = useLang();

  return (
    <Section className="bg-secondary/30">
      <SectionHeading
        align="center"
        eyebrow={t(ui.insurersEyebrow)}
        title={t(ui.insurersTitle)}
        description={t(ui.insurersDesc)}
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {insurers.map((name, i) => (
          <Reveal
            key={name.en}
            delay={i * 60}
            className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-6 text-center text-sm font-medium text-muted-foreground shadow-soft transition-colors duration-500 hover:text-foreground"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
            {t(name)}
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">{t(ui.demoLogos)}</p>
    </Section>
  );
}
