import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function TestimonialsSection() {
  const { t } = useLang();

  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow={t(ui.testiEyebrow)}
        title={t(ui.testiTitle)}
        description={t(ui.testiDesc)}
      />
      <TestimonialSlider />
    </Section>
  );
}
