import { createDictionary } from "@/lib/dictionary";
import { fill, plural } from "@/lib/format";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n";
import { routes, SITE_URL, site } from "@/lib/site";
import { emails as en, operatorText } from "./en";

/**
 * Every message the site sends.
 *
 * Here rather than beside the code that sends it, for the same reason the rest
 * of the prose is: these are the movement's words to somebody who trusted it
 * with an address, and they should be editable without touching a server
 * action.
 *
 * Written in the language the reader was using when they wrote to us. The
 * shape is the same as every other content module — words in `en.ts` and five
 * files beside it, everything that is not words here — so a German reader who
 * applies through `/de/join` is acknowledged in German, and the acknowledgement
 * links to `/de/privacy` rather than dropping them into the English note.
 *
 * Three constraints hold across all of them. **No message restates what the
 * reader told us** — not their name, not their region, never their message —
 * because the provider that delivers it keeps the body in its logs, and there
 * is no reason to put a person's political interest into a third party's
 * records in readable form. **Nothing is styled**: plain text carries no
 * tracking pixel, so we cannot learn who opened what even by accident. And
 * **no address is written into a language file**: every URL below is built
 * here, from `routes` and the locale, so a translator cannot send a reader to
 * the wrong edition of the privacy note.
 */

export interface Message {
  readonly subject: string;
  readonly text: string;
}

/**
 * The events worth waking somebody up for.
 *
 * Kept short on purpose. An alert stream that includes ordinary administration
 * gets filtered into a folder within a fortnight, and then the one message that
 * mattered is in the folder too. Everything here is either a change to who can
 * get in, or evidence that somebody is trying to — the two things an
 * administrator cannot discover any other way and cannot afford to learn late.
 *
 * Routine activity, including reading the roll, belongs in the weekly digest
 * and not here.
 */
export type SecurityEventKind =
  /* Somebody can now sign in who could not before, or no longer can. */
  | "passkey.register"
  | "passkey.delete"
  | "admin.invite"
  | "admin.invite.redeem"
  /* A session presented from a client it was not issued to. */
  | "session.hijack"
  /* A run of failed sign-in ceremonies from one source. */
  | "session.bruteforce"
  /* The audit chain stopped verifying. */
  | "audit.broken";

export interface EmailText {
  /** Sent to somebody who applied through `/join`. */
  readonly applicationReceived: {
    readonly subject: string;
    /** `{privacy}` is the address of the privacy note in this language. */
    readonly body: string;
  };

  /** The double opt-in request. */
  readonly confirmSubscription: {
    readonly subject: string;
    /** `{confirm}` is the one-time confirmation address. */
    readonly body: string;
  };

  /** Sent when an address that is already subscribed asks again. */
  readonly alreadySubscribed: {
    readonly subject: string;
    /** `{unsubscribe}` is that subscriber's own removal address. */
    readonly body: string;
  };

  /**
   * The wrapper around one issue of the journal. The essay itself is not here
   * — it comes from the journal, which is written in English — but what the
   * movement says around it is the reader's own language.
   */
  readonly journalIssue: {
    /** `{url}` is the essay on the site. */
    readonly readOnSite: string;
    /** `{unsubscribe}` is that subscriber's own removal address. */
    readonly unsubscribeNote: string;
  };
}

const getEmails = createDictionary<EmailText>(en, {
  de: () => import("./de").then((m) => m.emails),
  fr: () => import("./fr").then((m) => m.emails),
  pl: () => import("./pl").then((m) => m.emails),
  it: () => import("./it").then((m) => m.emails),
  es: () => import("./es").then((m) => m.emails),
});

/** Trailing signature used by everything written to a person. */
const signature = `--
${site.formal}
${SITE_URL}`;

function signed(body: string): string {
  return `${body}

${signature}`;
}

/** An absolute address for a route, in the reader's own language. */
function url(locale: Locale, path: string): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

/**
 * Written for somebody who applies through `/join`, and **deliberately not
 * sent**.
 *
 * Delivering it would hand the applicant's address to the mail provider, which
 * necessarily learns who was written to and keeps logs of it. `/privacy` tells
 * an applicant their details are "never passed to a third party for any
 * purpose", and with this unsent that stays literally true: the only address
 * the site mails is the operator's own, and those messages carry counts. The
 * join page promises no acknowledgement, so nothing on the site is left saying
 * something that does not happen.
 *
 * Kept, with its five translations, because the decision may be revisited —
 * but sending it means rewriting the privacy note first, not afterwards.
 *
 * Says plainly that a human decides and gives no estimate of when, because an
 * invented timescale is the kind of small false promise that costs more trust
 * than the silence it was meant to fill.
 */
export async function applicationReceived(locale: Locale): Promise<Message> {
  const text = (await getEmails(locale)).applicationReceived;
  return {
    subject: text.subject,
    text: signed(fill(text.body, { privacy: url(locale, routes.privacy) })),
  };
}

/**
 * The double opt-in request.
 *
 * The last paragraph is doing real work. Anyone can type a stranger's address
 * into a subscription form, and the person who receives this may be seeing the
 * movement's name for the first time in a message they did not ask for. Telling
 * them that ignoring it is sufficient — and that we will forget the address on
 * our own — is what keeps that from being a burden placed on them.
 */
export async function confirmSubscription(locale: Locale, token: string): Promise<Message> {
  const text = (await getEmails(locale)).confirmSubscription;
  return {
    subject: text.subject,
    text: signed(
      fill(text.body, {
        confirm: `${SITE_URL}/newsletter/confirm?token=${encodeURIComponent(token)}`,
      }),
    ),
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
export async function alreadySubscribed(
  locale: Locale,
  unsubscribeUrl: string,
): Promise<Message> {
  const text = (await getEmails(locale)).alreadySubscribed;
  return {
    subject: text.subject,
    text: signed(fill(text.body, { unsubscribe: unsubscribeUrl })),
  };
}

export interface JournalDispatch {
  readonly title: string;
  readonly standfirst: string;
  readonly body: string;
  readonly slug: string;
  readonly unsubscribeUrl: string;
}

/** One issue of the journal, sent to a confirmed subscriber. */
export async function journalIssue(
  locale: Locale,
  { title, standfirst, body, slug, unsubscribeUrl }: JournalDispatch,
): Promise<Message> {
  const text = (await getEmails(locale)).journalIssue;
  return {
    subject: title,
    text: `${title}

${standfirst}

${body}

${fill(text.readOnSite, { url: `${SITE_URL}/journal/${slug}` })}

${signature}

${fill(text.unsubscribeNote, { unsubscribe: unsubscribeUrl })}`,
  };
}

/**
 * Sent to whoever is running the movement when an application arrives.
 *
 * English in every case, and the only message here that is. It goes to the
 * administrative surface, which is English by the same decision that keeps
 * `/admin` out of the six languages; nobody receiving it chose a language on
 * the public site. That is why its words sit outside the dictionary rather
 * than being translated five times and never read.
 *
 * Carries a count and nothing else. The obvious version of this message names
 * the applicant, and that is exactly the version that turns an ordinary inbox
 * — synced to a phone, searchable, backed up by a provider, readable by anyone
 * who gets into the account — into a copy of the membership roll accumulating
 * one message at a time. The point of the admin surface is that reading names
 * requires a passkey; mailing them out would make that ceremony decorative.
 */
export function applicationAlert(unread: number): Message {
  const text = operatorText.applicationAlert;
  return {
    subject: text.subject,
    text: `${text.intro}

${plural(DEFAULT_LOCALE, unread, text.unread)}

${fill(text.withheld, { admin: `${SITE_URL}/admin/members` })}`,
  };
}

/**
 * The same, for an enquiry through `/contact`.
 *
 * `enquiry` is not the membership roll, but the reasoning is unchanged: the
 * name, the address and the message body are encrypted in that table too, and
 * a notification that quoted any of them would keep a readable copy in an
 * inbox and in a mail provider's logs. A count and a link to sign in is the
 * whole message.
 */
/**
 * Sent the moment one of the sharp events happens.
 *
 * Carries what changed and nothing about who or from where. The IP is not in
 * the message even in hashed form: it would say nothing useful to the reader
 * and would put a correlatable value into a mail provider's logs. Everything
 * needed to investigate is behind the passkey, which is the point.
 */
export function securityAlert(kind: SecurityEventKind, occurrences = 1): Message {
  const text = operatorText.securityAlert;
  const count = occurrences > 1 ? `\n\nThis has happened ${occurrences} times in the last hour.` : "";

  return {
    subject: text.subject,
    text: `${text.intro}

${text.events[kind]}${count}

${fill(text.close, { admin: `${SITE_URL}/admin/security` })}`,
  };
}

export interface SecurityDigest {
  /** Action name and how many times it was recorded, most frequent first. */
  readonly activity: readonly (readonly [action: string, count: number])[];
  /** The id of the earliest broken chain link, or null if the log verifies. */
  readonly chainBrokenAt: string | null;
}

/**
 * The weekly summary.
 *
 * Immediate alerts answer "is something happening now". This answers the
 * question they cannot, which is "does the shape of the last week look like the
 * week before". A slow rise in reveals, a sign-in at an hour nobody works, an
 * administrator who has stopped appearing: none of those trips a threshold, and
 * all of them are visible in a list of counts read over a coffee.
 *
 * It is also the only thing that makes the audit chain worth having. A tamper
 * check nobody runs is a tamper check that reports the breach at the same time
 * as the newspaper does.
 */
export function securityDigest(digest: SecurityDigest): Message {
  const text = operatorText.securityDigest;

  const lines = digest.activity.map(([action, count]) => `  ${count}\u00d7  ${action}`).join("\n");

  const body = digest.activity.length === 0 ? text.quiet : lines;

  const chain =
    digest.chainBrokenAt === null
      ? text.chainIntact
      : fill(text.chainBroken, { entry: digest.chainBrokenAt });

  return {
    subject: text.subject,
    text: `${text.intro}

${body}

${chain}

${fill(text.close, { admin: `${SITE_URL}/admin/security` })}`,
  };
}

export interface Applicant {
  /** What to greet them by. The first word of the name, not the whole of it. */
  readonly firstName: string;
  /** The area of interest, already turned into a label. Volunteers only. */
  readonly area: string;
}

/**
 * The follow-up questionnaire, **composed for an administrator to send, not
 * sent by the site**.
 *
 * The distinction is the whole design. `applicationReceived` above is kept
 * unsent because delivering it would hand an applicant's address to the mail
 * provider, and `/privacy` promises those details are never passed to a third
 * party for any purpose. This letter would breach the same promise for the
 * same reason — so it is not sent either. It is rendered in the admin surface,
 * behind the passkey that already revealed the name, and copied into whatever
 * mailbox the administrator uses. No address leaves the machine; nothing in
 * the privacy note stops being true.
 *
 * That is also the only arrangement in which the letter's closing line is
 * honest. It invites the applicant to reply directly, and a reply only reaches
 * a person if the message came from a mailbox somebody reads. Sent through the
 * site's provider it would arrive from an unattended sender, and the invitation
 * would be a small lie in every copy.
 *
 * English, like the rest of the operator's text and unlike the messages above.
 * These are drafts for a human to edit before sending, and the human reads
 * English; a Polish applicant is better served by an administrator who knows
 * they applied in Polish than by a machine translation nobody can check.
 *
 * Two letters rather than one with a conditional paragraph. A volunteer is
 * being asked what they can do and how much time they have, an ordinary member
 * is not, and the questions in between differ enough that merging them would
 * produce a letter addressed to neither.
 */
export function vettingLetter(
  role: "member" | "volunteer",
  applicant: Applicant,
): Message {
  const text = operatorText.vettingLetter[role];
  return {
    subject: text.subject,
    text: `${fill(text.body, { ...applicant })}

Best regards,

${site.formal}
${SITE_URL}`,
  };
}

export function enquiryAlert(unread: number): Message {
  const text = operatorText.enquiryAlert;
  return {
    subject: text.subject,
    text: `${text.intro}

${plural(DEFAULT_LOCALE, unread, text.unread)}

${fill(text.withheld, { admin: `${SITE_URL}/admin/enquiries` })}`,
  };
}
