import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * The homepage's one ask, at the end of the argument.
 *
 * Before this existed the only route to `/join` was the navbar and the footer,
 * which is a strange omission for a site whose whole backend was built to
 * receive applications: the page made the case for six screens and never
 * invited anyone. It comes last on purpose — this movement argues first and
 * asks afterwards.
 *
 * `surface` rather than the `ink` slab the site uses for its other big
 * statements, because the footer is already an `ink` slab: the two sat against
 * each other at almost the same value and read as one undifferentiated mass at
 * the bottom of the page. Surface is the lightest ground in the system, so the
 * last three bands now step canvas → surface → ink and the ask is the
 * brightest thing on the way out.
 */
export function JoinSection({
  content,
  locale,
}: {
  readonly content: HomeContent["join"];
  readonly locale: Locale;
}) {
  return (
    <Section tone="surface" spacing="lg" bordered labelledBy="join-statement">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow mb-5 text-burgundy">{content.eyebrow}</p>
            <h2
              id="join-statement"
              className="font-serif text-display-2 font-normal text-ink text-balance"
            >
              {content.statement}
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-reading leading-relaxed text-body">{content.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={localePath(locale, content.primaryCta.href)}
                variant="primary"
                size="lg"
              >
                {content.primaryCta.label}
              </Button>
              <Button
                href={localePath(locale, content.secondaryCta.href)}
                variant="secondary"
                size="lg"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
