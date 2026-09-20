"use client";

import { startAuthentication } from "@simplewebauthn/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Fingerprint } from "lucide-react";

/**
 * Step-up authentication for the membership roll.
 *
 * Being signed in is not enough to read members' names, and this is the
 * difference. The realistic compromise of an admin panel is not a broken
 * password — there is no password — but a session that outlives its owner's
 * attention: a borrowed laptop, an unlocked screen, a stolen cookie. Any of
 * those inherits the journal and the aggregate figures. None of them can produce
 * the authenticator, so none of them gets a single member's name.
 *
 * The elevation lasts minutes and is recorded, so the audit log answers "who
 * read the roll, and when" rather than merely "who was signed in".
 */
export function PasskeyElevation({ reason }: { readonly reason?: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "working" | "failed">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function elevate() {
    setState("working");
    setMessage(null);

    try {
      const optionsResponse = await fetch("/api/admin/auth/elevation/options", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });

      if (!optionsResponse.ok) throw new Error("Could not start re-authentication.");
      const { challengeId, options } = await optionsResponse.json();

      const assertion = await startAuthentication({ optionsJSON: options });

      const verifyResponse = await fetch("/api/admin/auth/elevation/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, response: assertion }),
      });

      if (!verifyResponse.ok) {
        throw new Error(
          verifyResponse.status === 403
            ? "That passkey belongs to a different administrator."
            : "That passkey was not accepted.",
        );
      }

      // The page reads the elevation from the session row on the server, so a
      // refresh is what reveals the data — nothing is held client-side.
      router.refresh();
    } catch (error) {
      setState("failed");
      setMessage(
        error instanceof Error && error.name === "NotAllowedError"
          ? "The request was dismissed or timed out."
          : error instanceof Error
            ? error.message
            : "Re-authentication failed.",
      );
    }
  }

  return (
    <div className="flex flex-col items-start gap-5 border border-gold/40 bg-gold/5 p-6">
      <Fingerprint className="size-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
      <div>
        <h2 className="font-serif text-display-4 font-normal text-ink">
          Confirm your passkey to continue
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          {reason ??
            "Members' names and email addresses are held encrypted. Reading them needs a fresh passkey touch, so that a signed-in session left unattended cannot be used to copy the roll."}
        </p>
      </div>

      <button
        type="button"
        onClick={elevate}
        disabled={state === "working"}
        className="border border-gold/70 bg-gold/10 px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
      >
        {state === "working" ? "Waiting for your passkey…" : "Confirm passkey"}
      </button>

      {message ? (
        <p role="alert" className="border-l-2 border-burgundy py-1 pl-4 text-[0.875rem] text-muted">
          {message}
        </p>
      ) : null}
    </div>
  );
}
