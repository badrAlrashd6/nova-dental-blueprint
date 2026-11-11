import { useState } from "react";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import beforeImg from "@/assets/ba-before.jpg";
import afterImg from "@/assets/ba-after.jpg";

export function BeforeAfterSection() {
  const { t } = useLang();
  const [pos, setPos] = useState(50);

  return (
    <Section className="bg-secondary/30">
      <SectionHeading
        align="center"
        eyebrow={t(ui.baEyebrow)}
        title={t(ui.baTitle)}
        description={t(ui.baDesc)}
      />

      <div className="mx-auto mt-14 max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elevated">
          <img
            src={afterImg}
            alt={t({ ar: "ابتسامة بعد العلاج في عيادة نوفا", en: "Smile after treatment at Nova" })}
            width={1600}
            height={1100}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt={t({ ar: "ابتسامة قبل العلاج", en: "Smile before treatment" })}
              width={1600}
              height={1100}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover"
            />
          </div>

          <span
            aria-hidden
            className="absolute inset-y-0 w-0.5 bg-background/90 shadow-glow"
            style={{ left: `${pos}%` }}
          />
          <span className="absolute top-4 left-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background backdrop-blur">
            {t(ui.before)}
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
            {t(ui.after)}
          </span>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            dir="ltr"
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={t(ui.dragToCompare)}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {t(ui.dragToCompare)}
        </p>
      </div>
    </Section>
  );
}
