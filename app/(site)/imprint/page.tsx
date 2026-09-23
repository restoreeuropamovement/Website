import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { imprint } from "@/content/legal";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Publisher information for Restore Europa Movement. The movement is in formation; registered particulars are published as they become genuine.",
  alternates: { canonical: "/imprint" },
};

export default function ImprintPage() {
  return (
    <>
      <PageHeader
        kicker={imprint.eyebrow}
        title={imprint.title}
        lede={imprint.lede}
        size="narrow"
      />

      <Container size="narrow" className="py-14 lg:py-20">
        <div className="flex flex-col gap-12">
          <ContentBlocks blocks={imprint.intro} />

          <section aria-labelledby="particulars-heading" className="border-t border-hairline pt-8">
            <h2
              id="particulars-heading"
              className="font-serif text-display-3 font-normal text-ink"
            >
              Particulars to be published
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
              On completion of registration, in this order.
            </p>
            <dl className="mt-8 flex flex-col border-t border-hairline">
              {imprint.entries.map((entry) => (
                <div
                  key={entry.term}
                  className="grid gap-1.5 border-b border-hairline py-4 sm:grid-cols-[16rem_1fr] sm:gap-8"
                >
                  <dt className="text-[0.9375rem] font-medium text-ink">{entry.term}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-muted">
                    {entry.description}
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
