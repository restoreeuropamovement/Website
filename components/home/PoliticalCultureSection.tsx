import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";
import { pad } from "@/lib/utils";

export function PoliticalCultureSection({
  content,
}: {
  readonly content: HomeContent["politicalCulture"];
}) {
  return (
    <Section bordered labelledBy="political-culture">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2
            id="political-culture"
            className="font-serif text-display-2 font-normal text-ink text-balance"
          >
            {content.statement}
          </h2>
          <ContentBlocks blocks={content.body} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <ol className="flex flex-col">
            {content.hierarchy.map((level, index) => (
              <li
                key={level.label}
                className="flex items-baseline gap-5 border-t border-hairline py-4"
              >
                <span className="numerals-tabular w-6 shrink-0 text-[0.8125rem] text-muted">
                  {pad(index + 1)}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-display-4 leading-none text-ink">
                    {level.label}
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-muted">{level.note}</span>
                </span>
              </li>
            ))}
          </ol>

          <p className="border-l border-rule py-1 pl-5 text-[1.0625rem] leading-relaxed text-muted lg:mt-4">
            {content.clarification}
          </p>
        </div>
      </Container>
    </Section>
  );
}
