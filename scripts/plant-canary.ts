/**
 * Puts the addresses in `CANARY_MEMBER_EMAILS` into the membership roll.
 *
 * See `lib/admin/canary.ts` for what a canary is and why nothing in the
 * database marks it as one. This script exists so planting it does not require
 * typing a fake person into the admin form, and so re-running after a restore
 * from backup puts the trap back.
 *
 * Idempotent: `createMember` refuses a duplicate address, so a second run
 * reports what is already there and writes nothing.
 *
 * Run with: npm run db:canary
 *
 * ## Before running it
 *
 * The address must be a real mailbox that a real person reads, and it must be
 * one that receives nothing else. A canary nobody is watching is not a control,
 * it is a note to yourself; and one that also gets ordinary mail cannot raise an
 * alarm because every alarm is a false one.
 *
 * The name and country below are placeholders, not invented people. They are
 * visible only to an administrator with an elevated session, who will see the
 * row labelled as a canary, and they exist because the columns are NOT NULL.
 */
import { createMember } from "../lib/admin/members";
import { canaryMemberEmails } from "../lib/admin/env";
import { recordAudit } from "../lib/admin/audit";

async function main(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Put it in .env.local or export it.");
    process.exit(1);
  }

  const emails = canaryMemberEmails();
  if (emails.length === 0) {
    console.error(
      "CANARY_MEMBER_EMAILS is not set. It should hold one or more monitored mailboxes,\n" +
        "comma separated, that receive no other mail. See lib/admin/canary.ts.",
    );
    process.exit(1);
  }

  for (const email of emails) {
    const outcome = await createMember({
      // Not a person. Deliberately legible as what it is to anyone entitled to
      // read the roll, and indistinguishable in the table from any other row.
      name: "Canary record",
      email,
      country: "EU",
      involvementRole: "member",
      interestArea: "general",
      /*
       * `confirmed`, not `new`. A canary sitting in the review queue would be
       * acted on by an administrator — rejected as obvious spam, most likely —
       * and the trap would quietly disappear. It also has to be a full member
       * to receive whatever the roll receives, which is the traffic it is
       * pretending to be part of.
       */
      status: "confirmed",
    });

    if (outcome.kind === "created") {
      console.log(`Planted a canary record (${outcome.id}).`);
      /*
       * Audited like any other write, and like any other write without the
       * address. Which mailbox it is stays in the environment; that the trap
       * was set on this date belongs in the log.
       */
      await recordAudit({
        action: "member.create",
        outcome: "success",
        actorLabel: "plant-canary",
        detail: { canary: true, id: outcome.id },
      });
    } else {
      console.log("A record already exists for one of the configured addresses. Left alone.");
    }
  }

  console.log(
    "\nDone. Nothing in the database identifies these rows as canaries — the list of\n" +
      "addresses in CANARY_MEMBER_EMAILS is the only record, so keep it with the keys.",
  );
}

main().catch((error) => {
  console.error("Could not plant the canary:", error instanceof Error ? error.message : error);
  process.exit(1);
});
