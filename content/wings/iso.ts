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
 * beside the map instead of being silently discarded. See
 * `lib/admin/geography.ts` for that half.
 *
 * One code can answer for several wings. Alpha-2 stops at the state, and the
 * United Kingdom is one state carrying four of them, so `GB` resolves to all
 * four at once rather than to none.
 */

/**
 * Alpha-2 for each wing, or `null` where the wing has none of its own.
 *
 * Typed as a total `Record<WingSlug, …>`, which is the whole reason for the
 * shape: add a further wing and this fails to compile until it has been given
 * an answer, rather than that nation quietly never being shaded.
 *
 * `null` means the wing has no alpha-2 to itself, not that it cannot be
 * shaded. The four nations of the United Kingdom share one code between them
 * and are reached through `STATES` below instead.
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
 * Codes that name a state covering more than one wing.
 *
 * Vercel reports at country level, and a country in ISO's sense is a state. A
 * visit from Glasgow and a visit from Cardiff both arrive as `GB`, so there is
 * no way to tell which of the four British wings a British visitor belongs to.
 *
 * Two wrong answers were available. Picking one nation — England, say — would
 * invent a measurement, stating something the data cannot say. Matching no
 * wing at all, which is what this did before, left every British visitor in
 * the list beside the map while Britain stayed blank: truthful about the
 * split, and quietly misleading about the total, since the map read as though
 * nobody came from there at all.
 *
 * So the state shades all four of its wings together, as one figure under one
 * name. That is exactly what was measured — traffic from the United Kingdom —
 * and the four carrying an identical shade is the map saying it cannot divide
 * them, rather than claiming they happen to be equal. The panel says so in
 * words underneath.
 */
const STATES = {
  GB: { name: "United Kingdom", slugs: ["england", "scotland", "wales", "northern-ireland"] },
} as const satisfies Readonly<Record<string, { name: string; slugs: readonly WingSlug[] }>>;

/**
 * Codes that mean one of the above without being its alpha-2.
 *
 * `EL` is what the EU institutions use for Greece. It should not arrive from
 * Vercel, but if it does the cost of not listing it is that Greece vanishes
 * from the map into the "elsewhere" list — a silent wrong answer, and exactly
 * the failure this module exists to prevent. Accepting it costs nothing.
 *
 * `UK` is the same courtesy for the United Kingdom: not its alpha-2, which is
 * `GB`, but the spelling half the world writes and one that would otherwise
 * unshade Britain without a word of complaint.
 */
const ALIASES: Readonly<Record<string, string>> = {
  EL: "GR",
  UK: "GB",
};

/**
 * What a country code resolves to, which may be one wing or a state's worth.
 *
 * `slugs` is a non-empty tuple so that callers naming the result can reach for
 * the first element without a check that could never fail.
 */
export interface CountryWings {
  /**
   * The alpha-2 this resolves to, which is not always the code asked about:
   * `UK` answers as `GB`. Callers key on this so two spellings of one country
   * cannot become two rows.
   */
  readonly code: string;
  readonly slugs: readonly [WingSlug, ...WingSlug[]];
  /** Set only for a state covering several wings, and then it is the name to print. */
  readonly stateName?: string;
}

const BY_CODE: ReadonlyMap<string, CountryWings> = new Map<string, CountryWings>([
  ...wingStructure.flatMap((wing) => {
    const code: string | null = wingCountryCode[wing.slug];
    return code === null ? [] : [[code, { code, slugs: [wing.slug] }] as const];
  }),
  ...Object.entries(STATES).map(
    ([code, state]) => [code, { code, slugs: state.slugs, stateName: state.name }] as const,
  ),
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
 * A `null` is not a fault, but an unclaimed one is. A wing with no code of its
 * own and no state to belong to would never be shaded whatever the traffic —
 * which is the bug this whole exercise was about, and the check below is what
 * stops it coming back the next time a nation is added.
 */
if (process.env.NODE_ENV === "development") {
  const claimed = new Set<string>();
  for (const [code, state] of Object.entries(STATES)) {
    for (const slug of state.slugs) {
      if (wingCountryCode[slug] !== null) {
        throw new Error(
          `content/wings/iso.ts: "${slug}" is inside the state "${code}" and also has an alpha-2 ` +
            `of its own. One or the other.`,
        );
      }
      if (claimed.has(slug)) {
        throw new Error(`content/wings/iso.ts: "${slug}" belongs to more than one state.`);
      }
      claimed.add(slug);
    }
  }

  const seen = new Set<string>(Object.keys(STATES));
  for (const wing of wingStructure) {
    const code = wingCountryCode[wing.slug];
    if (code === null) {
      if (!claimed.has(wing.slug)) {
        throw new Error(
          `content/wings/iso.ts: "${wing.slug}" has no alpha-2 and belongs to no state, so no ` +
            `traffic could ever reach it. Give it a code, or add it to a state in STATES.`,
        );
      }
      continue;
    }
    if (!/^[A-Z]{2}$/.test(code)) {
      throw new Error(`content/wings/iso.ts: "${code}" (${wing.slug}) is not an alpha-2 code.`);
    }
    if (seen.has(code)) {
      throw new Error(`content/wings/iso.ts: "${code}" is used by more than one wing.`);
    }
    seen.add(code);
  }

  for (const [alias, code] of Object.entries(ALIASES)) {
    if (seen.has(alias)) {
      throw new Error(`content/wings/iso.ts: alias "${alias}" collides with a real alpha-2 code.`);
    }
    if (!BY_CODE.has(code)) {
      throw new Error(`content/wings/iso.ts: alias "${alias}" points at "${code}", which is unknown.`);
    }
  }
}

/**
 * The wings a country code covers, or `undefined` if it has no outline.
 *
 * One wing for most codes, four for `GB`. Aliases are resolved first, so a
 * non-ISO spelling lands wherever the code it stands for does.
 */
export function wingsForCountryCode(code: string): CountryWings | undefined {
  const normalised = code.trim().toUpperCase();
  return BY_CODE.get(ALIASES[normalised] ?? normalised);
}
