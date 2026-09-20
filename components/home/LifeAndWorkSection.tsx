import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { lifeAndWork } from "@/content/home";

const { diagram } = lifeAndWork;

/** Positions for the ring of goods that surround a life. */
const ringPositions = diagram.orbit.map((label, index) => {
  const angle = (Math.PI * 2 * index) / diagram.orbit.length - Math.PI / 2;
  return {
    label,
    left: `${(50 + Math.cos(angle) * 41).toFixed(2)}%`,
    top: `${(50 + Math.sin(angle) * 41).toFixed(2)}%`,
  };
});

export function LifeAndWorkSection() {
  return (
    <Section spacing="lg" bordered labelledBy="life-and-work">
      <Container>
        <Reveal>
          <p className="eyebrow mb-8 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {lifeAndWork.eyebrow}
          </p>
          <h2 id="life-and-work" className="max-w-4xl font-serif text-display-2 font-normal text-ink">
            {lifeAndWork.statement}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal delay={0.08} className="flex flex-col gap-12">
            <ContentBlocks blocks={lifeAndWork.body} />

            <div className="border-t border-hairline pt-8">
              <h3 className="font-serif text-display-4 font-normal text-ink">
                {lifeAndWork.outcome.title}
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
                {lifeAndWork.outcome.lead}
              </p>
              <ul className="mt-6 flex flex-col">
                {lifeAndWork.outcome.items.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[1.25rem_1fr] items-baseline border-t border-hairline py-3.5 text-[1.0625rem] text-body/92"
                  >
                    <span aria-hidden="true" className="size-1 translate-y-[-0.2em] rotate-45 bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <WorkSupportsLife />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function WorkSupportsLife() {
  return (
    <figure className="flex flex-col items-center">
      <figcaption className="sr-only">
        Work supports life, and life consists of {diagram.orbit.join(", ").toLowerCase()}.
      </figcaption>

      <span className="eyebrow border border-rule px-6 py-3 text-ink">{diagram.top}</span>

      <span aria-hidden="true" className="my-3 h-12 w-px bg-rule" />
      <span className="eyebrow text-muted">{diagram.middle}</span>
      <span aria-hidden="true" className="mt-3 mb-8 h-12 w-px bg-rule" />

      {/* The ring only makes sense with room to breathe; below `sm` the same
          goods are listed plainly instead. */}
      <div className="relative hidden aspect-square w-full max-w-[26rem] sm:block">
        <span
          aria-hidden="true"
          className="absolute inset-[13%] rounded-full border border-dashed border-rule/70"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-display-3 text-ink">
          {diagram.bottom}
        </span>
        {ringPositions.map((item) => (
          <span
            key={item.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 bg-canvas px-2 text-center text-[0.8125rem] leading-none font-medium tracking-[0.02em] whitespace-nowrap text-muted"
            style={{ left: item.left, top: item.top }}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-6 sm:hidden">
        <span className="font-serif text-display-3 text-ink">{diagram.bottom}</span>
        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2">
          {diagram.orbit.map((label, index) => (
            <li key={label} className="flex items-center gap-3 text-[0.875rem] text-muted">
              {index > 0 ? <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" /> : null}
              {label}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
