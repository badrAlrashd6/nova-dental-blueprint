import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className,
  id,
  bare = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bare?: boolean;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28 lg:py-32", className)}>
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
