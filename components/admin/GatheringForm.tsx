"use client";

import { useActionState, useState } from "react";
import { CalendarPlus } from "lucide-react";
import {
  type GatheringFormState,
  saveGatheringAction,
} from "@/app/admin/(dashboard)/gatherings/actions";
import {
  type GatheringVisibility,
  VISIBILITY_LABEL,
  VISIBILITY_NOTE,
  gatheringVisibilities,
} from "@/lib/admin/gathering-visibility";
import type { Gathering } from "@/lib/admin/gatherings";
import type { SelectOption } from "@/components/forms/Field";

/** `YYYY-MM-DDTHH:mm` in local time, which is what `datetime-local` wants. */
function forInput(date: Date | null): string {
  if (!date) return "";
  const pad = (value: number) => String(value).padStart(2, "0");
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}`
  );
}

export interface GatheringFormProps {
  readonly wings: readonly SelectOption[];
  /** Present when editing; absent when arranging something new. */
  readonly gathering?: Gathering;
  /**
   * Whether the address and notes were decrypted for this render.
   *
   * When they were not, the address field is left out of the form rather than
   * rendered empty. An empty input that submits would erase the address the
   * moment anything else on the record was edited — a silent loss of the one
   * fact the gathering exists to remember.
   */
  readonly revealed: boolean;
}

/**
 * Arranging a gathering, or editing one.
 *
 * The visibility control is the only part that matters. It decides whether the
 * address is stored in plain text or encrypted, so the form states the
 * consequence in words beside each choice rather than leaving somebody to infer
 * it from a label — a wrong guess here is the difference between an evening in
 * a restaurant and an evening in a restaurant somebody hostile was told about.
 *
 * `private` is the default for a new record for the same reason. The safe value
 * is the one you get by not thinking about it.
 */
export function GatheringForm({ wings, gathering, revealed }: GatheringFormProps) {
  const [state, formAction, pending] = useActionState<GatheringFormState, FormData>(
    saveGatheringAction,
    { errors: [] },
  );

  const [visibility, setVisibility] = useState<GatheringVisibility>(
    gathering?.visibility ?? "private",
  );

  const field =
    "border border-rule bg-surface px-3 py-2 text-[0.875rem] text-ink focus:border-gold focus:outline-none";

  const editing = gathering !== undefined;
  const withheld = editing && !revealed;

  return (
    <section className="flex flex-col gap-5 border border-hairline p-6">
      <div className="flex items-start gap-3">
        <CalendarPlus
          className="mt-0.5 size-4 shrink-0 text-gold"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <div>
          <h3 className="eyebrow text-muted">{editing ? "Edit gathering" : "Arrange a gathering"}</h3>
          <p className="mt-2 max-w-xl text-[0.875rem] leading-relaxed text-muted">
            Unless it is an open event, the address is encrypted before it is written down and this
            is the only screen it appears on. Nothing here is published on the site.
          </p>
        </div>
      </div>

      {/*
        React empties an uncontrolled form once the action returns. On the
        refusal path that would throw the record away and leave the visibility
        radio checked in state but unchecked in the DOM, so the next save would
        submit a different visibility than the one on screen. The reset arrives
        as a cancelable DOM event; refusing it is what keeps the two in step —
        the same fix the public join form carries, for the same reason. A
        successful save redirects, so nothing is left behind to clear.
      */}
      <form
        action={formAction}
        onReset={(event) => event.preventDefault()}
        className="flex flex-col gap-4"
      >
        {editing ? <input type="hidden" name="id" value={gathering.id} /> : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className="eyebrow text-muted">Title</span>
            <input
              name="title"
              required
              maxLength={140}
              defaultValue={gathering?.title ?? ""}
              placeholder="Vienna wing — dinner"
              className={field}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Wing</span>
            <select name="wing" required defaultValue={gathering?.wing ?? ""} className={field}>
              <option value="" disabled>
                Select…
              </option>
              {wings.map((wing) => (
                <option key={wing.value} value={wing.value}>
                  {wing.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">City</span>
            <input
              name="city"
              required
              maxLength={80}
              defaultValue={gathering?.city ?? ""}
              className={field}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Starts</span>
            <input
              name="startsAt"
              type="datetime-local"
              required
              defaultValue={forInput(gathering?.startsAt ?? null)}
              className={field}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="eyebrow text-muted">Finishes — optional</span>
            <input
              name="endsAt"
              type="datetime-local"
              defaultValue={forInput(gathering?.endsAt ?? null)}
              className={field}
            />
          </label>
        </div>

        <fieldset className="flex flex-col gap-2">
          <legend className="eyebrow mb-1 text-muted">Who may know</legend>
          {gatheringVisibilities.map((value) => (
            <label key={value} className="flex items-start gap-3">
              <input
                type="radio"
                name="visibility"
                value={value}
                checked={visibility === value}
                onChange={() => setVisibility(value)}
                className="mt-1 size-3.5 shrink-0 appearance-none rounded-full border border-field bg-surface checked:border-6 checked:border-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-[0.875rem] text-ink">{VISIBILITY_LABEL[value]}</span>
                <span className="text-micro leading-relaxed text-faint">
                  {VISIBILITY_NOTE[value]}
                </span>
              </span>
            </label>
          ))}
        </fieldset>

        <label className="flex flex-col gap-1.5">
          <span className="eyebrow text-muted">
            {visibility === "private" ? "Description — for you" : "Description — publishable"}
          </span>
          <textarea
            name="summary"
            rows={3}
            maxLength={600}
            defaultValue={gathering?.summary ?? ""}
            className={field}
          />
          <span className="text-micro text-faint">
            Never put the address in here. This is the field a public page would render.
          </span>
        </label>

        {withheld ? (
          /*
           * No address input at all rather than an empty one. An empty field
           * that submits would erase the stored address as soon as anything
           * else was edited, and the whole record exists to remember it.
           */
          <p className="border-l-2 border-gold/65 py-1 pl-4 text-[0.875rem] text-muted">
            The address and notes are encrypted and were not opened for this page, so they are not
            shown and cannot be edited here. Confirm your passkey to edit them; saving now leaves
            both untouched.
          </p>
        ) : (
          <>
            <label className="flex flex-col gap-1.5">
              <span className="eyebrow text-muted">
                {visibility === "public" ? "Address — published" : "Address — encrypted"}
              </span>
              <input
                name="venue"
                maxLength={300}
                defaultValue={gathering?.venue ?? ""}
                placeholder="Leave empty until it is settled"
                className={field}
              />
              <span className="text-micro text-faint">
                {visibility === "public"
                  ? "Stored in plain text, because an open event's address is meant to be read."
                  : "Encrypted at rest. A stolen copy of the database does not yield this."}
              </span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="eyebrow text-muted">Notes — encrypted</span>
              <textarea
                name="notes"
                rows={3}
                maxLength={2000}
                defaultValue={gathering?.notes ?? ""}
                placeholder="Who has been told, who is bringing what."
                className={field}
              />
            </label>
          </>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={pending}
            className="border border-gold/70 bg-gold/10 px-5 py-2 text-[0.875rem] text-ink transition-colors hover:bg-gold/20 disabled:opacity-60"
          >
            {pending ? "Saving…" : editing ? "Save changes" : "Arrange it"}
          </button>

          {visibility === "public" ? (
            <p className="text-micro text-burgundy">
              Open event — needs a passkey touch, and the address will be readable.
            </p>
          ) : null}
        </div>

        {state.errors.length > 0 ? (
          <ul role="alert" className="flex flex-col gap-1 border-l-2 border-burgundy py-1 pl-4">
            {state.errors.map((error) => (
              <li key={error} className="text-[0.875rem] text-muted">
                {error}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </section>
  );
}
