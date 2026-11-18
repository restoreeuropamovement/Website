"use client";

import { useActionState, useRef } from "react";

import { sendNoticeAction, sendNoticeTestAction, type NoticeTestState } from "@/app/admin/(dashboard)/notices/actions";

const FIELD =
  "rounded-xs border border-field bg-surface px-4 py-2.5 text-[0.9375rem] text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy";

const TEST_RESULT: Record<Exclude<NoticeTestState, null>, string> = {
  sent: "Test sent to the operator address. Check how it looks before sending it to everyone.",
  failed: "The mail provider refused the test. Nothing went to the membership.",
  unavailable: "No operator address (MAIL_NOTIFY_TO) is set, so there is nowhere to send a test.",
  empty: "Write a subject and a message first.",
};

/**
 * The compose form for a notice.
 *
 * A client component only so the test send can report back without wiping
 * the draft. React resets a form after its action runs; after a test that
 * reset is refused, as on the shop's order form, so what was written survives.
 */
export function NoticeComposer({ reachable, canTest }: { readonly reachable: number; readonly canTest: boolean }) {
  const [testState, testAction, testing] = useActionState(sendNoticeTestAction, null);
  /* Only a test keeps the draft. After a real send the form empties, so a second press cannot repeat it. */
  const keepDraft = useRef(false);

  return (
    <form
      action={sendNoticeAction}
      onReset={(event) => {
        if (keepDraft.current) event.preventDefault();
        keepDraft.current = false;
      }}
      className="flex flex-col gap-5 border border-gold/40 p-6"
    >
      <label className="flex flex-col gap-2">
        <span className="text-[0.875rem] text-muted">Subject</span>
        <input name="subject" maxLength={140} autoComplete="off" required className={FIELD} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[0.875rem] text-muted">
          Message. Plain text: leave a blank line between paragraphs, put a heading on a line of its
          own in capitals, start list items with &ldquo;1.&rdquo; or &ldquo;-&rdquo;. Web addresses
          become links. It is sent laid out as a proper email, with this text alongside.
        </span>
        <textarea
          name="body"
          rows={16}
          required
          className="rounded-xs border border-field bg-surface px-4 py-3 font-mono text-[0.875rem] leading-relaxed text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
        />
      </label>

      {canTest ? (
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            formAction={testAction}
            onClick={() => {
              keepDraft.current = true;
            }}
            disabled={testing}
            className="border border-rule px-4 py-2 text-[0.875rem] text-muted transition-colors hover:border-gold hover:text-ink disabled:opacity-60"
          >
            {testing ? "Sending test…" : "Send a test to myself"}
          </button>
          {testState ? (
            <p role="status" className={testState === "sent" ? "text-[0.875rem] text-muted" : "text-[0.875rem] text-burgundy"}>
              {TEST_RESULT[testState]}
            </p>
          ) : null}
        </div>
      ) : null}

      <p className="text-[0.875rem] leading-relaxed text-muted">
        Three things are added underneath: why they are receiving it, that replies go to the contact
        form rather than the sender, and a link that stops further notices without affecting
        membership. This goes to all {reachable.toLocaleString("en-GB")} of them at once and cannot
        be recalled. Type the subject again to confirm.
      </p>

      <input
        name="confirm"
        placeholder="Repeat the subject"
        autoComplete="off"
        aria-label="Type the subject again to confirm sending"
        className={`max-w-sm ${FIELD}`}
      />

      <button
        type="submit"
        className="self-start border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
      >
        Send to the membership
      </button>
    </form>
  );
}
