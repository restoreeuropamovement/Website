/**
 * Guards the encryption used for members' names and email addresses.
 *
 * These properties are load bearing in a way that fails quietly. If encryption
 * stopped round-tripping, the membership roll would become unreadable with no
 * error at the point of damage; if it became deterministic, the table would turn
 * into an oracle for testing whether a given person is a member; if the
 * authentication tag stopped being checked, a tampered row could decrypt to
 * something an attacker chose.
 *
 * Needs no database and no configured key — it generates an ephemeral one — so
 * it runs as part of `npm run check` on any machine. The database-backed half of
 * the membership tests lives outside the build.
 */
import { webcrypto } from "node:crypto";

let failures = 0;

function check(label: string, condition: boolean, detail = ""): void {
  if (condition) return;
  failures += 1;
  console.error(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
}

/* Names on this continent are not ASCII, and neither is the test data. */
const samples = [
  "Anna Müller",
  "Émile Durand",
  "Þórunn Jónsdóttir",
  "Zoë O'Brien-Nováková",
  "Ελένη Παπαδοπούλου",
  "a@b.co",
  "x".repeat(180),
];

async function main(): Promise<void> {
  // Generated here rather than read from the environment: the test must not
  // depend on a deployment secret, and must never be able to touch real data.
  process.env.MEMBER_ENCRYPTION_KEY = Buffer.from(
    webcrypto.getRandomValues(new Uint8Array(32)),
  ).toString("base64url");

  // Imported after the key is set, since the module reads it on first use.
  const { decryptPii, emailDigest, encryptPii, foldForSearch } = await import(
    "../lib/admin/pii"
  );

  for (const sample of samples) {
    const sealed = await encryptPii(sample);
    check(
      `round-trips ${JSON.stringify(sample.slice(0, 24))}`,
      (await decryptPii(sealed)) === sample,
    );
    check(`ciphertext is versioned for ${sample.slice(0, 12)}`, sealed.startsWith("v1."));
  }

  const subject = "Anna Müller";
  const first = await encryptPii(subject);
  const second = await encryptPii(subject);
  check("encryption is non-deterministic", first !== second);
  check("both ciphertexts decrypt alike", (await decryptPii(second)) === subject);
  check("plaintext does not survive in the ciphertext", !first.includes("Müller"));

  let rejectedTampering = false;
  try {
    const [version, nonce, body = ""] = first.split(".");
    const flipped = body.slice(0, -2) + (body.endsWith("AA") ? "BB" : "AA");
    await decryptPii(`${version}.${nonce}.${flipped}`);
  } catch {
    rejectedTampering = true;
  }
  check("a modified ciphertext is rejected rather than decrypted", rejectedTampering);

  let rejectedMalformed = false;
  try {
    await decryptPii("not-a-sealed-value");
  } catch {
    rejectedMalformed = true;
  }
  check("a malformed value is rejected", rejectedMalformed);

  check("folding strips accents", foldForSearch("Müller") === foldForSearch("Muller"));
  check("folding lowercases", foldForSearch("ANNA") === foldForSearch("anna"));
  check("folding collapses whitespace", foldForSearch("  Anna   Sofia ") === "anna sofia");

  const digest = await emailDigest("Person@Example.test");
  check(
    "digest ignores case and surrounding space",
    digest === (await emailDigest(" person@example.test ")),
  );
  check("digest separates distinct addresses", digest !== (await emailDigest("other@example.test")));
  check("digest does not embed the address", !digest.toLowerCase().includes("person"));

  if (failures > 0) {
    console.error(`\nMembership encryption is not behaving as designed: ${failures} failed.`);
    process.exit(1);
  }

  console.log(`Membership encryption verified over ${samples.length} values.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
