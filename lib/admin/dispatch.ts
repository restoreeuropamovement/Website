import { journalIssue } from "@/content/emails";
import { recipientsForDispatch } from "@/lib/admin/subscribers";
import type { Citation, ContentBlock, Footnote } from "@/lib/content-types";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "@/lib/i18n";
import { stripInline } from "@/lib/inline";
import { getArticle } from "@/lib/journal";
import { routes, SITE_URL } from "@/lib/site";

/**
 * Sending one issue of the journal to the list.
 *
 * This is the only operation in the project that turns the whole subscriber
 * table back into plaintext addresses at once, and the only one that puts the
 * movement's name in several hundred inboxes with a single press. Both facts
 * are reflected in how it is guarded (`requireElevatedSession` — see the
 * action) and in how it is recorded (`newsletter_dispatch`, one row per essay,
 * `article_slug` unique).
 *
 * That unique constraint is the whole point of the table rather than
 * bookkeeping around it. Sending the same essay twice is not an inconvenience:
 * it is the single mistake that costs a movement its subscribers and its
 * standing with the providers that carry its mail, in the same afternoon. A
 * claim is therefore taken *before* anything is read or sent, and the database
 * refuses the second one inside the statement that made it.
 *
 * ## What this does not have
 *
 * There is no resend, no "send to one address to test", and no preview that
 * mails anything. Each of those is a path by which an essay reaches the list
 * without passing the one constraint that stops it going twice, and a test
 * send is in any case a feature whose first use is to discover that the real
 * one goes to everybody.
 *
 * There is also no queue. The loop below runs inside the request's `after()`
 * and is bounded by how long the platform will let a function live, which puts
 * a real ceiling on the size of list this can serve. That ceiling is stated
 * rather than engineered around because the list is currently small and a
 * queue is infrastructure with its own failure modes; the moment a send starts
 * being cut off is the moment to build one, and `failures` in the dispatch row
 * is how that will be noticed.
 */

/**
 * How many messages leave per second.
 *
 * Our choice rather than a figure read off the provider's documentation, and
 * chosen low. A burst that gets a sender rate-limited costs more than the
 * minutes saved, and the thing being protected is not our throughput but this
 * domain's standing with the handful of companies that decide whether any of
 * this arrives at all.
 */
const PER_SECOND = 2;

export interface DispatchRecord {
  readonly slug: string;
  readonly sentAt: Date;
  readonly recipients: number;
  readonly failures: number;
}

/** Every essay that has gone out, most recent first. */
export async function listDispatches(): Promise<readonly DispatchRecord[]> {
  const rows = await db()<
    { article_slug: string; sent_at: Date; recipients: number; failures: number }[]
  >`
    SELECT article_slug, sent_at, recipients, failures
      FROM newsletter_dispatch
     ORDER BY sent_at DESC
  `;

  return rows.map((row) => ({
    slug: row.article_slug,
    sentAt: row.sent_at,
    recipients: row.recipients,
    failures: row.failures,
  }));
}

/**
 * Takes the exclusive right to send this essay, or reports that somebody
 * already has.
 *
 * One statement, so two administrators pressing the button in the same second
 * resolve against each other in the database rather than both reading an empty
 * table and both sending. The row exists from this moment with no counts on
 * it; `recordDispatchOutcome` fills them in when the sending is over.
 */
export async function claimDispatch(slug: string): Promise<boolean> {
  const [claimed] = await db()<{ article_slug: string }[]>`
    INSERT INTO newsletter_dispatch (article_slug)
    VALUES (${slug})
    ON CONFLICT (article_slug) DO NOTHING
    RETURNING article_slug
  `;

  return Boolean(claimed);
}

/**
 * Gives the claim back, for the cases where nothing was sent under it.
 *
 * The `WHERE` is what makes this safe to call on an error path: a row whose
 * counts have been written is a record of mail that actually went out, and
 * deleting it would let the same essay be sent to the list a second time —
 * precisely the failure the table exists to prevent. Only an untouched claim
 * is released.
 */
export async function releaseUnsentDispatch(slug: string): Promise<void> {
  await db()`
    DELETE FROM newsletter_dispatch
     WHERE article_slug = ${slug} AND recipients = 0 AND failures = 0
  `;
}

export async function recordDispatchOutcome(
  slug: string,
  recipients: number,
  failures: number,
): Promise<void> {
  await db()`
    UPDATE newsletter_dispatch
       SET recipients = ${recipients}, failures = ${failures}, sent_at = now()
     WHERE article_slug = ${slug}
  `;
}

export type DispatchOutcome =
  | { readonly kind: "sent"; readonly recipients: number; readonly failures: number }
  /** Published essay, nobody confirmed to send it to. The claim is released. */
  | { readonly kind: "no-recipients" }
  /** The slug names no published essay. The claim is released. */
  | { readonly kind: "unpublished" };

/**
 * Sends the issue. Assumes the claim has already been taken.
 *
 * Addresses are decrypted one page of rows at a time by
 * `recipientsForDispatch` and never leave this function; nothing about who
 * received what is written anywhere, which is why the dispatch row holds two
 * integers and the audit row holds the slug.
 *
 * A message the provider refuses is counted and the loop carries on. One dead
 * address must not stop the letter reaching everybody after it in the list,
 * and `sendEmail` is built not to throw for exactly this reason.
 */
export async function sendIssue(slug: string): Promise<DispatchOutcome> {
  const article = await getArticle(slug);
  if (!article) {
    await releaseUnsentDispatch(slug);
    return { kind: "unpublished" };
  }

  const recipients = await recipientsForDispatch();
  if (recipients.length === 0) {
    await releaseUnsentDispatch(slug);
    return { kind: "no-recipients" };
  }

  const body = renderArticleText(article.body, article.footnotes, article.citations);
  let failures = 0;

  for (const [index, recipient] of recipients.entries()) {
    const locale: Locale = isLocale(recipient.locale) ? recipient.locale : DEFAULT_LOCALE;

    const message = await journalIssue(locale, {
      title: article.title,
      standfirst: article.standfirst,
      body,
      unsubscribeToken: recipient.unsubscribeToken,
    });

    const result = await sendEmail({
      to: recipient.email,
      ...message,
      headers: listHeaders(locale, recipient.unsubscribeToken),
    });

    if (!result.ok) failures += 1;

    if (index < recipients.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000 / PER_SECOND));
    }
  }

  await recordDispatchOutcome(slug, recipients.length, failures);

  return { kind: "sent", recipients: recipients.length, failures };
}

/**
 * The header that makes a mail client show its own unsubscribe control.
 *
 * Worth more than the link at the foot of the message, because it is the
 * control a reader who has decided they are done will actually find — and the
 * alternative they reach for otherwise is the "report spam" button, which
 * damages delivery for every other subscriber as well as removing this one.
 *
 * Deliberately *without* `List-Unsubscribe-Post`. Declaring one-click means
 * promising that an unauthenticated POST to this address removes the reader
 * immediately, and this address is a page that asks for a press — see
 * `components/newsletter/UnsubscribePanel.tsx` for why it asks. Announcing a
 * capability that is not honoured is worse than announcing none: the provider
 * presses it, nothing happens, and the complaint that follows is the one the
 * header existed to prevent. Honouring it properly means a POST route that
 * removes without confirmation, which is a deliberate decision and not a
 * detail to slip into this line.
 */
function listHeaders(locale: Locale, token: string): Record<string, string> {
  const path = localePath(locale, `${routes.newsletter}/unsubscribe`);
  const url = `${SITE_URL}${path}?token=${encodeURIComponent(token)}`;

  return { "List-Unsubscribe": `<${url}>` };
}

/**
 * The essay as plain text.
 *
 * Not `renderManifestoText`, which renders one particular document with its
 * numerals, its rules and its closing line. What is shared between them is a
 * dozen lines of `switch`, and merging the two would mean a change made for a
 * downloadable manifesto silently reshaping every letter the movement sends.
 *
 * Footnotes and citations are appended rather than dropped, because the line
 * that would otherwise carry them — "read it on the site, with footnotes and
 * sources" — is omitted while the journal has no public pages. A reader who
 * cannot follow a reference has been given an assertion instead of an
 * argument, which is the opposite of what this movement's writing is for.
 */
function renderArticleText(
  blocks: readonly ContentBlock[],
  footnotes: readonly Footnote[] = [],
  citations: readonly Citation[] = [],
): string {
  const lines: string[] = [];

  for (const block of blocks) {
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
        lines.push(`"${stripInline(block.text)}"`);
        if (block.attribution) lines.push(`  — ${block.attribution}`);
        lines.push("");
        break;
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
        lines.push("* * *", "");
        break;
    }
  }

  if (footnotes.length > 0) {
    lines.push("—".repeat(32), "");
    for (const note of footnotes) lines.push(`[${note.id}] ${stripInline(note.text)}`, "");
  }

  if (citations.length > 0) {
    lines.push("—".repeat(32), "");
    for (const citation of citations) {
      lines.push(`${citation.label} — ${stripInline(citation.detail)}`, "");
    }
  }

  return lines.join("\n").trimEnd();
}
