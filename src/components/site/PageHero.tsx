import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Current page label for the breadcrumb trail. */
  breadcrumb?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const { t, isAr } = useLang();
  const Chevron = isAr ? ChevronLeft : ChevronRight;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-hero pt-36 pb-16 sm:pt-44 sm:pb-24",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-primary/5 to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {breadcrumb ? (
            <nav
              aria-label={t(ui.breadcrumb)}
              className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground"
            >
              <Link to="/" className="transition-colors hover:text-foreground">
                {t(ui.home)}
              </Link>
              <Chevron className="h-3.5 w-3.5 opacity-60" aria-hidden />
              <span className="text-foreground">{breadcrumb}</span>
            </nav>
          ) : null}
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/70 px-3 py-1 text-xs font-medium tracking-wide text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t(ui.demoClaims)}
          </p>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
