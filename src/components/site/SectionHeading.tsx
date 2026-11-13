import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const { t } = useLang();
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-3 text-xs text-muted-foreground">{t(ui.demoItem)}</p>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
