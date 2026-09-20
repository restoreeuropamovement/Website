"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";
import { CheckboxField, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { FormNotice } from "@/components/forms/FormNotice";
import { Button } from "@/components/ui/Button";
import {
  europeanCountries,
  interestAreas,
  involvementRoles,
} from "@/content/involvement";
import {
  email as validateEmail,
  firstError,
  hasErrors,
  maxLength,
  minLength,
  required,
  type Errors,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

interface JoinValues {
  role: string;
  name: string;
  email: string;
  country: string;
  region: string;
  interest: string;
  message: string;
  consent: string;
}

const EMPTY: JoinValues = {
  role: involvementRoles[0]?.id ?? "supporter",
  name: "",
  email: "",
  country: "",
  region: "",
  interest: "",
  message: "",
  consent: "",
};

export interface JoinFormProps {
  /** Preselected from the query string, e.g. arriving from a national wing. */
  readonly initialCountry?: string;
  readonly initialRole?: string;
}

function validate(values: JoinValues): Errors<JoinValues> {
  return {
    role: required(values.role, "A role"),
    name: firstError(required(values.name, "Your name"), maxLength(values.name, 120, "Your name")),
    email: firstError(validateEmail(values.email), maxLength(values.email, 180, "Email address")),
    country: required(values.country, "A country"),
    region: maxLength(values.region, 120, "Region"),
    interest: required(values.interest, "An area of interest"),
    message: firstError(
      minLength(values.message, 10, "Your message"),
      maxLength(values.message, 1500, "Your message"),
    ),
    consent: values.consent === "yes" ? undefined : "You must agree before continuing.",
  };
}

export function JoinForm({ initialCountry, initialRole }: JoinFormProps) {
  const uid = useId();
  const [values, setValues] = useState<JoinValues>({
    ...EMPTY,
    ...(initialCountry ? { country: initialCountry } : {}),
    ...(initialRole ? { role: initialRole } : {}),
  });
  const [errors, setErrors] = useState<Errors<JoinValues>>({});
  const [submitted, setSubmitted] = useState(false);
  const [validatedOnce, setValidatedOnce] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof JoinValues>(key: K, value: JoinValues[K]) => {
    setValues((current) => {
      const next = { ...current, [key]: value };
      if (validatedOnce) setErrors(validate(next));
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setValidatedOnce(true);

    if (hasErrors(found)) {
      setSubmitted(false);
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    // Placeholder submit. No network request is made, and nothing is persisted:
    // there is no backend to receive it. See FormNotice.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">
          Your entries are valid — and were not sent.
        </h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">
          This form has no destination yet. Nothing has been transmitted to a server, stored in
          your browser, or received by anyone. When the movement is formally constituted and a
          submission system exists, this page will say so and the form will work as expected.
        </p>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
          In the meantime, the fastest way to follow the work is to read the{" "}
          <Link href="/manifesto" className="underline underline-offset-4 hover:text-burgundy">
            manifesto
          </Link>{" "}
          and the{" "}
          <Link href="/journal" className="underline underline-offset-4 hover:text-burgundy">
            journal
          </Link>
          .
        </p>
        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => {
            setSubmitted(false);
            setValues(EMPTY);
            setErrors({});
            setValidatedOnce(false);
          }}
        >
          Start again
        </Button>
      </div>
    );
  }

  const errorList = (Object.entries(errors) as [keyof JoinValues, string | undefined][]).filter(
    (entry): entry is [keyof JoinValues, string] => entry[1] !== undefined,
  );

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-10">
      <FormNotice />

      <div
        ref={summaryRef}
        tabIndex={-1}
        className={cn(errorList.length === 0 && "sr-only")}
        aria-live="polite"
      >
        {errorList.length > 0 ? (
          <div className="border border-burgundy/40 bg-burgundy/5 p-5">
            <h3 className="text-[0.9375rem] font-medium text-burgundy">
              There {errorList.length === 1 ? "is 1 problem" : `are ${errorList.length} problems`}{" "}
              with this form
            </h3>
            <ul className="mt-3 flex flex-col gap-1.5">
              {errorList.map(([field, message]) => (
                <li key={field}>
                  <a
                    href={`#${uid}-${field}`}
                    className="text-[0.875rem] text-burgundy underline underline-offset-4"
                  >
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <fieldset className="flex flex-col gap-5">
        <legend className="eyebrow mb-1 text-muted">How you would like to take part</legend>
        <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {involvementRoles.map((role) => {
            const id = `${uid}-role-${role.id}`;
            const active = values.role === role.id;
            return (
              <li key={role.id} className="bg-surface">
                <label
                  htmlFor={id}
                  className={cn(
                    "flex h-full cursor-pointer flex-col gap-2.5 p-6 transition-colors",
                    active ? "bg-canvas-deep" : "hover:bg-canvas",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <input
                      id={id}
                      type="radio"
                      name={`${uid}-role`}
                      value={role.id}
                      checked={active}
                      onChange={() => set("role", role.id)}
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
          {/* The five roles leave one cell short of a full row at two and three
              columns; this keeps the grid's hairline ground from showing. */}
          <li aria-hidden="true" className="hidden bg-surface sm:block" />
        </ul>
        <p id={`${uid}-role`} className={cn("text-micro text-burgundy", !errors.role && "sr-only")}>
          {errors.role ?? ""}
        </p>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id={`${uid}-name`}
          name="name"
          label="Name"
          autoComplete="name"
          maxLength={120}
          value={values.name}
          onChange={(event) => set("name", event.target.value)}
          error={errors.name}
        />
        <TextField
          id={`${uid}-email`}
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          maxLength={180}
          value={values.email}
          onChange={(event) => set("email", event.target.value)}
          error={errors.email}
        />
        <SelectField
          id={`${uid}-country`}
          name="country"
          label="Country"
          autoComplete="country-name"
          options={europeanCountries}
          value={values.country}
          onChange={(event) => set("country", event.target.value)}
          error={errors.country}
        />
        <TextField
          id={`${uid}-region`}
          name="region"
          label="Region or city"
          optional
          maxLength={120}
          value={values.region}
          onChange={(event) => set("region", event.target.value)}
          error={errors.region}
        />
      </div>

      <SelectField
        id={`${uid}-interest`}
        name="interest"
        label="Area of interest"
        options={interestAreas}
        value={values.interest}
        onChange={(event) => set("interest", event.target.value)}
        error={errors.interest}
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label="Message"
        optional
        hint="What you would like to do, and anything about your circumstances that is relevant to it."
        maxLength={1500}
        value={values.message}
        onChange={(event) => set("message", event.target.value)}
        error={errors.message}
      />

      <CheckboxField
        id={`${uid}-consent`}
        name="consent"
        checked={values.consent === "yes"}
        onChange={(checked) => set("consent", checked ? "yes" : "")}
        error={errors.consent}
      >
        I understand that this form is not connected to any system, that nothing I enter is
        transmitted or stored, and that I am not joining any organisation by submitting it.
      </CheckboxField>

      <div className="flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Check and continue
        </Button>
        <p className="text-micro leading-relaxed text-faint sm:max-w-sm sm:text-right">
          We ask only for what a reply would require. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-burgundy">
            privacy note
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
