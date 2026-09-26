import type { PluralForms } from "@/lib/format";
import type { EmailText } from "./index";

export const emails: EmailText = {
  applicationReceived: {
    subject: "Your application to the Restore Europa Movement",
    body: `Thank you for applying.

Your application has been recorded and will be read by a person before
anything further happens. There is no automatic approval, and we would
rather take the time to read properly than answer quickly, so we are not
going to promise you a date.

If you did not fill in this form, you do not need to do anything. Nothing
has been published, nothing has been shared, and an application that is
never approved never becomes a membership. If you would like the record
removed before then, reply to this message and say so.

What we hold and how it is protected is set out at {privacy}.`,
  },

  confirmSubscription: {
    subject: "Confirm your subscription",
    body: `Please confirm that you would like to receive the Restore Europa
journal by email — roughly one essay a week on the movement and on what
is happening in Europa.

Confirm here:
{confirm}

If you did not ask for this, ignore this message. Nothing will be sent to
you, you do not need to reply, and the address will be deleted within two
days without any action on your part.`,
  },

  alreadySubscribed: {
    subject: "You are already subscribed",
    body: `Somebody asked to subscribe this address to the Restore Europa
journal, and it is already on the list. Nothing has changed and you do not
need to do anything.

If you would rather not receive it, you can stop at any time:
{unsubscribe}`,
  },

  journalIssue: {
    readOnSite: `Read it on the site, with footnotes and sources:
{url}`,
    unsubscribeNote: `You are receiving this because you confirmed this address. To stop:
{unsubscribe}`,
  },
};

/**
 * The one message written to an administrator rather than to a reader.
 *
 * Exported only here, and deliberately not part of `EmailText`: the five
 * translations have no business holding words for a surface that is English in
 * every language. `scripts/check-translations.ts` compares what a translation
 * exports against the English file, so an English-only export like this one is
 * a supported state rather than a missing translation.
 */
export const operatorText: {
  readonly applicationAlert: {
    readonly subject: string;
    readonly intro: string;
    readonly unread: PluralForms;
    readonly withheld: string;
  };
} = {
  applicationAlert: {
    subject: "An application is waiting",
    intro: "A new membership application arrived.",
    unread: {
      one: "{count} application has not been read yet.",
      other: "{count} applications have not been read yet.",
    },
    withheld: `Who it is from is deliberately not in this message. Sign in and use your
passkey to read it: {admin}`,
  },
};
