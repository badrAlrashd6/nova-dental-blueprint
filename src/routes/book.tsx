import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Reserve a consultation at Nova Dental Clinic in Salmiya, Kuwait. Choose a treatment, pick a time and we'll confirm within one working hour.",
      },
      { property: "og:title", content: "Book an Appointment — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "Reserve a consultation at Nova Dental Clinic in Salmiya, Kuwait.",
      },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Reserve"
        title="Book your appointment."
        description="Tell us a little about you and the treatment you're considering. A patient coordinator will confirm within one working hour."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          The full booking form (treatment, doctor, date/time, contact) will be
          built next.
        </p>
      </Section>
    </>
  );
}
