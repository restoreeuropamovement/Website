import { decryptPiiSafe, encryptPii } from "@/lib/admin/pii";
import { db } from "@/lib/db";

/**
 * Correspondence sent through `/contact`.
 *
 * Held to the same rules as the membership roll, for a reason worth stating:
 * writing to an organisation is not the same as belonging to it, but the gap is
 * thinner than it looks. "I have been reading your manifesto and I am thinking
 * of joining" is a political opinion whatever table it lands in, so the name,
 * the address and the body are encrypted exactly as a member's are, and reading
 * them requires the same elevated session.
 *
 * `subject` comes from a fixed list and is left readable so the inbox can be
 * sorted without decrypting anything.
 */

export type EnquiryStatus = "new" | "handled";

export interface EnquiryInput {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

/** Public write. Validated and rate-limited by the caller. */
export async function createEnquiry(input: EnquiryInput): Promise<string> {
  const [nameEncrypted, emailEncrypted, messageEncrypted] = await Promise.all([
    encryptPii(input.name.trim()),
    encryptPii(input.email.trim()),
    encryptPii(input.message.trim()),
  ]);

  const [row] = await db()<{ id: string }[]>`
    INSERT INTO enquiry (name_encrypted, email_encrypted, subject, message_encrypted)
    VALUES (${nameEncrypted}, ${emailEncrypted}, ${input.subject}, ${messageEncrypted})
    RETURNING id
  `;

  return row?.id ?? "";
}

/** Counts by status. Touches no encrypted column, so it needs no elevation. */
export async function enquiryOverview(): Promise<{ newCount: number; handled: number }> {
  const rows = await db()<{ status: EnquiryStatus; n: number }[]>`
    SELECT status, count(*)::int AS n FROM enquiry GROUP BY status
  `;

  return {
    newCount: rows.find((row) => row.status === "new")?.n ?? 0,
    handled: rows.find((row) => row.status === "handled")?.n ?? 0,
  };
}

export interface RevealedEnquiry {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly status: EnquiryStatus;
  readonly createdAt: Date;
}

/**
 * **Privileged.** Decrypts, so the caller must hold an elevated session and
 * must audit the call — reading correspondence is the sensitive act here, the
 * same way reading the roll is.
 */
export async function listEnquiriesRevealed(limit = 50): Promise<readonly RevealedEnquiry[]> {
  const rows = await db()<
    {
      id: string;
      name_encrypted: string;
      email_encrypted: string;
      subject: string;
      message_encrypted: string;
      status: EnquiryStatus;
      created_at: Date;
    }[]
  >`
    SELECT id, name_encrypted, email_encrypted, subject, message_encrypted, status, created_at
      FROM enquiry
     ORDER BY status = 'handled', created_at DESC
     LIMIT ${Math.min(Math.max(limit, 1), 200)}
  `;

  return Promise.all(
    rows.map(async (row) => ({
      id: row.id,
      name: (await decryptPiiSafe(row.name_encrypted)) ?? "[unreadable]",
      email: (await decryptPiiSafe(row.email_encrypted)) ?? "[unreadable]",
      subject: row.subject,
      message: (await decryptPiiSafe(row.message_encrypted)) ?? "[unreadable]",
      status: row.status,
      createdAt: row.created_at,
    })),
  );
}

export async function setEnquiryStatus(id: string, status: EnquiryStatus): Promise<boolean> {
  const [row] = await db()<{ id: string }[]>`
    UPDATE enquiry SET status = ${status} WHERE id = ${id} RETURNING id
  `;
  return Boolean(row);
}

/** Erasure on request, the same as for a member record. */
export async function eraseEnquiry(id: string): Promise<boolean> {
  const [row] = await db()<{ id: string }[]>`
    DELETE FROM enquiry WHERE id = ${id} RETURNING id
  `;
  return Boolean(row);
}
