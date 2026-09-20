import type { Metadata } from "next";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { WingList } from "@/components/wings/WingList";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
      <header className="border-b border-hairline bg-canvas-deep pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Container>
          <p className="eyebrow mb-6 flex items-center gap-3 text-burgundy">
            <span aria-hidden="true" className="h-px w-6 bg-burgundy/40" />
            {wingsMeta.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-display-2 font-normal text-ink">
            {wingsMeta.title}
          </h1>
          <p className="mt-6 max-w-(--container-reading) text-lede text-muted">{wingsMeta.lede}</p>
        </Container>
      </header>

      <Container className="py-16 lg:py-24">
        <Reveal>
          <ContentBlocks blocks={wingsMeta.intro} className="max-w-(--container-reading)" />
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <p className="max-w-(--container-reading) border-l-2 border-gold/65 py-1 pl-5 text-[1.0625rem] leading-relaxed text-muted sm:pl-6">
            {wingsMeta.note}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-16 lg:mt-28 lg:gap-20">
          {wingRegions.map((region, index) => {
            const regional = getWingsByRegion(region);
            const id = region.toLowerCase().replace(/[^a-z]+/g, "-");
            return (
              <Reveal key={region}>
                <section id={id} aria-labelledby={`${id}-heading`}>
                  <div className="mb-8 flex items-baseline gap-4 border-b border-hairline pb-4">
                    <span className="numerals-tabular eyebrow text-burgundy/80">
                      {pad(index + 1)}
                    </span>
                    <h2
                      id={`${id}-heading`}
                      className="font-serif text-display-4 font-normal text-ink"
                    >
                      {region}
                    </h2>
                    <span className="ml-auto eyebrow text-faint">
                      {regional.length} {regional.length === 1 ? "nation" : "nations"}
                    </span>
                  </div>
                  <WingList wings={regional} />
                </section>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <div className="flex flex-col items-start gap-8 border-t border-hairline pt-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
                {wings.length} nations. One inheritance.
              </h2>
              <p className="mt-5 text-reading text-body/92">
                Every wing on this page is a place where the work has to be done by people who live
                there. If that is where you live, the movement needs you more than it needs another
                reader.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/join" size="lg">
                Get Involved
              </Button>
              <Button href="/about#how-we-organize" size="lg" variant="secondary">
                How we organise
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
