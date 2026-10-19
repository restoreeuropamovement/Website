"use client";

import { CheckCircle2 } from "lucide-react";
import { useActionState } from "react";
import { stopNotices } from "@/app/(site)/notices/stop/actions";
import { Button } from "@/components/ui/Button";
import { noticesStop } from "@/content/notices/en";

/**
 * Where the link at the foot of every notice lands.
 *
 * The same shape as `UnsubscribePanel`, and for the same reasons, which are
 * worth restating rather than cross-referencing because they are the whole
 * design: there is no failure branch, because a page that distinguished
 * "stopped" from "was not a member" would answer a question about somebody
 * else's membership to whoever is holding a forwarded message. On this list
 * that question is sharper than it is for the journal — the answer is whether
 * a named person belongs to a political movement.
 *
 * It asks for no sign-in and gives no reason, and the press exists only
 * because a bare GET is followed by link scanners and preview fetchers, which
 * would otherwise stop notices for members who never clicked anything.
 */
export function StopPanel({ token }: { readonly token: string }) {
  const [done, formAction, pending] = useActionState<boolean | null, FormData>(stopNotices, null);

  if (!token) {
    return <p className="text-reading leading-relaxed text-muted">{noticesStop.missing}</p>;
  }

  if (done) {
    return (
      <div className="border border-rule bg-surface p-8 lg:p-10" role="status">
        <CheckCircle2 className="size-6 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-5 font-serif text-display-4 font-normal text-ink">
          {noticesStop.done.title}
        </h2>
        <p className="mt-4 max-w-xl text-reading text-body/92">{noticesStop.done.body}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <input type="hidden" name="token" value={token} />
      <p className="max-w-reading text-[0.9375rem] leading-relaxed text-muted">{noticesStop.why}</p>
      <div>
        <Button type="submit" size="lg" variant="secondary" disabled={pending}>
          {pending ? noticesStop.submitting : noticesStop.submit}
        </Button>
      </div>
    </form>
  );
}
