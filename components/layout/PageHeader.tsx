import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  readonly kicker?: string;
  readonly title: ReactNode;
  readonly lede?: ReactNode;
  /**
   * Secondary matter — a version table, a status note — set beside the lede
   * rather than under the title.
   */
  readonly aside?: ReactNode;
  readonly children?: ReactNode;
  readonly size?: "wide" | "narrow";
}

/**
 * Opening of an inner page. A kicker in the reading face, a title, and optional
 * lede — not the tracked eyebrow-and-dash used on every template landing page.
 *
 * At `wide` the title and the lede are two columns rather than a stack. A
 * reading measure is about 720px and the wide container is 1360, so stacking
 * them left-aligned leaves roughly half the header empty on a desktop and
 * pushes the page's optical centre well left of the viewport's. Two columns
 * spend that width instead of abandoning it, and the manifesto header has
 * always been built this way — this brings the rest of the site to it.
 *
 * At `narrow` they stay stacked: 896px less padding is not enough for two
 * columns that both want a comfortable measure.
 */
export function PageHeader({
  kicker,
  title,
  lede,
  aside,
  children,
  size = "wide",
}: PageHeaderProps) {
  const twoColumn = size === "wide" && Boolean(lede || aside);

  return (
    <header className="border-b border-hairline">
      <Container size={size} className="pt-10 pb-8 lg:pt-12 lg:pb-10">
        <div
          className={cn(
            twoColumn &&
              "grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24",
          )}
        >
          <div>
            {kicker ? <p className="mb-3 font-serif text-[0.9375rem] text-muted">{kicker}</p> : null}
            <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink text-balance">
              {title}
            </h1>
            {lede && !twoColumn ? (
              <div className="mt-5 max-w-(--container-reading) text-lede text-muted">{lede}</div>
            ) : null}
          </div>

          {twoColumn ? (
            <div className="flex flex-col gap-8 lg:pt-2">
              {lede ? <div className="text-lede text-muted">{lede}</div> : null}
              {aside}
            </div>
          ) : null}
        </div>

        {!twoColumn && aside ? <div className="mt-8">{aside}</div> : null}

        {children}
      </Container>
    </header>
  );
}
