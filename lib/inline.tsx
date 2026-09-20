import Link from "next/link";
import type { ReactNode } from "react";

/**
 * A deliberately tiny inline formatter for authored content.
 *
 * Supported markers:
 *   **strong**            emphasis of the heavier kind
 *   *emphasis*            italic
 *   [^1]                  footnote reference, links to #fn-1
 *   [label](/path)        link; internal paths use the client router
 *
 * Anything else is passed through as text, so authored copy stays readable in
 * the content files.
 */
const PATTERN =
  /\*\*([^*]+)\*\*|(?<!\w)\*([^*\n]+)\*(?!\w)|\[\^(\d+)\]|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(PATTERN)) {
    const index = match.index;
    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    const [raw, strong, emphasis, footnote, linkLabel, linkHref] = match;

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
      const isInternal = linkHref.startsWith("/") || linkHref.startsWith("#");
      const className =
        "underline decoration-rule decoration-1 underline-offset-[0.22em] transition-colors hover:decoration-burgundy hover:text-burgundy";
      nodes.push(
        isInternal ? (
          <Link key={key++} href={linkHref} className={className}>
            {linkLabel}
          </Link>
        ) : (
          <a
            key={key++}
            href={linkHref}
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
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1");
}
