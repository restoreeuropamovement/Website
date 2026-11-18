/**
 * Guards the layout of notices to the membership.
 *
 * `lib/email-html.ts` decides what a typed line means — heading, list item,
 * label and value, paragraph — and a wrong guess sends a garbled letter to
 * every member with no way to recall it. Runs in `npm run check`.
 */
import { parsePlainText, renderHtmlEmail } from "../lib/email-html";

let failures = 0;

function check(label: string, condition: boolean, detail = ""): void {
  if (condition) return;
  failures += 1;
  console.error(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
}

const kinds = (text: string) => parsePlainText(text).map((block) => block.kind).join(",");

check(
  "hand-wrapped lines become one paragraph",
  JSON.stringify(parsePlainText("We have set up a chat. It takes about\nfive minutes to join.")) ===
    JSON.stringify([{ kind: "paragraph", text: "We have set up a chat. It takes about five minutes to join." }]),
);
check("a numbered line in capitals is a heading", kinds("1. GET THE APP") === "heading");
check("a heading directly followed by text splits", kinds("WHAT TO EXPECT\nIt is quiet.") === "heading,paragraph");
check("dash items are a list", kinds("- one\n- two") === "list");
check("numbered items in sentence case are a list", kinds("1. Install it\n2. Join") === "list");
check(
  "aligned columns are label and value",
  kinds("   iPhone / Android:  install the app.\n   Computer:          go to app.element.io") === "rows",
);
check("a paragraph is not mistaken for a heading", kinds("Do not set a profile photo of yourself.") === "paragraph");

const html = renderHtmlEmail({
  subject: "A <test>",
  body: "Go to app.element.io or https://matrix.to/#/%23room%3Amatrix.org.\n\nSearch #room:matrix.org, or write to a@b.eu.",
  signature: { name: "Restore Europa Movement", url: "https://restoreeuropa.eu" },
  footer: ["Stop: https://restoreeuropa.eu/notices/stop?t=x"],
});
check("a bare domain becomes a link", html.includes('href="https://app.element.io"'));
check("a full URL becomes a link without its full stop", html.includes('href="https://matrix.to/#/%23room%3Amatrix.org"'));
check("a chat room address is not a web link", !html.includes('href="https://matrix.org"'));
check("an email address is not turned into a web link", !html.includes('href="https://b.eu"'));
check("text is escaped", html.includes("A &lt;test&gt;") && !html.includes("<test>"));
check("nothing is loaded from elsewhere", !/<img|<link|@import|url\(|<script/i.test(html));

if (failures > 0) {
  console.error(`\nEmail layout: ${failures} check${failures === 1 ? "" : "s"} failed.`);
  process.exit(1);
}
console.log("Email layout: paragraphs, headings, lists, columns and links read as intended.");
