import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { economicOrder } from "@/content/home";

export function EconomicOrderSection() {
  return (
    <Section tone="deep" bordered spacing="lg" labelledBy="economic-order">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
              <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
              {economicOrder.eyebrow}
            </p>
            <h2
              id="economic-order"
              className="font-serif text-display-2 font-normal text-ink text-balance"
            >
              {economicOrder.statement}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ContentBlocks blocks={economicOrder.body} />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-16 lg:mt-24">
          <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-3">
            {economicOrder.pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-6 bg-canvas-deep p-8 lg:p-10">
                <div>
                  <p className="eyebrow text-muted">{pillar.lead}</p>
                  <h3 className="mt-3 font-serif text-display-4 font-normal text-ink">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="flex flex-col">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-hairline py-3 text-[1.0625rem] leading-snug text-body/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-16 lg:mt-24">
          <EditorialQuote align="center" className="mx-auto max-w-4xl">
            {economicOrder.key}
          </EditorialQuote>
        </Reveal>
      </Container>
    </Section>
  );
}
