import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/75 backdrop-blur-xl shadow-soft"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Nova Dental home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phone}
          </a>
          <Button asChild size="lg" className="rounded-full bg-gradient-primary text-white shadow-soft hover:opacity-95">
            <Link to="/book">Book Appointment</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 z-40 origin-top transition-all duration-300",
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
        )}
      >
        <div className="mx-4 rounded-3xl border border-border bg-white/95 p-6 shadow-elevated backdrop-blur-xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:bg-primary/5 data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {site.phone}
            </a>
            <Button asChild size="lg" className="rounded-full bg-gradient-primary text-white shadow-soft">
              <Link to="/book" onClick={() => setOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
