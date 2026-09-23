import { Fragment, type ReactNode } from "react";
import type { ContentBlock } from "@/lib/content-types";
import { renderInline } from "@/lib/inline";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type ContentTone = "default" | "inverse";

interface ContentBlocksProps {
  readonly blocks: readonly ContentBlock[];
  readonly tone?: ContentTone;
  readonly className?: string;
  /**
   * Level for `subheading` blocks. Default 3, because content usually sits
   * beneath a section `h2`; journal essays place it directly under the `h1` and
   * pass 2 so the document outline stays unbroken.
   */
  readonly headingLevel?: 2 | 3;
  /**
   * Which language's routes the links inside this content should point at.
   *
   * Defaults to English so the unprefixed pages need not pass it. A localised
   * page passes its own locale, and every internal link in the prose is
   * rewritten to match — without it a German reader following a link inside a
   * paragraph lands back on the English site.
   */
  readonly locale?: Locale;
}

type Inline = (text: string) => ReactNode;

/**
 * Renders authored content. All long-form text on the site passes through here,
 * which keeps typography consistent and keeps prose out of page components.
 */
export function ContentBlocks({
  blocks,
  tone = "default",
  className,
  headingLevel = 3,
  locale = DEFAULT_LOCALE,
}: ContentBlocksProps) {
  const inline: Inline = (text) => renderInline(text, locale);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {blocks.map((block, index) => (
        <Fragment key={index}>{renderBlock(block, tone, headingLevel, inline)}</Fragment>
      ))}
    </div>
  );
}

function renderBlock(
  block: ContentBlock,
  tone: ContentTone,
  headingLevel: 2 | 3,
  inline: Inline,
) {
  const inverse = tone === "inverse";
  const bodyColour = inverse ? "text-canvas/78" : "text-body/92";

  switch (block.type) {
    case "lead":
      return (
        <p className={cn("text-lede", inverse ? "text-canvas/85" : "text-body")}>
          {inline(block.text)}
        </p>
      );

    case "paragraph":
      return <p className={cn("text-reading", bodyColour)}>{inline(block.text)}</p>;

    case "subheading": {
      const Heading = headingLevel === 2 ? "h2" : "h3";
      return (
        <Heading
          className={cn(
            "mt-6 font-serif text-display-4 font-normal",
            inverse ? "text-canvas" : "text-ink",
          )}
        >
          {inline(block.text)}
        </Heading>
      );
    }

    case "statement":
      return (
        <p
          className={cn(
            "my-2 border-l-2 py-1 pl-6 font-serif text-display-4 leading-[1.3] text-balance sm:text-display-3",
            inverse ? "border-gold-soft/45 text-canvas" : "border-gold/65 text-ink",
          )}
        >
          {inline(block.text)}
        </p>
      );

    case "quote":
      return (
        <figure className={cn("my-4 border-l pl-5", inverse ? "border-rule-inverse" : "border-rule")}>
          <blockquote
            className={cn(
              "font-serif text-display-4 leading-[1.4]",
              inverse ? "text-canvas/90" : "text-ink",
            )}
          >
            {inline(block.text)}
          </blockquote>
          {block.attribution ? (
            <figcaption className={cn("eyebrow mt-4", inverse ? "text-canvas/58" : "text-muted")}>
              {block.attribution}
            </figcaption>
          ) : null}
        </figure>
      );

    case "pullquote":
      return (
        <aside
          className={cn(
            "my-6 border-y py-8 xl:-mx-16",
            inverse ? "border-rule-inverse" : "border-rule",
          )}
        >
          <p
            className={cn(
              "font-serif text-display-3 leading-[1.14] text-balance",
              inverse ? "text-canvas" : "text-ink",
            )}
          >
            {inline(block.text)}
          </p>
        </aside>
      );

    case "list": {
      const marker = block.marker ?? "bullet";

      if (marker === "numbered") {
        return (
          <ol className={cn("flex list-none flex-col gap-3 text-reading", bodyColour)}>
            {block.items.map((item, index) => (
              <li key={index} className="grid grid-cols-[2.25rem_1fr] items-baseline">
                <span
                  className={cn(
                    "numerals-tabular font-sans text-micro font-medium",
                    inverse ? "text-gold-soft" : "text-burgundy",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{inline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }

      if (marker === "rule") {
        return (
          <ul className={cn("flex flex-col text-reading", bodyColour)}>
            {block.items.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "border-t py-3 first:border-t-0 first:pt-0",
                  inverse ? "border-hairline-inverse" : "border-hairline",
                )}
              >
                {inline(item)}
              </li>
            ))}
          </ul>
        );
      }

      if (marker === "none") {
        return (
          <ul className={cn("flex flex-col gap-2 text-reading", bodyColour)}>
            {block.items.map((item, index) => (
              <li key={index}>{inline(item)}</li>
            ))}
          </ul>
        );
      }

      return (
        <ul className={cn("flex flex-col gap-3 text-reading", bodyColour)}>
          {block.items.map((item, index) => (
            <li key={index} className="grid grid-cols-[1.25rem_1fr] items-baseline">
              <span
                aria-hidden="true"
                className={cn(
                  "inline-block size-1 translate-y-[-0.2em] rotate-45",
                  inverse ? "bg-gold-soft/80" : "bg-gold",
                )}
              />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );
    }

    case "definitions":
      return (
        <dl className="flex flex-col">
          {block.items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "grid gap-1.5 border-t py-4 sm:grid-cols-[13rem_1fr] sm:gap-8",
                inverse ? "border-hairline-inverse" : "border-hairline",
              )}
            >
              <dt
                className={cn(
                  "font-sans text-[0.9375rem] font-medium",
                  inverse ? "text-canvas" : "text-ink",
                )}
              >
                {inline(item.term)}
              </dt>
              <dd className={cn("text-reading", bodyColour)}>{inline(item.description)}</dd>
            </div>
          ))}
        </dl>
      );

    case "note":
      return (
        <p
          className={cn(
            "border-l-2 py-1 pl-5 text-[0.9375rem] leading-[1.7]",
            inverse ? "border-rule-inverse text-canvas/60" : "border-rule text-muted",
          )}
        >
          {inline(block.text)}
        </p>
      );

    case "divider":
      return (
        <hr
          className={cn("my-6 border-0", inverse ? "rule-faded-inverse" : "rule-faded")}
          aria-hidden="true"
        />
      );
  }
}
