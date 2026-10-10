"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
import { useActionState, useId } from "react";
import { subscribe } from "@/app/(site)/newsletter/actions";
import { NEWSLETTER_INITIAL, type NewsletterState } from "@/app/(site)/newsletter/state";
import { TextField } from "@/components/forms/Field";
import { Honeypot } from "@/components/forms/Honeypot";
import { Button } from "@/components/ui/Button";
import type { NewsletterEdition } from "@/content/newsletter";
import { localePath } from "@/lib/i18n";

/**
 * One box and a button — and the only form on the site whose answer is
 * deliberately the same in two different situations.
 *
 * `sent` is rendered for an address that was just added and for one that was
 * already on the list, because any visible difference between the two would
 * make this a way to test whether a named person reads the movement's letter.
 * The difference is communicated in the message that follows, which reaches
 * only the owner of the address. See `app/(site)/newsletter/state.ts`.
 */
export function SubscribeForm({ edition }: { readonly edition: NewsletterEdition }) {
  const uid = useId();
  const { locale } = edition;
  const text = edition.form;
  const [state, formAction, pending] = useActionState<NewsletterState, FormData>(
    subscribe,
    NEWSLETTER_INITIAL,
  );

  if (state.status === "sent") {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="mt-5 font-serif text-display-4 font-normal text-ink">{text.sent.title}</h3>
        <p className="mt-4 max-w-xl text-reading text-body/92">{text.sent.body}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      onReset={(event) => event.preventDefault()}
      className="relative flex flex-col gap-6"
      aria-labelledby={`${uid}-heading`}
    >
      {/*
        The decoy the action has been checking for since before any page
        rendered it. Without this element `honeypotTripped` is a lookup for a
        field that is never present, which is to say no defence at all.
      */}
      <Honeypot />

      {/*
        Which edition the reader was in when they subscribed, so the
        confirmation and every issue after it are written in that language.
        A hidden field rather than a guess from the request, and validated
        against `LOCALES` again on the server — this one is typed by the page,
        but a server action is a POST endpoint anybody can call directly.
      */}
      <input type="hidden" name="locale" value={locale} />

      <h2 id={`${uid}-heading`} className="font-serif text-display-3 font-normal text-ink">
        {text.heading}
      </h2>

      {state.status === "unavailable" ? <Notice>{text.unavailable}</Notice> : null}
      {state.status === "throttled" ? <Notice>{text.throttled}</Notice> : null}
      {state.status === "busy" ? <Notice>{text.busy}</Notice> : null}

      <TextField
        id={`${uid}-email`}
        name="email"
        type="email"
        label={text.email}
        autoComplete="email"
        maxLength={180}
        required
        defaultValue=""
        error={state.status === "invalid" ? text.invalid : undefined}
      />

      <div className="flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? text.submitting : text.submit}
        </Button>
        <p className="text-micro leading-relaxed text-faint sm:max-w-sm sm:text-right">
          {text.privacyNote}{" "}
          <Link
            href={localePath(locale, "/privacy")}
            className="underline underline-offset-4 hover:text-burgundy"
          >
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
