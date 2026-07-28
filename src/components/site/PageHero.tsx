import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-hero pt-40 pb-20 sm:pt-48 sm:pb-28",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-primary/5 to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-primary uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
