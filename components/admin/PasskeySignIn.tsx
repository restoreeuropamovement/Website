"use client";

import { startAuthentication } from "@simplewebauthn/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Sign-in.
 *
 * There is no username field and no password field, because there is no
 * password. The authenticator holds a discoverable credential, so it offers the
 * account itself; the server never has to confirm that a given name is enrolled,
 * which is one fewer thing an attacker can learn by asking.
 *
 * The browser will only release an assertion to the origin the passkey was
 * registered against, so a convincing copy of this page on another domain gets
 * nothing — the phishing resistance is enforced by the browser, not by the user
 * noticing the address bar.
 */
export function PasskeySignIn({ next }: { next?: string }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "working" | "failed">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function signIn() {
    setState("working");
    setMessage(null);

    try {
      const optionsResponse = await fetch("/api/admin/auth/authentication/options", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });

      if (!optionsResponse.ok) throw new Error("Could not start sign-in.");
      const { challengeId, options } = await optionsResponse.json();

      const assertion = await startAuthentication({ optionsJSON: options });

      const verifyResponse = await fetch("/api/admin/auth/authentication/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, response: assertion }),
      });

      if (!verifyResponse.ok) throw new Error("That passkey was not accepted.");

      // `next` is validated server-side before it reaches this component, and
      // `router.push` cannot leave the origin, so this cannot be redirected off
      // site by a crafted query string.
      router.push(next ?? "/admin");
      router.refresh();
    } catch (error) {
      setState("failed");
      setMessage(
        error instanceof Error && error.name === "NotAllowedError"
          ? "The request was dismissed or timed out."
          : error instanceof Error
            ? error.message
            : "Sign-in failed.",
      );
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={signIn}
        disabled={state === "working"}
        className="border border-gold/70 bg-gold/10 px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
      >
        {state === "working" ? "Waiting for your passkey…" : "Sign in with a passkey"}
      </button>

      {message ? (
        <p role="alert" className="border-l-2 border-burgundy py-1 pl-4 text-[0.875rem] text-muted">
          {message}
        </p>
      ) : null}
    </div>
  );
}
