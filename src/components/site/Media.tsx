import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Rounded, soft-shadowed image container with a gentle hover zoom.
 * `src` is a plain URL string so images can later be swapped for real
 * clinic photography (local import or remote CDN URL) without code changes.
 */
export function Media({
  src,
  alt,
  className,
  imgClassName,
  width = 1600,
  height = 1100,
  priority = false,
  overlay = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  overlay?: boolean;
}) {
  const { t } = useLang();
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-elevated",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
          imgClassName,
        )}
      />
      <span className="absolute inset-x-0 bottom-0 z-10 bg-background/90 px-3 py-2 text-center text-xs text-muted-foreground">
        {t(ui.demoImage)}
      </span>
      {overlay ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/5 to-transparent"
        />
      ) : null}
    </div>
  );
}
