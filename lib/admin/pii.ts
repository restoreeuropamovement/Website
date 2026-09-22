import { fromBase64Url, toBase64Url } from "@/lib/admin/crypto";
import { memberEncryptionKey } from "@/lib/admin/env";

/**
 * Encryption for the identifying fields of a membership record.
 *
 * The threat this defends against is the one that actually happens: the database
 * leaving the database. A misplaced backup, a stolen connection string, a cloud
 * bucket left open, an injection that reaches `SELECT *`. In every one of those
 * the attacker gets rows, not a running server — so if the key is not in the
 * rows, what they get is noise.
 *
 * That is the whole argument for doing this in the application rather than
 * relying on the provider's "encryption at rest", which decrypts transparently
 * for anyone holding valid credentials and therefore protects against precisely
 * one scenario: somebody stealing the physical disk.
 *
 * AES-256-GCM, a fresh 96-bit nonce per value, and the authentication tag
 * checked on every read — so a tampered ciphertext fails loudly instead of
 * decrypting to something attacker-chosen. Values are stored as
 * `v1.<nonce>.<ciphertext+tag>`, all base64url; the version prefix exists so a
 * future key rotation can re-wrap old values without guessing their format.
 *
 * Deliberately *not* deterministic. Encrypting the same name twice gives two
 * different ciphertexts, which means the table cannot be mined for "how many
 * members share a surname" or "is this specific person a member" by anyone who
 * can compare ciphertexts. The cost is that the database cannot index or search
 * these columns at all — see `lib/admin/members.ts` for how search works given
 * that, and why that trade is the right way round here.
 */

const VERSION = "v1";
const NONCE_BYTES = 12;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

/**
 * Two keys are needed — one to encrypt with, one to compute blind digests with —
 * and they are derived from the configured master key through HKDF rather than
 * both being the master key itself. Using one key with two algorithms is the
 * kind of shortcut that is usually harmless and occasionally catastrophic; the
 * distinct `info` labels below cost nothing and remove the question entirely.
 */
/*
 * These strings are cryptographic inputs, not labels. Their content is
 * arbitrary; their *stability* is not. Editing either one changes the key HKDF
 * derives, which would make every value already encrypted under the old key
 * undecryptable and every stored digest unmatchable — silently, with no error at
 * the point of damage.
 *
 * Renaming them from the movement's former initials was therefore safe only
 * because no records existed yet. Once there is a single member row, treat these
 * two lines as immutable: a rebrand is not a reason to orphan the roll. If they
 * ever genuinely must change, that is a migration — decrypt under the old key,
 * re-encrypt under the new — and not an edit.
 */
const AES_INFO = "restore-europe:member:aes-256-gcm:v1";
const DIGEST_INFO = "restore-europe:member:hmac-sha256:v1";

interface DerivedKeys {
  readonly cipher: CryptoKey;
  readonly digest: CryptoKey;
}

let cached: { secret: string; keys: Promise<DerivedKeys> } | undefined;

async function derive(secret: string): Promise<DerivedKeys> {
  const master = await crypto.subtle.importKey(
    "raw",
    fromBase64Url(secret),
    "HKDF",
    false,
    ["deriveKey"],
  );

  // No salt: the master key is already 256 bits of uniform randomness, which is
  // the case HKDF's salt exists to fix. The labels do the separating.
  const params = (info: string): HkdfParams => ({
    name: "HKDF",
    hash: "SHA-256",
    salt: new Uint8Array(new ArrayBuffer(0)),
    info: encoder.encode(info),
  });

  const [cipher, digest] = await Promise.all([
    crypto.subtle.deriveKey(params(AES_INFO), master, { name: "AES-GCM", length: 256 }, false, [
      "encrypt",
      "decrypt",
    ]),
    crypto.subtle.deriveKey(
      params(DIGEST_INFO),
      master,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    ),
  ]);

  return { cipher, digest };
}

/**
 * Derivation is cached per process, and keyed on the secret so that rotating it
 * in a long-lived dev server does not keep using the previous key.
 */
function keys(): Promise<DerivedKeys> {
  const secret = memberEncryptionKey();
  if (cached?.secret !== secret) {
    cached = { secret, keys: derive(secret) };
  }
  return cached.keys;
}

export async function encryptPii(plaintext: string): Promise<string> {
  const nonce = crypto.getRandomValues(new Uint8Array(NONCE_BYTES));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: nonce },
    (await keys()).cipher,
    encoder.encode(plaintext),
  );

  return `${VERSION}.${toBase64Url(nonce)}.${toBase64Url(new Uint8Array(ciphertext))}`;
}

/**
 * Reverses `encryptPii`.
 *
 * Throws on a wrong key, a truncated value or a modified ciphertext. Callers
 * decrypting a whole page of records should use `decryptPiiSafe` instead: one
 * corrupt row should not take out the page that would let an administrator find
 * and delete it.
 */
export async function decryptPii(payload: string): Promise<string> {
  const [version, nonce, ciphertext] = payload.split(".");
  if (version !== VERSION || !nonce || !ciphertext) {
    throw new Error(`Unrecognised encrypted value (expected ${VERSION}.<nonce>.<ciphertext>)`);
  }

  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64Url(nonce) },
    (await keys()).cipher,
    fromBase64Url(ciphertext),
  );

  return decoder.decode(plaintext);
}

/** Decrypts, or returns `null` where `decryptPii` would throw. */
export async function decryptPiiSafe(payload: string): Promise<string | null> {
  try {
    return await decryptPii(payload);
  } catch {
    return null;
  }
}

/**
 * Keyed, stable digest of a folded value.
 *
 * Keyed with HMAC rather than a bare SHA-256 because the input space — email
 * addresses, personal names — is small enough to enumerate. Anyone holding an
 * unkeyed digest and a list of candidates could test, offline and at speed,
 * which of them appear; that is a membership oracle, close to the worst outcome
 * this data has. With the key held outside the database, a stolen digest is
 * inert.
 *
 * The label keeps the two uses in separate domains, so a digest computed for a
 * search term can never collide with one computed for an address.
 */
async function blindDigest(label: string, value: string): Promise<string> {
  const signature = await crypto.subtle.sign(
    "HMAC",
    (await keys()).digest,
    encoder.encode(`${label}:${foldForSearch(value)}`),
  );
  return toBase64Url(new Uint8Array(signature));
}

/**
 * Matches an email address against the table without being able to read it.
 *
 * Two operations need this: rejecting a duplicate at intake, and finding the
 * record an erasure request refers to. Both need determinism, which the
 * encrypted column deliberately does not have.
 */
export function emailDigest(email: string): Promise<string> {
  return blindDigest("email", email);
}

/**
 * Digest of an administrator's search term, for the audit log.
 *
 * Recording what was searched for is most of what an investigation needs — an
 * administrator quietly looking up one person is the abuse this log exists to
 * catch. But a search term is usually somebody's name, so writing it in the
 * clear would turn an unencrypted audit table into a slowly accumulating list of
 * members' names, defeating the encryption it sits beside.
 *
 * Digesting it keeps both properties. "Did anyone search for this person?" is
 * answered by computing the digest and looking for it; "give me every name that
 * has been searched for" is not answerable at all.
 */
export function queryDigest(query: string): Promise<string> {
  return blindDigest("query", query);
}

/**
 * Tag authorising the unsubscribe link at the foot of a newsletter issue.
 *
 * Derived rather than stored, which is the opposite of how the confirmation
 * token works, and for a reason worth stating. A confirmation must be usable
 * exactly once and then expire, so it has to leave state behind. An unsubscribe
 * link has to keep working in an issue somebody finds in their archive two
 * years from now, which state in a row cannot guarantee — and a stored table of
 * valid unsubscribe tokens is, to whoever steals it, a button that empties the
 * list.
 *
 * Keyed with the same HMAC key as the digests above, under its own label, so a
 * tag cannot be produced by anyone who has the database but not the key, and
 * cannot be confused with a digest computed for any other purpose.
 */
export function unsubscribeTag(subscriberId: string): Promise<string> {
  return blindDigest("unsubscribe", subscriberId);
}

/**
 * Folds a value to the form both search and duplicate-detection compare on:
 * case-insensitive, accent-insensitive, and insensitive to runs of whitespace.
 *
 * Accent folding matters more here than it usually would. The membership spans
 * the continent, and someone searching for "Muller" should find "Müller" — NFD
 * decomposition splits the umlaut into a combining mark that the following range
 * then strips.
 */
export function foldForSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
