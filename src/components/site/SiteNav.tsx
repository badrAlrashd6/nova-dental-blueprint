import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { navLinks, site, ui } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["ar", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors duration-300",
            lang === l
              ? "bg-primary text-primary-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l === "ar" ? "العربية" : "English"}
        </button>
      ))}
    </div>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div className="hidden border-b border-border/60 bg-foreground text-background lg:block">
        <Container className="flex h-10 items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-6">
            <span className="rounded-full bg-background/15 px-2 py-0.5 font-medium">{t(ui.demoBadge)}</span>
            <span className="inline-flex items-center gap-2 opacity-90">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {t(site.city)}
            </span>
            {site.phoneHref && (
              <a href={site.phoneHref} className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
                <Phone className="h-3.5 w-3.5" aria-hidden />
                <span dir="ltr">{site.phone}</span>
              </a>
            )}
            <span className="inline-flex items-center gap-2 opacity-90">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {t(ui.workingHours)}: {t(site.pending)}
            </span>
          </div>
          <LangSwitch className="border-background/20 bg-background/10" />
        </Container>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "border-b border-border/60 bg-background/75 shadow-soft backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label={t(site.name)} className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {site.phoneHref && (
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4 text-primary" />
                  {t(ui.call)}
                </a>
              </Button>
            )}
            <Button asChild size="lg" className="rounded-full bg-gradient-primary shadow-soft transition-opacity hover:opacity-95">
              <Link to="/book">{t(ui.book)}</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-x-0 top-20 z-40 origin-top transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-4 rounded-3xl border border-border bg-background/95 p-6 shadow-elevated backdrop-blur-xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:bg-primary/5 data-[status=active]:text-primary"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <LangSwitch className="self-start" />
            <Button asChild size="lg" className="rounded-full bg-gradient-primary">
              <Link to="/book" onClick={() => setOpen(false)}>
                {t(ui.book)}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
