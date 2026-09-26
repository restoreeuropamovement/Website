import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { participationWays } from "@/content/home/structure";
import { localePath, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";

/**
 * The ask, and the only place on the site that says plainly what taking part
 * involves before anybody types anything into a form.
 *
 * Three cards because there are three routes in, and the closing line names
 * what the movement does *not* run. Saying "there is no mailing list" costs
 * nothing and answers the question a cautious reader is actually asking.
 *
 * `surface` rather than the `ink` slab used elsewhere: the footer is already
 * `ink`, and two dark bands stacked read as one mass at the foot of the page.
 */
export function ParticipationSection({
  content,
  locale,
}: {
  readonly content: HomeContent["participation"];
  readonly locale: Locale;
}) {
  return (
    <Section tone="surface" spacing="lg" bordered labelledBy="participation">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-burgundy">{content.eyebrow}</p>
          <h2 id="participation" className="font-serif text-display-3 font-normal text-ink">
            {content.title}
          </h2>
          <p className="mt-4 text-reading leading-relaxed text-body">{content.lede}</p>
        </div>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {participationWays.map((way, index) => {
            const text = content.ways[way.id];
            return (
              <li key={way.id} className="border-t border-rule pt-7">
                <Reveal delay={index * 0.05} className="flex h-full flex-col gap-3">
                  <h3 className="font-serif text-[1.375rem] leading-snug text-ink">
                    {text.title}
                  </h3>
                  <p className="eyebrow text-muted">{text.note}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">{text.summary}</p>
                  <div className="mt-auto pt-6">
                    <Button
                      href={`${localePath(locale, routes[way.route])}${"query" in way ? way.query : ""}`}
                      variant={index === 0 ? "primary" : "secondary"}
                      size="md"
                    >
                      {text.cta}
                    </Button>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* The account sits on the same rule as the closing line rather than
            under a heading of its own. That sentence says there is no mailing
            list and no newsletter, which raises the question this answers, and
            the footer's own "Follow" block is one screen below. */}
        <div className="mt-12 flex flex-col gap-6 border-t border-rule pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <p className="max-w-reading text-[0.9375rem] leading-relaxed text-muted">
            {content.closing}
          </p>
          <SocialLinks locale={locale} showHeading={false} className="sm:shrink-0" />
        </div>
      </Container>
    </Section>
  );
}
