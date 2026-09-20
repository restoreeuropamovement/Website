import { manifestoMeta, manifestoSections } from "@/content/manifesto";
import { stripInline } from "@/lib/inline";
import { site } from "@/lib/site";

/**
 * Serves the manifesto as plain text, generated from the same content module
 * the page renders. There is no separate document to keep in sync, and nothing
 * here is fetched from a backend.
 */
function renderPlainText(): string {
  const rule = "—".repeat(64);
  const lines: string[] = [
    manifestoMeta.title.toUpperCase(),
    manifestoMeta.subtitle,
    "",
    site.formal,
    manifestoMeta.status,
    "",
    rule,
    "",
  ];

  for (const section of manifestoSections) {
    lines.push(
      section.numeral === "—" ? section.title.toUpperCase() : `${section.numeral}. ${section.title.toUpperCase()}`,
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

  lines.push(site.closing, "");
  return lines.join("\n");
}

export function GET() {
  return new Response(renderPlainText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="restore-europe-manifesto.txt"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
