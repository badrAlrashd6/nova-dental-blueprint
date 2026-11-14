import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { Media } from "@/components/site/Media";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsurersSection } from "@/components/home/InsurersSection";
import { CTASection } from "@/components/site/CTASection";
import { site, ui } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import heroImage from "@/assets/hero-clinic.jpg";
import patientCare from "@/assets/patient-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "عيادة نوفا لطب الأسنان | Nova Dental Clinic — Damascus, Syria" },
      {
        name: "description",
        content:
          "مشروع نوفا الأكاديمي في دمشق، سوريا — محتوى خيالي للعرض فقط. لا تُقدم رعاية أو حجوزات فعلية.",
      },
      {
        property: "og:title",
        content: "عيادة نوفا لطب الأسنان | Nova Dental Clinic — Damascus, Syria",
      },
      {
        property: "og:description",
        content:
          "Nova Dental Clinic — academic demonstration in Damascus, Syria. Fictional content; no real care or bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t, isAr } = useLang();
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-3 py-1 text-xs font-medium tracking-wide text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {t(ui.demo)}
              </span>
              <h1 className="mt-6 text-4xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t(ui.heroTitle)}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t(ui.heroDesc)}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-primary px-7 shadow-glow transition-opacity hover:opacity-95"
                >
                  <Link to="/book">
                    {t(ui.book)}
                    <Arrow className="h-4 w-4" />
                  </Link>
                </Button>
                {site.phoneHref && (
                  <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4 text-primary" />
                      {t(ui.call)}
                    </a>
                  </Button>
                )}
                {site.whatsappHref && (
                  <Button asChild size="lg" variant="ghost" className="rounded-full px-7">
                    <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4 text-accent" />
                      {t(ui.whatsapp)}
                    </a>
                  </Button>
                )}
              </div>
              <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                {t(ui.licensed)}
              </p>
            </div>

            <div className="relative">
              <Media
                src={heroImage}
                alt={t({
                  ar: "استقبال عيادة نوفا لطب الأسنان بإضاءة طبيعية وتصميم هادئ",
                  en: "Nova Dental Clinic reception with natural light and calm design",
                })}
                priority
                imgClassName="aspect-[4/3]"
              />
              <div className="absolute -bottom-8 hidden w-64 overflow-hidden rounded-[1.75rem] border border-border bg-card p-3 shadow-elevated sm:block ltr:-left-8 rtl:-right-8">
                <Media
                  src={patientCare}
                  alt={t(ui.facilityCare)}
                  className="rounded-2xl border-0 shadow-none"
                  imgClassName="aspect-[4/3]"
                />
                <div className="flex items-center gap-2 px-2 pt-3 pb-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{t(ui.demoRating)}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsSection />
      <WhyUsSection />
      <ServicesPreview />
      <DoctorsPreview />
      <BeforeAfterSection />
      <ExperienceSection />
      <TestimonialsSection />
      <InsurersSection />
      <CTASection />
    </>
  );
}
