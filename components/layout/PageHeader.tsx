import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  readonly kicker?: string;
  readonly title: ReactNode;
  readonly lede?: ReactNode;
  readonly children?: ReactNode;
  readonly size?: "wide" | "narrow";
}

/**
 * Opening of an inner page. A kicker in the reading face, a title, and optional
 * lede — not the tracked eyebrow-and-dash used on every template landing page.
 */
export function PageHeader({
  kicker,
  title,
  lede,
  children,
  size = "wide",
}: PageHeaderProps) {
  return (
    <header className="border-b border-hairline">
      <Container size={size} className="pt-10 pb-8 lg:pt-12 lg:pb-10">
        {kicker ? <p className="mb-3 font-serif text-[0.9375rem] text-muted">{kicker}</p> : null}
        <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink">{title}</h1>
        {lede ? (
          <div className="mt-5 max-w-(--container-reading) text-lede text-muted">{lede}</div>
        ) : null}
        {children}
      </Container>
    </header>
  );
}
