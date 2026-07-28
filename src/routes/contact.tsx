import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Visit Nova Dental Clinic on Salem Al Mubarak Street in Salmiya, Kuwait. Open Saturday to Thursday, 9am to 9pm.",
      },
      { property: "og:title", content: "Contact — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "Visit Nova Dental Clinic in Salmiya, Kuwait. Open Sat–Thu, 9am–9pm.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="We're just off Salem Al Mubarak."
        description="Complimentary valet, private consultation suites and an unhurried welcome for every patient."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          Full contact page — map, directions, contact form and clinic gallery —
          will be built next.
        </p>
      </Section>
    </>
  );
}
