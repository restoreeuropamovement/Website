import { Check, Minus } from "lucide-react";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { technology } from "@/content/home";

export function TechnologySection() {
  return (
    <Section tone="ink" spacing="lg" labelledBy="technology">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-gold-soft">
              <span aria-hidden="true" className="h-px w-6 bg-gold-soft/50" />
              {technology.eyebrow}
            </p>
            <h2
              id="technology"
              className="font-serif text-display-2 font-normal text-canvas text-balance"
            >
              {technology.statement}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ContentBlocks blocks={technology.body} tone="inverse" />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-16 lg:mt-24">
          <div className="grid gap-px border border-hairline-inverse bg-hairline-inverse md:grid-cols-2">
            <Column
              title={technology.liberates.title}
              items={technology.liberates.items}
              variant="liberates"
            />
            <Column
              title={technology.dominates.title}
              items={technology.dominates.items}
              variant="dominates"
            />
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-16 lg:mt-24">
          <p className="mx-auto max-w-3xl text-center font-serif text-display-3 leading-tight text-balance">
            <span className="block text-canvas/55">{technology.closing[0]}</span>
            <span className="block text-canvas">{technology.closing[1]}</span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

function Column({
  title,
  items,
  variant,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly variant: "liberates" | "dominates";
}) {
  const liberating = variant === "liberates";
  const Icon = liberating ? Check : Minus;

  return (
    <div className="flex flex-col gap-6 bg-ink p-8 lg:p-10">
      <h3
        className={`eyebrow flex items-center gap-3 ${
          liberating ? "text-gold-soft" : "text-canvas/58"
        }`}
      >
        <Icon className="size-3.5" strokeWidth={2} aria-hidden="true" />
        {title}
      </h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className={`border-t border-hairline-inverse py-3.5 text-[1.0625rem] leading-snug ${
              liberating ? "text-canvas/85" : "text-canvas/60"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
