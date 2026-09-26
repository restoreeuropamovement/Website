import type { ReactNode } from "react";
import { getChrome } from "@/content/chrome";
import type { Locale } from "@/lib/i18n";
import { socials, type SocialId } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Where to find the movement away from its own site.
 *
 * Reads the heading from the dictionary itself rather than taking it as a
 * prop, because the three places it appears — the footer, the contact page and
 * the homepage — do not all have the chrome in hand, and threading it through
 * two content domains to deliver one word is not worth the coupling.
 *
 * Renders nothing at all when there are no accounts, so removing the last
 * entry from `socials` takes the heading with it instead of leaving a titled
 * empty list.
 */
export async function SocialLinks({
  locale,
  tone = "default",
  showHeading = true,
  className,
}: {
  readonly locale: Locale;
  /** `inverse` for the ink slabs, where the footer sets it. */
  readonly tone?: "default" | "inverse";
  /**
   * Off where a neighbouring sentence already supplies the context. The
   * homepage sets it beside the line about there being no newsletter, and a
   * second "Follow" heading one screen above the footer's reads as a mistake.
   */
  readonly showHeading?: boolean;
  readonly className?: string;
}) {
  if (socials.length === 0) return null;

  const { social } = await getChrome(locale);
  const inverse = tone === "inverse";

  /* A plain `div`, not the `nav` the footer's other groups use. Those are site
     navigation; this is one outbound link, and making it a landmark would put
     two identically named "Follow" regions on the contact page and the
     homepage, which both carry it above their own footer. */
  return (
    <div className={className}>
      {showHeading ? (
        <h2 className={cn("eyebrow mb-4", inverse ? "text-canvas/58" : "text-muted")}>
          {social.title}
        </h2>
      ) : null}
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {socials.map((account) => (
          <li key={account.id}>
            <a
              href={account.href}
              target="_blank"
              /* `me` states that the profile is ours; the other two stop the
                 opened tab from reaching back into this one. */
              rel="me noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2.5 text-[0.9375rem] transition-colors",
                inverse
                  ? "text-canvas/72 hover:text-gold-soft"
                  : "text-body hover:text-burgundy",
              )}
            >
              {glyphs[account.id]}
              <span>{account.handle}</span>
              {/* The handle alone does not say which platform it is on, and a
                  glyph is not read aloud. Written as one expression so the
                  leading space survives: JSX would strip it before a newline,
                  and the accessible name would read "@restoreeuropa.eu—". */}
              <span className="sr-only">{` — ${account.label}, ${social.newTab}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Line art rather than the platforms' filled brand marks: a wall of corporate
 * logos in a serif footer reads as advertising, and the outlines sit with the
 * hairline rules the rest of the site is drawn with.
 *
 * Keyed by `SocialId`, so a new platform will not compile until it has one.
 */
const glyphs: Record<SocialId, ReactNode> = {
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="h-[1.125rem] w-[1.125rem] shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  ),
};
