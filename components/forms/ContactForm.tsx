"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { submitEnquiry } from "@/app/(site)/contact/actions";
import { CONTACT_INITIAL, type ContactState } from "@/app/(site)/contact/state";
import { SelectField, TextArea, TextField } from "@/components/forms/Field";
import { Honeypot } from "@/components/forms/Honeypot";
import { Button } from "@/components/ui/Button";
import type { InvolvementEdition } from "@/content/involvement";
import { plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";

interface ContactFormProps {
  readonly edition: InvolvementEdition;
  /** A channel id, not its title — the title differs in every language. */
  readonly initialSubject?: string;
}

/**
 * Correspondence, not a membership application.
 *
 * Deliberately separate from `/join`: someone with a question should not have
 * to declare a political affiliation to ask it. The message is encrypted before
 * it is stored, for the same reason a member's details are — a question about
 * joining is itself a disclosure.
 */
export function ContactForm({ edition, initialSubject }: ContactFormProps) {
  const uid = useId();
  const { locale } = edition;
  const text = edition.contact;
  const privacyHref = localePath(locale, "/privacy");
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitEnquiry,
    CONTACT_INITIAL,
  );

  if (state.status === "sent") {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">{text.sent.title}</h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">{text.sent.body}</p>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          {text.sent.privacy}{" "}
          <Link href={privacyHref} className="underline underline-offset-4 hover:text-burgundy">
            {text.sent.privacyLink}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-8">
      <Honeypot />

      {state.status === "unavailable" ? <Notice>{text.unavailable}</Notice> : null}
      {state.status === "throttled" ? <Notice>{text.throttled}</Notice> : null}

      {state.errors.length > 0 ? (
        <div className="border border-burgundy/40 bg-burgundy/5 p-5" role="alert">
          <h3 className="text-[0.9375rem] font-medium text-burgundy">
            {plural(locale, state.errors.length, text.problemCount)}
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5">
            {state.errors.map((code) => (
              <li key={code} className="text-[0.875rem] text-burgundy">
                {text.errors[code]}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id={`${uid}-name`}
          name="name"
          label={text.fields.name}
          autoComplete="name"
          maxLength={120}
          required
          defaultValue=""
        />
        <TextField
          id={`${uid}-email`}
          name="email"
          type="email"
          label={text.fields.email}
          autoComplete="email"
          maxLength={180}
          required
          defaultValue=""
        />
      </div>

      <SelectField
        id={`${uid}-subject`}
        name="subject"
        label={text.fields.subject}
        options={edition.subjects}
        placeholder={text.fields.placeholder}
        required
        defaultValue={initialSubject ?? ""}
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label={text.fields.message}
        maxLength={2000}
        rows={8}
        required
        defaultValue=""
      />

      <div className="flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? text.submitting : text.submit}
        </Button>
        <p className="text-micro leading-relaxed text-faint sm:max-w-sm sm:text-right">
          {text.privacyNote}{" "}
          <Link href={privacyHref} className="underline underline-offset-4 hover:text-burgundy">
            {text.privacyLink}
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
