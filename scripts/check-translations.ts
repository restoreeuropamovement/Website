/**
 * Guards every translation against the English it is typed from.
 *
 * TypeScript already stops a language file from omitting a key or renaming an
 * entry. It cannot see the four ways a translation goes wrong quietly:
 *
 *   - a list loses an item, so the German reader is shown four commitments
 *     where the English reader is shown five;
 *   - an optional section is dropped, so a policy entry's stated limits — the
 *     part that says what the movement is *not* claiming — simply is not there;
 *   - a `{count}` placeholder is translated along with the words around it, so
 *     the sentence renders with a brace in it instead of a number;
 *   - a path is written into prose, so a German reader following a link in the
 *     privacy note lands on the English page.
 *
 * All four produce a page that builds, deploys and reads plausibly. On a
 * catalogue of political positions the first two amount to the movement saying
 * different things to different countries, which is the failure the whole
 * structure/text split exists to prevent.
 *
 * What is compared is the language *modules* — `content/<domain>/en.ts` beside
 * `content/<domain>/de.ts` — and not the editions the pages render. An edition
 * legitimately differs by locale: `/wings` sorts its nations with
 * `localeCompare`, and drops the endonym that duplicates the country's name in
 * the language being read. Those are the structure doing its job, not drift.
 *
 * Every domain under `content/` with an `en.ts` is picked up automatically, so
 * a module added later is covered without being named here.
 *
 * Runs in `npm run check`, needs nothing configured.
 */
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_LOCALE, LOCALES } from "../lib/i18n";

let failures = 0;

function fail(where: string, detail: string): void {
  failures += 1;
  console.error(`  FAIL  ${where} — ${detail}`);
}

/** Placeholders are the contract between a language file and a page. */
function placeholders(text: string): string[] {
  return [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1] ?? "").sort();
}

/**
 * Plural categories are a property of the language, not of the sentence:
 * Polish needs four forms where English needs two, so these objects are the
 * one place a translation is *expected* to have different keys.
 */
const PLURAL_CATEGORIES = new Set(["zero", "one", "two", "few", "many", "other"]);

function isPluralForms(value: object): boolean {
  const keys = Object.keys(value);
  return keys.length > 0 && keys.includes("other") && keys.every((k) => PLURAL_CATEGORIES.has(k));
}

/**
 * Lists whose length is a property of the language, not of the content.
 *
 * "A list must have as many items as the English one" exists because a
 * commitment dropped in translation is the movement saying something
 * different in German. The policy search's synonym groups are the one list on
 * the site that is never rendered: they are the words a reader of a given
 * language might type for a subject, and German reaches with one compound
 * what English needs three words for. Holding them to the English count would
 * force a translator to pad.
 *
 * What is still required is that a group is a non-empty list of words.
 * `scripts/check-search.ts` checks the part that matters — that some word in
 * each group is one the catalogue actually uses in that language, so the
 * group reaches an entry rather than nothing.
 */
function isVocabularyList(where: string): boolean {
  return where.includes(".search.synonyms.");
}

function compare(where: string, english: unknown, translated: unknown): void {
  if (typeof english === "string") {
    if (typeof translated !== "string") {
      fail(where, `is ${typeof translated}, English has a string`);
      return;
    }
    /*
     * Routes live in `lib/site.ts` and are reached from prose as
     * `[label][route-id]`. A path written into a language file is one that
     * will not be prefixed for its own locale.
     */
    if (/\]\(\s*(?:\/|https?:)/.test(translated)) {
      fail(where, "contains a URL; use a reference link [label][route-id]");
    }
    const expected = placeholders(english).join(",");
    const actual = placeholders(translated).join(",");
    if (expected !== actual) {
      fail(where, `placeholders are {${actual || "none"}}, English has {${expected || "none"}}`);
    }
    return;
  }

  if (Array.isArray(english)) {
    if (!Array.isArray(translated)) {
      fail(where, "is not a list, English has one");
      return;
    }
    if (isVocabularyList(where)) {
      if (translated.length === 0) {
        fail(where, "is empty; a synonym group needs the words of its own language");
      } else if (translated.some((item) => typeof item !== "string" || item.trim() === "")) {
        fail(where, "has an item that is not a word");
      }
      return;
    }
    if (english.length !== translated.length) {
      fail(where, `has ${translated.length} items, English has ${english.length}`);
      return;
    }
    english.forEach((item, index) => compare(`${where}[${index}]`, item, translated[index]));
    return;
  }

  if (english === null || typeof english !== "object") return;
  if (translated === null || typeof translated !== "object") {
    fail(where, "is missing, present in English");
    return;
  }

  if (isPluralForms(english)) {
    if (!isPluralForms(translated)) {
      fail(where, "is not a set of plural forms");
      return;
    }
    /*
     * A form may leave the number out — English says "the only position"
     * rather than "1 position" — so what is checked is that no form has
     * invented a placeholder of its own, which is what a translated `{count}`
     * looks like.
     */
    const known = new Set(placeholders((english as Record<string, string>).other ?? ""));
    for (const [category, form] of Object.entries(translated as Record<string, string>)) {
      const unknown = placeholders(form).filter((name) => !known.has(name));
      if (unknown.length > 0) {
        fail(`${where}.${category}`, `has no value for {${unknown.join("}, {")}}`);
      }
    }
    return;
  }

  const englishKeys = Object.keys(english);
  const translatedKeys = new Set(Object.keys(translated));
  for (const key of englishKeys) {
    if (!translatedKeys.has(key)) {
      fail(`${where}.${key}`, "missing, present in English");
      continue;
    }
    compare(
      `${where}.${key}`,
      (english as Record<string, unknown>)[key],
      (translated as Record<string, unknown>)[key],
    );
  }
  for (const key of translatedKeys) {
    if (!englishKeys.includes(key)) fail(`${where}.${key}`, "present, absent in English");
  }
}

const CONTENT = join(import.meta.dirname, "..", "content");

/** Every `content/` domain that has an English source beside its structure. */
function domains(): string[] {
  return readdirSync(CONTENT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(join(CONTENT, entry.name, "en.ts")))
    .map((entry) => entry.name)
    .sort();
}

async function main(): Promise<void> {
  const found = domains();
  let compared = 0;

  for (const domain of found) {
    const english = await import(`../content/${domain}/en.ts`);

    for (const locale of LOCALES) {
      if (locale === DEFAULT_LOCALE) continue;
      /*
       * A language with no file falls back to English, which is a supported
       * state rather than a failure — half the site was published that way
       * while the translations were being written.
       */
      if (!existsSync(join(CONTENT, domain, `${locale}.ts`))) continue;

      const translated = await import(`../content/${domain}/${locale}.ts`);

      /*
       * Driven by what the translation exports, not by what English does. An
       * English file may carry authoring aids the other five have no business
       * holding — the manifesto exports its sections as an array as well,
       * because the page, the plain-text download and the policy catalogue's
       * cross-references read that shape. What a translation must never have
       * is an export of its own.
       */
      const shared = Object.keys(translated).filter((name) => name in english);
      if (shared.length === 0) {
        fail(`${locale} ${domain}`, "exports nothing the English file also exports");
        continue;
      }
      for (const name of Object.keys(translated)) {
        if (!(name in english)) {
          fail(`${locale} ${domain}.${name}`, "is exported here and not by the English file");
          continue;
        }
        compare(`${locale} ${domain}.${name}`, english[name], translated[name]);
      }
      compared += 1;
    }
  }

  if (failures > 0) {
    console.error(`\n${failures} translation problem(s).`);
    process.exit(1);
  }

  console.log(
    `Translations: ${compared} language files across ${found.length} content modules ` +
      `say what the English says.`,
  );
}

void main();
