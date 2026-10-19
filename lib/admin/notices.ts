import { memberNotice, noticeStopUrl } from "@/content/emails";
import { decryptPiiSafe, noticeOptOutTag, noticeOptOutTagMatches } from "@/lib/admin/pii";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/email";

/**
 * Writing to the membership.
 *
 * The newsletter and this are deliberately separate paths to deliberately
 * separate audiences, and the difference is where the consent comes from. A
 * subscriber asked for the letter and confirmed that they asked; a member
 * joined a movement, and /privacy is where the movement says that joining
 * means being written to about its affairs. Neither consent covers the other
 * list, so neither send may read the other's table — which is why this file
 * duplicates the shape of `dispatch.ts` rather than generalising it. The
 * duplication is the safeguard: there is no parameter anywhere that could be
 * passed the wrong way and mail the roll a marketing letter.
 *
 * Everything the dispatch path does about addresses, this does too. They are
 * decrypted only inside the send, never written anywhere, and what survives is
 * two integers and a subject.
 */

/** Paced to stay inside the provider's rate limit, as the dispatch path is. */
const PER_SECOND = 8;

export interface NoticeAudience {
  /** Confirmed members who would receive the next notice. */
  readonly reachable: number;
  /** Confirmed members who have asked not to be written to. */
  readonly optedOut: number;
}

/**
 * How many a notice would reach.
 *
 * Counts only, so this is safe behind an ordinary session: it says how large
 * the membership is, which the country breakdown on the same surface already
 * says, and names nobody.
 */
export async function noticeAudience(): Promise<NoticeAudience> {
  const [row] = await db()<{ reachable: string; opted_out: string }[]>`
    SELECT
      count(*) FILTER (WHERE status = 'confirmed' AND notices_opt_out_at IS NULL)     AS reachable,
      count(*) FILTER (WHERE status = 'confirmed' AND notices_opt_out_at IS NOT NULL) AS opted_out
    FROM member
  `;

  return {
    reachable: Number(row?.reachable ?? 0),
    optedOut: Number(row?.opted_out ?? 0),
  };
}

export interface NoticeRecord {
  readonly id: string;
  readonly subject: string;
  readonly sentAt: Date;
  readonly recipients: number;
  readonly failures: number;
}

/** Every notice that has gone out, most recent first. */
export async function listNotices(): Promise<readonly NoticeRecord[]> {
  const rows = await db()<
    { id: string; subject: string; sent_at: Date; recipients: number; failures: number }[]
  >`
    SELECT id, subject, sent_at, recipients, failures
      FROM member_notice
     ORDER BY sent_at DESC
     LIMIT 50
  `;

  return rows.map((row) => ({
    id: row.id,
    subject: row.subject,
    sentAt: row.sent_at,
    recipients: row.recipients,
    failures: row.failures,
  }));
}

/**
 * Records that a notice is going out, and returns its id.
 *
 * Taken before anything is sent, for the reason `claimDispatch` is: a send
 * interrupted halfway must still be visible afterwards. Unlike a dispatch
 * there is nothing to make unique — a notice is free text and the movement may
 * legitimately write twice about the same thing — so this cannot refuse, and
 * the guard against sending the same notice twice is the typed confirmation in
 * the action rather than a constraint here.
 */
export async function claimNotice(subject: string): Promise<string> {
  const [row] = await db()<{ id: string }[]>`
    INSERT INTO member_notice (subject) VALUES (${subject}) RETURNING id
  `;
  return row!.id;
}

async function recordNoticeOutcome(
  id: string,
  recipients: number,
  failures: number,
): Promise<void> {
  await db()`
    UPDATE member_notice
       SET recipients = ${recipients}, failures = ${failures}, sent_at = now()
     WHERE id = ${id}::uuid
  `;
}

/** Deletes the record of a notice that reached nobody, so the list stays true. */
async function releaseEmptyNotice(id: string): Promise<void> {
  await db()`
    DELETE FROM member_notice
     WHERE id = ${id}::uuid AND recipients = 0 AND failures = 0
  `;
}

interface NoticeRecipient {
  readonly email: string;
  readonly optOutToken: string;
}

/**
 * The audience, decrypted.
 *
 * As with `recipientsForDispatch`, this is the closest thing in the project to
 * an export of the roll, and it is callable only from the send below. A row
 * whose ciphertext will not open is skipped: one damaged record must not stop
 * the notice reaching everybody after it.
 */
async function recipientsForNotice(): Promise<NoticeRecipient[]> {
  const rows = await db()<{ id: string; email_encrypted: string }[]>`
    SELECT id, email_encrypted FROM member
     WHERE status = 'confirmed' AND notices_opt_out_at IS NULL
     ORDER BY created_at
  `;

  const resolved = await Promise.all(
    rows.map(async (row) => {
      const email = await decryptPiiSafe(row.email_encrypted);
      if (!email) return undefined;
      return { email, optOutToken: `${row.id}.${await noticeOptOutTag(row.id)}` };
    }),
  );

  return resolved.filter((r): r is NoticeRecipient => r !== undefined);
}

export type NoticeOutcome =
  | { readonly kind: "sent"; readonly recipients: number; readonly failures: number }
  /** Nobody to write to. The record is removed. */
  | { readonly kind: "no-recipients" };

/**
 * Sends one notice to the membership.
 *
 * Assumes the record has already been claimed. The body is the operator's own
 * text; `memberNotice` wraps it with the line explaining why the message
 * arrived and the link that stops the next one.
 */
export async function sendMemberNotice(
  id: string,
  subject: string,
  body: string,
): Promise<NoticeOutcome> {
  const recipients = await recipientsForNotice();
  if (recipients.length === 0) {
    await releaseEmptyNotice(id);
    return { kind: "no-recipients" };
  }

  let failures = 0;

  for (const [index, recipient] of recipients.entries()) {
    const message = memberNotice(subject, body, recipient.optOutToken);

    /*
     * The header that makes a mail client show its own unsubscribe control.
     * Deliberately without `List-Unsubscribe-Post`, for the reason set out on
     * `listHeaders` in `dispatch.ts`: the page it points at asks for a press,
     * so one-click cannot honestly be declared.
     */
    const result = await sendEmail({
      to: recipient.email,
      ...message,
      headers: { "List-Unsubscribe": `<${noticeStopUrl(recipient.optOutToken)}>` },
    });

    if (!result.ok) failures += 1;

    if (index < recipients.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000 / PER_SECOND));
    }
  }

  await recordNoticeOutcome(id, recipients.length, failures);

  return { kind: "sent", recipients: recipients.length, failures };
}

/**
 * Stops notices for whoever holds this token.
 *
 * Idempotent, and silent about whether the token matched anybody, for the
 * reason `unsubscribeByToken` is: the person clicking has already said they
 * want no more messages, and a page that distinguished "not a member" from
 * "stopped" would answer a question about somebody else's membership to
 * whoever held the link.
 *
 * Note what this does *not* do. It does not resign them, decline them, or
 * touch their status in any way — they remain a member who has asked not to be
 * written to, which is the thing they actually chose.
 */
export async function stopNoticesByToken(token: string): Promise<boolean> {
  const separator = token.lastIndexOf(".");
  if (separator <= 0) return false;

  const id = token.slice(0, separator);
  const tag = token.slice(separator + 1);

  if (!/^[0-9a-f-]{36}$/i.test(id)) return false;
  if (!(await noticeOptOutTagMatches(id, tag))) return false;

  await db()`
    UPDATE member SET notices_opt_out_at = now()
     WHERE id = ${id}::uuid AND notices_opt_out_at IS NULL
  `;

  return true;
}
