/**
 * Who may know a gathering is happening, and nothing else.
 *
 * Split out from `lib/admin/gatherings.ts` for the same reason
 * `lib/admin/member-status.ts` is split from `lib/admin/members.ts`: the form
 * that offers these choices is a client component, and that module reaches the
 * database and the encryption key. Importing it from the browser bundle would
 * pull the Postgres driver across the boundary. This file imports nothing.
 *
 * The three settings map onto what actually happens rather than onto a database
 * convenience:
 *
 *   `public`      an open event. Everything about it may be published,
 *                 including the address — so the address is stored in plain
 *                 text, because the public site deliberately holds no
 *                 decryption key.
 *   `invitation`  that it is happening may be said; where it is may not. The
 *                 address is encrypted and given out by a person, close to the
 *                 day, to the people they choose.
 *   `private`     nothing is published at all. A dinner for one city's wing.
 *
 * `invitation` is the one that does the real work. Encryption protects an
 * address from a stolen database; it does nothing about somebody who was told
 * the address repeating it. The answer to that is not technical — it is a human
 * deciding who learns the venue and when — and this setting is how the design
 * admits that rather than pretending the cipher covers it.
 */

export const gatheringVisibilities = ["public", "invitation", "private"] as const;

export type GatheringVisibility = (typeof gatheringVisibilities)[number];

/** Narrows an untrusted string — a form field, a query parameter. */
export function isGatheringVisibility(value: string): value is GatheringVisibility {
  return (gatheringVisibilities as readonly string[]).includes(value);
}

/**
 * What each choice means, in the words the form shows.
 *
 * Stated on the form rather than left to a label, because the consequence of
 * choosing wrongly here is not a tidier list — it is an address in front of
 * people who were never meant to have it.
 */
export const VISIBILITY_NOTE: Readonly<Record<GatheringVisibility, string>> = {
  public:
    "Anyone may come. The title, city, address and time can all be published, so none of it is encrypted.",
  invitation:
    "That it is happening may be published — city and month, never the address. You tell people where.",
  private: "Nothing is published. The record exists so you have one place that remembers it.",
};

/** What each setting is called on screen. */
export const VISIBILITY_LABEL: Readonly<Record<GatheringVisibility, string>> = {
  public: "Open event",
  invitation: "By invitation",
  private: "Private",
};
