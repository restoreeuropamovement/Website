import { OTHER_COUNTRY, countryLabel, isCountryValue } from "@/content/involvement";
import {
  type GatheringVisibility,
  isGatheringVisibility,
} from "@/lib/admin/gathering-visibility";
import { decryptPiiSafe, encryptPii } from "@/lib/admin/pii";
import { requireElevatedSession } from "@/lib/admin/session";
import { db } from "@/lib/db";

/**
 * Meetups, dinners and public events — the one table about where people will
 * physically be.
 *
 * The safety argument is in `db/schema.sql` and is worth reading before
 * changing anything here. The short version: an address is either meant to be
 * published, and is plain, or it is not, and this database never holds it
 * readably. The schema refuses rows that are neither.
 *
 * What that buys is narrow and worth being honest about. It means a stolen
 * database does not hand somebody a list of addresses to turn up at. It does
 * nothing at all about the likelier route, which is that a person who was told
 * where the meetup is passes it on — by malice, or by mentioning it in a group
 * chat. No schema can help with that, which is why `invitation` exists: the
 * site says a gathering is happening and a human decides who learns where.
 */

export interface GatheringDraft {
  readonly title: string;
  readonly wing: string;
  readonly city: string;
  /** `YYYY-MM-DDTHH:mm`, as an `<input type="datetime-local">` gives it. */
  readonly startsAt: string;
  readonly endsAt: string;
  readonly visibility: GatheringVisibility;
  readonly summary: string;
  readonly venue: string;
  readonly notes: string;
}

export interface Gathering {
  readonly id: string;
  readonly title: string;
  readonly wing: string;
  readonly wingLabel: string;
  readonly city: string;
  readonly startsAt: Date;
  readonly endsAt: Date | null;
  readonly visibility: GatheringVisibility;
  readonly summary: string;
  /**
   * The address, or `null` when there is one but it was not decrypted.
   *
   * The distinction the page needs is "no address recorded" against "an
   * address you are not currently holding a passkey for", and those must not
   * look the same — the second is a prompt, the first is a thing to go and fix
   * before anybody turns up at a city with no venue.
   */
  readonly venue: string | null;
  readonly hasVenue: boolean;
  readonly notes: string | null;
  readonly hasNotes: boolean;
  readonly cancelledAt: Date | null;
}

interface Row {
  readonly id: string;
  readonly title: string;
  readonly wing: string;
  readonly city: string;
  readonly starts_at: Date;
  readonly ends_at: Date | null;
  readonly visibility: string;
  readonly summary: string;
  readonly venue: string;
  readonly venue_encrypted: string | null;
  readonly notes_encrypted: string | null;
  readonly cancelled_at: Date | null;
}

const MAX = { title: 140, city: 80, summary: 600, venue: 300, notes: 2000 } as const;

/**
 * Validated here rather than in the action, so the public reader — when there
 * is one — and the admin form cannot disagree about what a usable record is.
 *
 * The venue rule is the only interesting one: a gathering without an address is
 * allowed, because a date and a city is often all that is settled first, and
 * refusing to record that would mean not recording anything until the venue is
 * booked.
 */
export function validateGathering(draft: GatheringDraft): readonly string[] {
  const errors: string[] = [];

  if (draft.title.length < 3 || draft.title.length > MAX.title) {
    errors.push(`Give it a title, up to ${MAX.title} characters.`);
  }
  if (!isCountryValue(draft.wing)) {
    errors.push("Choose which wing it belongs to.");
  }
  if (draft.city.length < 2 || draft.city.length > MAX.city) {
    errors.push(`Name the city, up to ${MAX.city} characters.`);
  }
  if (Number.isNaN(Date.parse(draft.startsAt))) {
    errors.push("Give a date and time it starts.");
  }
  if (draft.endsAt && Number.isNaN(Date.parse(draft.endsAt))) {
    errors.push("The finishing time is not a date.");
  }
  if (
    draft.endsAt &&
    !Number.isNaN(Date.parse(draft.startsAt)) &&
    !Number.isNaN(Date.parse(draft.endsAt)) &&
    Date.parse(draft.endsAt) < Date.parse(draft.startsAt)
  ) {
    errors.push("It cannot finish before it starts.");
  }
  if (draft.summary.length > MAX.summary) {
    errors.push(`The description is limited to ${MAX.summary} characters.`);
  }
  if (draft.venue.length > MAX.venue) {
    errors.push(`The address is limited to ${MAX.venue} characters.`);
  }
  if (draft.notes.length > MAX.notes) {
    errors.push(`Notes are limited to ${MAX.notes} characters.`);
  }

  return errors;
}

/**
 * Writes one gathering, putting the address in whichever column its visibility
 * allows.
 *
 * The branch is the security boundary, and it is deliberately the only place in
 * the codebase that decides it. A public gathering's address goes in plain
 * because a public page has to render it and the public site holds no
 * decryption key by design; anything else is encrypted. The schema's `CHECK`
 * constraints say the same thing a second time, so a future caller that gets
 * this wrong is refused by Postgres rather than quietly publishing an address.
 */
export async function saveGathering(draft: GatheringDraft, id?: string): Promise<string> {
  const sql = db();

  const open = draft.visibility === "public";
  const venue = open ? draft.venue : "";
  const venueEncrypted = open || !draft.venue ? null : await encryptPii(draft.venue);
  const notesEncrypted = draft.notes ? await encryptPii(draft.notes) : null;
  const endsAt = draft.endsAt ? new Date(draft.endsAt) : null;

  if (id) {
    const [row] = await sql<{ id: string }[]>`
      UPDATE gathering SET
        title = ${draft.title},
        wing = ${draft.wing},
        city = ${draft.city},
        starts_at = ${new Date(draft.startsAt)},
        ends_at = ${endsAt},
        visibility = ${draft.visibility},
        summary = ${draft.summary},
        venue = ${venue},
        venue_encrypted = ${venueEncrypted},
        notes_encrypted = ${notesEncrypted},
        updated_at = now()
      WHERE id = ${id}
      RETURNING id
    `;
    if (!row) throw new Error(`No gathering with id ${id}.`);
    return row.id;
  }

  const [created] = await sql<{ id: string }[]>`
    INSERT INTO gathering
      (title, wing, city, starts_at, ends_at, visibility, summary, venue, venue_encrypted, notes_encrypted)
    VALUES (
      ${draft.title}, ${draft.wing}, ${draft.city}, ${new Date(draft.startsAt)}, ${endsAt},
      ${draft.visibility}, ${draft.summary}, ${venue}, ${venueEncrypted}, ${notesEncrypted}
    )
    RETURNING id
  `;
  if (!created) throw new Error("The gathering was not written.");
  return created.id;
}

async function present(row: Row, reveal: boolean): Promise<Gathering> {
  const visibility = isGatheringVisibility(row.visibility) ? row.visibility : "private";

  /*
   * A public gathering's address is in the clear, so there is nothing to
   * reveal and no reason to make somebody touch a passkey to read what a
   * stranger could read on the site.
   */
  const plain = visibility === "public" ? row.venue : "";
  const hasVenue = plain !== "" || row.venue_encrypted !== null;

  const venue =
    plain !== ""
      ? plain
      : row.venue_encrypted && reveal
        ? await decryptPiiSafe(row.venue_encrypted)
        : null;

  return {
    id: row.id,
    title: row.title,
    wing: row.wing,
    wingLabel: row.wing === OTHER_COUNTRY ? "Elsewhere" : countryLabel(row.wing),
    city: row.city,
    startsAt: row.starts_at,
    endsAt: row.ends_at,
    visibility,
    summary: row.summary,
    venue,
    hasVenue,
    notes: row.notes_encrypted && reveal ? await decryptPiiSafe(row.notes_encrypted) : null,
    hasNotes: row.notes_encrypted !== null,
    cancelledAt: row.cancelled_at,
  };
}

const COLUMNS = `id, title, wing, city, starts_at, ends_at, visibility, summary,
                 venue, venue_encrypted, notes_encrypted, cancelled_at`;

/**
 * Everything, soonest first, for the administrative list.
 *
 * **Privileged when `reveal` is set.** Addresses and organiser notes come back
 * in the clear only then, and the caller must hold an elevated session and
 * audit the read — the same arrangement as the membership roll, for the same
 * reason. Being signed in is a cookie; knowing where forty people will be on
 * Thursday should cost a passkey touch.
 */
export async function listGatherings(reveal = false): Promise<readonly Gathering[]> {
  if (reveal) await requireElevatedSession();

  const rows = await db().unsafe<Row[]>(
    `SELECT ${COLUMNS} FROM gathering ORDER BY starts_at DESC`,
  );
  return Promise.all(rows.map((row) => present(row, reveal)));
}

/**
 * Splits a list into what is still to come and what is behind us.
 *
 * Here rather than in the page because it needs the clock, and a component that
 * reads the clock while rendering is not a pure function of its props. It also
 * belongs with the data: a cancelled gathering counts as past however far off
 * its date is, and that is a fact about gatherings rather than about layout.
 */
export function splitGatheringsByWhen(gatherings: readonly Gathering[]): {
  readonly ahead: readonly Gathering[];
  readonly behind: readonly Gathering[];
} {
  const now = Date.now();
  const ahead = gatherings.filter(
    (one) => one.cancelledAt === null && one.startsAt.getTime() >= now,
  );
  const behind = gatherings.filter(
    (one) => one.cancelledAt !== null || one.startsAt.getTime() < now,
  );
  return { ahead, behind };
}

export async function setGatheringCancelled(id: string, cancelled: boolean): Promise<void> {
  await db()`
    UPDATE gathering
       SET cancelled_at = ${cancelled ? new Date() : null}, updated_at = now()
     WHERE id = ${id}
  `;
}

export async function deleteGathering(id: string): Promise<void> {
  await db()`DELETE FROM gathering WHERE id = ${id}`;
}

/**
 * What a public page would be allowed to show — **and there is no such page
 * yet**, deliberately.
 *
 * It lives here anyway because it is where the publication rule belongs: one
 * function that decides what leaves the building, rather than that decision
 * being spread across a template where the next person to touch it has to
 * notice. When a public route is added it calls this and renders whatever it
 * returns, and cannot accidentally render more.
 *
 * Note what is missing from the return type: there is no venue for an
 * `invitation` gathering, because the whole point of that setting is that the
 * address is given out by a person. A field that existed here would eventually
 * be rendered.
 */
export interface PublishedGathering {
  readonly id: string;
  readonly title: string;
  readonly wingLabel: string;
  readonly city: string;
  readonly startsAt: Date;
  readonly endsAt: Date | null;
  readonly summary: string;
  /** Present only for an open event; `null` means "ask, and a person decides". */
  readonly venue: string | null;
  readonly open: boolean;
}

export async function publishedGatherings(): Promise<readonly PublishedGathering[]> {
  const rows = await db().unsafe<Row[]>(
    `SELECT ${COLUMNS} FROM gathering
      WHERE cancelled_at IS NULL
        AND visibility IN ('public', 'invitation')
        AND starts_at > now()
      ORDER BY starts_at ASC`,
  );

  return rows.map((row) => {
    const open = row.visibility === "public";
    return {
      id: row.id,
      title: row.title,
      wingLabel: row.wing === OTHER_COUNTRY ? "Elsewhere" : countryLabel(row.wing),
      city: row.city,
      startsAt: row.starts_at,
      endsAt: row.ends_at,
      summary: row.summary,
      venue: open ? row.venue : null,
      open,
    };
  });
}
