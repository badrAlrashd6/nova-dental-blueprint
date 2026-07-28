import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Answers to common questions about implants, veneers, aligners, pricing, insurance and your first visit at Nova Dental, Kuwait.",
      },
      { property: "og:title", content: "FAQ — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "Common questions about treatments, pricing, insurance and first visits at Nova Dental.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title="Answers, before you ask."
        description="The details our patients ask most — from what to expect at your first visit to how implants are planned digitally at Nova."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          The full FAQ accordion with treatment, pricing and visit questions
          will be built next.
        </p>
      </Section>
    </>
  );
}
