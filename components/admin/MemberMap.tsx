import { countryLabel } from "@/content/involvement";
import { europeContext, europeViewBox, europeWings } from "@/content/wings-map";
import type { CountryCount } from "@/lib/admin/members";
import { cn } from "@/lib/utils";

/**
 * Where the hovered nation's name and count are written, in `viewBox` units.
 * The empty north Atlantic above Iceland — see the note in
 * `components/wings/EuropeMap.tsx`, which established that this is the largest
 * rectangle in this frame no outline reaches.
 */
const LABEL = { x: 68, baseline: 214, size: 78 } as const;

/** Radius of the invisible hit target given to a nation a few pixels across. */
const MARKER_TARGET = 90;

export interface MemberMapProps {
  readonly counts: readonly CountryCount[];
  /** The country currently filtering the roll, if any. */
  readonly selected?: string;
  /** Builds the link for a nation, preserving whatever else is filtered. */
  readonly hrefFor: (country: string) => string;
}

/**
 * The roll as geography.
 *
 * Counts every record rather than only confirmed members. At this stage most
 * of the table is `new`, and a map shaded by confirmations would be blank on
 * the days it matters most — which would read as "nobody has applied" rather
 * than "nobody has been through yet". The legend says which it is, and the
 * list beside it carries the split.
 *
 * Shows no name, no address and nothing decrypted: `country` is the one column
 * on `member` held in the clear, precisely because the admin view counts on it
 * and a country identifies nobody. So this renders for a signed-in
 * administrator without a passkey assertion, and it is the part of the page an
 * attacker with a stolen cookie is allowed to reach.
 *
 * A Server Component, and it has to stay one: `content/wings-map.ts` is 42 kB
 * of path data, already shipped once as markup, and a `"use client"` boundary
 * would send it again as JavaScript. Every state below is plain CSS.
 *
 * Only nations that hold a record are links. The rest are inert — clicking one
 * would filter to an empty list, and making all forty-seven focusable would
 * put dozens of dead stops in the keyboard path before the roll itself.
 */
export function MemberMap({ counts, selected, hrefFor }: MemberMapProps) {
  const byCountry = new Map(counts.map((row) => [row.country, row]));
  const total = (row: CountryCount | undefined) =>
    row ? row.new + row.reviewing + row.awaiting + row.confirmed + row.declined : 0;

  const highest = Math.max(1, ...counts.map((row) => total(row)));

  /*
   * The five nations a few pixels across are drawn last. Paint order is not
   * negotiable in SVG: their markers and enlarged hit targets have to sit above
   * the neighbours that surround them, or France swallows Monaco and Andorra.
   */
  const drawn = [...europeWings].sort((a, b) => Number(a.small) - Number(b.small));

  return (
    <svg
      viewBox={europeViewBox}
      role="group"
      aria-label="Records held, by country"
      className="h-auto w-full"
    >
      {/*
       * Land outside the forty-seven. Visible enough that the Mediterranean
       * reads as a sea rather than the edge of the picture, quiet enough not to
       * be mistaken for a nation holding records.
       */}
      <path
        d={europeContext}
        className="pointer-events-none fill-gold/5 stroke-hairline"
        strokeWidth={4}
      />

      {drawn.map((shape) => {
        const row = byCountry.get(shape.slug);
        const held = total(row);
        const isSelected = shape.slug === selected;
        /*
         * One string, not an interpolation split across several children.
         * React serialises sibling text nodes with comment markers between
         * them, and inside an SVG `<title>` that does not survive hydration —
         * the whole readout has to arrive as a single child.
         */
        const readingFor = `${countryLabel(shape.slug)} — ${held} ${held === 1 ? "record" : "records"}`;

        const body = (
          <>
            <path
              d={shape.d}
              strokeWidth={isSelected ? 18 : 5}
              className={cn(
                "transition-colors",
                fill(held, highest),
                isSelected ? "stroke-ink" : "stroke-canvas",
                held > 0 && "group-hover:fill-gold group-focus-visible:fill-gold",
              )}
            />

            {/*
             * Andorra, Liechtenstein, Malta, Monaco and San Marino are a few
             * pixels across at this scale. Without a marker they are
             * indistinguishable from the sea; without a hit target larger than
             * the outline they cannot be clicked.
             */}
            {shape.small ? (
              <>
                {held > 0 ? (
                  <circle cx={shape.cx} cy={shape.cy} r={MARKER_TARGET} className="fill-transparent" />
                ) : null}
                <circle
                  cx={shape.cx}
                  cy={shape.cy}
                  r={26}
                  className={cn(
                    held > 0 ? "fill-burgundy" : "fill-gold/35",
                    held > 0 && "group-hover:fill-gold group-focus-visible:fill-gold",
                  )}
                />
              </>
            ) : null}
          </>
        );

        /*
         * `pointer-events-none` on the label matters more than it looks. Every
         * one of these sits in the same corner at zero opacity, and an
         * invisible `<text>` still answers the pointer — without it the north
         * Atlantic would be a stack of links to whichever nation is on top.
         */
        const readout = (
          <text
            x={LABEL.x}
            y={LABEL.baseline}
            fontSize={LABEL.size}
            aria-hidden="true"
            className="pointer-events-none fill-ink font-serif opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:hidden"
          >
            {readingFor}
          </text>
        );

        if (held === 0) {
          return (
            <g key={shape.slug} className="group pointer-events-none">
              {body}
            </g>
          );
        }

        return (
          /*
           * A plain anchor, not next/link. These hrefs carry the current search
           * parameters and the destination is this same page; prefetching
           * forty-odd variants of a route that writes an audit row on render is
           * not something to do on hover.
           */
          <a key={shape.slug} href={hrefFor(shape.slug)} className="group cursor-pointer focus-visible:outline-none">
            <title>{readingFor}</title>
            {body}
            {readout}
          </a>
        );
      })}
    </svg>
  );
}

/**
 * Five steps, relative to the busiest nation rather than to an absolute count.
 *
 * Absolute thresholds would leave the whole map on the lowest step for the
 * first year and then saturate, which is the range in which the picture is
 * least useful. Relative shading always shows where the weight actually is —
 * at the cost of the shade meaning something different month to month, which
 * is why the legend states the top of the scale instead of implying one.
 */
function fill(held: number, highest: number): string {
  if (held === 0) return "fill-gold/16";

  const ratio = held / highest;
  if (ratio <= 0.25) return "fill-burgundy/30";
  if (ratio <= 0.5) return "fill-burgundy/50";
  if (ratio <= 0.75) return "fill-burgundy/70";
  return "fill-burgundy/90";
}
