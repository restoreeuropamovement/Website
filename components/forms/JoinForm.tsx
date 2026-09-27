"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { submitMembershipApplication } from "@/app/(site)/join/actions";
import { JOIN_INITIAL, type JoinState } from "@/app/(site)/join/state";
import { CheckboxField, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { Honeypot } from "@/components/forms/Honeypot";
import { Button } from "@/components/ui/Button";
import { type InvolvementEdition, NAME_PART_MAX } from "@/content/involvement";
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

  /*
   * What came back from a refusal, if anything.
   *
   * React resets an uncontrolled form once its action has run, which is what a
   * successful application wants and the opposite of what a rejected one does.
   * These feed `defaultValue`, and a reset restores each field to its default —
   * so the very mechanism that empties the form on success refills it here.
   */
  const kept = state.values;

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

  /*
   * `onReset` refuses React's automatic clear-down.
   *
   * React empties an uncontrolled form once its action has run. That suits a
   * form that succeeded — but this one is replaced by the acknowledgement panel
   * above when it succeeds, so the clear-down only ever fires on a refusal,
   * where it throws away everything the reader typed. Somebody told to add
   * their family name would lose their address, country, area of interest and
   * message along with it, and a fair number would not start again. Nothing
   * here needs resetting: the form unmounts entirely when it is accepted.
   *
   * `defaultValue` below covers the same ground without script, where the page
   * is rendered afresh by the server and there is no DOM left to preserve.
   */
  return (
    <form
      action={formAction}
      onReset={(event) => event.preventDefault()}
      className="relative flex flex-col gap-10"
    >
      <Honeypot />

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
            const chosen = kept?.role ?? initialRole;
            const defaultChecked = chosen ? chosen === role.id : index === 0;
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

      {/*
        Two boxes rather than one, so that a family name is asked for plainly
        instead of being inferred from whatever was typed into "Full name".
        What is stored is still a single encrypted name; see the action.
      */}
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id={`${uid}-given-name`}
          name="givenName"
          label={text.fields.givenName}
          autoComplete="given-name"
          maxLength={NAME_PART_MAX}
          required
          defaultValue={kept?.givenName ?? ""}
        />
        <TextField
          id={`${uid}-family-name`}
          name="familyName"
          label={text.fields.familyName}
          autoComplete="family-name"
          maxLength={NAME_PART_MAX}
          required
          defaultValue={kept?.familyName ?? ""}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id={`${uid}-email`}
          name="email"
          type="email"
          label={text.fields.email}
          autoComplete="email"
          maxLength={180}
          required
          defaultValue={kept?.email ?? ""}
        />
        <TextField
          id={`${uid}-region`}
          name="region"
          label={text.fields.region}
          optional
          optionalLabel={text.fields.optional}
          maxLength={120}
          defaultValue={kept?.region ?? ""}
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
          defaultValue={kept?.country ?? initialCountry ?? ""}
        />
        <SelectField
          id={`${uid}-interest`}
          name="interest"
          label={text.fields.interest}
          options={edition.interests}
          placeholder={text.fields.placeholder}
          required
          defaultValue={kept?.interest ?? ""}
        />
      </div>

      <TextArea
        id={`${uid}-message`}
        name="message"
        label={text.fields.message}
        optional
        optionalLabel={text.fields.optional}
        hint={text.fields.messageHint}
        maxLength={1500}
        rows={6}
        defaultValue={kept?.message ?? ""}
      />

      <CheckboxField
        id={`${uid}-consent`}
        name="consent"
        value="yes"
        required
        defaultChecked={kept?.consent ?? false}
      >
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
