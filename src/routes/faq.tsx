import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { faqs } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { navLinks, site, ui } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة | مركز بيرل لطب الأسنان — FAQ" },
      {
        name: "description",
        content:
          "إجابات عن المواعيد والتأمين والألم والدفع وساعات العمل في مركز بيرل لطب الأسنان بالسالمية، الكويت.",
      },
      { property: "og:title", content: "الأسئلة الشائعة | مركز بيرل لطب الأسنان" },
      {
        property: "og:description",
        content: "كل ما تحتاج معرفته قبل زيارتك الأولى لمركز بيرل لطب الأسنان.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const crumb = navLinks.find((l) => l.to === "/faq")!.label;

  return (
    <>
      <PageHero
        eyebrow={t(ui.faqHeroEyebrow)}
        breadcrumb={t(crumb)}
        title={t(ui.faqHeroTitle)}
        description={t(ui.faqHeroDesc)}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question.en} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-start"
                  >
                    <span>
                      <span className="block text-xs font-medium text-primary">
                        {t(f.category)}
                      </span>
                      <span className="mt-1 block text-base font-semibold text-foreground">
                        {t(f.question)}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-400 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {t(f.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-secondary/40 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground">{t(ui.faqStillQuestion)}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{t(ui.faqStillDesc)}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" className="rounded-full">
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4 text-primary" />
                {t(ui.call)}
              </a>
            </Button>
            <Button asChild className="rounded-full bg-gradient-primary">
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                {t(ui.whatsapp)}
              </a>
            </Button>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
