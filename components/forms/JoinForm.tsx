"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { submitMembershipApplication } from "@/app/(site)/join/actions";
import { JOIN_INITIAL, type JoinState } from "@/app/(site)/join/state";
import { CheckboxField, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { Button } from "@/components/ui/Button";
import { europeanCountries, interestAreas, involvementRoles } from "@/content/involvement";
import { cn } from "@/lib/utils";

export interface JoinFormProps {
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
 * person filling the form in, and the browser's own `required` handling.
 */
export function JoinForm({ initialCountry, initialRole }: JoinFormProps) {
  const uid = useId();
  const [state, formAction, pending] = useActionState<JoinState, FormData>(
    submitMembershipApplication,
    JOIN_INITIAL,
  );

  if (state.status === "received") {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">
          Your application has been received.
        </h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">
          It now waits to be reviewed by a person. Membership begins when that review is complete,
          not when a form is submitted — so nothing has been decided yet, and nothing about you has
          been published anywhere.
        </p>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          Your name and address were encrypted before they were written down. What we hold, how
          long we hold it and how to have it erased are set out in the{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-burgundy">
            privacy note
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-10">
      {state.status === "unavailable" ? (
        <Notice tone="warning">
          The membership roll is not accepting applications at this moment. Nothing you type here
          has been sent. Please try again shortly.
        </Notice>
      ) : null}

      {state.status === "throttled" ? (
        <Notice tone="warning">
          Several applications have already been submitted from this connection. Please wait an
          hour before sending another.
        </Notice>
      ) : null}

      {state.errors.length > 0 ? (
        <div className="border border-burgundy/40 bg-burgundy/5 p-5" role="alert">
          <h3 className="text-[0.9375rem] font-medium text-burgundy">
            There {state.errors.length === 1 ? "is 1 problem" : `are ${state.errors.length} problems`}{" "}
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

      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-1 text-muted">How you are applying</legend>
        <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {involvementRoles.map((role, index) => {
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

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField
          id={`${uid}-country`}
          name="country"
          label="Country"
          autoComplete="country-name"
          options={europeanCountries}
          required
          defaultValue={initialCountry ?? ""}
        />
        <TextField
          id={`${uid}-region`}
          name="region"
          label="Region or city"
          optional
          maxLength={120}
          defaultValue=""
        />
      </div>

      <SelectField
        id={`${uid}-interest`}
        name="interest"
        label="Area of interest"
        options={interestAreas}
        required
        defaultValue=""
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label="Message"
        optional
        hint="What you would like to do, and anything about your circumstances that is relevant to it."
        maxLength={1500}
        rows={6}
        defaultValue=""
      />

      <CheckboxField id={`${uid}-consent`} name="consent" value="yes" required>
        I am applying to join Restore Europa Movement, and I agree that what I have entered above
        may be held for that purpose. Membership in a political movement implies a political
        opinion, which the law protects more strictly than ordinary personal data; I may withdraw
        this consent and have the record erased at any time.
      </CheckboxField>

      <div className="flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Apply to join"}
        </Button>
        <p className="text-micro leading-relaxed text-faint sm:max-w-sm sm:text-right">
          Everything you enter is encrypted before it is stored. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-burgundy">
            privacy note
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Notice({
  tone,
  children,
}: {
  readonly tone: "warning";
  readonly children: React.ReactNode;
}) {
  return (
    <div className={cn("flex gap-3 border border-rule bg-canvas-deep p-5", tone)}>
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      <p className="text-[0.875rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
