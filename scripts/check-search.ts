/**
 * Guards the policy catalogue's search.
 *
 * A catalogue of ninety-eight positions is only as good as the chance of
 * finding the one you came for, and the failure mode is silent: a reader who
 * types `abortoin`, or `gay marriage`, or a Polish noun in the genitive, and
 * is told nothing matches, concludes the movement has no position on their
 * issue. Nothing in the build notices. These tests are what notices.
 *
 * Three kinds of check:
 *
 *   - the primitives in `lib/search.ts`, on their own, with no content;
 *   - real queries against the real editions — misspelled, inflected and
 *     colloquial — in all six languages;
 *   - the synonym map, which is content and can therefore be wrong in a way
 *     types cannot see: a group whose every word is absent from the
 *     catalogue's own text in that language reaches nothing at all.
 *
 * Runs in `npm run check`. Needs no database, no key and no network.
 */
import { getPolicy, type PolicyEdition } from "../content/policy";
import { policySynonymGroupIds } from "../content/policy/structure";
import { LOCALES, type Locale } from "../lib/i18n";
import { runPolicyQuery } from "../lib/policy";
import {
  buildIndex,
  buildSynonymTable,
  fold,
  parseQuery,
  search,
  stem,
  tokenize,
  withinEditDistance,
} from "../lib/search";

let failures = 0;

function check(label: string, condition: boolean, detail = ""): void {
  if (condition) return;
  failures += 1;
  console.error(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
}

/* ------------------------------------------------------------------ */
/* The primitives                                                     */
/* ------------------------------------------------------------------ */

function primitives(): void {
  check("folds accents", fold("Łódź, Straße, cœur") === "lodz, strasse, coeur");
  check("folds case", fold("ABTREIBUNG") === "abtreibung");
  check(
    "tokenizes on non-letters",
    tokenize("pro-life; same-sex marriage!").join("|") === "pro|life|same|sex|marriage",
  );
  check("keeps short words whole", stem("tax") === "tax");
  check("truncates long words", stem("taxation") === "taxati");
  check(
    "collapses Polish inflection",
    stem("podatki") === stem("podatku") && stem("podatki") === "podatk",
  );

  check("counts a transposition as one edit", withinEditDistance("abortoin", "abortion", 1));
  check("counts a deletion as one edit", withinEditDistance("subsidarity", "subsidiarity", 1));
  check("refuses two edits on a budget of one", !withinEditDistance("cat", "dog", 1));
  check("returns early on a length gap", !withinEditDistance("war", "warfare", 1));

  /*
   * Tiers decide the order and fields only break ties inside a tier. Two
   * synthetic documents are enough to pin that down, and they pin it down
   * without depending on a word the catalogue might one day stop using.
   */
  const index = buildIndex([
    { id: "exact-in-body", fields: [{ weight: 1, text: "the climate of the continent" }] },
    { id: "fuzzy-in-title", fields: [{ weight: 6, text: "Climote" }] },
    { id: "exact-in-title", fields: [{ weight: 6, text: "Climate" }] },
  ]);
  const empty = buildSynonymTable([]);
  const ranked = search(index, parseQuery("climate", empty)).hits.map((hit) => hit.id);
  check(
    "an exact hit in a title comes first",
    ranked[0] === "exact-in-title",
    `got ${ranked.join(", ")}`,
  );
  check(
    "an exact hit in a body outranks a fuzzy hit in a title",
    ranked.indexOf("exact-in-body") < ranked.indexOf("fuzzy-in-title"),
    `got ${ranked.join(", ")}`,
  );

  const table = buildSynonymTable([["gay marriage", "same-sex marriage"]]);
  const terms = parseQuery("gay marriage", table);
  check("reads a two-word synonym as one term", terms.length === 1, `got ${terms.length} terms`);
  check(
    "offers the other wording",
    terms[0]?.variants.some((variant) => variant.join(" ") === "same sex marriage") === true,
  );

  check("an empty query has no terms", parseQuery("   ", empty).length === 0);
  check("punctuation alone has no terms", parseQuery("?? -- ??", empty).length === 0);
}

/* ------------------------------------------------------------------ */
/* Real queries                                                       */
/* ------------------------------------------------------------------ */

function results(edition: PolicyEdition, q: string): readonly string[] {
  return runPolicyQuery(edition, { q }).entries.map((entry) => entry.slug);
}

/** The reader's word must land them on the entry, not merely somewhere near it. */
function expectTop(edition: PolicyEdition, q: string, slug: string): void {
  const found = results(edition, q);
  check(
    `${edition.locale}: "${q}" leads with ${slug}`,
    found[0] === slug,
    found.length === 0 ? "nothing matched" : `led with ${found[0]}`,
  );
}

/** Reaching the entry at all is enough where the word is not its title. */
function expectFinds(edition: PolicyEdition, q: string, slug: string): void {
  const found = results(edition, q);
  check(
    `${edition.locale}: "${q}" finds ${slug}`,
    found.includes(slug),
    found.length === 0 ? "nothing matched" : `matched ${found.length}, none of them that`,
  );
}

function english(edition: PolicyEdition): void {
  const all = runPolicyQuery(edition, {});
  check("an empty query returns the whole catalogue", all.entries.length === 98);
  check("an empty query keeps catalogue order", all.ranked === false);
  check("an empty query offers no suggestions", all.suggestions.length === 0);

  const filtered = runPolicyQuery(edition, { category: "economy" });
  check("a section filter alone stays unranked", filtered.ranked === false);
  check("a section filter narrows", filtered.entries.every((e) => e.category === "economy"));

  /* Spelled correctly. */
  expectTop(edition, "abortion", "abortion");
  expectTop(edition, "taxation", "taxation");
  expectTop(edition, "homeschooling", "homeschooling");

  /* Misspelled. */
  expectFinds(edition, "abortoin", "abortion");
  expectFinds(edition, "euthanaisa", "euthanasia-and-assisted-suicide");
  expectFinds(edition, "subsidarity", "authority-democracy-and-subsidiarity");
  expectFinds(edition, "immigrtaion", "immigration");
  expectFinds(edition, "conscripton", "conscription");

  /* Inflected, or shortened. */
  expectFinds(edition, "tax", "taxation");
  expectFinds(edition, "taxes", "taxation");
  expectFinds(edition, "prison", "prisons-punishment-and-rehabilitation");
  expectFinds(edition, "pensioners", "pensions");
  expectFinds(edition, "migrant", "immigration");

  /* Said another way. */
  expectFinds(edition, "gay marriage", "marriage-and-sexual-ethics");
  expectFinds(edition, "nukes", "nuclear-weapons");
  expectFinds(edition, "global warming", "climate-policy");
  expectFinds(edition, "the pill", "contraception");
  expectFinds(edition, "guns", "firearms-and-self-defense");
  expectFinds(edition, "illegal immigration", "regularized-irregular-immigration");
  expectFinds(edition, "sunday shopping", "sunday-rest-and-trading");

  /*
   * Two terms still narrow rather than widen. A synonym *phrase* is one term
   * and does widen — that is what it is for — so the pair tested here is two
   * ordinary words.
   */
  const both = results(edition, "abortion conception");
  const one = results(edition, "abortion");
  check("adding a word narrows", both.length < one.length, `${both.length} against ${one.length}`);
  check("and narrows within the same set", both.every((slug) => one.includes(slug)));

  /* The dead end, and what now stands in its place. */
  const nothing = runPolicyQuery(edition, { q: "xylophone" });
  check("a word the catalogue does not know matches nothing", nothing.entries.length === 0);

  const partial = runPolicyQuery(edition, { q: "abortion xylophone" });
  check("one unknown word still matches nothing", partial.entries.length === 0);
  check(
    "but the near miss is offered",
    partial.suggestions.some((entry) => entry.slug === "abortion"),
    `suggested ${partial.suggestions.map((e) => e.slug).join(", ") || "nothing"}`,
  );
}

function translated(edition: PolicyEdition): void {
  switch (edition.locale) {
    case "de":
      expectTop(edition, "Abtreibung", "abortion");
      expectFinds(edition, "Abtreibungen", "abortion");
      expectFinds(edition, "Abtriebung", "abortion");
      expectFinds(edition, "Schwangerschaftsabbruch", "abortion");
      expectFinds(edition, "Steuern", "taxation");
      expectFinds(edition, "Wehrpflicht", "conscription");
      expectFinds(edition, "Atomkraft", "nuclear-energy");
      expectFinds(edition, "Todesstrafe", "death-penalty");
      break;
    case "pl":
      expectTop(edition, "aborcja", "abortion");
      expectFinds(edition, "aborcji", "abortion");
      expectFinds(edition, "aborcaj", "abortion");
      expectFinds(edition, "podatki", "taxation");
      expectFinds(edition, "podatkowe", "taxation");
      expectFinds(edition, "kara smierci", "death-penalty");
      expectFinds(edition, "eutanazja", "euthanasia-and-assisted-suicide");
      expectFinds(edition, "energia jadrowa", "nuclear-energy");
      break;
    case "fr":
      expectTop(edition, "avortement", "abortion");
      expectFinds(edition, "IVG", "abortion");
      expectFinds(edition, "impots", "taxation");
      expectFinds(edition, "peine de mort", "death-penalty");
      break;
    case "it":
      expectTop(edition, "aborto", "abortion");
      expectFinds(edition, "tasse", "taxation");
      expectFinds(edition, "pena di morte", "death-penalty");
      break;
    case "es":
      expectTop(edition, "aborto", "abortion");
      expectFinds(edition, "impuestos", "taxation");
      expectFinds(edition, "pena de muerte", "death-penalty");
      break;
    default:
      break;
  }
}

/* ------------------------------------------------------------------ */
/* The synonym map                                                    */
/* ------------------------------------------------------------------ */

/**
 * Every word the catalogue itself uses in this language, and their stems.
 *
 * A synonym group widens a query to its other members; if none of those
 * members is a word the text actually uses, the group is inert. That is the
 * one way this map fails silently, and it is the way a translation fails.
 */
function vocabularyOf(edition: PolicyEdition): { tokens: Set<string>; stems: Set<string> } {
  const tokens = new Set<string>();
  const stems = new Set<string>();
  for (const fields of edition.searchFields.values()) {
    for (const field of fields) {
      for (const token of tokenize(field.text)) {
        tokens.add(token);
        stems.add(stem(token));
      }
    }
  }
  return { tokens, stems };
}

function synonyms(edition: PolicyEdition): void {
  const vocabulary = vocabularyOf(edition);
  const locale = edition.locale;

  edition.synonyms.forEach((group, position) => {
    const id = policySynonymGroupIds[position] ?? String(position);
    const where = `${locale} synonyms.${id}`;

    check(`${where} widens something`, group.length >= 2, `has ${group.length} word(s)`);

    const seen = new Set<string>();
    for (const phrase of group) {
      const key = tokenize(phrase).join(" ");
      check(`${where} has no blank word`, key !== "", `"${phrase}" holds no letters`);
      check(`${where} does not repeat "${phrase}"`, !seen.has(key));
      seen.add(key);
    }

    const reaches = group.some((phrase) =>
      tokenize(phrase).every(
        (token) => vocabulary.tokens.has(token) || vocabulary.stems.has(stem(token)),
      ),
    );
    check(
      `${where} reaches the catalogue`,
      reaches,
      "no word in the group appears in this edition's text",
    );
  });
}

/* ------------------------------------------------------------------ */

async function main(): Promise<void> {
  primitives();

  const editions = new Map<Locale, PolicyEdition>();
  for (const locale of LOCALES) editions.set(locale, await getPolicy(locale));

  for (const [locale, edition] of editions) {
    if (locale === "en") english(edition);
    else translated(edition);
    synonyms(edition);
  }

  if (failures > 0) {
    console.error(`\n${failures} search problem(s).`);
    process.exit(1);
  }

  console.log(
    `Search: ${editions.size} editions answer misspelled, inflected and colloquial queries, ` +
      `and all ${policySynonymGroupIds.length} synonym groups reach the catalogue in each.`,
  );
}

void main();
