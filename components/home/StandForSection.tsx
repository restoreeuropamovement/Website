import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { standForAnchors, standForIds } from "@/content/home/structure";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * Five principles, each a door into the one that argues it.
 *
 * Numbered in the order `standForIds` lists them rather than by their position
 * in the full sixteen: these are a sample, and printing 01, 03, 07 would imply
 * the reader had lost the pages in between.
 */
export function StandForSection({
  content,
  locale,
}: {
  readonly content: HomeContent["standFor"];
  readonly locale: Locale;
}) {
  return (
    <Section tone="deep" spacing="lg" bordered labelledBy="stand-for">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-burgundy">{content.eyebrow}</p>
            <h2 id="stand-for" className="font-serif text-display-3 font-normal text-ink">
              {content.title}
            </h2>
            <p className="mt-4 text-reading leading-relaxed text-muted">{content.lede}</p>
          </div>
          <Link
            href={localePath(locale, routes.principles)}
            className="shrink-0 text-[0.9375rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.allLabel}
          </Link>
        </div>

        {/*
          The one place on the page where a stagger says something: the
          principles arrive in the order they are numbered. Everything else
          settles as a block or not at all.
        */}
        <ol className="mt-10 grid border-t border-hairline sm:grid-cols-2 sm:gap-x-12">
          {standForIds.map((id, index) => {
            const item = content.items[id];
            return (
              <li key={id} className="border-b border-hairline">
                <Reveal delay={index * 0.06}>
                  <Link
                    href={localePath(locale, `${routes.principles}#${standForAnchors[id]}`)}
                    className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 py-6 hover:text-burgundy"
                    aria-label={`${item.title} — ${content.readFull}`}
                  >
                    <span className="numerals-tabular pt-0.5 text-[0.8125rem] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col gap-2">
                      <span className="font-serif text-[1.25rem] leading-snug text-ink">
                        {item.title}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-muted">
                        {item.statement}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
