import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";

export function PhilosophySection({
  content,
}: {
  readonly content: HomeContent["philosophy"];
}) {
  return (
    <Section spacing="md" labelledBy="central-philosophy">
      <Container>
        <h2
          id="central-philosophy"
          className="max-w-5xl font-serif text-display-2 font-normal text-ink"
        >
          {content.statement.map((line, index) => (
            <span key={line} className={index === 1 ? "block text-muted" : "block"}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <ContentBlocks blocks={content.body} className="max-w-(--container-reading)" />

          <div className="flex flex-col gap-10">
            <ColumnList
              title={content.reductions.title}
              items={content.reductions.items}
              tone="muted"
            />
            <ColumnList
              title={content.requirements.title}
              items={content.requirements.items}
              tone="ink"
            />
          </div>
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
      <h3 className="border-b border-hairline pb-3 font-serif text-[0.9375rem] text-muted">
        {title}
      </h3>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className={`border-b border-hairline py-2.5 text-[1.0625rem] ${
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
