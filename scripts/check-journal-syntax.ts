/**
 * Guards the round-trip property of the journal authoring notation.
 *
 * `lib/admin/journal-syntax.ts` converts between `ContentBlock[]` and the
 * line-based notation the admin editor exposes. Both directions run on every
 * save, so a gap between them does not throw — it silently rewrites an essay.
 * Adding a block type to `ContentBlock` without teaching both the parser and the
 * serialiser about it would drop that block the next time the essay is saved.
 *
 * This asserts the property over a synthetic essay exercising every block type
 * the union defines, and over the real bundled essays, which were written by
 * hand as data and never in this notation.
 *
 * Run by `npm run check`.
 */
import { articles } from "../content/journal/articles";
import {
  parseBody,
  parseCitations,
  parseFootnotes,
  serializeBody,
  serializeCitations,
  serializeFootnotes,
} from "../lib/admin/journal-syntax";
import type { ContentBlock } from "../lib/content-types";

const everyBlockType: ContentBlock[] = [
  { type: "lead", text: "A **lead** paragraph with a footnote.[^1]" },
  { type: "paragraph", text: "An ordinary paragraph." },
  { type: "subheading", text: "A sub-heading" },
  { type: "statement", text: "A declarative statement." },
  { type: "quote", text: "Quoted with attribution.", attribution: "Some Source" },
  { type: "quote", text: "Quoted without attribution." },
  { type: "pullquote", text: "A pull quote." },
  { type: "note", text: "An aside on a tinted ground." },
  { type: "list", items: ["one", "two"], marker: "bullet" },
  { type: "list", items: ["first", "second"], marker: "numbered" },
  { type: "list", items: ["plain a", "plain b"], marker: "none" },
  { type: "list", items: ["ruled a", "ruled b"], marker: "rule" },
  {
    type: "definitions",
    items: [
      { term: "Subsidiarity", description: "Decisions at the lowest competent level." },
      { term: "Distributism", description: "Wide ownership of productive property." },
    ],
  },
  { type: "divider" },
];

/**
 * Key order is not meaningful in the data model but is to `JSON.stringify`, and
 * a list's absent `marker` means the `bullet` the renderer already applies. Both
 * are normalised so the comparison reflects what a reader would see.
 */
function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const filled =
      record.type === "list" ? { ...record, marker: record.marker ?? "bullet" } : record;
    return Object.fromEntries(
      Object.keys(filled)
        .sort()
        .map((key) => [key, canonical(filled[key])]),
    );
  }
  return value;
}

let failures = 0;

function check(label: string, original: unknown, roundTripped: unknown): void {
  const before = JSON.stringify(canonical(original));
  const after = JSON.stringify(canonical(roundTripped));
  if (before === after) return;

  failures += 1;
  console.error(`  FAIL  ${label}`);
  console.error(`        before: ${before}`);
  console.error(`        after:  ${after}`);
}

check("every block type", everyBlockType, parseBody(serializeBody(everyBlockType)));

for (const { slug, body, footnotes, citations } of articles) {
  check(`${slug} body`, body, parseBody(serializeBody(body)));
  if (footnotes?.length) {
    check(`${slug} footnotes`, footnotes, parseFootnotes(serializeFootnotes(footnotes)));
  }
  if (citations?.length) {
    check(`${slug} citations`, citations, parseCitations(serializeCitations(citations)));
  }
}

if (failures > 0) {
  console.error(
    `\nJournal notation is not lossless: ${failures} ${failures === 1 ? "case" : "cases"} changed.`,
  );
  console.error("Saving an affected essay through /admin/journal would rewrite it.");
  process.exit(1);
}

console.log(`Journal notation round-trips ${articles.length + 1} essays losslessly.`);
