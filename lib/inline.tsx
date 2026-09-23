import Link from "next/link";
import type { ReactNode } from "react";

import { DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n";
import { routes, type RouteId } from "@/lib/site";

/**
 * A deliberately tiny inline formatter for authored content.
 *
 * Supported markers:
 *   **strong**            emphasis of the heavier kind
 *   *emphasis*            italic
 *   [^1]                  footnote reference, links to #fn-1
 *   [label][route-id]     link by route id, resolved against lib/site.ts
 *   [label](/path)        link by literal path; English-authored content only
 *
 * Anything else is passed through as text, so authored copy stays readable in
 * the content files.
 *
 * **Reference links are the form translations use.** A translated file carries
 * a label and a route id — `[Manifest][manifesto]` — and never a URL, for the
 * same reason no other structural value appears in one: a path is not a word,
 * it can rot, and five copies of it rot independently. An unknown id throws
 * rather than rendering as plain text, so a mistyped reference fails the build
 * instead of quietly becoming a dead phrase on one language's page.
 *
 * Internal links of both forms are rewritten for the current locale, so a
 * reader who arrived in Italian is still in Italian after following one.
 */
const PATTERN =
  /\*\*([^*]+)\*\*|(?<!\w)\*([^*\n]+)\*(?!\w)|\[\^(\d+)\]|\[([^\]]+)\]\[([a-z][a-z0-9-]*)\]|\[([^\]]+)\]\(([^)\s]+)\)/g;

function isRouteId(value: string): value is RouteId {
  return Object.hasOwn(routes, value);
}

export function renderInline(text: string, locale: Locale = DEFAULT_LOCALE): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(PATTERN)) {
    const index = match.index;
    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    const [raw, strong, emphasis, footnote, refLabel, refId, pathLabel, pathHref] = match;

    /*
     * A reference resolves to a path and then falls through to the same
     * rendering as a literal one, so both forms behave identically.
     */
    let linkLabel = pathLabel;
    let linkHref = pathHref;

    if (refLabel !== undefined && refId !== undefined) {
      if (!isRouteId(refId)) {
        throw new Error(
          `Unknown route id "${refId}" in inline link [${refLabel}][${refId}]. ` +
            `Reference links resolve against \`routes\` in lib/site.ts.`,
        );
      }
      linkLabel = refLabel;
      linkHref = routes[refId];
    }

    if (strong !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {strong}
        </strong>,
      );
    } else if (emphasis !== undefined) {
      nodes.push(<em key={key++}>{emphasis}</em>);
    } else if (footnote !== undefined) {
      nodes.push(
        <sup key={key++} id={`fnref-${footnote}`} className="ml-px">
          <a
            href={`#fn-${footnote}`}
            className="px-px font-sans text-[0.68em] font-medium text-burgundy no-underline transition-colors hover:text-burgundy-deep"
            aria-label={`Go to footnote ${footnote}`}
          >
            {footnote}
          </a>
        </sup>,
      );
    } else if (linkLabel !== undefined && linkHref !== undefined) {
      // A bare fragment stays as it is: it points within the page already open,
      // which is the right page in every language.
      const isInternal = linkHref.startsWith("/");
      const href = isInternal ? localePath(locale, linkHref) : linkHref;
      const className =
        "underline decoration-rule decoration-1 underline-offset-[0.22em] transition-colors hover:decoration-burgundy hover:text-burgundy";
      nodes.push(
        isInternal || href.startsWith("#") ? (
          <Link key={key++} href={href} className={className}>
            {linkLabel}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className={className}
            rel="noreferrer noopener"
            target="_blank"
          >
            {linkLabel}
          </a>
        )
      );
    }

    cursor = index + raw.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes.length === 1 ? nodes[0] : nodes;
}

/** Strip inline markers — for metadata descriptions and plain-text contexts. */
export function stripInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(?<!\w)\*([^*\n]+)\*(?!\w)/g, "$1")
    .replace(/\[\^\d+\]/g, "")
    .replace(/\[([^\]]+)\]\[[a-z][a-z0-9-]*\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}
