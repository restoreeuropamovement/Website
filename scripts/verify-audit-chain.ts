import { verifyAuditChain } from "../lib/admin/audit";

/**
 * Verifies the whole audit chain and says where it breaks.
 *
 * The admin security page runs the same check over the recent window, which is
 * the version that gets looked at. This is the version that answers the
 * question properly — every entry back to the first — and the one to run when
 * something has actually happened. It exits non-zero on a break so it can be
 * put on a schedule and be believed when it says nothing.
 *
 * Run with: npm run db:verify-audit
 *
 * A break is not by itself proof of tampering. Rotating `ADMIN_SESSION_SECRET`
 * invalidates every link written under the old one, and that shows up here as a
 * break at the first entry after the rotation. The difference between that and
 * an attack is the date, which is why the position is printed rather than a
 * bare pass or fail.
 */
async function main(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Put it in .env.local or export it.");
    process.exit(1);
  }

  const verdict = await verifyAuditChain(Infinity);

  if (verdict.checked === 0) {
    console.log("The audit log is empty. Nothing to verify.");
    return;
  }

  console.log(`Examined ${verdict.checked} entries.`);

  if (verdict.unchained > 0) {
    console.log(
      `${verdict.unchained} were written before the chain column existed and carry no tag.\n` +
        "They are not verifiable and are not treated as failures.",
    );
  }

  if (verdict.brokenAt === null) {
    console.log("Chain intact: every tagged entry matches its contents and its predecessor.");
    return;
  }

  console.error(
    `\nChain broken at entry ${verdict.brokenAt}.\n\n` +
      "That entry, or one before it, has been altered or removed since it was written —\n" +
      "unless ADMIN_SESSION_SECRET was rotated at that point, in which case it is expected.\n" +
      "Check the timestamp of that entry against when the secret last changed.",
  );
  process.exitCode = 1;
}

main().catch((error) => {
  console.error("Verification failed:", error);
  process.exit(1);
});
