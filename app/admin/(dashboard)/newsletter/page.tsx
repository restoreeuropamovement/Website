import { Lock } from "lucide-react";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { listDispatches } from "@/lib/admin/dispatch";
import { hasMail, hasMemberEncryptionKey } from "@/lib/admin/env";
import { listArticlesForAdmin } from "@/lib/admin/journal";
import { isElevated, requireSession } from "@/lib/admin/session";
import { subscriberCounts } from "@/lib/admin/subscribers";
import { formatDate } from "@/lib/utils";
import { lockDispatchAction, sendDispatchAction } from "./actions";

/**
 * The newsletter.
 *
 * Gated like the roll and the inbox, with the same split: how large the list
 * is and what has already gone out are visible to any signed-in
 * administrator, and the button that sends needs a fresh passkey touch. The
 * reasoning for that is in `actions.ts`, where the gate actually is — this
 * page only declines to draw a control the action would refuse.
 *
 * What is deliberately absent is any view of who is on the list. There is no
 * search, no table of addresses and nothing to reveal, because sending is the
 * only thing this surface needs addresses for and it never shows them to
 * anybody. The roll has a reveal because an administrator has to read an
 * application to decide it; a subscription needs no deciding.
 */
export default async function AdminNewsletterPage() {
  const session = await requireSession();

  if (!hasMemberEncryptionKey()) {
    return (
      <div className="flex flex-col gap-6">
        <Header />
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">MEMBER_ENCRYPTION_KEY</code> is not set, so subscribers&rsquo;
          addresses cannot be read or written on this deployment. The public form declines
          addresses rather than storing them in the clear.
        </p>
      </div>
    );
  }

  const [counts, articles, dispatches] = await Promise.all([
    subscriberCounts(),
    listArticlesForAdmin(),
    listDispatches(),
  ]);

  const sent = new Map(dispatches.map((dispatch) => [dispatch.slug, dispatch]));
  const published = articles.filter((article) => article.status === "published");
  const elevated = isElevated(session);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Header>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {counts.confirmed.toLocaleString("en-GB")} confirmed,{" "}
            {counts.pending.toLocaleString("en-GB")} awaiting confirmation,{" "}
            {counts.unsubscribed.toLocaleString("en-GB")} left. Only the confirmed are ever sent
            to.
          </p>
        </Header>

        {elevated ? (
          <form action={lockDispatchAction}>
            <button
              type="submit"
              className="flex items-center gap-2 border border-rule px-4 py-2 text-[0.875rem] text-muted transition-colors hover:border-burgundy hover:text-burgundy"
            >
              <Lock className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Lock again
            </button>
          </form>
        ) : null}
      </div>

      {hasMail() ? null : (
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          No mail provider is configured on this deployment, so nothing can be sent. Set{" "}
          <code className="text-ink">RESEND_API_KEY</code> and{" "}
          <code className="text-ink">MAIL_FROM</code>. Until then the send is refused outright
          rather than attempted: an essay that failed to send would still be recorded as
          dispatched, and could never be sent again.
        </p>
      )}

      {elevated ? null : (
        <PasskeyElevation reason="Sending decrypts every address on the list and writes to all of them at once, in the movement's name, with no way to recall it. A signed-in session that has been left unattended should not be able to do that." />
      )}

      <section aria-labelledby="essays-heading" className="flex flex-col gap-5">
        <h2 id="essays-heading" className="eyebrow text-burgundy">
          Published essays
        </h2>

        {published.length === 0 ? (
          <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
            Nothing is published yet. An essay has to be live on the journal before it can be sent
            to the list.
          </p>
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {published.map((article) => {
              const dispatch = sent.get(article.slug);

              return (
                <li key={article.slug} className="border-b border-hairline py-5">
                  <p className="eyebrow mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                    <span>{article.category}</span>
                    <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
                    <time dateTime={article.publishedOn}>{formatDate(article.publishedOn)}</time>
                  </p>

                  <h3 className="font-serif text-display-4 leading-snug text-ink">
                    {article.title}
                  </h3>

                  {dispatch ? (
                    <p className="mt-2 text-[0.875rem] text-muted">
                      Sent{" "}
                      <time dateTime={dispatch.sentAt.toISOString()}>
                        {formatDate(dispatch.sentAt.toISOString().slice(0, 10))}
                      </time>{" "}
                      to {dispatch.recipients.toLocaleString("en-GB")}
                      {dispatch.failures > 0
                        ? `, with ${dispatch.failures.toLocaleString("en-GB")} the provider refused`
                        : ""}
                      . An essay is sent once; there is no second dispatch.
                    </p>
                  ) : elevated && hasMail() ? (
                    <form
                      action={sendDispatchAction}
                      className="mt-4 flex flex-col gap-3 border border-gold/40 p-5"
                    >
                      <p className="text-[0.875rem] leading-relaxed text-muted">
                        This sends the essay in full to all{" "}
                        {counts.confirmed.toLocaleString("en-GB")} confirmed subscribers and cannot
                        be undone or repeated. Type{" "}
                        <code className="text-ink">{article.slug}</code> to confirm.
                      </p>
                      <input type="hidden" name="slug" value={article.slug} />
                      <input
                        name="confirm"
                        placeholder={article.slug}
                        autoComplete="off"
                        aria-label={`Type ${article.slug} to confirm sending`}
                        className="max-w-sm rounded-xs border border-field bg-surface px-4 py-2.5 text-[0.9375rem] text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
                      />
                      <button
                        type="submit"
                        className="self-start border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
                      >
                        Send to the list
                      </button>
                    </form>
                  ) : (
                    <p className="mt-2 text-[0.875rem] text-faint">Not sent.</p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

function Header({ children }: { readonly children?: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-burgundy">Newsletter</p>
      <h1 className="font-serif text-display-2 font-normal text-ink">The list</h1>
      {children}
    </div>
  );
}
