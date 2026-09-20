import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homePrinciples, type HomePrinciple } from "@/content/home";

export function PrinciplesSection() {
  return (
    <Section tone="surface" bordered labelledBy="principles">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="max-w-2xl">
            <SectionHeading
              id="principles"
              eyebrow="Six principles"
              title="What we hold, stated briefly."
              lede="Each of the six opens onto the fuller argument set out in our principles and in the manifesto."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Button href="/principles" variant="secondary">
              All sixteen principles
            </Button>
          </Reveal>
        </div>

        {/* Hairline gaps rather than cards: a broadsheet table, not a feature grid. */}
        <Reveal delay={0.12} className="mt-14 lg:mt-20">
          <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {homePrinciples.map((principle) => (
              <PrincipleCard key={principle.number} principle={principle} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

function PrincipleCard({ principle }: { readonly principle: HomePrinciple }) {
  return (
    <li className="group bg-surface transition-colors duration-300 hover:bg-canvas">
      <Link
        href={principle.href}
        className="flex h-full flex-col gap-5 p-8 lg:p-10"
        aria-label={`${principle.title} — read the full principle`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="numerals-tabular eyebrow text-burgundy/80">{principle.number}</span>
          <ArrowUpRight
            className="size-4 shrink-0 text-faint transition-colors group-hover:text-burgundy"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h3 className="font-serif text-display-4 font-normal text-ink">{principle.title}</h3>

        <p className="mt-auto text-[0.9375rem] leading-relaxed text-muted">
          {principle.statement}
        </p>
      </Link>
    </li>
  );
}
