import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/content/clinic";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const { t, isAr } = useLang();
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => window.clearInterval(id);
  }, [count]);

  const item = testimonials[index];
  const Prev = isAr ? ChevronRight : ChevronLeft;
  const Next = isAr ? ChevronLeft : ChevronRight;

  if (!item) return null;

  return (
    <Reveal className="mx-auto mt-14 max-w-3xl">
      <figure className="relative rounded-[2rem] border border-border bg-card p-9 shadow-elevated sm:p-12">
        <p className="mb-3 text-xs text-muted-foreground">{t(ui.demoItem)}</p>
        <Quote className="h-8 w-8 text-primary/25" aria-hidden />
        <blockquote
          key={index}
          className="mt-5 animate-fade-in text-lg leading-relaxed text-foreground sm:text-xl"
        >
          {t(item.quote)}
        </blockquote>

        <figcaption className="mt-8 flex items-center gap-4">
          {item.avatar ? (
            <img
              src={item.avatar}
              alt={t(item.name)}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 rounded-full border border-border object-cover"
            />
          ) : (
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {item.initials}
            </span>
          )}
          <div>
            <p className="text-sm font-semibold text-foreground">{t(item.name)}</p>
            <p className="text-xs text-muted-foreground">{t(item.treatment)}</p>
            <div className="mt-1.5 flex gap-0.5">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
              ))}
            </div>
          </div>
        </figcaption>

        <div className="mt-9 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${t(ui.testiEyebrow)} ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "w-7 bg-primary" : "w-1.5 bg-border hover:bg-primary/40",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              aria-label={t(ui.previous)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Prev className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % count)}
              aria-label={t(ui.next)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Next className="h-4 w-4" />
            </button>
          </div>
        </div>
      </figure>
    </Reveal>
  );
}
