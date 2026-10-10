import { createDictionary } from "@/lib/dictionary";
import type { ContentBlock } from "@/lib/content-types";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { newsletterText as englishText } from "./en";

/**
 * The subscription page and the two pages a mailed link lands on.
 *
 * Its own domain rather than a third section of `content/involvement`, which
 * is where a reader might look for it. Joining and writing in are both
 * addressed to a person who will read what you typed; subscribing is not
 * addressed to anybody, and the page has to say so. Keeping them apart also
 * keeps the intake's error codes and country list out of a module whose whole
 * form is one text box.
 *
 * There is no `structure.ts` here because there is nothing structural to hold.
 * The statuses the form renders are the `NewsletterState` union in
 * `app/(site)/newsletter/state.ts`, which is where the action that produces
 * them lives, and the route is `routes.newsletter` like every other address.
 */

export interface NewsletterText {
  readonly eyebrow: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly lede: string;
  readonly description: string;
  /** What the letter is, what is stored, and how to stop. */
  readonly body: readonly ContentBlock[];

  readonly form: {
    readonly heading: string;
    readonly email: string;
    readonly submit: string;
    readonly submitting: string;
    readonly privacyNote: string;
    readonly privacyLink: string;
    /** The address did not parse. The only refusal this form ever shows. */
    readonly invalid: string;
    /** No database or no encryption key: the page says so rather than lying. */
    readonly unavailable: string;
    /** This connection has asked several times already. */
    readonly throttled: string;
    /** The site-wide hourly ceiling. See the note on the intake's `busy`. */
    readonly busy: string;
    /**
     * Shown for a new address and for one already on the list alike, because
     * the reply must not vary with what is stored — otherwise the form is a
     * way to test who subscribes. The wording therefore describes what was
     * done to the *inbox*, which is the one place the difference belongs.
     */
    readonly sent: { readonly title: string; readonly body: string };
  };

  readonly confirm: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    /** Why this is a button and not simply the link that was clicked. */
    readonly why: string;
    readonly submit: string;
    readonly submitting: string;
    readonly done: { readonly title: string; readonly body: string };
    readonly failed: { readonly title: string; readonly body: string };
    /** Reached without a token at all. */
    readonly missing: string;
  };

  readonly unsubscribe: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly why: string;
    readonly submit: string;
    readonly submitting: string;
    readonly done: { readonly title: string; readonly body: string };
    readonly missing: string;
  };
}

export interface NewsletterEdition extends NewsletterText {
  readonly locale: Locale;
}

const getNewsletterText = createDictionary<NewsletterText>(englishText, {
  de: () => import("./de").then((m) => m.newsletterText),
  fr: () => import("./fr").then((m) => m.newsletterText),
  pl: () => import("./pl").then((m) => m.newsletterText),
  it: () => import("./it").then((m) => m.newsletterText),
  es: () => import("./es").then((m) => m.newsletterText),
});

export async function getNewsletter(locale: Locale): Promise<NewsletterEdition> {
  return { locale, ...(await getNewsletterText(locale)) };
}

/** The English edition, for the unprefixed pages that have no locale in hand. */
export const englishNewsletter: NewsletterEdition = {
  locale: DEFAULT_LOCALE,
  ...englishText,
};
