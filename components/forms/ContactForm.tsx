"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { submitEnquiry } from "@/app/(site)/contact/actions";
import { CONTACT_INITIAL, type ContactState } from "@/app/(site)/contact/state";
import { SelectField, TextArea, TextField } from "@/components/forms/Field";
import { Honeypot } from "@/components/forms/Honeypot";
import { Button } from "@/components/ui/Button";
import { contactSubjects } from "@/content/involvement";

/**
 * Correspondence, not a membership application.
 *
 * Deliberately separate from `/join`: someone with a question should not have
 * to declare a political affiliation to ask it. The message is encrypted before
 * it is stored, for the same reason a member's details are — a question about
 * joining is itself a disclosure.
 */
export function ContactForm({ initialSubject }: { readonly initialSubject?: string }) {
  const uid = useId();
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitEnquiry,
    CONTACT_INITIAL,
  );

  if (state.status === "sent") {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">
          Your message has been received.
        </h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">
          It will be read by whoever holds the function you addressed it to. The movement is small
          and answers correspondence by hand, so a reply may take some days.
        </p>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          Your name, address and message were encrypted before they were stored, and can be erased
          on request — see the{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-burgundy">
            privacy note
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-8">
      <Honeypot />

      {state.status === "unavailable" ? (
        <Notice>
          Correspondence is not being accepted at this moment. Nothing you type here has been sent.
          Please try again shortly.
        </Notice>
      ) : null}

      {state.status === "throttled" ? (
        <Notice>
          Several messages have already been sent from this connection. Please wait an hour before
          sending another.
        </Notice>
      ) : null}

      {state.errors.length > 0 ? (
        <div className="border border-burgundy/40 bg-burgundy/5 p-5" role="alert">
          <h3 className="text-[0.9375rem] font-medium text-burgundy">
            There{" "}
            {state.errors.length === 1 ? "is 1 problem" : `are ${state.errors.length} problems`}{" "}
            with this form
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5">
            {state.errors.map((message) => (
              <li key={message} className="text-[0.875rem] text-burgundy">
                {message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id={`${uid}-name`}
          name="name"
          label="Name"
          autoComplete="name"
          maxLength={120}
          required
          defaultValue=""
        />
        <TextField
          id={`${uid}-email`}
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          maxLength={180}
          required
          defaultValue=""
        />
      </div>

      <SelectField
        id={`${uid}-subject`}
        name="subject"
        label="What this is about"
        options={contactSubjects}
        required
        defaultValue={initialSubject ?? ""}
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label="Message"
        maxLength={2000}
        rows={8}
        required
        defaultValue=""
      />

      <div className="flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
        <p className="text-micro leading-relaxed text-faint sm:max-w-sm sm:text-right">
          Encrypted before it is stored. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-burgundy">
            privacy note
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Notice({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex gap-3 border border-rule bg-canvas-deep p-5">
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <p className="text-[0.875rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
