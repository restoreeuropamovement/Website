"use client";

import { useRef, useState } from "react";

export interface FollowUpLetterProps {
  readonly id: string;
  readonly subject: string;
  readonly body: string;
  readonly email: string;
  /**
   * A planted address rather than a person — see `lib/admin/canary.ts`.
   *
   * The letter is withheld entirely rather than shown with a warning beside
   * it. A warning is a thing to read; this is a one-click way to write to an
   * address whose only purpose is to prove that somebody who should not have
   * the roll is using it. Sending to it would raise the alarm on the person
   * running the movement, and they would have no way to tell their own copy
   * from the real thing.
   */
  readonly canary: boolean;
}

/**
 * The vetting questionnaire, filled in for one applicant and ready to send.
 *
 * **The site does not send it.** It is drafted here, behind the passkey that
 * already revealed this name, and copied into whatever mailbox the
 * administrator actually uses — so no address reaches a mail provider and
 * `/privacy` keeps its promise that details are never passed to a third party.
 * See `vettingLetter` in `content/emails/index.ts`.
 *
 * Editable rather than fixed. A template that cannot be adjusted before it
 * goes out is a template people stop using the first time it does not fit, and
 * the copy button takes whatever is in the box rather than what was generated
 * into it. Nothing is saved: this is a draft, and the record of having written
 * is the "Wrote to them" transition beside it.
 *
 * Collapsed to a `<details>` like the vetting note, for the same reason — a
 * named person's correspondence should not sit open on a screen somebody walks
 * past — and the textarea holds its text as real selectable content, so the
 * letter is still reachable if the clipboard call is unavailable.
 */
export function FollowUpLetter({ id, subject, body, email, canary }: FollowUpLetterProps) {
  const draft = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  if (canary) {
    return (
      <p className="mt-2 text-micro text-burgundy">
        No letter: this is a planted address, not a person. Writing to it would set off your own
        alarm.
      </p>
    );
  }

  const copy = async () => {
    const text = draft.current?.value ?? body;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /*
       * Clipboard access can be refused, and there is nothing useful to say
       * about it: the text is already on screen and selectable, which is the
       * fallback. Selecting it is more helpful than an error message.
       */
      draft.current?.select();
    }
  };

  return (
    <details className="group mt-2">
      <summary className="cursor-pointer list-none text-micro text-faint transition-colors hover:text-muted">
        Follow-up letter
        <span aria-hidden="true" className="ml-2 group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="ml-2 hidden group-open:inline">
          −
        </span>
      </summary>

      <div className="mt-2 flex max-w-prose flex-col gap-2">
        <p className="text-micro text-faint">
          Subject: <span className="text-muted">{subject}</span>
        </p>

        <label htmlFor={`letter-${id}`} className="sr-only">
          Follow-up letter
        </label>
        <textarea
          ref={draft}
          id={`letter-${id}`}
          rows={12}
          defaultValue={body}
          className="w-full border border-rule bg-transparent px-3 py-2 text-[0.875rem] leading-relaxed text-ink focus:border-gold focus:outline-none"
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
          >
            {copied ? "Copied" : "Copy letter"}
          </button>

          {/*
            Opens the administrator's own mail client with the draft in it.
            Long bodies are truncated by some clients, so this sits beside the
            copy button rather than replacing it.
          */}
          <a
            href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
          >
            Open in mail
          </a>

          <span className="text-micro text-faint">
            Sent from your own mailbox, never by the site. Mark &ldquo;Wrote to them&rdquo; once it
            has gone.
          </span>
        </div>
      </div>
    </details>
  );
}
