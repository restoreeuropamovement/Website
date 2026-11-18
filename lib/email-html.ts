/**
 * Plain text, as an operator types it into a textarea, turned into an HTML
 * email that reads properly in Gmail and Outlook.
 *
 * Mail clients show a plain-text message in a proportional font but keep every
 * line break, so text wrapped by hand at seventy columns arrives as ragged
 * short lines, and anything lined up with spaces stops lining up. This reads
 * the same text the way a person would — a blank line ends a paragraph, a line
 * in capitals is a heading, `1.` and `-` start list items, two columns
 * separated by a run of spaces are a label and its value — and writes that
 * structure out instead of the line breaks.
 *
 * The HTML is self-contained on purpose (see `lib/email.ts`): inline styles
 * only, no images, no web fonts, nothing fetched from anywhere, so opening the
 * message tells nobody that it was opened. The plain text still goes with it
 * for clients that prefer it.
 */

type Block =
  | { readonly kind: "heading"; readonly text: string }
  | { readonly kind: "paragraph"; readonly text: string }
  | { readonly kind: "rows"; readonly rows: readonly (readonly [string, string])[] }
  | { readonly kind: "list"; readonly ordered: boolean; readonly items: readonly string[] };

const LIST_ITEM = /^(\d+[.)]|[-*•])\s+(.*)$/;
/** A label of up to thirty characters, a run of two or more spaces, and its value. */
const ROW = /^(\S.{0,29}?)\s{2,}(\S.*)$/;

function isHeading(line: string): boolean {
  const letters = line.replace(/[^\p{L}]/gu, "");
  return letters.length >= 3 && line.length <= 90 && line === line.toLocaleUpperCase("en") && /\p{Lu}/u.test(line);
}

/** Strips the indentation the whole block shares, keeping any deeper indent as a continuation mark. */
function dedent(lines: readonly string[]): string[] {
  const indent = Math.min(...lines.map((line) => line.match(/^\s*/)![0].length));
  return lines.map((line) => line.slice(indent).trimEnd());
}

const isContinuation = (line: string) => /^\s/.test(line);

function parseBlock(raw: readonly string[]): Block[] {
  const lines = dedent(raw);
  const first = lines[0]!;

  if (isHeading(first)) {
    const rest = lines.slice(1);
    return [{ kind: "heading", text: first }, ...(rest.length > 0 ? parseBlock(rest) : [])];
  }

  const starts = lines.filter((line) => !isContinuation(line));

  if (starts.every((line) => LIST_ITEM.test(line))) {
    const items: string[] = [];
    for (const line of lines) {
      const match = LIST_ITEM.exec(line);
      if (match && !isContinuation(line)) items.push(match[2]!);
      else items[items.length - 1] += ` ${line.trim()}`;
    }
    return [{ kind: "list", ordered: /^\d/.test(starts[0]!), items }];
  }

  if (starts.every((line) => ROW.test(line))) {
    const rows: [string, string][] = [];
    for (const line of lines) {
      const match = ROW.exec(line);
      if (match && !isContinuation(line)) rows.push([match[1]!, match[2]!]);
      else rows[rows.length - 1]![1] += ` ${line.trim()}`;
    }
    return [{ kind: "rows", rows }];
  }

  return [{ kind: "paragraph", text: lines.map((line) => line.trim()).join(" ") }];
}

/** The text split at blank lines, each part read as one block. */
export function parsePlainText(text: string): Block[] {
  return text
    .replace(/\r\n?/g, "\n")
    .split(/\n\s*\n/)
    .map((part) => part.split("\n").filter((line) => line.trim().length > 0))
    .filter((part) => part.length > 0)
    .flatMap(parseBlock);
}

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * A full URL, or a bare domain on a handful of common endings. Not after `@`
 * (an email address), `:` or `#` (a chat room address such as
 * `#room:matrix.org`, which is not a web page).
 */
const LINK =
  /https?:\/\/[^\s<>"]+|(?<![@:#\w./-])(?:[a-z0-9-]+\.)+(?:eu|io|org|com|net|at|de|fr|it|es|pl|ch|uk)(?:\/[^\s<>"]*)?(?![\w@])/gi;

const COLOR = { ink: "#1f1d1a", muted: "#6f6a62", accent: "#8f2f3a", rule: "#e4ded2", page: "#f4f1ea" } as const;

function inline(text: string): string {
  let out = "";
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    let url = match[0];
    const trailing = /[.,;:!?)\]'’]+$/.exec(url)?.[0] ?? "";
    url = url.slice(0, url.length - trailing.length);
    const start = match.index!;
    out += escape(text.slice(last, start));
    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    out += `<a href="${escape(href)}" style="color:${COLOR.accent};text-decoration:underline;word-break:break-word;">${escape(url)}</a>`;
    last = start + url.length;
  }
  return out + escape(text.slice(last));
}

function renderBlock(block: Block): string {
  switch (block.kind) {
    case "heading":
      return `<h2 style="margin:32px 0 10px;font-size:13px;line-height:1.4;letter-spacing:0.08em;font-weight:700;color:${COLOR.accent};">${inline(block.text)}</h2>`;
    case "paragraph":
      return `<p style="margin:0 0 16px;">${inline(block.text)}</p>`;
    case "list": {
      const tag = block.ordered ? "ol" : "ul";
      const items = block.items.map((item) => `<li style="margin:0 0 8px;">${inline(item)}</li>`).join("");
      return `<${tag} style="margin:0 0 16px;padding-left:22px;">${items}</${tag}>`;
    }
    case "rows": {
      const rows = block.rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 16px 4px 0;vertical-align:top;font-weight:600;white-space:nowrap;">${inline(label)}</td><td style="padding:4px 0;vertical-align:top;">${inline(value)}</td></tr>`,
        )
        .join("");
      return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;border-collapse:collapse;font-size:16px;line-height:1.55;color:${COLOR.ink};">${rows}</table>`;
    }
  }
}

export interface HtmlEmail {
  readonly subject: string;
  /** What the operator typed. */
  readonly body: string;
  /** Under the body: the sender's name and the site's address. */
  readonly signature: { readonly name: string; readonly url: string };
  /** Small print below a rule, one paragraph each. */
  readonly footer: readonly string[];
}

export function renderHtmlEmail(email: HtmlEmail): string {
  const body = parsePlainText(email.body).map(renderBlock).join("\n");
  const footer = email.footer
    .map((part) => `<p style="margin:0 0 10px;">${inline(part.replace(/\s*\n\s*/g, " "))}</p>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escape(email.subject)}</title>
</head>
<body style="margin:0;padding:0;background:${COLOR.page};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLOR.page};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid ${COLOR.rule};">
<tr><td style="padding:36px 36px 28px;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:${COLOR.ink};">
${body}
<p style="margin:28px 0 0;">${escape(email.signature.name)}<br>${inline(email.signature.url)}</p>
</td></tr>
<tr><td style="padding:20px 36px 28px;border-top:1px solid ${COLOR.rule};font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;color:${COLOR.muted};">
${footer}
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
