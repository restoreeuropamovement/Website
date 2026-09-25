import type { ManifestoEdition } from "@/content/manifesto";
import { stripInline } from "@/lib/inline";
import { site } from "@/lib/site";

/**
 * The manifesto as plain text, generated from the edition being read.
 *
 * One renderer for all six languages. It was written against the English
 * module directly, which meant the download button on `/de/manifesto` handed
 * over the English document — a reader who had just read the whole thing in
 * German got a file they could not read, from a button that said nothing about
 * it.
 *
 * Plain text rather than PDF on purpose: it opens everywhere, it can be
 * quoted, and it carries no fonts, no scripts and nothing that phones home.
 */
export function renderManifestoText(edition: ManifestoEdition, closing: string): string {
  const rule = "—".repeat(64);
  const lines: string[] = [
    edition.title.toUpperCase(),
    edition.subtitle,
    "",
    /* The movement's name, which is not translated in any language. */
    site.formal,
    edition.status,
    "",
    rule,
    "",
  ];

  for (const section of edition.sections) {
    lines.push(
      section.numeral === "—"
        ? section.title.toUpperCase()
        : `${section.numeral}. ${section.title.toUpperCase()}`,
    );
    lines.push(section.summary, "");

    for (const block of section.body) {
      switch (block.type) {
        case "lead":
        case "paragraph":
        case "statement":
        case "note":
          lines.push(stripInline(block.text), "");
          break;
        case "subheading":
          lines.push(stripInline(block.text).toUpperCase(), "");
          break;
        case "quote":
        case "pullquote":
          lines.push(`"${stripInline(block.text)}"`, "");
          break;
        case "list":
          for (const item of block.items) lines.push(`  - ${stripInline(item)}`);
          lines.push("");
          break;
        case "definitions":
          for (const item of block.items) {
            lines.push(`  ${stripInline(item.term)}: ${stripInline(item.description)}`);
          }
          lines.push("");
          break;
        case "divider":
          lines.push("", "");
          break;
      }
    }

    lines.push(rule, "");
  }

  lines.push(edition.labels.reference, "", closing, "");
  return lines.join("\n");
}

/**
 * What the file is called once it is on somebody's disk.
 *
 * The language is in the name because these are six different documents and a
 * reader may well keep more than one; six files called
 * `restore-europa-manifesto.txt` would overwrite each other or arrive as
 * `(1)`, `(2)` with nothing to tell them apart.
 */
export function manifestoFileName(edition: ManifestoEdition): string {
  return `restore-europa-manifesto-${edition.locale}.txt`;
}

/** Headers shared by both download routes. */
export function manifestoDownloadHeaders(edition: ManifestoEdition): HeadersInit {
  return {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Disposition": `attachment; filename="${manifestoFileName(edition)}"`,
    "Cache-Control": "public, max-age=3600",
  };
}
