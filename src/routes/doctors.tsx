import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Meet the specialists behind Nova Dental — European and US-trained clinicians led by Dr. Yousef Al-Rashed, DDS.",
      },
      { property: "og:title", content: "Our Doctors — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "European and US-trained specialists leading Nova Dental Clinic in Kuwait.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="Specialists you can trust."
        description="Every Nova clinician holds an international specialist qualification and continues training with global academies each year."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Full doctor profiles, credentials and specialties will be built next.
        </p>
      </Section>
    </>
  );
}
