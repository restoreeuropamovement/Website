import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";

export function LifeAndWorkSection({
  content,
}: {
  readonly content: HomeContent["lifeAndWork"];
}) {
  const { diagram } = content;

  return (
    <Section bordered labelledBy="life-and-work">
      <Container>
        <h2 id="life-and-work" className="max-w-4xl font-serif text-display-2 font-normal text-ink">
          {content.statement}
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <ContentBlocks blocks={content.body} />

            <div className="border-t border-hairline pt-6">
              <h3 className="font-serif text-display-4 font-normal text-ink">
                {content.outcome.title}
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
                {content.outcome.lead}
              </p>
              <ul className="mt-5 flex flex-col">
                {content.outcome.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-hairline py-3 text-[1.0625rem] text-body/92 first:border-t-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Case and punctuation come from the content file, not from here:
              these run on as a sentence, German nouns stay capitalised where
              Romance ones do not, and French sets a space before a colon. */}
          <p className="font-serif text-display-4 leading-snug text-muted lg:pt-2">
            <span className="text-ink">{diagram.top}</span>
            {` ${diagram.middle} `}
            <span className="text-ink">{diagram.bottom}</span>
            {diagram.separator}
            {diagram.orbit.join(", ")}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
