import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

/**
 * Two things authored copy needs once it exists in six languages.
 *
 * Neither is a template engine. They exist because the alternative is
 * concatenation in the page component — `{count} {count === 1 ? "nation" :
 * "nations"}` — which bakes both English word order and English plural rules
 * into the layout, where no translator can reach them.
 */

/**
 * Substitutes `{name}` placeholders.
 *
 * A placeholder rather than concatenation because word order is not universal:
 * "the wing in Poland" is one clause in English and another in German, and a
 * sentence assembled from fragments can only ever come out in the order the
 * English author happened to use.
 *
 * An unknown placeholder throws. A missing value in one language would
 * otherwise print a literal `{country}` on a page nobody reading that language
 * is around to notice.
 */
export function fill(template: string, values: Readonly<Record<string, string | number>>): string {
  return template.replace(/\{(\w+)\}/g, (_, name: string) => {
    const value = values[name];
    if (value === undefined) {
      throw new Error(
        `No value for placeholder {${name}} in "${template}". ` +
          `Placeholders are part of the contract between a language file and its page.`,
      );
    }
    return String(value);
  });
}

/**
 * The plural forms a language may distinguish.
 *
 * `other` is required and the rest are optional because that is the shape of
 * the problem: English needs `one` and `other`, Polish needs `one`, `few` and
 * `many`, and a language file should carry the forms its own language has
 * rather than the forms English has.
 */
export type PluralForms = { readonly other: string } & Partial<Record<Intl.LDMLPluralRule, string>>;

/**
 * Picks a plural form with the locale's own rules and fills `{count}`.
 *
 * `Intl.PluralRules` rather than `count === 1`, because the English test is
 * wrong in Polish for 2, 3, 4, 22, 23, 24 and so on, and wrong in a way that
 * reads as illiteracy rather than as a bug.
 */
export function plural(
  locale: Locale,
  count: number,
  forms: PluralForms,
  values: Readonly<Record<string, string | number>> = {},
): string {
  const category = new Intl.PluralRules(locale).select(count);
  const template = forms[category] ?? forms.other;
  return fill(template, { count, ...values });
}

/** List formatting — "France, Germany and Spain" — in the reader's language. */
export function list(locale: Locale = DEFAULT_LOCALE, items: readonly string[]): string {
  return new Intl.ListFormat(locale, { style: "long", type: "conjunction" }).format(items);
}
