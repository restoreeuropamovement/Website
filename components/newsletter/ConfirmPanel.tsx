"use client";

import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import { confirm } from "@/app/(site)/newsletter/actions";
import { Button } from "@/components/ui/Button";
import type { NewsletterEdition } from "@/content/newsletter";
import { renderInline } from "@/lib/inline";

/**
 * Where the link in a confirmation message lands.
 *
 * The token arrives in the query string and is put straight back into a hidden
 * field rather than being acted on by the page that read it. Nothing is
 * written until the button is pressed, because a corporate mail filter fetches
 * every address in an incoming message to check that it is safe — and a GET
 * that confirmed would hand those scanners the power to complete
 * subscriptions for readers who never opened the mail. See the note on
 * `confirm` in `app/(site)/newsletter/actions.ts`.
 */
export function ConfirmPanel({
  edition,
  token,
}: {
  readonly edition: NewsletterEdition;
  readonly token: string;
}) {
  const text = edition.confirm;
  const [result, formAction, pending] = useActionState<boolean | null, FormData>(confirm, null);

  if (!token) {
    return <p className="text-reading leading-relaxed text-muted">{text.missing}</p>;
  }

  if (result === true) {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-5 font-serif text-display-4 font-normal text-ink">{text.done.title}</h2>
        <p className="mt-4 max-w-xl text-reading text-body/92">{text.done.body}</p>
      </div>
    );
  }

  if (result === false) {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <h2 className="font-serif text-display-4 font-normal text-ink">{text.failed.title}</h2>
        <p className="mt-4 max-w-xl text-reading text-body/92">
          {renderInline(text.failed.body, edition.locale)}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <input type="hidden" name="token" value={token} />
      <p className="max-w-reading text-[0.9375rem] leading-relaxed text-muted">{text.why}</p>
      <div>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? text.submitting : text.submit}
        </Button>
      </div>
    </form>
  );
}
