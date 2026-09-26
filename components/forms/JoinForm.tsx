"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { submitMembershipApplication } from "@/app/(site)/join/actions";
import { JOIN_INITIAL, type JoinState } from "@/app/(site)/join/state";
import { CheckboxField, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { Honeypot } from "@/components/forms/Honeypot";
import { Button } from "@/components/ui/Button";
import type { InvolvementEdition } from "@/content/involvement";
import { plural } from "@/lib/format";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface JoinFormProps {
  readonly edition: InvolvementEdition;
  /** Preselected from the query string, e.g. arriving from a national wing. */
  readonly initialCountry?: string;
  readonly initialRole?: string;
}

/**
 * The membership application.
 *
 * Five required fields and two optional ones. Region and message are the two
 * that can identify a person beyond their name — a region narrows them far more
 * than a country does, and free text is where people mention an employer or a
 * family situation — so both are encrypted at rest exactly like the name, and
 * neither is ever written to the audit log.
 *
 * Validation lives in the Server Action. What is here is a courtesy to the
 * person filling the form in, and the browser's own `required` handling. The
 * action returns codes; this component turns them into sentences, because it
 * is the side that knows which language is being read.
 */
export function JoinForm({ edition, initialCountry, initialRole }: JoinFormProps) {
  const uid = useId();
  const { locale } = edition;
  const text = edition.join;
  const privacyHref = localePath(locale, "/privacy");
  const [state, formAction, pending] = useActionState<JoinState, FormData>(
    submitMembershipApplication,
    JOIN_INITIAL,
  );

  if (state.status === "received") {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">
          {text.received.title}
        </h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">{text.received.body}</p>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          {text.received.privacy}{" "}
          <Link href={privacyHref} className="underline underline-offset-4 hover:text-burgundy">
            {text.received.privacyLink}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-10">
      <Honeypot />

      {/*
        The language the form was read in, so the acknowledgement is written in
        it too. Nothing is decided by this field — every value the action
        validates is an id, and an absent or invented locale falls back to
        English — so it is safe to accept from the browser.
      */}
      <input type="hidden" name="locale" value={locale} />

      {state.status === "unavailable" ? <Notice>{text.unavailable}</Notice> : null}
      {state.status === "throttled" ? <Notice>{text.throttled}</Notice> : null}
      {state.status === "busy" ? <Notice>{text.busy}</Notice> : null}

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

      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-1 text-muted">{text.roleLegend}</legend>
        <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {edition.roles.map((role, index) => {
            const id = `${uid}-role-${role.id}`;
            const defaultChecked = initialRole ? initialRole === role.id : index === 0;
            return (
              <li key={role.id} className="bg-surface">
                <label
                  htmlFor={id}
                  className="flex h-full cursor-pointer flex-col gap-2.5 p-6 transition-colors hover:bg-canvas has-checked:bg-canvas-deep"
                >
                  <span className="flex items-center gap-3">
                    <input
                      id={id}
                      type="radio"
                      name="role"
                      value={role.id}
                      defaultChecked={defaultChecked}
                      className="size-3.5 shrink-0 appearance-none rounded-full border border-field bg-surface checked:border-6 checked:border-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                    />
                    <span className="font-serif text-[1.1875rem] text-ink">{role.title}</span>
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-muted">{role.summary}</span>
                  <span className="eyebrow mt-auto pt-2 text-faint">{role.commitment}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

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

      <div className="grid gap-6 sm:grid-cols-2">
        {/*
          `autoComplete="country-name"` is deliberately absent. The browser
          would fill it with a country *name*, and the option values here are
          wing slugs — the fill would match nothing and silently clear the
          field the reader thought was answered.
        */}
        <SelectField
          id={`${uid}-country`}
          name="country"
          label={text.fields.country}
          options={edition.countries}
          placeholder={text.fields.placeholder}
          required
          defaultValue={initialCountry ?? ""}
        />
        <TextField
          id={`${uid}-region`}
          name="region"
          label={text.fields.region}
          optional
          optionalLabel={text.fields.optional}
          maxLength={120}
          defaultValue=""
        />
      </div>

      <SelectField
        id={`${uid}-interest`}
        name="interest"
        label={text.fields.interest}
        options={edition.interests}
        placeholder={text.fields.placeholder}
        required
        defaultValue=""
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label={text.fields.message}
        optional
        optionalLabel={text.fields.optional}
        hint={text.fields.messageHint}
        maxLength={1500}
        rows={6}
        defaultValue=""
      />

      <CheckboxField id={`${uid}-consent`} name="consent" value="yes" required>
        {text.consent}
      </CheckboxField>

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
    <div className={cn("flex gap-3 border border-rule bg-canvas-deep p-5")}>
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <p className="text-[0.875rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
