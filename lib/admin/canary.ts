import { canaryMemberEmails } from "@/lib/admin/env";
import { emailDigest } from "@/lib/admin/pii";

/**
 * Addresses planted in the membership roll that belong to no member.
 *
 * Every other control in this system tries to stop the roll being copied. None
 * of them tells you whether one already has been, and that is the question with
 * the longest tail: a list taken quietly is used months later, by which time the
 * logs have rolled over and the session that took it is long expired. Breaches
 * are typically discovered because the data turns up somewhere, and without a
 * marker there is nothing to turn up *as*.
 *
 * So the roll contains addresses that only a copy of the roll could supply.
 * Nobody signed up with them, they are not printed anywhere, and no legitimate
 * process sends to them except the movement's own newsletter. Mail arriving at
 * one from anyone else is not evidence that something might have gone wrong: it
 * is the copy, in hand, with a postmark.
 *
 * ## Why nothing in the database says which row it is
 *
 * The obvious implementation is a boolean column, and it is worthless. An
 * attacker who dumps this table reads the schema in the same breath; a column
 * called `is_canary` is an instruction for which rows to drop, and the trap
 * catches nobody who bothered to look. So the row is an ordinary row in every
 * respect, and the knowledge of which one it is lives in the environment,
 * beside the key — recoverable only by someone who already has what the canary
 * exists to detect the theft of.
 *
 * Identified by keyed digest rather than by comparing addresses, so recognising
 * one costs no decryption and works on a row nobody has unwrapped.
 *
 * ## What it does not do
 *
 * It cannot tell you who took the list, only that somebody did. A canary is an
 * alarm, not a watermark. Per-recipient addresses would narrow it to a leak
 * path, and that is a thing to build later if there is ever cause; the first and
 * much larger step is having any alarm at all.
 */

let cached: { configured: string; digests: Promise<ReadonlySet<string>> } | undefined;

/** Keyed digests of the configured canary addresses. Empty when none are set. */
export function canaryDigests(): Promise<ReadonlySet<string>> {
  const emails = canaryMemberEmails();
  const configured = emails.join(",");

  if (cached?.configured !== configured) {
    cached = {
      configured,
      digests: Promise.all(emails.map(emailDigest)).then((all) => new Set(all)),
    };
  }

  return cached.digests;
}

/**
 * Whether a stored `email_digest` belongs to a canary.
 *
 * Used to label the row where an administrator would otherwise meet a member
 * who does not exist, wonder, and possibly write to them. Labelling it in the
 * rendered page gives away nothing: reaching that page already requires an
 * elevated session, and anyone holding one can read every real name too.
 */
export async function isCanaryDigest(digest: string): Promise<boolean> {
  const digests = await canaryDigests();
  return digests.size > 0 && digests.has(digest);
}
