import { countryLabel } from "@/content/involvement";
import { wingSlugs } from "@/content/wings";
import {
  isMemberOffice,
  isWingScoped,
  type MemberOffice,
} from "@/lib/admin/member-offices";
import type { MemberStatus } from "@/lib/admin/member-status";
import { decryptPiiSafe, encryptPii, officeDigest } from "@/lib/admin/pii";
import { requireElevatedSession } from "@/lib/admin/session";
import { db } from "@/lib/db";

/**
 * Who answers for what.
 *
 * The vocabulary is in `lib/admin/member-offices.ts`; the argument for
 * encrypting these two columns is in `db/schema.sql` above `member_office` and
 * is the thing to read before changing anything here. The short version: an
 * office held by one person, beside a country held in the clear, names that
 * person — so it is treated as a name and not as a category.
 *
 * Which has one consequence that shapes every function below. Neither column
 * can be filtered, grouped or sorted in SQL, so everything that reads offices
 * reads all of them and works in memory, exactly as `searchMembersRevealed`
 * does for names. That is affordable here for a reason stronger than the one
 * there: the roll grows with the movement and this table grows with its
 * committee, which is to say barely. Do not "optimise" either column into a
 * deterministic value to get an index back — that would hand whoever steals
 * the table the ability to test which row leads which wing, which is the whole
 * of what this is defending.
 *
 * There is no export here, and no function that returns every holder's name
 * and address together for printing. A roster is a file, and a file is how
 * such lists escape; see the same omission in `lib/admin/members.ts`.
 */

/** One office held, as stored — decrypted, without the person it belongs to. */
export interface HeldOffice {
  /** The assignment's own id. What `revokeOffice` is given. */
  readonly id: string;
  readonly memberId: string;
  readonly office: MemberOffice;
  /** A wing slug, or null for the movement-wide offices. */
  readonly wing: string | null;
  /** The wing's English name, for the one surface that reads this. */
  readonly wingLabel: string | null;
  readonly grantedAt: Date;
}

/** An office held, with the person holding it. */
export interface OfficeHolder extends HeldOffice {
  readonly name: string;
  readonly country: string;
  /**
   * The holder's place in the application pipeline.
   *
   * Carried so the board can say when an office is held by a record that was
   * never accepted. That is not a hypothetical tidiness: a declined record
   * keeping a wing's leadership is the kind of inconsistency that survives for
   * months because no screen was ever in a position to mention it.
   */
  readonly status: MemberStatus;
}

export function isWingValue(value: string): boolean {
  return (wingSlugs as readonly string[]).includes(value);
}

export type GrantOutcome =
  | { readonly kind: "granted"; readonly id: string }
  /** That person already holds that office in that wing. Nothing was written. */
  | { readonly kind: "duplicate" };

/**
 * Grants one office to one member.
 *
 * The wing is dropped rather than refused when the office does not take one,
 * and that is deliberate: `isWingScoped` is the single place that decides
 * which offices belong to a wing, and a caller that disagrees with it should
 * not be able to store a press officer of Germany. The database cannot refuse
 * such a row — the column is ciphertext — so this function is the constraint.
 *
 * A duplicate is reported rather than merged, detected through the keyed
 * digest, since the encrypted columns cannot be compared. See `officeDigest`
 * for why the check lives in the database rather than in a decrypted
 * comparison here.
 */
export async function grantOffice(
  memberId: string,
  office: MemberOffice,
  wing: string | null,
): Promise<GrantOutcome> {
  const scoped = isWingScoped(office);
  if (scoped && !wing) throw new Error(`${office} must name the wing it belongs to.`);
  const held = scoped ? wing : null;

  const [officeEncrypted, wingEncrypted, digest] = await Promise.all([
    encryptPii(office),
    held ? encryptPii(held) : Promise.resolve(null),
    officeDigest(memberId, office, held),
  ]);

  const [row] = await db()<{ id: string }[]>`
    INSERT INTO member_office (member_id, office_encrypted, wing_encrypted, office_digest)
    VALUES (${memberId}, ${officeEncrypted}, ${wingEncrypted}, ${digest})
    ON CONFLICT (office_digest) DO NOTHING
    RETURNING id
  `;

  return row ? { kind: "granted", id: row.id } : { kind: "duplicate" };
}

/**
 * Withdraws one office.
 *
 * Returns what was withdrawn, decrypted, because the caller has to audit the
 * withdrawal and the digest it logs cannot be computed from an id. Deleted
 * rather than marked as ended: this table records who answers for something
 * now, and a history of who used to would be a second, unasked-for record of
 * people's political activity.
 */
export async function revokeOffice(id: string): Promise<HeldOffice | null> {
  const [row] = await db()<Row[]>`
    DELETE FROM member_office
     WHERE id = ${id}
    RETURNING id, member_id, office_encrypted, wing_encrypted, granted_at
  `;
  return row ? await present(row) : null;
}

interface Row {
  readonly id: string;
  readonly member_id: string;
  readonly office_encrypted: string;
  readonly wing_encrypted: string | null;
  readonly granted_at: Date;
}

/**
 * A row whose office will not decrypt is dropped rather than shown.
 *
 * The opposite of what the roll does with an unreadable name, and the
 * difference is what the value is for. A member row that will not open is
 * still somebody's application and an administrator has to be able to see it
 * in order to erase it; an office whose name is unreadable is not an office at
 * all — it cannot be labelled, filtered or reasoned about, and printing
 * "[unreadable]" beside a wing would be inventing a post. The member it hangs
 * from is untouched and still appears in the roll, so nothing becomes
 * invisible.
 */
async function present(row: Row): Promise<HeldOffice | null> {
  const office = await decryptPiiSafe(row.office_encrypted);
  if (!office || !isMemberOffice(office)) return null;

  const wing = row.wing_encrypted ? await decryptPiiSafe(row.wing_encrypted) : null;

  return {
    id: row.id,
    memberId: row.member_id,
    office,
    wing,
    wingLabel: wing ? countryLabel(wing) : null,
    grantedAt: row.granted_at,
  };
}

/**
 * Every office held, decrypted, without the people holding them.
 *
 * **Privileged.** An office names a person once `member.country` is read
 * beside it, so this checks for an elevated session itself rather than
 * trusting the call site — the same arrangement, and the same reasoning, as
 * `searchMembersRevealed`. The caller audits; only the caller knows what it
 * was asked for.
 *
 * This is the half the roll uses, to print each record's offices and to filter
 * by one. It deliberately joins nothing: a function that returned names would
 * be reached from somewhere that only wanted labels.
 */
export async function officesRevealed(): Promise<readonly HeldOffice[]> {
  await requireElevatedSession();

  const rows = await db()<Row[]>`
    SELECT id, member_id, office_encrypted, wing_encrypted, granted_at
      FROM member_office
     ORDER BY granted_at ASC
  `;

  const decrypted = await Promise.all(rows.map(present));
  return decrypted.filter((held): held is HeldOffice => held !== null);
}

/**
 * Every office held, with the person holding it.
 *
 * **Privileged**, and audited by the caller as a read of identities rather
 * than as a read of structure, because that is what it is: there is no view of
 * who runs a wing that is not a list of names.
 */
export async function officeHoldersRevealed(): Promise<readonly OfficeHolder[]> {
  await requireElevatedSession();

  const rows = await db()<
    (Row & { name_encrypted: string; country: string; status: MemberStatus })[]
  >`
    SELECT o.id, o.member_id, o.office_encrypted, o.wing_encrypted, o.granted_at,
           m.name_encrypted, m.country, m.status
      FROM member_office o
      JOIN member m ON m.id = o.member_id
     ORDER BY o.granted_at ASC
  `;

  const holders = await Promise.all(
    rows.map(async (row) => {
      const held = await present(row);
      if (!held) return null;

      return {
        ...held,
        // Shown rather than dropped, unlike an unreadable office: the post
        // exists and somebody holds it, and "a wing leader whose name will not
        // open" is a thing to go and fix rather than to hide.
        name: (await decryptPiiSafe(row.name_encrypted)) ?? "[unreadable]",
        country: row.country,
        status: row.status,
      } satisfies OfficeHolder;
    }),
  );

  return holders.filter((holder): holder is OfficeHolder => holder !== null);
}

/**
 * How many offices are recorded.
 *
 * A count over an encrypted table, so it needs no key and no elevation, and
 * says only whether anybody has written anything down. It is on the page above
 * the passkey wall for the reason the per-country counts are: a signed-in
 * administrator should be able to see that the movement has a committee
 * without that telling them who is on it.
 */
export async function officeTally(): Promise<number> {
  const [row] = await db()<{ held: string }[]>`
    SELECT count(*) AS held FROM member_office
  `;
  return Number(row?.held ?? 0);
}
