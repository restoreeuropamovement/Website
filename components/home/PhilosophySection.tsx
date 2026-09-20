import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { philosophy } from "@/content/home";

export function PhilosophySection() {
  return (
    <Section spacing="lg" labelledBy="central-philosophy">
      <Container>
        <Reveal className="max-w-5xl">
          <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {philosophy.eyebrow}
          </p>
          <h2
            id="central-philosophy"
            className="font-serif text-display-2 font-normal text-ink"
          >
            {philosophy.statement.map((line, index) => (
              <span key={line} className={index === 1 ? "block text-muted" : "block"}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal delay={0.08}>
            <ContentBlocks blocks={philosophy.body} className="max-w-(--container-reading)" />
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col gap-10">
            <ColumnList
              title={philosophy.reductions.title}
              items={philosophy.reductions.items}
              tone="muted"
            />
            <ColumnList
              title={philosophy.requirements.title}
              items={philosophy.requirements.items}
              tone="ink"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ColumnList({
  title,
  items,
  tone,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly tone: "muted" | "ink";
}) {
  return (
    <div>
      <h3 className="eyebrow border-b border-hairline pb-4 text-muted">{title}</h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className={`border-b border-hairline py-3 text-[1.0625rem] ${
              tone === "ink" ? "font-serif text-ink" : "text-muted"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
