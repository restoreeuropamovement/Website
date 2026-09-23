import { SITE_URL } from "@/lib/site";

/**
 * Every message the site sends.
 *
 * Here rather than beside the code that sends it, for the same reason the rest
 * of the prose is: these are the movement's words to somebody who trusted it
 * with an address, and they should be editable without touching a server
 * action.
 *
 * Written in English only at present. The site speaks six languages and a
 * German reader who joins through `/de/join` currently receives an English
 * acknowledgement, which is a gap rather than a decision — the shape below
 * takes no position on it, so localising later means adding a dictionary here
 * and a locale argument at the call sites.
 *
 * Two constraints hold across all of them. **No message restates what the
 * reader told us** — not their name, not their region, never their message —
 * because the provider that delivers it keeps the body in its logs, and there
 * is no reason to put a person's political interest into a third party's
 * records in readable form. And **nothing is styled**: plain text carries no
 * tracking pixel, so we cannot learn who opened what even by accident.
 */

export interface Message {
  readonly subject: string;
  readonly text: string;
}

/** Trailing signature used by everything written to a person. */
const signature = `--
Restore Europa Movement
${SITE_URL}`;

/**
 * Sent when somebody applies through `/join`.
 *
 * Says plainly that a human decides and gives no estimate of when, because an
 * invented timescale is the kind of small false promise that costs more trust
 * than the silence it was meant to fill.
 */
export function applicationReceived(): Message {
  return {
    subject: "Your application to the Restore Europa Movement",
    text: `Thank you for applying.

Your application has been recorded and will be read by a person before
anything further happens. There is no automatic approval, and we would
rather take the time to read properly than answer quickly, so we are not
going to promise you a date.

If you did not fill in this form, you do not need to do anything. Nothing
has been published, nothing has been shared, and an application that is
never approved never becomes a membership. If you would like the record
removed before then, reply to this message and say so.

What we hold and how it is protected is set out at ${SITE_URL}/privacy.

${signature}`,
  };
}

/**
 * Sent to whoever is running the movement when an application arrives.
 *
 * Carries a count and nothing else. The obvious version of this message names
 * the applicant, and that is exactly the version that turns an ordinary inbox
 * — synced to a phone, searchable, backed up by a provider, readable by anyone
 * who gets into the account — into a copy of the membership roll accumulating
 * one message at a time. The point of the admin surface is that reading names
 * requires a passkey; mailing them out would make that ceremony decorative.
 */
export function applicationAlert(unread: number): Message {
  return {
    subject: "An application is waiting",
    text: `A new membership application arrived.

${unread} ${unread === 1 ? "application has" : "applications have"} not been read yet.

Who it is from is deliberately not in this message. Sign in and use your
passkey to read it: ${SITE_URL}/admin/members`,
  };
}

/**
 * The double opt-in request.
 *
 * The second paragraph is doing real work. Anyone can type a stranger's address
 * into a subscription form, and the person who receives this may be seeing the
 * movement's name for the first time in a message they did not ask for. Telling
 * them that ignoring it is sufficient — and that we will forget the address on
 * our own — is what keeps that from being a burden placed on them.
 */
export function confirmSubscription(token: string): Message {
  return {
    subject: "Confirm your subscription",
    text: `Please confirm that you would like to receive the Restore Europa
journal by email — roughly one essay a week on the movement and on what
is happening in Europe.

Confirm here:
${SITE_URL}/newsletter/confirm?token=${encodeURIComponent(token)}

If you did not ask for this, ignore this message. Nothing will be sent to
you, you do not need to reply, and the address will be deleted within two
days without any action on your part.

${signature}`,
  };
}

/**
 * Sent when an address that is already subscribed asks again.
 *
 * The form cannot tell the reader this, because the form's answer must be the
 * same whether or not the address is on the list — otherwise it can be used to
 * find out who subscribes. The message can, because it only reaches the person
 * who owns the address.
 */
export function alreadySubscribed(unsubscribeUrl: string): Message {
  return {
    subject: "You are already subscribed",
    text: `Somebody asked to subscribe this address to the Restore Europa
journal, and it is already on the list. Nothing has changed and you do not
need to do anything.

If you would rather not receive it, you can stop at any time:
${unsubscribeUrl}

${signature}`,
  };
}

/** One issue of the journal, sent to a confirmed subscriber. */
export function journalIssue(
  title: string,
  standfirst: string,
  body: string,
  slug: string,
  unsubscribeUrl: string,
): Message {
  return {
    subject: title,
    text: `${title}

${standfirst}

${body}

Read it on the site, with footnotes and sources:
${SITE_URL}/journal/${slug}

--
Restore Europa Movement
${SITE_URL}

You are receiving this because you confirmed this address. To stop:
${unsubscribeUrl}`,
  };
}
