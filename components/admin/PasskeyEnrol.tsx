"use client";

import { startRegistration } from "@simplewebauthn/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Passkey enrolment.
 *
 * Serves the three ways a credential is ever created. On a fresh installation
 * `mode` is `"bootstrap"` and the one-time token is required; for an
 * administrator already signed in adding a second device, `mode` is
 * `"additional"` and the session authorises it; for somebody claiming an
 * invitation, `mode` is `"invite"` and the token from the link authorises it.
 *
 * No token is ever checked in this component — a credential validated in the
 * browser is not a credential, since whoever is holding the browser can skip
 * the check. Both are sent to the server and decided there.
 */
export function PasskeyEnrol({
  mode,
  invite,
}: {
  mode: "bootstrap" | "additional" | "invite";
  /** The token from the invitation link, when claiming one. */
  invite?: string;
}) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [label, setLabel] = useState("");
  const [state, setState] = useState<"idle" | "working" | "done">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function enrol(event: React.FormEvent) {
    event.preventDefault();
    setState("working");
    setMessage(null);

    try {
      const optionsResponse = await fetch("/api/admin/auth/registration/options", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "bootstrap"
            ? { token, username, displayName }
            : mode === "invite"
              ? { invite }
              : {},
        ),
      });

      if (!optionsResponse.ok) {
        throw new Error(
          optionsResponse.status === 403
            ? mode === "invite"
              ? "This invitation has expired, been withdrawn or already been used. Ask for a new one."
              : "That token was not accepted, or a passkey is already enrolled."
            : "Could not start enrolment.",
        );
      }

      const { challengeId, options } = await optionsResponse.json();
      const attestation = await startRegistration({ optionsJSON: options });

      const verifyResponse = await fetch("/api/admin/auth/registration/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          challengeId,
          response: attestation,
          label: label || "Passkey",
          ...(mode === "invite" ? { invite } : {}),
        }),
      });

      if (!verifyResponse.ok) throw new Error("The passkey could not be verified.");

      setState("done");
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setState("idle");
      setMessage(
        error instanceof Error && error.name === "NotAllowedError"
          ? "The request was dismissed or timed out."
          : error instanceof Error
            ? error.message
            : "Enrolment failed.",
      );
    }
  }

  return (
    <form onSubmit={enrol} className="flex flex-col gap-6">
      {mode === "bootstrap" ? (
        <>
          <Field
            label="Bootstrap token"
            hint="The value of ADMIN_BOOTSTRAP_TOKEN. Accepted only while no passkey exists."
          >
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              required
              autoComplete="off"
              className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
            />
          </Field>

          <Field label="Username" hint="Identifies you in the audit log. Lowercase, no spaces.">
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              maxLength={64}
              autoComplete="off"
              className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
            />
          </Field>

          <Field label="Display name" hint="Shown in the admin header.">
            <input
              type="text"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              maxLength={120}
              autoComplete="off"
              className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
            />
          </Field>
        </>
      ) : null}

      <Field label="Device label" hint="How this passkey appears in your list — 'Work laptop'.">
        <input
          type="text"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          maxLength={80}
          autoComplete="off"
          className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
        />
      </Field>

      <button
        type="submit"
        disabled={state !== "idle"}
        className="self-start border border-gold/70 bg-gold/10 px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
      >
        {state === "working" ? "Waiting for your device…" : "Enrol this passkey"}
      </button>

      {message ? (
        <p role="alert" className="border-l-2 border-burgundy py-1 pl-4 text-[0.875rem] text-muted">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="eyebrow text-muted">{label}</span>
      {children}
      <span className="text-micro leading-relaxed text-faint">{hint}</span>
    </label>
  );
}
