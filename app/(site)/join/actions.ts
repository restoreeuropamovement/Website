"use server";

import { after } from "next/server";

import { recordAudit } from "@/lib/admin/audit";
import { hasDatabase, hasMemberEncryptionKey, mailNotifyAddress } from "@/lib/admin/env";
import { createMember, unreadMemberCount } from "@/lib/admin/members";
import { applicationAlert, applicationReceived } from "@/content/emails";
import { sendEmail } from "@/lib/email";
import { consumeRateLimit } from "@/lib/admin/rate-limit";
import { clientContext } from "@/lib/admin/request";
import {
  GLOBAL_HOURLY_LIMIT,
  GLOBAL_WINDOW_SECONDS,
  honeypotTripped,
} from "@/lib/spam";
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
 * **Nothing here becomes a membership.** Rows land as `new` and an
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

  const { ipHash } = await clientContext();

  /*
   * The decoy field, checked before anything else is read.
   *
   * The reply is the ordinary one. Telling a submitter that it was detected
   * teaches whoever wrote it to stop filling the field in, and the whole value
   * of this is that they do not know it is there.
   *
   * Recorded only while the connection is still within its allowance, so a
   * sustained run cannot turn the audit log into the flood it is reporting.
   */
  if (honeypotTripped(form)) {
    const decoy = await consumeRateLimit(
      `join:${ipHash ?? "unknown"}`,
      RATE_LIMIT,
      RATE_WINDOW_SECONDS,
    );
    if (decoy.allowed) {
      await recordAudit({
        action: "member.apply",
        outcome: "failure",
        actorLabel: "public intake",
        detail: { reason: "decoy field completed" },
        ipHash,
      });
    }
    return { status: "received", errors: [] };
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

  /*
   * Throttled on the hashed address rather than the submitted email, so that
   * filling the roll with junk costs an attacker addresses rather than
   * keystrokes. `ipHash` is null only when no proxy header is present, in
   * which case everything anonymous shares one bucket — deliberately strict.
   *
   * Counted after validation on purpose: somebody who mistypes their address
   * five times is not an attacker and should not be locked out for an hour.
   */
  const limit = await consumeRateLimit(
    `join:${ipHash ?? "unknown"}`,
    RATE_LIMIT,
    RATE_WINDOW_SECONDS,
  );
  if (!limit.allowed) return { status: "throttled", errors: [] };

  /*
   * And the ceiling the per-connection limit cannot see: the same script
   * arriving from several hundred addresses, each one comfortably inside its
   * own allowance. Recorded when it trips, because a global limit that is
   * being reached is either an attack or the best day the movement has had,
   * and both are worth knowing about.
   */
  const global = await consumeRateLimit(
    "join:all",
    GLOBAL_HOURLY_LIMIT,
    GLOBAL_WINDOW_SECONDS,
  );
  if (!global.allowed) {
    await recordAudit({
      action: "member.apply",
      outcome: "failure",
      actorLabel: "public intake",
      detail: { reason: "site-wide hourly ceiling reached", country },
      ipHash,
    });
    return { status: "throttled", errors: [] };
  }

  const outcome = await createMember({
    name,
    email,
    country,
    region,
    message,
    involvementRole,
    interestArea,
    status: "new",
  });

  await recordAudit({
    action: "member.apply",
    outcome: "success",
    actorLabel: "public intake",
    /* Country and whether a row was written. Never the name or the address. */
    detail: { country, written: outcome.kind === "created" },
    ipHash,
  });

  /*
   * Mail goes out after the response, for two reasons beyond not making
   * somebody watch a spinner while a third party is slow.
   *
   * It removes a timing oracle. Sending on `created` and not on `duplicate` is
   * right — the address already had its acknowledgement the first time — but
   * doing it inline would make the duplicate case measurably faster, which
   * hands back through the clock exactly the distinction the identical reply
   * above is careful not to state.
   *
   * And it decouples the two failures. The application is already committed by
   * this point; a mail provider that is down, throttling or misconfigured must
   * not be able to turn a recorded application into an error the reader sees.
   */
  if (outcome.kind === "created") {
    after(async () => {
      const acknowledgement = await sendEmail({
        to: email,
        ...applicationReceived(),
      });

      const notify = mailNotifyAddress();
      if (notify) {
        await sendEmail({ to: notify, ...applicationAlert(await unreadMemberCount()) });
      }

      /*
       * Worth recording: silent non-delivery is how a movement discovers six
       * weeks late that nobody was ever acknowledged. `unconfigured` is a
       * normal state on a deployment without mail, so it is not a failure.
       */
      if (!acknowledgement.ok && acknowledgement.reason !== "unconfigured") {
        await recordAudit({
          action: "member.apply.mail",
          outcome: "failure",
          actorLabel: "public intake",
          detail: { reason: acknowledgement.reason },
          ipHash,
        });
      }
    });
  }

  /* Identical for `created` and `duplicate`. See the note above. */
  return { status: "received", errors: [] };
}

export async function resetJoinForm(): Promise<JoinState> {
  return JOIN_INITIAL;
}
