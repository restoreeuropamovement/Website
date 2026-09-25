"use client";

import { useActionState, useState } from "react";
import { Copy, Check } from "lucide-react";
import type { InviteFormState } from "@/app/admin/(dashboard)/security/actions";

/**
 * Issues an invitation and shows the link exactly once.
 *
 * Once, because only the digest of the token is stored: there is nowhere to
 * look the link up afterwards, by design, and the copy on screen is the only
 * one that will ever exist. Losing it costs a new invitation, which withdraws
 * this one — an inconvenience deliberately preferred to a table full of
 * working links.
 *
 * A client component for one reason: the link cannot survive a round trip
 * through the database, so it has to come back from the action and be rendered
 * without being persisted anywhere.
 */
export function InviteAdministrator({
  action,
}: {
  action: (state: InviteFormState, form: FormData) => Promise<InviteFormState>;
}) {
  const [state, submit, pending] = useActionState(action, { status: "idle" as const });
  const [copied, setCopied] = useState(false);

  async function copy(link: string) {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; the link is on screen to be selected.
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <form action={submit} className="flex flex-col gap-6">
        <Field label="Username" hint="Identifies them in the audit log. Lowercase, no spaces.">
          <input
            type="text"
            name="username"
            required
            maxLength={64}
            autoComplete="off"
            className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
          />
        </Field>

        <Field label="Display name" hint="Shown in the admin header once they sign in.">
          <input
            type="text"
            name="displayName"
            maxLength={120}
            autoComplete="off"
            className="w-full border border-rule bg-surface px-3 py-2 text-[0.9375rem] text-ink focus:border-gold focus:outline-none"
          />
        </Field>

        <button
          type="submit"
          disabled={pending}
          className="self-start border border-gold/70 bg-gold/10 px-6 py-3 text-[0.9375rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
        >
          {pending ? "Creating…" : "Create an invitation"}
        </button>
      </form>

      {state.status === "error" && state.message ? (
        <p role="alert" className="border-l-2 border-burgundy py-1 pl-4 text-[0.875rem] text-muted">
          {state.message}
        </p>
      ) : null}

      {state.status === "created" && state.link ? (
        <div className="flex flex-col gap-3 border border-gold/40 bg-gold/5 p-5">
          <p className="text-[0.875rem] leading-relaxed text-ink">
            Send this link to them. It is shown once, works once, and expires
            {state.expiresAt ? (
              <>
                {" "}
                on{" "}
                <time dateTime={state.expiresAt}>
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "medium",
                    timeStyle: "short",
                    timeZone: "UTC",
                  }).format(new Date(state.expiresAt))}{" "}
                  UTC
                </time>
              </>
            ) : null}
            .
          </p>

          <p className="break-all border border-hairline bg-surface p-3 font-mono text-micro text-muted">
            {state.link}
          </p>

          <button
            type="button"
            onClick={() => copy(state.link as string)}
            className="inline-flex items-center gap-2 self-start border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-ink"
          >
            {copied ? (
              <Check className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Copy className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy link"}
          </button>

          <p className="text-micro leading-relaxed text-faint">
            Until it is claimed, anyone holding this link can enrol a passkey against that account.
            Send it the way you would send a key to a building, and withdraw it below if it goes
            astray.
          </p>
        </div>
      ) : null}
    </div>
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
