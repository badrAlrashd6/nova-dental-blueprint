import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nova Dental Clinic" },
      {
        name: "description",
        content:
          "Implants, porcelain veneers, whitening, invisible aligners, cosmetic and emergency dentistry — delivered with digital precision at Nova Dental, Kuwait.",
      },
      { property: "og:title", content: "Services — Nova Dental Clinic" },
      {
        property: "og:description",
        content:
          "Implants, veneers, whitening, aligners, cosmetic and emergency dentistry in Kuwait.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Care that spans every smile."
        description="From same-day implants to hand-layered veneers, our treatments are planned digitally and delivered by senior specialists."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-muted-foreground">
          The full services grid — implants, veneers, whitening, orthodontics,
          cosmetic and emergency care — will be built next.
        </p>
      </Section>
    </>
  );
}
