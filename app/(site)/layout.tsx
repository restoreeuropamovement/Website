import { SiteChrome } from "@/components/layout/SiteChrome";
import { DEFAULT_LOCALE } from "@/lib/i18n";

/**
 * The public site's chrome, in English.
 *
 * `(site)` is a route group, so it contributes nothing to the URL — `/about` is
 * still `/about`. Its only purpose is to bound the navigation and footer to the
 * public pages, leaving `/admin` free to render its own frame.
 *
 * Translations are served from `app/[locale]`, which renders the same
 * `SiteChrome` with a different dictionary.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome locale={DEFAULT_LOCALE}>{children}</SiteChrome>;
}
