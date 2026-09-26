import Link from "next/link";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { EuropeMap } from "@/components/wings/EuropeMap";
import { WingList } from "@/components/wings/WingList";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import type { WingsEdition } from "@/content/wings";
import { fill, plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import { pad } from "@/lib/utils";

/**
 * The index of national wings, in one language.
 *
 * Region anchors come from the region id rather than from its heading. They
 * were previously derived by lowercasing the heading, which produced
 * `#western-europe` in English and would have produced `#westeuropa` in
 * German — the same section at a different address in each edition, and every
 * link already pointing at it broken in five of them.
 */
export function WingsDocument({ edition }: { readonly edition: WingsEdition }) {
  const { locale, meta, index } = edition;

  return (
    <>
      <PageHeader kicker={meta.eyebrow} title={meta.title} lede={meta.lede} />

      <Container className="py-12 lg:py-16">
        {/*
          The standing note sits beside the intro rather than under it. Stacked,
          it left the right half of a wide screen empty above a map that then
          had to carry the whole width on its own.
        */}
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:gap-x-24">
          <ContentBlocks
            blocks={meta.intro}
            locale={locale}
            className="max-w-(--container-reading)"
          />

          {/*
            `self-start` so the left rule measures the note rather than the
            grid row: stretched, it draws a line down the empty space beneath.
          */}
          <p className="self-start border-l border-rule py-1 pl-5 text-[1.0625rem] leading-relaxed text-muted lg:mt-1">
            {meta.note}
          </p>
        </div>

        <figure className="mt-14 lg:mt-16">
          {/*
            Held to a plate rather than run to the container width. Europa is
            close to square in an equal-area projection, so a full-width map
            would be over a thousand pixels tall and push the list of wings —
            the copy of this that reads in any order, at any width — off the
            screen. Size buys nothing in legibility either: Luxembourg is a
            handful of pixels wide however big the map is, which is why the
            small wings get markers and the list does the naming.
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
            <EuropeMap edition={edition} className="mx-auto max-w-3xl" />
          </Reveal>
          {/*
            The hint comes first because it answers the question the map now
            raises — whether the nations on it can be opened — and nothing else
            on the page says so. Hovering tells a pointer user, and the outlines
            announce themselves as links to a screen reader, but a sighted
            keyboard user arriving at the top of the page would have no way to
            know before tabbing into it.
          */}
          <figcaption className="mx-auto mt-6 max-w-(--container-reading) border-t border-hairline pt-4 text-[0.9375rem] leading-relaxed text-muted">
            {meta.mapHint} {meta.mapCaption}
          </figcaption>
        </figure>

        <div className="mt-16 flex flex-col gap-14 lg:gap-16">
          {edition.regions.map((region, position) => (
            <section key={region.id} id={region.id} aria-labelledby={`${region.id}-heading`}>
              <div className="mb-6 flex items-baseline gap-4 border-b border-hairline pb-3">
                <span className="numerals-tabular text-[0.8125rem] text-muted">
                  {pad(position + 1)}
                </span>
                <h2
                  id={`${region.id}-heading`}
                  className="font-serif text-display-4 font-normal text-ink"
                >
                  {region.name}
                </h2>
                <span className="ml-auto text-[0.8125rem] text-faint">
                  {plural(locale, region.wings.length, index.nationCount)}
                </span>
              </div>
              <WingList wings={region.wings} locale={locale} />
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-serif text-display-3 font-normal text-ink text-balance">
            {fill(index.closingTitle, { count: edition.wings.length })}
          </h2>
          <p className="mt-4 max-w-2xl text-reading text-body/92">{index.closingBody}</p>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[0.9375rem]">
            <Link
              href={localePath(locale, "/join")}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {index.getInvolved}
            </Link>
            <span className="text-faint" aria-hidden="true">
              ·
            </span>
            <Link
              href={localePath(locale, "/about#how-we-organize")}
              className="text-ink underline decoration-rule underline-offset-[0.28em] hover:text-burgundy hover:decoration-burgundy"
            >
              {index.howWeOrganise}
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
