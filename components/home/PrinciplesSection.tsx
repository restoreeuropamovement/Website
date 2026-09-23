import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

type Principle = HomeContent["principles"]["items"][number];

export function PrinciplesSection({
  content,
  locale,
}: {
  readonly content: HomeContent["principles"];
  readonly locale: Locale;
}) {
  return (
    <Section bordered labelledBy="principles">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12">
          <h2 id="principles" className="font-serif text-display-3 font-normal text-ink">
            {content.title}
          </h2>
          <Link
            href={localePath(locale, routes.principles)}
            className="shrink-0 text-[0.9375rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
          >
            {content.allLabel}
          </Link>
        </div>

        {/*
          The one place on the page where a stagger says something: the six
          principles arrive in the order they are numbered. Everything else
          settles as a block or not at all — a page where every element animates
          separately reads as a template rather than as an argument.
        */}
        <ol className="mt-10 grid border-t border-hairline sm:grid-cols-2 sm:gap-x-12">
          {content.items.map((principle, index) => (
            <PrincipleRow
              key={principle.number}
              principle={principle}
              locale={locale}
              readFull={content.readFull}
              delay={index * 0.06}
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function PrincipleRow({
  principle,
  locale,
  readFull,
  delay,
}: {
  readonly principle: Principle;
  readonly locale: Locale;
  readonly readFull: string;
  readonly delay: number;
}) {
  return (
    /*
     * The reveal is inside the list item rather than around it: a `div` between
     * `ol` and `li` is invalid, and it would take the grid items out of the
     * grid. It also reads better this way — the rules are already drawn and the
     * entries settle onto them, instead of the ruling itself sliding about.
     */
    <li className="border-b border-hairline">
      <Reveal delay={delay}>
        <Link
          href={localePath(locale, principle.href)}
          className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 py-5 hover:text-burgundy"
          aria-label={`${principle.title} — ${readFull}`}
        >
          <span className="numerals-tabular pt-0.5 text-[0.8125rem] text-muted">
            {principle.number}
          </span>
          <span className="flex flex-col gap-1.5">
            <span className="font-serif text-[1.25rem] leading-snug text-ink">
              {principle.title}
            </span>
            <span className="text-[0.9375rem] leading-relaxed text-muted">
              {principle.statement}
            </span>
          </span>
        </Link>
      </Reveal>
    </li>
  );
}
