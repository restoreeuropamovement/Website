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
 * Sent when somebody applies through `/join`.
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
export function enquiryAlert(unread: number): Message {
  const text = operatorText.enquiryAlert;
  return {
    subject: text.subject,
    text: `${text.intro}

${plural(DEFAULT_LOCALE, unread, text.unread)}

${fill(text.withheld, { admin: `${SITE_URL}/admin/enquiries` })}`,
  };
}
