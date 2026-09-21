import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { WingList } from "@/components/wings/WingList";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getWingsByRegion, wingRegions, wings, wingsMeta } from "@/content/wings";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "National Wings",
  description:
    "Restore Europe is organised as a movement of national wings — one for each European nation, each answerable to its own members and holding only what its chapters and regions cannot.",
  alternates: { canonical: "/wings" },
};

export default function WingsPage() {
  return (
    <>
      <PageHeader kicker={wingsMeta.eyebrow} title={wingsMeta.title} lede={wingsMeta.lede} />

      <Container className="py-12 lg:py-16">
        <ContentBlocks blocks={wingsMeta.intro} className="max-w-(--container-reading)" />

        <p className="mt-8 max-w-(--container-reading) border-l border-rule py-1 pl-5 text-[1.0625rem] leading-relaxed text-muted">
          {wingsMeta.note}
        </p>

        <div className="mt-16 flex flex-col gap-14 lg:gap-16">
          {wingRegions.map((region, index) => {
            const regional = getWingsByRegion(region);
            const id = region.toLowerCase().replace(/[^a-z]+/g, "-");
            return (
              <section key={region} id={id} aria-labelledby={`${id}-heading`}>
                <div className="mb-6 flex items-baseline gap-4 border-b border-hairline pb-3">
                  <span className="numerals-tabular text-[0.8125rem] text-muted">
                    {pad(index + 1)}
                  </span>
                  <h2
                    id={`${id}-heading`}
                    className="font-serif text-display-4 font-normal text-ink"
                  >
                    {region}
                  </h2>
                  <span className="ml-auto text-[0.8125rem] text-faint">
                    {regional.length} {regional.length === 1 ? "nation" : "nations"}
                  </span>
                </div>
                <WingList wings={regional} />
              </section>
            );
          })}
        </div>

        <div className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {wings.length} nations. One inheritance.
          </h2>
          <p className="mt-4 max-w-2xl text-reading text-body/92">
            Every wing on this page is a place where the work has to be done by people who live
            there. If that is where you live, the movement needs you more than it needs another
            reader.
          </p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href="/join"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              Get involved
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href="/about#how-we-organize"
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              How we organise
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
