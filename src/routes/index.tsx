import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { site, ui } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import heroImage from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مركز بيرل لطب الأسنان | Pearl Dental Center — Salmiya, Kuwait" },
      {
        name: "description",
        content:
          "مركز بيرل لطب الأسنان في السالمية، الكويت — زراعة، تقويم، ابتسامة هوليوود وتبييض ضمن بيئة طبية حديثة وفريق متخصص.",
      },
      { property: "og:title", content: "مركز بيرل لطب الأسنان | Pearl Dental Center" },
      {
        property: "og:description",
        content: "زراعة، تقويم، ابتسامة هوليوود وتبييض في السالمية، الكويت.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t, isAr } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-3 py-1 text-xs font-medium tracking-wide text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {t(ui.demo)}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.15] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t({
                ar: "ابتسامة صحية... تبدأ مع خبراء يضعون راحتك أولاً.",
                en: "A healthy smile starts with specialists who put your comfort first.",
              })}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t({
                ar: "في مركز بيرل لطب الأسنان نقدم أحدث تقنيات علاج وتجميل الأسنان ضمن بيئة طبية حديثة وفريق متخصص يحرص على راحتك وابتسامتك.",
                en: "At Pearl Dental Center we combine the latest restorative and cosmetic dentistry with a modern clinical environment and a team devoted to your comfort.",
              })}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary px-7 shadow-glow transition-opacity hover:opacity-95">
                <Link to="/book">
                  {t(ui.book)}
                  <ArrowLeft className={isAr ? "h-4 w-4" : "h-4 w-4 rotate-180"} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4 text-primary" />
                  {t(ui.call)}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-7">
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  {t(ui.whatsapp)}
                </a>
              </Button>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              {t(ui.licensed)}
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-elevated">
              <img
                src={heroImage}
                width={1600}
                height={1200}
                alt={t({
                  ar: "استقبال مركز بيرل لطب الأسنان بإضاءة طبيعية وتصميم هادئ",
                  en: "Pearl Dental Center reception with natural light and calm design",
                })}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
