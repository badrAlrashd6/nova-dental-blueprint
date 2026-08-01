import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { site, ui } from "@/lib/site";

export function CTASection() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-16 text-center shadow-glow sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(255,255,255,0.25),transparent_60%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              {t(ui.ctaTitle)}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {t(ui.ctaDesc)}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
                <Link to="/book">{t(ui.bookNow)}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {t(ui.call)}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t(ui.whatsapp)}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
