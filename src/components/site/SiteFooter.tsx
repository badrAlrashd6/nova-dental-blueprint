import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, site, ui } from "@/lib/site";
import { featuredServices } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ContactValue } from "@/components/site/ContactValue";
import type { ReactNode } from "react";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/40">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t(ui.heroDesc)}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={site.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.x} label="X">
                <Twitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>{t(ui.quickLinks)}</FooterTitle>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>{t(ui.services)}</FooterTitle>
            <ul className="mt-5 space-y-3 text-sm">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>{t(ui.contactUs)}</FooterTitle>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.address ? t(site.address) : t(site.pending)}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <ContactValue
                  value={site.phone}
                  href={site.phoneHref}
                  className="hover:text-foreground"
                />
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <ContactValue
                  value={site.email}
                  href={site.emailHref}
                  className="hover:text-foreground"
                />
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-card p-4">
              <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                {t(ui.workingHours)}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {(site.hoursList ?? [{ day: ui.workingHours, time: site.pending }]).map((h) => (
                  <li key={h.day.en} className="flex justify-between gap-4">
                    <span>{t(h.day)}</span>
                    <span className="text-foreground">{t(h.time)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>{t(ui.rights)}</p>
          <p>{t(ui.licensed)}</p>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{t(ui.demoClaims)}</p>
      </Container>
    </footer>
  );
}

function FooterTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-foreground uppercase">{children}</p>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string | null;
  label: string;
  children: ReactNode;
}) {
  // Social accounts are placeholders until configured — render nothing rather than a fake link.
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
    >
      {children}
    </a>
  );
}
