import { createDictionary } from "@/lib/dictionary";
import { englishWings, getWings, type WingsEdition } from "@/content/wings";
import { retiredWingSlugs } from "@/content/wings/structure";
import type { PluralForms } from "@/lib/format";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { involvementText as englishText } from "./en";
import {
  contactChannelIds,
  interestAreaIds,
  involvementRoleIds,
  OTHER_COUNTRY,
  type ContactChannelId,
  type ContactErrorCode,
  type InterestAreaId,
  type InvolvementRoleId,
  type JoinErrorCode,
  type RetiredRoleId,
} from "./structure";

/**
 * The membership intake and the contact form, in six languages.
 *
 * The country list is assembled from the wings edition for the same locale, so
 * a reader choosing their country sees it spelled the way the rest of the page
 * spells it — and the option's *value* is the wing slug either way.
 */
export {
  contactChannelIds,
  contactErrorCodes,
  countryValues,
  interestAreaIds,
  involvementRoleIds,
  isContactChannel,
  isCountryValue,
  isInterestArea,
  isInvolvementRole,
  joinErrorCodes,
  OTHER_COUNTRY,
  pickCountry,
  pickRole,
  resolveInvolvementRole,
  retiredRoleIds,
} from "./structure";
export type {
  ContactChannelId,
  ContactErrorCode,
  InterestAreaId,
  InvolvementRoleId,
  JoinErrorCode,
  RetiredRoleId,
} from "./structure";

export interface InvolvementRoleText {
  readonly title: string;
  readonly summary: string;
  readonly commitment: string;
}

export interface ContactChannelText {
  readonly title: string;
  readonly description: string;
}

export interface InvolvementText {
  readonly join: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly description: string;
    /** Shown when the reader arrived from a wing page. Takes `{country}`. */
    readonly prefilled: string;
    readonly roleLegend: string;
    readonly fields: {
      readonly name: string;
      readonly email: string;
      readonly country: string;
      readonly region: string;
      readonly interest: string;
      readonly message: string;
      readonly messageHint: string;
      readonly optional: string;
      readonly placeholder: string;
      readonly otherCountry: string;
    };
    readonly consent: string;
    readonly submit: string;
    readonly submitting: string;
    readonly privacyNote: string;
    readonly privacyLink: string;
    readonly received: {
      readonly title: string;
      readonly body: string;
      readonly privacy: string;
      readonly privacyLink: string;
    };
    readonly unavailable: string;
    /** This connection has sent several already. */
    readonly throttled: string;
    /**
     * The site-wide hourly ceiling was reached, which is a different fact and
     * needs a different sentence: the reader has very probably sent nothing,
     * and telling them they have already applied would be untrue precisely
     * when the largest number of people are reading it.
     */
    readonly busy: string;
    /** "There are 2 problems with this form". */
    readonly problemCount: PluralForms;
    readonly errors: Record<JoinErrorCode, string>;
  };

  readonly roles: Record<InvolvementRoleId, InvolvementRoleText>;
  /** Older public labels, so a hand-entered record still reads in the roll. */
  readonly retiredRoles: Record<RetiredRoleId, string>;
  readonly interests: Record<InterestAreaId, string>;

  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly metaTitle: string;
    readonly lede: string;
    readonly description: string;
    readonly channelsHeading: string;
    readonly writeHeading: string;
    readonly writeBody: string;
    readonly fields: {
      readonly name: string;
      readonly email: string;
      readonly subject: string;
      readonly message: string;
      readonly placeholder: string;
    };
    readonly submit: string;
    readonly submitting: string;
    readonly privacyNote: string;
    readonly privacyLink: string;
    readonly sent: {
      readonly title: string;
      readonly body: string;
      readonly privacy: string;
      readonly privacyLink: string;
    };
    readonly unavailable: string;
    readonly throttled: string;
    /** See the note on the membership form's `busy`. */
    readonly busy: string;
    readonly problemCount: PluralForms;
    readonly errors: Record<ContactErrorCode, string>;
    /**
     * The closing paragraph, split at its two links rather than written as one
     * string with markup in it: a `<Link>` is not something a language file
     * should contain, and the clause order around it differs by language.
     */
    readonly ratherTakePart: {
      readonly before: string;
      readonly joinLink: string;
      readonly between: string;
      readonly imprintLink: string;
      readonly after: string;
    };
  };

  readonly channels: Record<ContactChannelId, ContactChannelText>;
}

/** An option as a `<select>` wants it: a stored id and a readable label. */
export interface SelectOption {
  readonly value: string;
  readonly label: string;
}

export interface InvolvementEdition {
  readonly locale: Locale;
  readonly join: InvolvementText["join"];
  readonly contact: InvolvementText["contact"];
  readonly roles: readonly ({ readonly id: InvolvementRoleId } & InvolvementRoleText)[];
  readonly channels: readonly ({ readonly id: ContactChannelId } & ContactChannelText)[];
  readonly countries: readonly SelectOption[];
  readonly interests: readonly SelectOption[];
  readonly subjects: readonly SelectOption[];
}

const getInvolvementText = createDictionary<InvolvementText>(englishText, {
  de: () => import("./de").then((m) => m.involvementText),
  fr: () => import("./fr").then((m) => m.involvementText),
  pl: () => import("./pl").then((m) => m.involvementText),
  it: () => import("./it").then((m) => m.involvementText),
  es: () => import("./es").then((m) => m.involvementText),
});

function edition(
  locale: Locale,
  text: InvolvementText,
  wings: WingsEdition,
): InvolvementEdition {
  return {
    locale,
    join: text.join,
    contact: text.contact,
    roles: involvementRoleIds.map((id) => ({ id, ...text.roles[id] })),
    channels: contactChannelIds.map((id) => ({ id, ...text.channels[id] })),
    /*
     * Countries come from the wings edition and arrive already sorted for this
     * language. "Other" is appended rather than sorted in: it is not a country
     * and readers look for it at the end of a list, not under O.
     */
    countries: [
      ...wings.wings.map((wing) => ({ value: wing.slug, label: wing.country })),
      { value: OTHER_COUNTRY, label: text.join.fields.otherCountry },
    ],
    interests: interestAreaIds.map((id) => ({ value: id, label: text.interests[id] })),
    subjects: contactChannelIds.map((id) => ({ value: id, label: text.channels[id].title })),
  };
}

export async function getInvolvement(locale: Locale): Promise<InvolvementEdition> {
  const [text, wings] = await Promise.all([getInvolvementText(locale), getWings(locale)]);
  return edition(locale, text, wings);
}

/**
 * The English edition.
 *
 * Also what the administrative surface reads. `/admin` is not translated — it
 * is one unlisted backend read by the people who run the movement, not a
 * public page — so it wants labels in one language, and this is the one the
 * database's stored ids were named in.
 */
export const englishInvolvement: InvolvementEdition = edition(
  DEFAULT_LOCALE,
  englishText,
  englishWings,
);

/* ------------------------------------------------- labels for stored ids */

/**
 * English labels for the four values stored as ids.
 *
 * Plain functions rather than members of the edition: an edition is handed
 * whole to `JoinForm` and `ContactForm`, which are Client Components, and a
 * function cannot cross that boundary — the build fails outright rather than
 * at runtime, which is the right place for it to fail.
 *
 * English only, because the one surface that reads stored rows is `/admin`,
 * and it is not translated. An unknown id comes back as it stands rather than
 * blank: a value the lists no longer contain is something whoever is looking
 * at the roll should see.
 */
const englishCountryLabels = new Map<string, string>([
  ...englishWings.wings.map((wing) => [wing.slug, wing.country] as const),
  ...Object.entries(retiredWingSlugs),
  [OTHER_COUNTRY, englishText.join.fields.otherCountry],
]);

export function roleTitle(id: string): string {
  return (
    englishText.roles[id as InvolvementRoleId]?.title ??
    englishText.retiredRoles[id as RetiredRoleId] ??
    id
  );
}

export function countryLabel(id: string): string {
  return englishCountryLabels.get(id) ?? id;
}

export function interestLabel(id: string): string {
  return englishText.interests[id as InterestAreaId] ?? id;
}

export function channelTitle(id: string): string {
  return englishText.channels[id as ContactChannelId]?.title ?? id;
}
