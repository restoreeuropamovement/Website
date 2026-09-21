"use server";

import { recordAudit } from "@/lib/admin/audit";
import { hasDatabase, hasMemberEncryptionKey } from "@/lib/admin/env";
import { createMember } from "@/lib/admin/members";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import {
  europeanCountries,
  interestAreas,
  involvementRoles,
} from "@/content/involvement";
import { JOIN_INITIAL, type JoinState } from "./state";

/**
 * The only write the public site performs, and it writes to the most sensitive
 * table in the project. Four rules govern it.
 *
 * **Everything is validated here, not in the browser.** A Server Action is a
 * public endpoint; the client-side checks in `JoinForm` are a courtesy to the
 * person filling it in, not a control.
 *
 * **The reply never varies with what is already stored.** A duplicate address
 * returns exactly the same message as a new one. Anything else turns this form
 * into an oracle for testing whether a named person is a member — which, for a
 * political movement, is the attack the whole encryption design exists to stop.
 *
 * **Nothing here becomes a membership.** Rows land as `pending` and an
 * administrator vets them. Anyone can type a third party's address into a
 * public form, and enrolling an opponent to damage them is a real tactic.
 *
 * **The audit row carries no personal data.** `admin_audit` is not encrypted,
 * so it records the country and the outcome and nothing that identifies anyone
 * — in particular never the message, which is the field most likely to contain
 * something the writer would not want logged.
 */

/** RFC-5322 in full is not worth it; this rejects what is clearly not an address. */
const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/** Per address, per hour. Generous for a person, tight for a script. */
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;

export async function submitMembershipApplication(
  _state: JoinState,
  form: FormData,
): Promise<JoinState> {
  /*
   * The public site is built and served without any of the admin environment.
   * Say so plainly rather than throwing: a reader should be told the roll is
   * not accepting applications, not shown a 500.
   */
  if (!hasDatabase() || !hasMemberEncryptionKey()) {
    return { status: "unavailable", errors: [] };
  }

  const read = (name: string) => String(form.get(name) ?? "").trim();
  const name = read("name");
  const email = read("email");
  const country = read("country");
  const region = read("region");
  const message = read("message");
  const involvementRole = read("role");
  const interestArea = read("interest");
  const consent = read("consent") === "yes";

  const errors: string[] = [];
  if (name.length < 2 || name.length > 120) {
    errors.push("Enter your name, up to 120 characters.");
  }
  if (!EMAIL.test(email) || email.length > 180) {
    errors.push("Enter a valid email address.");
  }
  if (!europeanCountries.includes(country)) errors.push("Choose a country from the list.");
  if (region.length > 120) errors.push("Region or city is limited to 120 characters.");
  if (message.length > 1500) errors.push("Your message is limited to 1500 characters.");
  if (!involvementRoles.some((role) => role.id === involvementRole)) {
    errors.push("Choose whether you are applying as a member or a volunteer.");
  }
  if (!interestAreas.includes(interestArea)) errors.push("Choose an area of interest.");
  if (!consent) errors.push("You must agree before continuing.");

  if (errors.length > 0) return { status: "invalid", errors };

  const { ipHash } = await clientContext();

  /*
   * Throttled on the hashed address rather than the submitted email, so that
   * filling the roll with junk costs an attacker addresses rather than
   * keystrokes. `ipHash` is null only when no proxy header is present, in
   * which case everything anonymous shares one bucket — deliberately strict.
   */
  const limit = await consumeRateLimit(
    `join:${ipHash ?? "unknown"}`,
    RATE_LIMIT,
    RATE_WINDOW_SECONDS,
  );
  if (!limit.allowed) return { status: "throttled", errors: [] };

  const outcome = await createMember({
    name,
    email,
    country,
    region,
    message,
    involvementRole,
    interestArea,
    status: "pending",
  });

  await recordAudit({
    action: "member.apply",
    outcome: "success",
    actorLabel: "public intake",
    /* Country and whether a row was written. Never the name or the address. */
    detail: { country, written: outcome.kind === "created" },
    ipHash,
  });

  /* Identical for `created` and `duplicate`. See the note above. */
  return { status: "received", errors: [] };
}

export async function resetJoinForm(): Promise<JoinState> {
  return JOIN_INITIAL;
}
