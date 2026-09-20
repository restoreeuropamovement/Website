"use client";

import { CheckCircle2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { CheckboxField, SelectField, TextArea, TextField } from "@/components/forms/Field";
import { FormNotice } from "@/components/forms/FormNotice";
import { Button } from "@/components/ui/Button";
import { contactSubjects } from "@/content/involvement";
import {
  email as validateEmail,
  firstError,
  hasErrors,
  maxLength,
  minLength,
  required,
  type Errors,
} from "@/lib/validation";

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: string;
}

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "", consent: "" };

function validate(values: ContactValues): Errors<ContactValues> {
  return {
    name: firstError(required(values.name, "Your name"), maxLength(values.name, 120, "Your name")),
    email: firstError(validateEmail(values.email), maxLength(values.email, 180, "Email address")),
    subject: required(values.subject, "A subject"),
    message: firstError(
      required(values.message, "A message"),
      minLength(values.message, 20, "Your message"),
      maxLength(values.message, 2000, "Your message"),
    ),
    consent: values.consent === "yes" ? undefined : "You must agree before continuing.",
  };
}

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<Errors<ContactValues>>({});
  const [validatedOnce, setValidatedOnce] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof ContactValues>(key: K, value: ContactValues[K]) => {
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
    // Placeholder submit: there is no endpoint, and none is called.
    if (!hasErrors(found)) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-rule bg-surface p-8" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">
          Your message was not sent.
        </h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">
          Your entries were valid, but there is no address to deliver them to yet. Nothing was
          transmitted or stored. Published addresses will appear on this page as each function of
          the movement is formally constituted.
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
          Write another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
      <FormNotice>
        Correspondence addresses have not been established. The form validates in your browser so
        the page can be tested, but nothing is transmitted, stored or received.
      </FormNotice>

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
      </div>

      <SelectField
        id={`${uid}-subject`}
        name="subject"
        label="Subject"
        options={contactSubjects}
        value={values.subject}
        onChange={(event) => set("subject", event.target.value)}
        error={errors.subject}
      />

      <TextArea
        id={`${uid}-message`}
        name="message"
        label="Message"
        rows={7}
        maxLength={2000}
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
        I understand that this form is not connected to any system and that nothing I enter is
        transmitted or stored.
      </CheckboxField>

      <div className="border-t border-hairline pt-8">
        <Button type="submit" size="lg">
          Check and continue
        </Button>
      </div>
    </form>
  );
}
