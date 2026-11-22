"use client";

import { useActionState } from "react";
import { CheckCircle2, Info } from "lucide-react";

import { submitWithdrawal } from "@/app/(site)/shop/withdraw/actions";
import { WITHDRAWAL_INITIAL, type WithdrawalState } from "@/app/(site)/shop/withdraw/state";
import { Button } from "@/components/ui/Button";
import type { ShopText } from "@/content/shop";
import type { Locale } from "@/lib/i18n";

const FIELD =
  "h-12 w-full rounded-[6px] border border-rule bg-surface px-4 text-[0.9375rem] text-ink transition-colors hover:border-field focus:border-gold focus:outline-none";

/**
 * The withdrawal function. Two steps, as the law describes them: details,
 * then the same details shown back with a "Confirm withdrawal" button. The
 * values travel in hidden fields between the steps, so it also works without
 * JavaScript.
 */
export function WithdrawalForm({
  locale,
  text,
  initialReference,
}: {
  readonly locale: Locale;
  readonly text: ShopText;
  readonly initialReference: string;
}) {
  const words = text.withdrawal;
  const [state, action, pending] = useActionState<WithdrawalState, FormData>(submitWithdrawal, {
    ...WITHDRAWAL_INITIAL,
    values: { ...WITHDRAWAL_INITIAL.values, reference: initialReference },
  });

  if (state.stage === "done") {
    return (
      <div className="flex gap-4 rounded-[10px] border border-hairline bg-surface/60 p-6" role="status">
        <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
        <div>
          <h2 className="font-serif text-display-4 font-normal text-ink">{words.doneTitle}</h2>
          <p className="mt-3 text-reading text-body/92">{words.doneBody}</p>
        </div>
      </div>
    );
  }

  const status = state.status ? (
    <p className="flex gap-3 rounded-[6px] border border-burgundy/40 bg-burgundy/5 p-4 text-[0.9375rem] text-body" role="alert">
      <Info className="mt-0.5 size-4 shrink-0 text-burgundy" strokeWidth={1.75} aria-hidden="true" />
      {words.states[state.status]}
    </p>
  ) : null;

  if (state.stage === "check") {
    return (
      <form action={action} onReset={(event) => event.preventDefault()} className="flex flex-col gap-6">
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="name" value={state.values.name} />
        <input type="hidden" name="reference" value={state.values.reference} />
        <input type="hidden" name="email" value={state.values.email} />
        <div className="rounded-[10px] border border-hairline bg-surface/60 p-6">
          <h2 className="font-serif text-display-4 font-normal text-ink">{words.checkTitle}</h2>
          <p className="mt-2 text-[0.9375rem] text-muted">{words.checkBody}</p>
          <dl className="mt-5 divide-y divide-hairline border-t border-hairline">
            <Row label={words.name} value={state.values.name} />
            <Row label={words.reference} value={state.values.reference} />
            <Row label={words.email} value={state.values.email} />
          </dl>
        </div>
        {status}
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" name="step" value="confirm" size="lg" disabled={pending}>
            {words.confirm}
          </Button>
          <Button type="submit" name="step" value="edit" formNoValidate variant="secondary" size="lg" disabled={pending}>
            {words.change}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form action={action} onReset={(event) => event.preventDefault()} className="flex flex-col gap-6">
      <input type="hidden" name="locale" value={locale} />
      <Field label={words.name} error={state.errors.includes("name") ? words.errors.name : null}>
        <input name="name" defaultValue={state.values.name} autoComplete="name" required maxLength={200} className={FIELD} />
      </Field>
      <Field
        label={words.reference}
        hint={words.referenceHint}
        error={state.errors.includes("reference") ? words.errors.reference : null}
      >
        <input
          name="reference"
          defaultValue={state.values.reference}
          autoComplete="off"
          required
          maxLength={40}
          placeholder="RE-"
          className={`${FIELD} font-mono uppercase`}
        />
      </Field>
      <Field label={words.email} hint={words.emailHint} error={state.errors.includes("email") ? words.errors.email : null}>
        <input name="email" type="email" defaultValue={state.values.email} autoComplete="email" required maxLength={320} className={FIELD} />
      </Field>
      {status}
      <Button type="submit" name="step" value="review" size="lg" disabled={pending} className="self-start">
        {words.review}
      </Button>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  readonly label: string;
  readonly hint?: string;
  readonly error: string | null;
  readonly children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow text-muted">{label}</span>
      {children}
      {error ? <span className="text-[0.875rem] text-burgundy">{error}</span> : hint ? <span className="text-micro text-faint">{hint}</span> : null}
    </label>
  );
}

function Row({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
      <dt className="text-[0.875rem] text-muted">{label}</dt>
      <dd className="break-all text-[0.9375rem] text-ink">{value}</dd>
    </div>
  );
}
