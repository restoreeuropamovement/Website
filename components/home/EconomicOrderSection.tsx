import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";

export function EconomicOrderSection({
  content,
}: {
  readonly content: HomeContent["economicOrder"];
}) {
  return (
    <Section bordered labelledBy="economic-order">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2
            id="economic-order"
            className="font-serif text-display-2 font-normal text-ink text-balance"
          >
            {content.statement}
          </h2>
          <ContentBlocks blocks={content.body} />
        </div>

        <div className="mt-12 grid gap-10 border-t border-hairline pt-8 md:grid-cols-3 md:gap-12">
          {content.pillars.map((pillar) => (
            <div key={pillar.title}>
              <p className="font-serif text-[0.9375rem] text-muted">{pillar.lead}</p>
              <h3 className="mt-1 font-serif text-display-4 font-normal text-ink">{pillar.title}</h3>
              <ul className="mt-4 flex flex-col">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-hairline py-2.5 text-[1.0625rem] leading-snug text-body/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <EditorialQuote className="mt-12 max-w-3xl">{content.key}</EditorialQuote>
      </Container>
    </Section>
  );
}
