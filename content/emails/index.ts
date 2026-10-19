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
    /**
     * `{privacy}` is the address of the privacy note in this language, and
     * `{contact}` the contact form in the same edition. The second exists
     * because this message must not invite a reply: it leaves an unattended
     * sender, and the domain has no mailbox behind it, so a reply is not
     * merely ignored but bounced back at somebody who did as they were asked.
     */
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
 * The two addresses a newsletter message carries.
 *
 * Built here from the token rather than passed in ready-made, which is the
 * same rule the rest of this file follows for a reason that bites hardest on
 * these two: they are the only links in the whole system that a reader *must*
 * be able to use, and a caller assembling one by hand is a caller who can
 * forget the locale. A German subscriber who meets an English page at the
 * moment they want to leave presses the provider's spam button instead, and
 * that costs the movement every other reader's delivery as well as this one's.
 */
function confirmUrl(locale: Locale, token: string): string {
  return `${url(locale, `${routes.newsletter}/confirm`)}?token=${encodeURIComponent(token)}`;
}

function unsubscribeUrl(locale: Locale, token: string): string {
  return `${url(locale, `${routes.newsletter}/unsubscribe`)}?token=${encodeURIComponent(token)}`;
}

/**
 * Sent to somebody who applies through `/join`.
 *
 * It was written long before it was sent, and the gap is worth recording. The
 * objection was never that an acknowledgement is unwanted — it is that
 * delivering one hands the address to the mail provider, which keeps logs, and
 * the subject line names the movement, so the provider learns that this
 * address applied to a political movement. That is Article 9 data, and it
 * cannot be avoided while writing to somebody at all: the sender's domain
 * would give it away even under a blank subject.
 *
 * What changed is not the calculation but the alternative. Silence was costing
 * more: applicants heard nothing, had no reason to expect the letter that
 * eventually arrives from an administrator, and stopped answering. So the
 * exposure is now accepted and, as `AGENTS.md` requires, written into
 * `/privacy` before it started happening rather than after — naming the
 * company, what it sees, and that this is the reason nothing used to be sent.
 *
 * The body still restates nothing the applicant told us. The provider gets the
 * address, the subject and a text that would read the same for anybody.
 *
 * Says plainly that a human decides and gives no estimate of when, because an
 * invented timescale is the kind of small false promise that costs more trust
 * than the silence it was meant to fill. It does say that a person will write,
 * which is a promise of a different kind — one the movement keeps by hand.
 */
export async function applicationReceived(locale: Locale): Promise<Message> {
  const text = (await getEmails(locale)).applicationReceived;
  return {
    subject: text.subject,
    text: signed(
      fill(text.body, {
        privacy: url(locale, routes.privacy),
        contact: url(locale, routes.contact),
      }),
    ),
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
    text: signed(fill(text.body, { confirm: confirmUrl(locale, token) })),
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
export async function alreadySubscribed(locale: Locale, token: string): Promise<Message> {
  const text = (await getEmails(locale)).alreadySubscribed;
  return {
    subject: text.subject,
    text: signed(fill(text.body, { unsubscribe: unsubscribeUrl(locale, token) })),
  };
}

export interface JournalDispatch {
  readonly title: string;
  readonly standfirst: string;
  /** The essay, already rendered to plain text. English; see below. */
  readonly body: string;
  /**
   * That subscriber's own removal token, from `unsubscribeToken`.
   */
  readonly unsubscribeToken: string;
  /**
   * Where the essay can be read on the site, if it can be read there at all.
   *
   * Optional, and currently never supplied, because the journal is unlisted:
   * it has no public route, so `/journal/<slug>` answers with a 404. A line
   * reading "read it on the site" above an address that does not resolve is
   * worse than no line — it is the first thing in the message a reader can
   * check, and the first thing they find broken.
   *
   * `journalIssue.readOnSite` therefore goes unused in all six languages
   * rather than being deleted from them. Restoring the journal's public
   * routes is one change in `lib/site.ts` and `content/chrome/*`; having to
   * re-translate a paragraph at the same time would be a reason to put it
   * off.
   */
  readonly url?: string;
}

/**
 * One issue of the journal, sent to a confirmed subscriber.
 *
 * The essay arrives whole rather than as a teaser. That is partly because
 * there is nowhere else to read it at the moment, and partly because a
 * message whose purpose is to make you click is a message that has to track
 * whether you did.
 */
export async function journalIssue(
  locale: Locale,
  { title, standfirst, body, unsubscribeToken, url: essayUrl }: JournalDispatch,
): Promise<Message> {
  const text = (await getEmails(locale)).journalIssue;
  const onSite = essayUrl ? `${fill(text.readOnSite, { url: essayUrl })}\n\n` : "";

  return {
    subject: title,
    text: `${title}

${standfirst}

${body}

${onSite}${signature}

${fill(text.unsubscribeNote, { unsubscribe: unsubscribeUrl(locale, unsubscribeToken) })}`,
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
 * The distinction is the whole design, and it survives `applicationReceived`
 * above becoming a message the site does send. That one could be automated
 * because it asks for nothing: it acknowledges, and it points at the contact
 * form for anybody who wants to say something back. This one cannot, because
 * its closing line invites the applicant to reply directly, and a reply only
 * reaches a person if the message came from a mailbox somebody reads. Sent
 * through the site's provider it would arrive from an unattended sender on a
 * domain with no mailbox behind it, so the invitation would not merely go
 * unanswered — it would bounce, in every copy.
 *
 * So it is rendered in the admin surface, behind the passkey that already
 * revealed the name, and copied into whatever mailbox the administrator uses.
 * It reaches the applicant from an address a person actually reads, which is
 * the only arrangement in which asking them to write back is honest.
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

/**
 * A notice written to the membership.
 *
 * **English, like the rest of the operator's text**, and for a blunter reason
 * than `vettingLetter`'s. The body is typed by an administrator into a box;
 * there is no sixth edition of a sentence that was written once, and a
 * dictionary cannot translate text it has never seen. Wrapping English prose
 * in a German frame would only make the message look like a translation that
 * had failed. If notices are ever to arrive in a member's own language, the
 * missing piece is the operator writing six versions, not a key in `de.ts`.
 *
 * Three things are added to whatever was typed, and each is load-bearing.
 *
 * The first says why the message arrived. A political movement writing
 * unbidden to somebody's inbox owes them that sentence, and it is also the
 * practical difference between a reader who remembers joining and one who
 * reaches for "report spam" — which would cost the delivery of every later
 * message to every other member.
 *
 * The second says where a reply goes. The sending domain has no mailbox, so a
 * reply to this message bounces; pointing at the contact form is the same fix
 * the acknowledgement needed and for the same reason.
 *
 * The third stops the next one. It is a link rather than an instruction to
 * write in, because a member who wants out should not have to ask a person for
 * it, and `List-Unsubscribe` puts the mail client's own control beside it.
 * `List-Unsubscribe-Post` is deliberately absent here exactly as it is for the
 * journal — see `listHeaders` in `lib/admin/dispatch.ts`. The page asks for a
 * press, so one-click cannot honestly be declared.
 */
/**
 * Where the link at the foot of a notice points.
 *
 * Exported because the send needs the same address twice — once in the text
 * and once in `List-Unsubscribe` — and two places building it from the token
 * is how the header and the link drift apart.
 */
export function noticeStopUrl(optOutToken: string): string {
  return `${SITE_URL}/notices/stop?token=${encodeURIComponent(optOutToken)}`;
}

export function memberNotice(subject: string, body: string, optOutToken: string): Message {
  const text = operatorText.memberNotice;
  const stopUrl = noticeStopUrl(optOutToken);

  return {
    subject,
    text: `${body.trim()}

${signature}

--
${text.why}

${fill(text.reply, { contact: `${SITE_URL}${routes.contact}` })}

${fill(text.stop, { stop: stopUrl })}`,
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
