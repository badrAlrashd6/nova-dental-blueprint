import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Real stories from Nova Dental patients across Kuwait — implants, veneers, whitening and orthodontic transformations.",
      },
      { property: "og:title", content: "Patient Stories — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "Real patient stories and smile transformations from Nova Dental, Kuwait.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="Smiles, in their own words."
        description="A quiet collection of transformations from the Nova chair — implants, veneers, aligners and whitening."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Full testimonials carousel with before/after imagery will be built next.
        </p>
      </Section>
    </>
  );
}
