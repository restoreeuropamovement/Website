import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/site";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Upright only. The italic face is another ~48 kB — around a tenth of the page
 * weight — and the site's copy does not use it. If italic content is ever
 * authored, add `style: ["normal", "italic"]` here rather than relying on the
 * browser to slant the upright face.
 */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    /* Subpages read "Manifesto · Restore Europa". The short form, not the full
     * name, because a title tag is truncated in search results and the page's
     * own subject deserves the room. */
    template: `%s · ${site.short}`,
  },
  description: site.description,
  applicationName: site.formal,
  alternates: { canonical: "/" },
  keywords: [
    "Restore Europa Movement",
    "Restore Europa",
    "European politics",
    "subsidiarity",
    "distributism",
    "Christian democracy",
    "stewardship",
    "human-scale technology",
  ],
  openGraph: {
    type: "website",
    siteName: site.formal,
    locale: site.locale,
    url: site.url,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
  colorScheme: "dark",
};

/**
 * The document shell only.
 *
 * The public navigation and footer live in `app/(site)/layout.tsx` rather than
 * here, so the administrative surface under `/admin` can present its own chrome
 * without the movement's own nav and footer wrapped around an editing tool. The
 * `(site)` group adds no path segment, so every public URL is unchanged.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sourceSerif.variable}`}
    >
      <head>
        {/* Reveal-on-scroll starts hidden. Without scripting, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
