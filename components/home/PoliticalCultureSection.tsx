import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { politicalCulture } from "@/content/home";
import { pad } from "@/lib/utils";

export function PoliticalCultureSection() {
  return (
    <Section spacing="lg" bordered labelledBy="political-culture">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
              <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
              {politicalCulture.eyebrow}
            </p>
            <h2
              id="political-culture"
              className="font-serif text-display-2 font-normal text-ink text-balance"
            >
              {politicalCulture.statement}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ContentBlocks blocks={politicalCulture.body} />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal delay={0.12}>
            <h3 className="eyebrow mb-8 text-muted">Order of obligation</h3>
            <ol className="flex flex-col">
              {politicalCulture.hierarchy.map((level, index) => (
                <li key={level.label} className="relative">
                  <div className="flex items-baseline gap-5 border-t border-hairline py-6">
                    <span className="numerals-tabular eyebrow w-6 shrink-0 text-burgundy/70">
                      {pad(index + 1)}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <span
                        className="font-serif text-display-3 leading-none"
                        style={{ color: `color-mix(in srgb, var(--color-ink) ${100 - index * 16}%, var(--color-muted))` }}
                      >
                        {level.label}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-muted">
                        {level.note}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.18} className="lg:pt-16">
            <p className="border-l-2 border-gold/65 py-2 pl-6 text-[1.0625rem] leading-relaxed text-muted sm:pl-8">
              {politicalCulture.clarification}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
