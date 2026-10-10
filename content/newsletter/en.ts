import type { NewsletterText } from "./index";

export const newsletterText: NewsletterText = {
  eyebrow: "Newsletter",
  title: "The journal by email",
  metaTitle: "Newsletter",
  lede: "One address, the movement's essays as they are written, and a link in every message that takes you off the list again.",
  description:
    "Receive the Restore Europa journal by email. One address, encrypted before it is stored, confirmed before anything is sent, and removable from a link in every message.",

  body: [
    {
      type: "lead",
      text: "Subscribing puts one email address on a list, and that list receives the movement's essays. Nothing else is sent to it — no appeals, no invitations, no forwarding to anybody.",
    },
    {
      type: "paragraph",
      text: "The journal has no public pages at present, so for the moment the letter is where its essays appear. Each one arrives in full, as plain text: no images, no styling, and nothing that reports back whether you opened it.",
    },
    {
      type: "paragraph",
      text: "**You will be asked to confirm.** The address is held unconfirmed until a link sent to it is followed, nothing is delivered before that, and an address that is never confirmed is deleted unread once its link has expired two days later. This is not a formality. Anyone can type a stranger's address into a box, and for somebody whose interest in this movement would cost them their job, political mail they did not ask for is a real harm done in their name.",
    },
    {
      type: "paragraph",
      text: "**The address is encrypted before it is written down**, with a key that is not kept in the database, so a stolen copy of it decrypts to nothing. Beside it we store which language you were reading in, so the letter is addressed to you in that language. There is no name, no country, and no way for anyone to download the list. What is held, and for how long, is set out in the [privacy note][privacy].",
    },
    {
      type: "paragraph",
      text: "**Leaving takes one click.** Every message carries a link that removes the address, and it asks for no sign-in and no reason. That link is not stored anywhere — it is recomputed from the record each time it is used — so a copy of the database would give nobody a button that empties the list, and a message found in an archive years from now still works.",
    },
    {
      type: "note",
      text: "The essays are written in English and are not translated. What the movement says around each one — the note at the foot, the instructions for leaving — is in the language you subscribed in.",
    },
  ],

  form: {
    heading: "Subscribe",
    email: "Email address",
    submit: "Subscribe",
    submitting: "Sending…",
    privacyNote: "What happens to your address is set out in the",
    privacyLink: "privacy note",
    invalid: "That does not look like an email address. Nothing has been sent or stored.",
    unavailable:
      "Subscriptions cannot be recorded at the moment, so this form is not accepting addresses. Nothing you type here would be stored, and we would rather say so than take it.",
    throttled:
      "This connection has asked several times in the last hour. Wait a while and try once more — an address is only ever added once, so an earlier attempt may already have worked.",
    busy:
      "The site has reached the number of submissions it accepts in an hour, across everybody. This is almost certainly nothing to do with you. Try again shortly.",
    sent: {
      title: "Now check that address.",
      body: "A message is on its way to it. What that message says depends on what is already on the list, and only whoever can open the inbox will see it — this page is told nothing either way, so that the form cannot be used to find out who subscribes. If the message carries a confirmation link, nothing further is sent until that link is followed.",
    },
  },

  confirm: {
    eyebrow: "Newsletter",
    title: "Confirm your subscription",
    metaTitle: "Confirm your subscription",
    lede: "One press, and the address this link belongs to joins the list.",
    why: "A button rather than the link on its own, because corporate mail filters open every address in an incoming message to check that it is safe. If following the link were enough, those scanners would confirm subscriptions on behalf of people who never opened the mail — and they are most common in exactly the places where somebody's reading is most closely watched.",
    submit: "Confirm",
    submitting: "Confirming…",
    done: {
      title: "Confirmed.",
      body: "The address is on the list, and the next essay will be sent to it. Every message carries a link that takes it off again.",
    },
    failed: {
      title: "That link did not work.",
      body: "A confirmation link is good for two days and can be used once. If it has expired, or has already been used, ask again from the [newsletter page][newsletter] and a new one will be sent.",
    },
    missing:
      "This address carries no confirmation token, so there is nothing here to confirm. Open the link in the message that was sent to you.",
  },

  unsubscribe: {
    eyebrow: "Newsletter",
    title: "Leave the list",
    metaTitle: "Leave the list",
    lede: "One press, and the address this link belongs to stops receiving anything.",
    why: "A button rather than removal on sight, for the same reason the confirmation is one: the link scanners built into corporate mail systems open every address in a message, and a link that unsubscribed when it was opened would quietly remove readers who never asked to leave.",
    submit: "Unsubscribe",
    submitting: "Removing…",
    done: {
      title: "Done. Nothing further will be sent.",
      body: "We do not say whether the address was on the list, because whoever is holding this link is not necessarily the person who owns the address, and that is not a question we will answer to a stranger. You can subscribe again at any time, and it will start from the confirmation step. If anything does still arrive, the link you used was issued before the encryption key now in use and is no longer recognised; the one at the foot of the newest message will be.",
    },
    missing:
      "This address carries no token, so there is nothing here to remove. Use the link at the foot of any message you were sent.",
  },
};
