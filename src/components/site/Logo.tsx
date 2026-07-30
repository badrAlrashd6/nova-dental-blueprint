import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  const { t, isAr } = useLang();
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary shadow-soft">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground" aria-hidden="true">
          <path
            d="M12 3c2.5 0 3.5 1.2 5.5 1.2S21 3.4 21 6.2c0 3.6-1.6 6.4-2.7 9.7-.7 2.1-1.3 5.1-2.9 5.1-1.5 0-1.6-3.2-3.4-3.2-1.8 0-1.9 3.2-3.4 3.2-1.6 0-2.2-3-2.9-5.1C4.6 12.6 3 9.8 3 6.2 3 3.4 4.5 4.2 6.5 4.2S9.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={cn("text-lg font-semibold tracking-tight text-foreground", !isAr && "font-display text-xl")}>
        {t(site.name)}
      </span>
    </span>
  );
}
