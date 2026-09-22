import { hashToken, randomToken } from "@/lib/admin/crypto";
import { decryptPiiSafe, emailDigest, encryptPii, unsubscribeTag } from "@/lib/admin/pii";
import { db } from "@/lib/db";

/**
 * The newsletter list.
 *
 * Structurally similar to `members.ts` — encrypted address, keyed digest for
 * matching, no way to search the ciphertext — but governed by one rule that
 * table does not have: **nothing is sent to an address that has not confirmed
 * it wants to hear from us.**
 *
 * That is not politeness. A membership application is read by a person before
 * it becomes anything, so somebody typing a stranger's address into `/join`
 * achieves little. A subscription has no such review, so without the
 * confirmation step the form is a machine for mailing political material to
 * people who never asked — which is both the definition of spam and, for
 * somebody whose interest in this movement would cost them their job, a genuine
 * harm done in their name.
 *
 * As with the roll, there is no export. `recipientsForDispatch` exists, returns
 * addresses, and is the closest thing to one; it is callable only from the
 * dispatch path, decrypts nothing it does not send to, and is audited by its
 * caller.
 */

/** How long a confirmation link stays valid. Long enough for a weekend. */
const CONFIRM_WINDOW_HOURS = 48;

export type SubscribeOutcome =
  /** A confirmation should be sent, carrying this token. */
  | { readonly kind: "pending"; readonly token: string }
  /**
   * The address is already on the list and active. Nothing was changed. The id
   * is returned so the caller can build an unsubscribe link for the notice it
   * sends — the one useful thing to offer somebody who is being told they are
   * already here.
   */
  | { readonly kind: "already"; readonly id: string };

/**
 * Records an intent to subscribe and returns the token to mail out.
 *
 * Callers must give the same answer to the reader whatever comes back. The
 * distinction between `pending` and `already` decides which message the address
 * receives, and the address belongs to whoever owns it; leaking that difference
 * into the HTTP response would turn the form into a test for whether a named
 * person subscribes, which is the same oracle the intake at `/join` is careful
 * not to be.
 *
 * Re-subscribing after unsubscribing is allowed and starts again from
 * unconfirmed — a previous consent that was withdrawn is not consent.
 */
export async function requestSubscription(
  email: string,
  locale: string,
): Promise<SubscribeOutcome> {
  const digest = await emailDigest(email);

  const [existing] = await db()<
    { id: string; confirmed_at: Date | null; unsubscribed_at: Date | null }[]
  >`
    SELECT id, confirmed_at, unsubscribed_at FROM subscriber WHERE email_digest = ${digest}
  `;

  if (existing && existing.confirmed_at && !existing.unsubscribed_at) {
    return { kind: "already", id: existing.id };
  }

  const token = randomToken();
  const tokenHash = await hashToken(token);
  const expires = new Date(Date.now() + CONFIRM_WINDOW_HOURS * 60 * 60 * 1000);

  if (existing) {
    /*
     * Reissuing rather than inserting. This covers both the reader who lost the
     * first message and the one returning after unsubscribing, and in each case
     * the previous token stops working — a confirmation link that stays valid
     * after a newer one was sent is a second live key to the same door.
     */
    await db()`
      UPDATE subscriber
         SET confirm_token_hash = ${tokenHash},
             confirm_expires_at = ${expires},
             confirmed_at       = NULL,
             unsubscribed_at    = NULL,
             locale             = ${locale}
       WHERE id = ${existing.id}
    `;
    return { kind: "pending", token };
  }

  await db()`
    INSERT INTO subscriber (email_encrypted, email_digest, confirm_token_hash, confirm_expires_at, locale)
    VALUES (${await encryptPii(email.trim())}, ${digest}, ${tokenHash}, ${expires}, ${locale})
    ON CONFLICT (email_digest) DO NOTHING
  `;

  return { kind: "pending", token };
}

/**
 * Completes a subscription.
 *
 * Consumes the token: the hash is cleared, so a link forwarded to somebody else
 * or replayed from a mailbox backup does nothing the second time.
 */
export async function confirmSubscription(token: string): Promise<boolean> {
  const [row] = await db()<{ id: string }[]>`
    UPDATE subscriber
       SET confirmed_at        = now(),
           confirm_token_hash  = NULL,
           confirm_expires_at  = NULL,
           unsubscribed_at     = NULL
     WHERE confirm_token_hash = ${await hashToken(token)}
       AND confirm_expires_at > now()
    RETURNING id
  `;

  return Boolean(row);
}

/**
 * The opaque value carried by an unsubscribe link: the row's id and a tag over
 * it. Kept in one string so a caller cannot accidentally act on the id without
 * checking the tag that authorises it.
 */
export async function unsubscribeToken(subscriberId: string): Promise<string> {
  return `${subscriberId}.${await unsubscribeTag(subscriberId)}`;
}

/**
 * Removes an address from the list.
 *
 * Idempotent, and deliberately silent about whether the token matched anybody:
 * the person clicking has already told us they want no further contact, and an
 * error page distinguishing "not subscribed" from "removed" would answer a
 * question about somebody else's address to whoever holds the link.
 */
export async function unsubscribeByToken(token: string): Promise<boolean> {
  const separator = token.lastIndexOf(".");
  if (separator <= 0) return false;

  const id = token.slice(0, separator);
  const tag = token.slice(separator + 1);

  /* Verified by recomputation under the key, never by a lookup in the table. */
  if (tag !== (await unsubscribeTag(id))) return false;

  await db()`
    UPDATE subscriber SET unsubscribed_at = now()
     WHERE id = ${id}::uuid AND unsubscribed_at IS NULL
  `;

  return true;
}

export interface SubscriberCounts {
  readonly confirmed: number;
  readonly pending: number;
  readonly unsubscribed: number;
}

/**
 * Aggregate figures for the admin page. Touches no encrypted column, so it
 * needs neither the key nor an elevated session — being signed in is enough to
 * see how large the list is, exactly as it is for the roll.
 */
export async function subscriberCounts(): Promise<SubscriberCounts> {
  const [row] = await db()<
    { confirmed: string; pending: string; unsubscribed: string }[]
  >`
    SELECT
      count(*) FILTER (WHERE confirmed_at IS NOT NULL AND unsubscribed_at IS NULL) AS confirmed,
      count(*) FILTER (WHERE confirmed_at IS NULL     AND unsubscribed_at IS NULL) AS pending,
      count(*) FILTER (WHERE unsubscribed_at IS NOT NULL)                          AS unsubscribed
    FROM subscriber
  `;

  return {
    confirmed: Number(row?.confirmed ?? 0),
    pending: Number(row?.pending ?? 0),
    unsubscribed: Number(row?.unsubscribed ?? 0),
  };
}

export interface Recipient {
  readonly id: string;
  readonly email: string;
  readonly unsubscribeToken: string;
}

/**
 * Everyone an issue should go to.
 *
 * This is the one function here that turns the list back into addresses, and it
 * exists only because sending requires them. It is reached from the dispatch
 * action alone, which holds an elevated session and writes an audit row before
 * calling. A row whose ciphertext will not decrypt is skipped rather than
 * failing the whole send: one damaged record should not stop the letter.
 */
export async function recipientsForDispatch(): Promise<Recipient[]> {
  const rows = await db()<{ id: string; email_encrypted: string }[]>`
    SELECT id, email_encrypted FROM subscriber
     WHERE confirmed_at IS NOT NULL AND unsubscribed_at IS NULL
     ORDER BY created_at
  `;

  const recipients = await Promise.all(
    rows.map(async (row) => {
      const email = await decryptPiiSafe(row.email_encrypted);
      if (!email) return null;
      return { id: row.id, email, unsubscribeToken: await unsubscribeToken(row.id) };
    }),
  );

  return recipients.filter((recipient): recipient is Recipient => recipient !== null);
}

/**
 * Discards subscriptions that were never confirmed.
 *
 * The opposite of the rule on `member`, where nothing is deleted on a timer
 * because an unreviewed row is somebody's application. An unconfirmed
 * subscription is not an application: it is an address that was typed into a
 * form — possibly by somebody else — and never acknowledged. Holding it
 * indefinitely would mean keeping a record of a person's supposed political
 * interest that they never once affirmed.
 *
 * Called opportunistically from the subscribe path rather than on a schedule,
 * which keeps the deployment free of a cron job it would otherwise need.
 */
export async function purgeExpiredUnconfirmed(): Promise<number> {
  const rows = await db()`
    DELETE FROM subscriber
     WHERE confirmed_at IS NULL
       AND unsubscribed_at IS NULL
       AND confirm_expires_at < now()
  `;

  return rows.count ?? 0;
}
