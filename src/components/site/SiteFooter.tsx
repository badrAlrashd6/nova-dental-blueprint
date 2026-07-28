import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

const services = [
  "Dental Implants",
  "Porcelain Veneers",
  "Teeth Whitening",
  "Invisible Aligners",
  "Cosmetic Dentistry",
  "Emergency Care",
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/40">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A boutique dental practice in the heart of Salmiya, blending clinical
              excellence with a calm, hospitality-led experience.
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
            <FooterTitle>Explore</FooterTitle>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>Treatments</FooterTitle>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>Visit &amp; Contact</FooterTitle>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={site.phoneHref} className="hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={site.emailHref} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-white/70 p-4">
              <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                Working Hours
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nova Dental Clinic. All rights reserved.</p>
          <p>Licensed by the Ministry of Health, State of Kuwait.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-foreground uppercase">
      {children}
    </p>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
    >
      {children}
    </a>
  );
}
