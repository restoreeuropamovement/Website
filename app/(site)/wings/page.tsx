import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EuropeMap } from "@/components/wings/EuropeMap";
import { WingList } from "@/components/wings/WingList";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { getWingsByRegion, wingRegions, wings, wingsMeta } from "@/content/wings";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "National Wings",
  description:
    "Restore Europa is organised as a movement of national wings — one for each European nation, each answerable to its own members and holding only what its chapters and regions cannot.",
  alternates: { canonical: "/wings" },
};

export default function WingsPage() {
  return (
    <>
      <PageHeader kicker={wingsMeta.eyebrow} title={wingsMeta.title} lede={wingsMeta.lede} />

      <Container className="py-12 lg:py-16">
        {/*
          The standing note sits beside the intro rather than under it. Stacked,
          it left the right half of a wide screen empty above a map that then
          had to carry the whole width on its own.
        */}
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-x-24">
          <ContentBlocks blocks={wingsMeta.intro} className="max-w-(--container-reading)" />

          {/*
            `self-start` so the left rule measures the note rather than the
            grid row: stretched, it draws a line down the empty space beneath.
          */}
          <p className="self-start border-l border-rule py-1 pl-5 text-[1.0625rem] leading-relaxed text-muted lg:mt-1">
            {wingsMeta.note}
          </p>
        </div>

        <figure className="mt-14 lg:mt-16">
          {/*
            Held to a plate rather than run to the container width. Europe is
            close to square in an equal-area projection, so a full-width map
            would be over a thousand pixels tall and push the list of wings —
            the part of the page you can actually click — off the screen. Size
            buys nothing in legibility either: Luxembourg is a handful of pixels
            wide however big the map is, which is why the small wings get
            markers and the list does the naming.
          */}
          {/*
            The only reveal outside the homepage, and a fade rather than a
            settle. The map is the one thing on the site that is looked at
            rather than read, so it is worth the moment; the caption and the
            lists are not wrapped, because a `figcaption` has to stay a direct
            child of its `figure`, and content you came to use should be there
            when you arrive.
          */}
          <Reveal distance={0}>
            <EuropeMap label={wingsMeta.mapLabel} className="mx-auto max-w-3xl" />
          </Reveal>
          <figcaption className="mx-auto mt-6 max-w-(--container-reading) border-t border-hairline pt-4 text-[0.9375rem] leading-relaxed text-muted">
            {wingsMeta.mapCaption}
          </figcaption>
        </figure>

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
