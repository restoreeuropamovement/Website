import { type WingSlug, wingStructure } from "./structure";

/**
 * The bridge between what Vercel measures and what the map can draw.
 *
 * Web Analytics reports its `country` dimension as ISO 3166-1 alpha-2; the map
 * in `content/wings-map.ts` is keyed by wing slug. Something has to join the
 * two, and it belongs here rather than in a language file: a country's code is
 * no more translatable than its slug, and a translator who "corrected" `DE` to
 * `AL` would move Germany's traffic to Albania.
 *
 * It is deliberately *not* a general ISO table. Only nations that carry a wing
 * have an outline to shade, so only they appear; everything else is reported
 * beside the map instead of being silently discarded. `GB` is the notable
 * casualty: alpha-2 stops at the state, so British traffic cannot be split
 * between England, Scotland, Wales and Northern Ireland and is counted
 * elsewhere rather than guessed at. See
 * `lib/admin/geography.ts` for that half.
 */

/**
 * Alpha-2 for each wing, or `null` where the wing has none of its own.
 *
 * Typed as a total `Record<WingSlug, …>`, which is the whole reason for the
 * shape: add a further wing and this fails to compile until it has been given
 * an answer, rather than that nation quietly never being shaded.
 *
 * `null` is the answer for the four nations of the United Kingdom. ISO 3166-1
 * assigns one code, `GB`, to the whole state, and Vercel reports at country
 * level, so a visit from Glasgow and a visit from Cardiff arrive identically.
 * Guessing which of the four to shade would be inventing a measurement: the
 * map would be stating something the data cannot say. `GB` therefore matches
 * no wing, falls through to the ICU region name, and is counted beside the map
 * as "United Kingdom" — visible, correctly named, and not shaded.
 */
export const wingCountryCode = {
  albania: "AL",
  andorra: "AD",
  austria: "AT",
  belgium: "BE",
  "bosnia-and-herzegovina": "BA",
  bulgaria: "BG",
  croatia: "HR",
  cyprus: "CY",
  czechia: "CZ",
  denmark: "DK",
  england: null,
  estonia: "EE",
  finland: "FI",
  france: "FR",
  germany: "DE",
  greece: "GR",
  hungary: "HU",
  iceland: "IS",
  ireland: "IE",
  italy: "IT",
  // ISO 3166-1 has never assigned Kosovo a code. `XK` is the user-assigned
  // stand-in that the geolocation databases behind Vercel, and most of the
  // industry, settled on; there is no official alternative to prefer.
  kosovo: "XK",
  latvia: "LV",
  liechtenstein: "LI",
  lithuania: "LT",
  luxembourg: "LU",
  malta: "MT",
  moldova: "MD",
  monaco: "MC",
  montenegro: "ME",
  netherlands: "NL",
  "north-macedonia": "MK",
  "northern-ireland": null,
  norway: "NO",
  poland: "PL",
  portugal: "PT",
  romania: "RO",
  russia: "RU",
  "san-marino": "SM",
  scotland: null,
  serbia: "RS",
  slovakia: "SK",
  slovenia: "SI",
  spain: "ES",
  sweden: "SE",
  switzerland: "CH",
  ukraine: "UA",
  wales: null,
} as const satisfies Record<WingSlug, string | null>;

/**
 * Codes that mean one of the above without being its alpha-2.
 *
 * `EL` is what the EU institutions use for Greece. It should not arrive from
 * Vercel, but if it does the cost of not listing it is that Greece vanishes
 * from the map into the "elsewhere" list — a silent wrong answer, and exactly
 * the failure this module exists to prevent. Accepting it costs nothing.
 *
 * `UK` used to sit here beside it, pointing at the United Kingdom's wing.
 * There is no longer one to point at: England, Scotland, Wales and Northern
 * Ireland each have their own, and neither `GB` nor `UK` says which. Both now
 * fall through to the list beside the map, which is the truthful answer.
 */
const ALIASES: Readonly<Record<string, WingSlug>> = {
  EL: "greece",
};

const BY_CODE: ReadonlyMap<string, WingSlug> = new Map<string, WingSlug>([
  ...wingStructure.flatMap((wing) => {
    const code: string | null = wingCountryCode[wing.slug];
    return code === null ? [] : [[code, wing.slug] as const];
  }),
  ...Object.entries(ALIASES),
]);

/**
 * Internal consistency, checked once at import and only where it can be fixed.
 *
 * The type system already guarantees every wing has an answer; what it cannot
 * see is two wings sharing one code, which would make the map show a country's
 * visitors under its neighbour's name. That is a mistake in this file, so it
 * is raised in development where the person who made it is looking, and not in
 * production where all it could do is take the dashboard down over a fault
 * that shipping has already frozen in place.
 *
 * A `null` is not a fault. It is a wing that ISO gives no code of its own, and
 * it is skipped here for the same reason it is skipped in the lookup.
 */
if (process.env.NODE_ENV === "development") {
  const seen = new Set<string>();
  for (const wing of wingStructure) {
    const code = wingCountryCode[wing.slug];
    if (code === null) continue;
    if (!/^[A-Z]{2}$/.test(code)) {
      throw new Error(`content/wings/iso.ts: "${code}" (${wing.slug}) is not an alpha-2 code.`);
    }
    if (seen.has(code)) {
      throw new Error(`content/wings/iso.ts: "${code}" is used by more than one wing.`);
    }
    seen.add(code);
  }
  for (const [alias, slug] of Object.entries(ALIASES)) {
    if (seen.has(alias)) {
      throw new Error(`content/wings/iso.ts: alias "${alias}" collides with a real alpha-2 code.`);
    }
    if (wingCountryCode[slug] === undefined) {
      throw new Error(`content/wings/iso.ts: alias "${alias}" points at no wing.`);
    }
  }
}

/** The wing a country code belongs to, or `undefined` if it has no outline. */
export function wingSlugForCountryCode(code: string): WingSlug | undefined {
  return BY_CODE.get(code.trim().toUpperCase());
}
