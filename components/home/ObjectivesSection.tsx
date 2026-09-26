import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { objectiveIds, objectiveRoutes } from "@/content/home/structure";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The answer to "but what do you actually do?".
 *
 * Every card ends in a link to the thing it claims, because the claim is only
 * worth making if the reader can go and check it in one click.
 */
export function ObjectivesSection({
  content,
  locale,
}: {
  readonly content: HomeContent["objectives"];
  readonly locale: Locale;
}) {
  return (
    <Section spacing="lg" bordered labelledBy="objectives">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-burgundy">{content.eyebrow}</p>
          <h2 id="objectives" className="font-serif text-display-3 font-normal text-ink">
            {content.title}
          </h2>
          <p className="mt-4 text-reading leading-relaxed text-muted">{content.lede}</p>
        </div>

        <ol className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {objectiveIds.map((id, index) => {
            const item = content.items[id];
            return (
              <li key={id} className="bg-canvas">
                <Reveal delay={index * 0.05} className="flex h-full flex-col gap-4 p-7 lg:p-9">
                  <span className="numerals-tabular text-[0.8125rem] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[1.375rem] leading-snug text-ink text-balance">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-body">{item.body}</p>
                  <Link
                    href={localePath(locale, routes[objectiveRoutes[id]])}
                    className="mt-auto pt-2 text-[0.9375rem] text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
                  >
                    {item.linkLabel}
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
