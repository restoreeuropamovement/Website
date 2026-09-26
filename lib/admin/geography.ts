import { englishCountryNames } from "@/content/wings";
import { wingSlugForCountryCode } from "@/content/wings/iso";
import type { WingSlug } from "@/content/wings/structure";
import type { DimensionBreakdown, DimensionRow } from "@/lib/admin/analytics";

/**
 * Turning Vercel's country rows into something the map of Europa can shade.
 *
 * The map draws forty-seven nations. Visitors arrive from rather more than
 * forty-seven places, so the first job here is to split the breakdown in two —
 * what can be shaded, and what cannot — and the second is to make sure the
 * half that cannot be shaded is still counted somewhere the reader will see
 * it. A map that quietly drops every visitor from outside its frame is not a
 * simplification, it is a wrong total.
 */

/** How many shades the choropleth ramp has at most. */
const STEPS = 5;

export interface MappedCountry {
  readonly slug: WingSlug;
  readonly code: string;
  readonly name: string;
  readonly visitors: number;
  readonly pageviews: number;
}

export interface ElsewhereCountry {
  readonly code: string;
  readonly name: string;
  readonly visitors: number;
  readonly pageviews: number;
}

export interface Geography {
  /** Countries with an outline on the map, most visitors first. */
  readonly mapped: readonly MappedCountry[];
  /** Everywhere else, most visitors first. Never hidden — see above. */
  readonly elsewhere: readonly ElsewhereCountry[];
  /** Vercel's remainder bucket, when more countries occurred than were asked for. */
  readonly others?: DimensionRow;
  /**
   * Whether the breakdown names every country that occurred.
   *
   * This is what decides the meaning of a nation the rows do not mention. If
   * the list is complete, that nation recorded no visits — a measurement. If
   * it is not, that nation might be inside `others` — an absence of one. The
   * map shades the two differently and the legend names both, because
   * pretending not to know is the only honest option for the second.
   */
  readonly complete: boolean;
  /**
   * Keyed by slug as a bare string, because that is how the generated map
   * module types its shapes; narrowing it to `WingSlug` here would only force
   * every lookup in the renderer through a cast.
   */
  readonly byWing: ReadonlyMap<string, MappedCountry>;
  /** Upper bound of each shade band, ascending. Empty when nothing was measured. */
  readonly bands: readonly number[];
  readonly mappedVisitors: number;
  readonly elsewhereVisitors: number;
  readonly totalVisitors: number;
}

/**
 * English names for countries with no wing.
 *
 * ICU's own region names, not a table written here: a hand-kept list of two
 * hundred country names is a list of two hundred chances to misname somebody's
 * country, and this one ships with the runtime already.
 *
 * Countries that *do* have a wing are named from the edition instead, so the
 * map and the rest of the site never disagree about what a country is called.
 */
const REGION_NAMES = new Intl.DisplayNames(["en"], { type: "region", fallback: "none" });

function regionName(code: string): string | undefined {
  try {
    return REGION_NAMES.of(code);
  } catch {
    // Structurally not a region code at all; `of` throws rather than returning.
    return undefined;
  }
}

/**
 * Codes reported for something that is not a country.
 *
 * Vercel attributes a visit it cannot place to an empty value, which the
 * reader turns into this label. It is real traffic and is counted; it just has
 * nowhere to go on a map.
 */
const UNATTRIBUTED = "Unattributed";

/**
 * A code neither the wing table nor ICU recognises is a fault worth shouting
 * about, and it is the only case here that is.
 *
 * The tempting rule — complain about every code with no wing — would fire on
 * every visitor from the United States, which is not a fault but the ordinary
 * case. What is genuinely wrong is a code no region table has heard of, which
 * is how a renamed dimension or a non-ISO spelling such as `UK` would first
 * show itself. In development that is worth interrupting someone over; in
 * production it is not, because the visitor is counted either way, in the
 * "elsewhere" list, under the raw code. Nothing disappears in either case.
 */
function warnUnknown(code: string): void {
  if (process.env.NODE_ENV !== "development") return;
  console.error(
    `[admin/geography] Vercel returned country code "${code}", which is neither a wing nor an ISO region. ` +
      `If it names one of the forty-seven wings, add it to ALIASES in content/wings/iso.ts.`,
  );
}

/**
 * Shade bands, as upper bounds.
 *
 * Even steps up to the busiest country, then deduplicated: with a peak of
 * three, five even steps would produce bands nothing could ever fall into, and
 * a legend with empty rows in it invites the reader to wonder what is missing.
 */
function bandsFor(peak: number): readonly number[] {
  if (peak <= 0) return [];
  return [...new Set(Array.from({ length: STEPS }, (_, i) => Math.ceil((peak * (i + 1)) / STEPS)))];
}

/** Which band a figure sits in, as a zero-based index into `bands`. */
export function bandOf(visitors: number, bands: readonly number[]): number {
  const index = bands.findIndex((upper) => visitors <= upper);
  return index === -1 ? Math.max(0, bands.length - 1) : index;
}

/** The inclusive lower bound of a band, for the legend. */
export function bandFloor(bands: readonly number[], index: number): number {
  return index === 0 ? 1 : (bands[index - 1] ?? 0) + 1;
}

export function readGeography(breakdown: DimensionBreakdown): Geography {
  const mapped: MappedCountry[] = [];
  const elsewhere: ElsewhereCountry[] = [];

  for (const row of breakdown.rows) {
    const code = row.label.trim().toUpperCase();
    const slug = wingSlugForCountryCode(code);

    if (slug) {
      mapped.push({
        slug,
        code,
        name: englishCountryNames[slug],
        visitors: row.visitors,
        pageviews: row.pageviews,
      });
      continue;
    }

    if (row.label === UNATTRIBUTED) {
      elsewhere.push({ code: "—", name: UNATTRIBUTED, ...metrics(row) });
      continue;
    }

    const name = regionName(code);
    if (!name) warnUnknown(code);
    elsewhere.push({ code, name: name ?? code, ...metrics(row) });
  }

  const byVisitors = (a: { visitors: number }, b: { visitors: number }) => b.visitors - a.visitors;
  mapped.sort(byVisitors);
  elsewhere.sort(byVisitors);

  const mappedVisitors = sum(mapped);
  const elsewhereVisitors = sum(elsewhere);

  return {
    mapped,
    elsewhere,
    others: breakdown.others,
    complete: breakdown.complete,
    byWing: new Map(mapped.map((country) => [country.slug, country])),
    bands: bandsFor(Math.max(0, ...mapped.map((country) => country.visitors))),
    mappedVisitors,
    elsewhereVisitors,
    totalVisitors: mappedVisitors + elsewhereVisitors + (breakdown.others?.visitors ?? 0),
  };
}

function metrics(row: DimensionRow): { visitors: number; pageviews: number } {
  return { visitors: row.visitors, pageviews: row.pageviews };
}

function sum(rows: readonly { visitors: number }[]): number {
  return rows.reduce((running, row) => running + row.visitors, 0);
}
