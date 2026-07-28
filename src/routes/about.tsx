import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Meet Nova Dental Clinic: a boutique Salmiya practice built on clinical precision, calm hospitality and long-term patient relationships.",
      },
      { property: "og:title", content: "About — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "A boutique Salmiya practice built on clinical precision and calm hospitality.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Dentistry, quietly reimagined."
        description="Nova was founded in Salmiya to bring together European-trained clinicians, modern digital workflows and the warmth of a private members' club."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          The full About page will be built next — practice philosophy, timeline,
          clinic tour and technology stack.
        </p>
      </Section>
    </>
  );
}
