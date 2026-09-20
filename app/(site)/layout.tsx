import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";

/**
 * The public site's chrome.
 *
 * `(site)` is a route group, so it contributes nothing to the URL — `/about` is
 * still `/about`. Its only purpose is to bound the navigation and footer to the
 * public pages, leaving `/admin` free to render its own frame.
 *
 * The flex column that used to live on `<body>` sits here instead, because only
 * this branch of the tree wants a sticky-footer layout.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
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
    </div>
  );
}
