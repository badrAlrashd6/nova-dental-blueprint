import { Container } from "@/components/site/Container";
import { CountUp } from "@/components/site/CountUp";
import { Reveal } from "@/components/site/Reveal";
import { stats } from "@/content/clinic";
import { useLang } from "@/lib/i18n";

export function StatsSection() {
  const { t } = useLang();

  return (
    <section className="relative border-y border-border bg-secondary/40 py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label.en}
              delay={i * 90}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft transition-shadow duration-500 hover:shadow-elevated"
            >
              <div className="bg-gradient-primary bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
                <CountUp value={s.value} decimals={s.decimals ?? 0} />
                {s.suffix ?? ""}
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{t(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
