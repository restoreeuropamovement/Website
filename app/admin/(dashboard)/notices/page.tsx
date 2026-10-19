import { Lock } from "lucide-react";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { operatorText } from "@/content/emails/en";
import { hasMail, hasMemberEncryptionKey } from "@/lib/admin/env";
import { listNotices, noticeAudience } from "@/lib/admin/notices";
import { isElevated, requireSession } from "@/lib/admin/session";
import { formatDate } from "@/lib/utils";
import { lockNoticesAction, sendNoticeAction } from "./actions";

/**
 * Writing to the membership.
 *
 * The newsletter page's twin, and separate from it on purpose: the two write
 * to different lists under different consents, and a single screen with an
 * audience picker is one mis-click away from sending the roll a letter it
 * never asked for. See the note at the top of `lib/admin/notices.ts`.
 *
 * Nobody's address appears here, exactly as on the newsletter page. Sending is
 * the only thing this surface needs them for, and it never shows them.
 */
export default async function AdminNoticesPage() {
  const session = await requireSession();

  if (!hasMemberEncryptionKey()) {
    return (
      <div className="flex flex-col gap-6">
        <Header />
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">MEMBER_ENCRYPTION_KEY</code> is not set, so members&rsquo;
          addresses cannot be read on this deployment and nothing can be sent.
        </p>
      </div>
    );
  }

  const [audience, notices] = await Promise.all([noticeAudience(), listNotices()]);
  const elevated = isElevated(session);

  /*
   * The first notice carries an explanation the later ones must not. Members
   * who joined before this existed were told that applying put them on no
   * mailing list; the page saying so has been rewritten, but rewriting a page
   * tells nobody, so the first message says it in its own words. Offered as a
   * starting point rather than forced, because it is the operator who knows
   * whether it has already been said some other way.
   */
  const preamble = notices.length === 0 ? `${operatorText.memberNotice.firstNoticePreamble}\n\n` : "";

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Header>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {audience.reachable.toLocaleString("en-GB")} confirmed{" "}
            {audience.reachable === 1 ? "member" : "members"} would receive this
            {audience.optedOut > 0
              ? `, and ${audience.optedOut.toLocaleString("en-GB")} asked not to be written to`
              : ""}
            . Applicants who have not been accepted are never written to here.
          </p>
        </Header>

        {elevated ? (
          <form action={lockNoticesAction}>
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
          <code className="text-ink">MAIL_FROM</code>. The send is refused outright rather than
          attempted, so no notice is recorded as having gone out when it did not.
        </p>
      )}

      {elevated ? null : (
        <PasskeyElevation reason="Sending decrypts every address on the membership roll and writes to all of them at once, in the movement's name, with no way to recall it. A signed-in session that has been left unattended should not be able to do that." />
      )}

      {elevated && hasMail() ? (
        <section aria-labelledby="compose-heading" className="flex flex-col gap-5">
          <h2 id="compose-heading" className="eyebrow text-burgundy">
            Write a notice
          </h2>

          <form action={sendNoticeAction} className="flex flex-col gap-5 border border-gold/40 p-6">
            <label className="flex flex-col gap-2">
              <span className="text-[0.875rem] text-muted">Subject</span>
              <input
                name="subject"
                maxLength={140}
                autoComplete="off"
                required
                className="rounded-xs border border-field bg-surface px-4 py-2.5 text-[0.9375rem] text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[0.875rem] text-muted">
                Message. Plain text; write links out in full and they will be clickable.
              </span>
              <textarea
                name="body"
                rows={16}
                defaultValue={preamble}
                required
                className="rounded-xs border border-field bg-surface px-4 py-3 font-mono text-[0.875rem] leading-relaxed text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
              />
            </label>

            <p className="text-[0.875rem] leading-relaxed text-muted">
              Three things are added underneath: why they are receiving it, that replies go to the
              contact form rather than the sender, and a link that stops further notices without
              affecting membership. This goes to all{" "}
              {audience.reachable.toLocaleString("en-GB")} of them at once and cannot be recalled.
              Type the subject again to confirm.
            </p>

            <input
              name="confirm"
              placeholder="Repeat the subject"
              autoComplete="off"
              aria-label="Type the subject again to confirm sending"
              className="max-w-sm rounded-xs border border-field bg-surface px-4 py-2.5 text-[0.9375rem] text-body focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy"
            />

            <button
              type="submit"
              className="self-start border border-gold/70 bg-gold/10 px-5 py-2.5 text-[0.875rem] text-ink transition-colors hover:bg-gold/20"
            >
              Send to the membership
            </button>
          </form>
        </section>
      ) : null}

      <section aria-labelledby="sent-heading" className="flex flex-col gap-5">
        <h2 id="sent-heading" className="eyebrow text-burgundy">
          Already sent
        </h2>

        {notices.length === 0 ? (
          <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
            Nothing has been sent to the membership yet.
          </p>
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {notices.map((notice) => (
              <li key={notice.id} className="border-b border-hairline py-5">
                <h3 className="font-serif text-display-4 leading-snug text-ink">
                  {notice.subject}
                </h3>
                <p className="mt-2 text-[0.875rem] text-muted">
                  Sent{" "}
                  <time dateTime={notice.sentAt.toISOString()}>
                    {formatDate(notice.sentAt.toISOString().slice(0, 10))}
                  </time>{" "}
                  to {notice.recipients.toLocaleString("en-GB")}
                  {notice.failures > 0
                    ? `, with ${notice.failures.toLocaleString("en-GB")} the provider refused`
                    : ""}
                  . What it said is not kept.
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Header({ children }: { readonly children?: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-burgundy">Members</p>
      <h1 className="font-serif text-display-2 font-normal text-ink">Notices</h1>
      {children}
    </div>
  );
}
