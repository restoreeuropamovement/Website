import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Pulse } from "@/components/layout/Pulse";
import { SkipLink } from "@/components/layout/SkipLink";
import { getChrome } from "@/content/chrome";
import { DEFAULT_LOCALE, localeTag, type Locale } from "@/lib/i18n";

/**
 * The public site's frame, in one language.
 *
 * Both public layouts render this: `app/(site)` for English at the bare paths,
 * and `app/[locale]` for everything else. Keeping it in one component is what
 * stops the German masthead drifting from the English one.
 *
 * `lang` is set here rather than on `<html>` because the root layout is shared
 * with `/admin` and is statically rendered for all 138 prerendered pages —
 * making it vary by locale would mean rendering it per request. The attribute
 * is valid on any element, and assistive technology honours the innermost one,
 * so a screen reader switches voice at the top of the translated subtree.
 */
export async function SiteChrome({
  locale,
  children,
}: {
  readonly locale: Locale;
  readonly children: React.ReactNode;
}) {
  const chrome = await getChrome(locale);

  return (
    <div
      className="flex min-h-dvh flex-col"
      lang={locale === DEFAULT_LOCALE ? undefined : localeTag(locale)}
    >
      <SkipLink label={chrome.common.skipToMain} />
      <Navbar chrome={chrome} locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer chrome={chrome} locale={locale} />
      {/*
       * Measurement is scoped to the public site: mounting this here rather than
       * in the root layout keeps administrative page views out of the traffic
       * figures, so the dashboard reports readers rather than our own editing.
       *
       * Vercel Web Analytics is cookieless and stores no personal data, which is
       * why the site carries no consent banner. Adding anything that sets
       * identifiers would change that obligation.
       */}
      <Analytics />
      {/*
       * Presence and reading time, which Vercel does not measure. Mounted
       * beside the counter and for the same reason: scoped to the public site
       * so the figures describe readers rather than our own editing.
       */}
      <Pulse />
    </div>
  );
}
