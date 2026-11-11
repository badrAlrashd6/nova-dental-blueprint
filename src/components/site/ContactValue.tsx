import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

/** Renders a contact value as a link, or a "to be announced" label when it is not configured yet. */
export function ContactValue({
  value,
  href,
  className,
}: {
  value: string | null;
  href: string | null;
  className?: string;
}) {
  const { t } = useLang();
  if (!value || !href) return <span className={className}>{t(site.pending)}</span>;
  return (
    <a href={href} dir="ltr" className={className}>
      {value}
    </a>
  );
}
