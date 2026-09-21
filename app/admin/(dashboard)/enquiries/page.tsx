import { Lock } from "lucide-react";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { recordAudit } from "@/lib/admin/audit";
import { enquiryOverview, listEnquiriesRevealed } from "@/lib/admin/enquiries";
import { hasMemberEncryptionKey } from "@/lib/admin/env";
import { clientContext } from "@/lib/admin/request";
import { isElevated, requireSession, type ActiveSession } from "@/lib/admin/session";
import { formatDate } from "@/lib/utils";
import { eraseEnquiryAction, lockEnquiriesAction, markEnquiryAction } from "./actions";

/**
 * The correspondence inbox.
 *
 * Gated exactly like the membership roll. Counts are visible to any signed-in
 * administrator; the messages themselves need a fresh passkey assertion,
 * because the body of a letter to a political movement is as disclosing as a
 * row on the roll — and every reveal is written to the audit log.
 */
export default async function AdminEnquiriesPage() {
  const session = await requireSession();

  if (!hasMemberEncryptionKey()) {
    return (
      <div className="flex flex-col gap-6">
        <header>
          <p className="eyebrow mb-4 text-burgundy">Correspondence</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Enquiries</h1>
        </header>
        <p className="border-l-2 border-burgundy py-1 pl-5 text-reading text-muted">
          <code className="text-ink">MEMBER_ENCRYPTION_KEY</code> is not set, so correspondence
          cannot be read or written on this deployment. The public contact form declines messages
          rather than storing them unencrypted.
        </p>
      </div>
    );
  }

  const overview = await enquiryOverview();
  const elevated = isElevated(session);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4 text-burgundy">Correspondence</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Enquiries</h1>
          <p className="mt-3 text-[0.9375rem] text-muted">
            {overview.newCount} awaiting a reply, {overview.handled} handled.
          </p>
        </div>

        {elevated ? (
          <form action={lockEnquiriesAction}>
            <button
              type="submit"
              className="flex items-center gap-2 border border-rule px-4 py-2 text-[0.875rem] text-muted transition-colors hover:border-burgundy hover:text-burgundy"
            >
              <Lock className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Lock again
            </button>
          </form>
        ) : null}
      </header>

      {elevated ? <RevealedInbox session={session} /> : <PasskeyElevation />}
    </div>
  );
}

async function RevealedInbox({ session }: { readonly session: ActiveSession }) {
  const enquiries = await listEnquiriesRevealed();
  const { ipHash } = await clientContext();

  /* Reading is the sensitive act here, so the read is what gets recorded. */
  await recordAudit({
    action: "enquiry.reveal",
    outcome: "success",
    actorId: session.user.id,
    actorLabel: session.user.username,
    detail: { returned: enquiries.length },
    ipHash,
  });

  if (enquiries.length === 0) {
    return (
      <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
        No correspondence yet.
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-6">
      <p className="text-micro text-faint">This view is being recorded in the audit log.</p>

      <ul className="flex flex-col border-t border-hairline">
        {enquiries.map((enquiry) => (
          <li key={enquiry.id} className="border-b border-hairline py-5">
            <p className="eyebrow mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className={enquiry.status === "new" ? "text-gold" : "text-burgundy"}>
                {enquiry.status === "new" ? "Awaiting reply" : "Handled"}
              </span>
              <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
              <span>{enquiry.subject}</span>
              <span aria-hidden="true" className="size-1 rotate-45 bg-gold/70" />
              <time dateTime={enquiry.createdAt.toISOString()}>
                {formatDate(enquiry.createdAt.toISOString().slice(0, 10))}
              </time>
            </p>

            <p className="font-serif text-[1.1875rem] leading-snug text-ink">{enquiry.name}</p>
            <p className="mt-0.5 text-[0.875rem] text-muted">{enquiry.email}</p>

            <p className="mt-3 max-w-prose border-l-2 border-gold/50 py-1 pl-4 text-[0.9375rem] leading-relaxed whitespace-pre-line text-muted">
              {enquiry.message}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <form action={markEnquiryAction}>
                <input type="hidden" name="id" value={enquiry.id} />
                <input
                  type="hidden"
                  name="status"
                  value={enquiry.status === "new" ? "handled" : "new"}
                />
                <button
                  type="submit"
                  className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {enquiry.status === "new" ? "Mark handled" : "Reopen"}
                </button>
              </form>

              <form action={eraseEnquiryAction}>
                <input type="hidden" name="id" value={enquiry.id} />
                <button
                  type="submit"
                  className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  Erase
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
