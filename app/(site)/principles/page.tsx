import type { Metadata } from "next";
import Link from "next/link";
import { PrincipleEntry } from "@/components/principles/PrincipleEntry";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { principles, principlesMeta } from "@/content/principles";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: principlesMeta.title,
  description:
    "The sixteen principles of Restore Europe Movement: moral order, family, nation, immigration, Europe, economy, property, work, technology, environment, architecture, education, subsidiarity, democracy and foreign policy.",
  alternates: { canonical: "/principles" },
};

export default function PrinciplesPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {principlesMeta.title}
          </p>
          <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink">
            {principlesMeta.subtitle}
          </h1>
          <p className="mt-6 max-w-(--container-reading) text-lede text-muted">
            {principlesMeta.lede}
          </p>

          <nav aria-label="Principles index" className="mt-14">
            <h2 className="eyebrow mb-5 text-muted">Index</h2>
            <ol className="grid gap-x-8 gap-y-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <li key={principle.id} className="border-b border-hairline">
                  <Link
                    href={`#${principle.id}`}
                    className="flex items-baseline gap-3 py-3 text-[0.9375rem] text-muted transition-colors hover:text-burgundy"
                  >
                    <span className="numerals-tabular text-[0.6875rem] tracking-[0.1em] text-faint">
                      {pad(principle.number)}
                    </span>
                    {principle.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </header>

      <Container>
        {principles.map((principle, index) => (
          <PrincipleEntry
            key={principle.id}
            principle={principle}
            flipped={index % 2 === 1}
          />
        ))}
      </Container>

      <section className="border-t border-hairline bg-canvas-deep py-16 lg:py-24">
        <Container size="narrow" className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            Each principle is argued in full in the manifesto.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/manifesto" size="lg">
              Read the Manifesto
            </Button>
            <Button href="/vision" size="lg" variant="secondary">
              What this means in practice
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
