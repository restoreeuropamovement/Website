import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HomeContent } from "@/content/home";

export function TechnologySection({
  content,
}: {
  readonly content: HomeContent["technology"];
}) {
  return (
    <Section bordered labelledBy="technology">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2
            id="technology"
            className="font-serif text-display-2 font-normal text-ink text-balance"
          >
            {content.statement}
          </h2>
          <ContentBlocks blocks={content.body} />
        </div>

        <div className="mt-12 grid gap-10 border-t border-hairline pt-8 md:grid-cols-2 md:gap-16">
          <Column title={content.liberates.title} items={content.liberates.items} />
          <Column title={content.dominates.title} items={content.dominates.items} muted />
        </div>

        <p className="mt-12 max-w-2xl font-serif text-display-4 leading-snug text-muted">
          <span className="text-ink">{content.closing[0]}</span> {content.closing[1]}
        </p>
      </Container>
    </Section>
  );
}

function Column({
  title,
  items,
  muted = false,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly muted?: boolean;
}) {
  return (
    <div>
      <h3 className="font-serif text-[0.9375rem] text-muted">{title}</h3>
      <ul className="mt-4 flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className={`border-t border-hairline py-2.5 text-[1.0625rem] leading-snug ${
              muted ? "text-muted" : "text-body/90"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
