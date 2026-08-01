import { Check } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import suite from "@/assets/clinic-suite.jpg";
import care from "@/assets/patient-care.jpg";
import tech from "@/assets/clinic-tech.jpg";

export function ExperienceSection() {
  const { t } = useLang();

  const points = [
    { ar: "غرف علاج خاصة بعزل صوتي", en: "Private, sound-insulated treatment suites" },
    { ar: "منسق مرضى يرافقك خطوة بخطوة", en: "A patient coordinator with you step by step" },
    { ar: "مواعيد بلا انتظار طويل", en: "Appointments without long waiting" },
    { ar: "تعقيم موثّق لكل أداة", en: "Documented sterilization for every instrument" },
  ];

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.experienceEyebrow)}
            title={t(ui.experienceTitle)}
            description={t(ui.experienceDesc)}
          />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.en} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {t(p)}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-5">
          <Media
            src={suite}
            alt={t(ui.facilitySuite)}
            className="col-span-2"
            imgClassName="aspect-[16/9]"
          />
          <Media src={care} alt={t(ui.facilityCare)} imgClassName="aspect-square" />
          <Media src={tech} alt={t(ui.facilityTech)} imgClassName="aspect-square" />
        </Reveal>
      </div>
    </Section>
  );
}
