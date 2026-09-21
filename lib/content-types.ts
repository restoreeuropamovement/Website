/**
 * The content model.
 *
 * Long-form political text is authored in `content/` as typed data and rendered
 * by `components/content/ContentBlocks.tsx`. Presentation components never
 * contain prose.
 *
 * Inline markup supported inside any `text` field (see `lib/inline.tsx`):
 *   **bold**   *emphasis*   [^1] footnote reference
 */

export type ContentBlock =
  /** Opening paragraph, set slightly larger. */
  | { readonly type: "lead"; readonly text: string }
  /** Ordinary body paragraph. */
  | { readonly type: "paragraph"; readonly text: string }
  /** Sub-heading inside a longer section. */
  | { readonly type: "subheading"; readonly text: string }
  /**
   * A short declarative line set large in the serif face. Used for the
   * axiomatic sentences that carry the argument.
   */
  | { readonly type: "statement"; readonly text: string }
  /** A quotation with optional attribution. */
  | { readonly type: "quote"; readonly text: string; readonly attribution?: string }
  /** A pull quote lifted out of the column on wide screens. */
  | { readonly type: "pullquote"; readonly text: string }
  /** A list. `marker: "none"` renders an unadorned stack of lines. */
  | {
      readonly type: "list";
      readonly items: readonly string[];
      readonly marker?: "bullet" | "rule" | "none" | "numbered";
    }
  /** Term / definition pairs. */
  | {
      readonly type: "definitions";
      readonly items: readonly { readonly term: string; readonly description: string }[];
    }
  /** An aside set on a tinted ground. */
  | { readonly type: "note"; readonly text: string }
  /** A horizontal break between movements of an argument. */
  | { readonly type: "divider" };

export interface Footnote {
  readonly id: number;
  readonly text: string;
}

export interface Citation {
  readonly label: string;
  readonly detail: string;
}

/** Artwork slot. Every image on the site is described by one of these. */
export interface ImageSlot {
  /** Path under /public. All artwork is local; nothing is hotlinked. */
  readonly src: string;
  /** Meaningful alternative text. Required — never decorative-by-accident. */
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  /** Shown beneath the figure where a caption is appropriate. */
  readonly caption?: string;
}

export interface Principle {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  /** The principle in a single line. */
  readonly statement: string;
  /** One clause for navigation and listings. */
  readonly summary: string;
  readonly body: readonly ContentBlock[];
  /** Manifesto section this principle draws on, by id. */
  readonly manifesto?: string;
  /** Used sparingly — most principles carry no image. */
  readonly image?: ImageSlot;
}

export interface ManifestoSectionData {
  readonly id: string;
  /** Roman numeral as it appears in the document. */
  readonly numeral: string;
  readonly title: string;
  /** One line shown in the navigation and beneath the heading. */
  readonly summary: string;
  readonly body: readonly ContentBlock[];
}

/** The divisions of the policy catalogue, in document order. */
export type PolicyCategoryId =
  | "constitutional"
  | "family"
  | "nation"
  | "economy"
  | "technology"
  | "education"
  | "government"
  | "healthcare"
  | "environment"
  | "foreign-policy";

export interface PolicyCategoryData {
  readonly id: PolicyCategoryId;
  /** Roman numeral as it appears in the catalogue. */
  readonly numeral: string;
  readonly title: string;
  /** One line shown beneath the heading and in the index. */
  readonly summary: string;
}

/**
 * How settled a position is. The catalogue is explicit about this so a reader
 * can tell an adopted position from one the movement has not yet decided.
 */
export type PolicyStatus = "Manifesto Core" | "Agreed Policy" | "Derived" | "Open";

export interface PolicyEntry {
  readonly slug: string;
  readonly title: string;
  readonly category: PolicyCategoryId;
  readonly status: PolicyStatus;
  /** A few entries sit between two statuses in the source catalogue. */
  readonly secondaryStatus?: PolicyStatus;
  /** One or two sentences. Shown in listings and search results. */
  readonly shortAnswer: string;
  /** The position itself, as paragraphs. */
  readonly position: readonly string[];
  /** The specific commitments that follow from the position. */
  readonly policies?: readonly string[];
  /** The position compressed to a single line. */
  readonly principle?: string;
  /** What the position deliberately does not claim, or has not yet settled. */
  readonly limits?: readonly string[];
  /** Where the position stands in relation to existing law. */
  readonly implementationNote?: string;
  /** Manifesto sections this rests on, by `ManifestoSectionData.id`. */
  readonly manifestoBasis?: readonly string[];
  /** Other catalogue entries, by slug. */
  readonly related?: readonly string[];
  /** Additional search terms beyond the title and position text. */
  readonly keywords: readonly string[];
  /** ISO date, e.g. "2026-09-15". */
  readonly lastUpdated: string;
}

export type JournalCategory =
  | "Civilization"
  | "Economics"
  | "Technology"
  | "Environment"
  | "Architecture"
  | "Europe"
  | "Demography"
  | "Culture"
  | "Foreign Policy";

export interface JournalArticle {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly standfirst: string;
  readonly category: JournalCategory;
  /** ISO date, e.g. "2026-03-14". */
  readonly date: string;
  readonly author: string;
  readonly readingMinutes: number;
  readonly hero: ImageSlot;
  readonly featured?: boolean;
  readonly body: readonly ContentBlock[];
  readonly footnotes?: readonly Footnote[];
  readonly citations?: readonly Citation[];
  readonly related?: readonly string[];
}
