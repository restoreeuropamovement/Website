import type { Citation, ContentBlock, Footnote } from "@/lib/content-types";

/**
 * A line-based authoring syntax for `ContentBlock[]`.
 *
 * The content model is a discriminated union of eleven block types. Editing that
 * as raw JSON in a textarea is miserable and invites a malformed body that
 * breaks the renderer, so essays are written in this notation instead and
 * converted on save.
 *
 * `parseBody` and `serializeBody` round-trip every block type the model defines,
 * which is what lets an essay be loaded into the editor and saved again without
 * drift — including the six seeded from `content/journal/articles.ts`, which
 * were never written in this notation at all.
 *
 * One normalisation: a list's `marker` always comes back explicit. The model
 * allows it to be omitted to mean `bullet`, and the notation cannot distinguish
 * "omitted" from "explicitly bullet". Both render identically, so the difference
 * is invisible to a reader — but it does mean a save rewrites that one field.
 *
 * Blocks are separated by blank lines. Inline `**bold**`, `*italic*` and `[^1]`
 * footnote markers are untouched here; `lib/inline.tsx` handles them at render
 * time.
 *
 *   ::  lead paragraph        ##  subheading       !!  statement
 *   ""  pull quote            ~~  aside/note       ---  divider
 *   >>  quotation, optionally `>> text | attribution`
 *   -   bulleted list item    1.  numbered item
 *   |   unadorned list item   =   rule-separated item
 *   ?   definition, `? term | description`
 *   (no prefix)               ordinary paragraph
 */

const PREFIXES = {
  lead: ":: ",
  subheading: "## ",
  statement: "!! ",
  pullquote: '"" ',
  note: "~~ ",
  quote: ">> ",
} as const;

const LIST_MARKERS: readonly { readonly token: string; readonly marker: "bullet" | "numbered" | "none" | "rule" }[] = [
  { token: "- ", marker: "bullet" },
  { token: "1. ", marker: "numbered" },
  { token: "| ", marker: "none" },
  { token: "= ", marker: "rule" },
];

function parseBlock(raw: string): ContentBlock | null {
  const lines = raw.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  if (lines.every((line) => line === "---")) return { type: "divider" };

  // Definitions: every line is `? term | description`.
  if (lines.every((line) => line.startsWith("? "))) {
    const items = lines.map((line) => {
      const [term = "", ...rest] = line.slice(2).split("|");
      return { term: term.trim(), description: rest.join("|").trim() };
    });
    return { type: "definitions", items };
  }

  // Lists: every line carries the same marker token.
  for (const { token, marker } of LIST_MARKERS) {
    if (lines.every((line) => line.startsWith(token))) {
      return {
        type: "list",
        items: lines.map((line) => line.slice(token.length).trim()),
        marker,
      };
    }
  }

  const body = lines.join(" ");

  if (body.startsWith(PREFIXES.quote)) {
    const [text = "", ...rest] = body.slice(PREFIXES.quote.length).split("|");
    const attribution = rest.join("|").trim();
    return attribution
      ? { type: "quote", text: text.trim(), attribution }
      : { type: "quote", text: text.trim() };
  }

  for (const [type, prefix] of [
    ["lead", PREFIXES.lead],
    ["subheading", PREFIXES.subheading],
    ["statement", PREFIXES.statement],
    ["pullquote", PREFIXES.pullquote],
    ["note", PREFIXES.note],
  ] as const) {
    if (body.startsWith(prefix)) {
      return { type, text: body.slice(prefix.length).trim() } as ContentBlock;
    }
  }

  return { type: "paragraph", text: body };
}

export function parseBody(source: string): ContentBlock[] {
  return source
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map(parseBlock)
    .filter((block): block is ContentBlock => block !== null);
}

export function serializeBody(blocks: readonly ContentBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "divider":
          return "---";
        case "lead":
          return `${PREFIXES.lead}${block.text}`;
        case "subheading":
          return `${PREFIXES.subheading}${block.text}`;
        case "statement":
          return `${PREFIXES.statement}${block.text}`;
        case "pullquote":
          return `${PREFIXES.pullquote}${block.text}`;
        case "note":
          return `${PREFIXES.note}${block.text}`;
        case "quote":
          return `${PREFIXES.quote}${block.text}${
            block.attribution ? ` | ${block.attribution}` : ""
          }`;
        case "list": {
          const token =
            LIST_MARKERS.find((entry) => entry.marker === (block.marker ?? "bullet"))?.token ?? "- ";
          return block.items.map((item) => `${token}${item}`).join("\n");
        }
        case "definitions":
          return block.items.map((item) => `? ${item.term} | ${item.description}`).join("\n");
        case "paragraph":
          return block.text;
      }
    })
    .join("\n\n");
}

/** Footnotes, one per line: `1 | text`. */
export function parseFootnotes(source: string): Footnote[] {
  return source
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const [id = "", ...rest] = line.split("|");
      const parsed = Number.parseInt(id.trim(), 10);
      return {
        id: Number.isFinite(parsed) ? parsed : index + 1,
        text: rest.join("|").trim() || id.trim(),
      };
    });
}

export function serializeFootnotes(footnotes: readonly Footnote[] = []): string {
  return footnotes.map((footnote) => `${footnote.id} | ${footnote.text}`).join("\n");
}

/** Citations, one per line: `label | detail`. */
export function parseCitations(source: string): Citation[] {
  return source
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label = "", ...rest] = line.split("|");
      return { label: label.trim(), detail: rest.join("|").trim() };
    });
}

export function serializeCitations(citations: readonly Citation[] = []): string {
  return citations.map((citation) => `${citation.label} | ${citation.detail}`).join("\n");
}
