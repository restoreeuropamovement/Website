import type { PluralForms } from "@/lib/format";
import type { EmailText, SecurityEventKind } from "./index";

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
  readonly enquiryAlert: {
    readonly subject: string;
    readonly intro: string;
    readonly unread: PluralForms;
    readonly withheld: string;
  };
  readonly securityAlert: {
    readonly subject: string;
    readonly intro: string;
    readonly events: Readonly<Record<SecurityEventKind, string>>;
    readonly close: string;
  };
  readonly securityDigest: {
    readonly subject: string;
    readonly intro: string;
    readonly quiet: string;
    readonly chainIntact: string;
    readonly chainBroken: string;
    readonly close: string;
  };
  /**
   * The follow-up an administrator sends by hand. See `vettingLetter` in
   * `./index.ts` for why the site does not send it.
   *
   * `{firstName}` in both; `{area}` only in the volunteer letter, where it is
   * the area of interest the applicant chose.
   */
  readonly vettingLetter: {
    readonly member: { readonly subject: string; readonly body: string };
    readonly volunteer: { readonly subject: string; readonly body: string };
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
  enquiryAlert: {
    subject: "An enquiry is waiting",
    intro: "A new enquiry arrived through the contact form.",
    unread: {
      one: "{count} enquiry has not been read yet.",
      other: "{count} enquiries have not been read yet.",
    },
    /*
     * Not even the subject line the sender picked. It is one of five fixed
     * values and identifies nobody on its own, but "press" or "organisation"
     * arriving in an inbox still says something about who is writing, and the
     * count is all this message needs to do its job.
     */
    withheld: `Who it is from, and what it says, are deliberately not in this message.
Sign in and use your passkey to read it: {admin}`,
  },

  /*
   * The wording assumes the reader is not a security engineer and is reading on
   * a phone. Each line says what happened and what to do if it was not them,
   * because an alert whose meaning has to be worked out is an alert that gets
   * dismissed. No names, no addresses, no tokens — the same rule as every other
   * message here, and sharper, since these are the ones most likely to be read
   * in a hurry or forwarded.
   */
  securityAlert: {
    subject: "Something changed on the Restore Europa admin",
    intro: "This is an automatic message about the administrative surface.",
    events: {
      "passkey.register": `A new passkey was enrolled. Whoever holds it can now sign in as an
administrator.`,
      "passkey.delete": `A passkey was removed. Whoever held it can no longer sign in with it.`,
      "admin.invite.redeem": `An invitation was claimed and a new administrator account now exists.`,
      "admin.invite": `An invitation to become an administrator was created.`,
      "session.hijack": `A signed-in session was used from a different browser than the one it was
issued to, and has been ended. This can happen after a browser update. It is
also what a stolen session cookie looks like.`,
      "session.bruteforce": `There have been repeated failed sign-in attempts. Nobody got in — there are
no passwords to guess — but someone is trying.`,
      "audit.broken": `The audit log no longer verifies. Entries have been altered or removed since
they were written, unless the session secret was deliberately rotated.`,
    },
    close: `If this was you, nothing needs doing. If it was not, sign in and review the
activity log, then remove any passkey you do not recognise: {admin}`,
  },

  securityDigest: {
    subject: "Restore Europa: weekly security summary",
    intro: "Administrative activity over the past seven days.",
    quiet: "Nothing was recorded. No sign-ins, no changes, no failed attempts.",
    chainIntact: "The audit log verifies end to end: no entry has been altered or removed.",
    chainBroken: `The audit log does NOT verify. The earliest problem is at entry {entry}.
Either something was tampered with, or the session secret was rotated then.`,
    close: `Counts only, deliberately: this message carries nothing about who any member
is. The detail is behind your passkey: {admin}`,
  },

  vettingLetter: {
    member: {
      subject: "Your application to Restore Europa",
      body: `Hello {firstName},

Thank you for applying to become a member of Restore Europa.

Before we review your application, we would like to learn a little more about you. There is no need to write long or polished answers — a few sentences for each question is enough. We are mainly interested in your own thoughts and motivations.

1. What made you decide to apply to Restore Europa specifically?

2. Having read through our principles and programme, which idea or section stood out to you most, and why?

3. Is there anything in our principles or programme that you disagree with, are unsure about, or would like us to clarify?

4. What are you hoping to get out of being a member of Restore Europa?

Please answer in your own words. There are no "correct" answers — this simply helps us understand who is applying and whether there is a good mutual fit.

You can reply directly to this email with your answers.`,
    },

    volunteer: {
      subject: "Your volunteer application to Restore Europa",
      body: `Hello {firstName},

Thank you for applying to volunteer with Restore Europa.

Before we review your application, we would like to learn a little more about you and how you would like to contribute. You do not need to write long answers — a few sentences for each question is enough.

1. What made you want to volunteer with Restore Europa specifically?

2. Which part of our principles, programme, or broader mission is most important to you, and why?

3. You indicated that you are interested in helping with {area}. What relevant skills, experience, or knowledge could you bring to this area?

4. Roughly how much time would you realistically be able to contribute? For example: occasionally, a few hours per month, a few hours per week, or something else.

5. Is there another area where you think you could be useful, even if you did not select it on your original application?

6. Is there anything in our principles or programme that you disagree with, are unsure about, or would like us to clarify?

Please answer in your own words. There are no "correct" answers — the purpose is simply to understand your motivation, your interests, and where you might fit best within the organisation.

You can reply directly to this email with your answers.`,
    },
  },
};
