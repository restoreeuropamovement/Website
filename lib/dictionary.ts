import { type Locale } from "@/lib/i18n";

/**
 * Builds a locale-aware getter for one content module.
 *
 * The English object is passed by value and is also the type: a translation
 * that omits a key, or renames one, is a build error rather than a blank
 * heading in production.
 *
 * Loaders are partial and lazy. A language with no file yet falls back to
 * English, so the site is never broken by a translation that is still being
 * written, and a page rendered in Italian never downloads the Polish text.
 * Registering a language is one line here plus the file beside it.
 */
export function createDictionary<T>(
  english: T,
  loaders: Partial<Record<Locale, () => Promise<T>>> = {},
): (locale: Locale) => Promise<T> {
  return async (locale) => {
    const load = loaders[locale];
    return load ? load() : english;
  };
}
