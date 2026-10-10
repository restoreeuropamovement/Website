"use client";

import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import { unsubscribe } from "@/app/(site)/newsletter/actions";
import { Button } from "@/components/ui/Button";
import type { NewsletterEdition } from "@/content/newsletter";

/**
 * Where the link at the foot of every issue lands.
 *
 * There is no failure branch, and that is the design rather than an omission:
 * `unsubscribe` reports success whatever the token matched. Whoever is holding
 * this link is not necessarily the person who owns the address — a forwarded
 * message is enough — and a page that distinguished "removed" from "was not
 * subscribed" would answer a question about somebody else's address to a
 * stranger.
 *
 * It asks for no sign-in and no reason. Leaving a political mailing list has
 * to be at least as easy as joining one, and a removal behind an account
 * would be no removal at all for the reader who most needs it.
 */
export function UnsubscribePanel({
  edition,
  token,
}: {
  readonly edition: NewsletterEdition;
  readonly token: string;
}) {
  const text = edition.unsubscribe;
  const [done, formAction, pending] = useActionState<boolean | null, FormData>(unsubscribe, null);

  if (!token) {
    return <p className="text-reading leading-relaxed text-muted">{text.missing}</p>;
  }

  if (done) {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-5 font-serif text-display-4 font-normal text-ink">{text.done.title}</h2>
        <p className="mt-4 max-w-xl text-reading text-body/92">{text.done.body}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <input type="hidden" name="token" value={token} />
      <p className="max-w-reading text-[0.9375rem] leading-relaxed text-muted">{text.why}</p>
      <div>
        <Button type="submit" size="lg" variant="secondary" disabled={pending}>
          {pending ? text.submitting : text.submit}
        </Button>
      </div>
    </form>
  );
}
