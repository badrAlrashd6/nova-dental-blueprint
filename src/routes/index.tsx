import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Dental Clinic — Premium Dentistry in Salmiya, Kuwait" },
      {
        name: "description",
        content:
          "Boutique dental care in Salmiya, Kuwait. Implants, veneers, whitening and cosmetic dentistry from a discreet, highly trained team.",
      },
      { property: "og:title", content: "Nova Dental Clinic — Premium Dentistry in Kuwait" },
      {
        property: "og:description",
        content:
          "Boutique dental care in Salmiya, Kuwait — implants, veneers, whitening and cosmetic dentistry.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pt-40 pb-28 sm:pt-48 sm:pb-36">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Now welcoming new patients in Salmiya
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A boutique clinic where advanced digital dentistry meets a calm,
              hospitality-led experience — from single-visit implants to
              hand-crafted porcelain veneers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary px-7 text-white shadow-glow hover:opacity-95">
                <Link to="/book">
                  Book an appointment
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-white/60 px-7 backdrop-blur">
                <Link to="/services">Explore treatments</Link>
              </Button>
            </div>
            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Licensed by the Ministry of Health · State of Kuwait
            </div>
          </div>
        </Container>
        {/* Full homepage sections build out in a follow-up step. */}
      </section>
    </>
  );
}
