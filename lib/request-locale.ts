import { cache } from "react";
import { DEFAULT_LOCALE, type Locale } from "./i18n";

/**
 * The language the request being rendered is in.
 *
 * `not-found.tsx` takes no props and no `params`, so a boundary inside
 * `app/[locale]` cannot otherwise tell which of the six languages the reader
 * was in. The locale layout records the segment it matched on the way down and
 * the boundary reads it back. `cache()` is scoped to a single render, so two
 * readers being served at once cannot see each other's value, and a page
 * prerendered at build time carries its own.
 */
const store = cache((): { locale: Locale } => ({ locale: DEFAULT_LOCALE }));

export function setRequestLocale(locale: Locale): void {
  store().locale = locale;
}

export function requestLocale(): Locale {
  return store().locale;
}
