import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { imprint } from "@/content/legal";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Publisher information for Restore Europe Movement. The movement is in formation; registered particulars are published as they become genuine.",
  alternates: { canonical: "/imprint" },
};

export default function ImprintPage() {
  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container size="narrow">
          <p className="eyebrow mb-6 text-burgundy">{imprint.eyebrow}</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">{imprint.title}</h1>
          <p className="mt-6 text-lede text-muted">{imprint.lede}</p>
        </Container>
      </header>

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex max-w-(--container-reading) flex-col gap-12">
          <ContentBlocks blocks={imprint.intro} />

          <section aria-labelledby="particulars-heading" className="border-t border-hairline pt-8">
            <h2
              id="particulars-heading"
              className="mb-8 font-serif text-display-3 font-normal text-ink"
            >
              Particulars
            </h2>
            <dl className="flex flex-col">
              {imprint.entries.map((entry) => (
                <div
                  key={entry.term}
                  className="grid gap-1.5 border-t border-hairline py-4 sm:grid-cols-[14rem_1fr] sm:gap-8"
                >
                  <dt className="text-[0.9375rem] font-medium text-ink">{entry.term}</dt>
                  <dd className="flex flex-col gap-1.5">
                    <span className="inline-flex w-fit border border-dashed border-rule px-2.5 py-1 text-[0.6875rem] tracking-[0.12em] text-faint uppercase">
                      Not yet established
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-muted">
                      {entry.description}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-label="About this website" className="border-t border-hairline pt-8">
            <ContentBlocks blocks={imprint.closing} />
          </section>
        </div>
      </Container>
    </>
  );
}
