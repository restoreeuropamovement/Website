/**
 * Where the link at the foot of a notice to the membership lands.
 *
 * **English only, and no `de.ts` beside it.** Notices themselves are English —
 * see `memberNotice` in `content/emails/index.ts` — so the page that stops
 * them is reached only from an English message, and a translated page would be
 * a promise that the next notice arrives in that language. `lib/dictionary.ts`
 * falls back to English for a language with no file, which is the right
 * behaviour here rather than a gap to fill in later.
 */
export const noticesStop = {
  metaTitle: "Stop notices · Restore Europa",
  eyebrow: "Membership",
  title: "Stop receiving notices.",
  lede: "You will stay a member. This only stops the movement writing to you.",

  /*
   * Said before the button rather than after it. Somebody who arrived here by
   * accident, or from a message forwarded to them, should be able to see what
   * the press does before making it — and somebody who meant to come here is
   * owed the reassurance that it is not a resignation.
   */
  why: `Pressing this stops the Restore Europa Movement writing to you about its
affairs. It does not resign your membership, does not remove your record, and
does not affect any application you have outstanding. If you also subscribed
to the journal, that is a separate list with its own link at the foot of each
issue, and this does not touch it.`,

  submit: "Stop sending me notices",
  submitting: "Stopping…",

  /** Shown when the link carried no token at all — typically a hand-typed URL. */
  missing: `This link is incomplete. Open it again from the message it came in, or write
to us through the contact form and a person will do it for you.`,

  done: {
    title: "Done. We will not write again.",
    /*
     * Names the one case the silence hides. The panel reports success whatever
     * the token matched, for the reasons in `StopPanel`; a tag minted before
     * the encryption key was last replaced no longer verifies, and the honest
     * way to keep both the silence and the accuracy is to say so here.
     */
    body: `You remain a member and nothing else has changed. If a notice does reach you
after this — which can happen if the message you used was an old one — write
to us through the contact form and it will be done by hand.`,
  },
} as const;
