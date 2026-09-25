import Link from "next/link";
import { PasskeyEnrol } from "@/components/admin/PasskeyEnrol";
import { resolveInvite } from "@/lib/admin/administrators";

/**
 * Claiming an invitation.
 *
 * Reachable without a session, necessarily: the person opening it has no way to
 * sign in yet, which is the whole reason they were sent a link. It is the third
 * and last page under `/admin` that does not require a session.
 *
 * Opening this page spends nothing. The invitation is looked up but not
 * consumed, because a URL sent through a chat application or an email is
 * fetched by things that are not the recipient — link previews, mail scanners,
 * a browser prefetching what it thinks you are about to click. If arriving here
 * burnt the invitation, half of them would be dead before anyone saw them. It
 * is spent at the moment a passkey is actually presented.
 */
export default async function InvitePage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const raw = Array.isArray(searchParams.token) ? searchParams.token[0] : searchParams.token;
  const invite = raw ? await resolveInvite(raw) : null;

  if (!invite || !raw) {
    return (
      <main id="main" className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-6 text-burgundy">Restore Europa · Administration</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">
            This invitation is not valid
          </h1>
          {/*
            One message for expired, withdrawn, already used and never existed.
            Distinguishing them would let somebody holding a stale link learn
            whether an account exists and whether somebody else has claimed it,
            and there is nothing the legitimate recipient can do differently in
            any of the four cases: ask for another.
          */}
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
            It may have expired, been withdrawn, or already been used. Ask the administrator who
            sent it to issue another.
          </p>
          <p className="mt-10 border-t border-hairline pt-6 text-micro text-faint">
            <Link href="/admin/login" className="underline underline-offset-4 hover:text-burgundy">
              Sign in instead
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main" className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-6 text-burgundy">Restore Europa · Administration</p>
        <h1 className="font-serif text-display-2 font-normal text-ink">
          Enrol your passkey, {invite.user.displayName}
        </h1>

        <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
          You have been invited to administer this site as{" "}
          <span className="text-ink">{invite.user.username}</span>. Enrol a passkey on the device
          you will use, and it becomes your way in — there is no password to choose or remember.
        </p>

        <p className="mt-4 mb-10 text-[0.9375rem] leading-relaxed text-muted">
          Do this on your own device rather than a shared one. The key is created on the machine in
          front of you and never leaves it.
        </p>

        <PasskeyEnrol mode="invite" invite={raw} />

        <p className="mt-10 border-t border-hairline pt-6 text-micro leading-relaxed text-faint">
          This link works once and then stops. Everything you do here is recorded against your own
          name, which is the reason you were given an account of your own rather than somebody
          else&rsquo;s.
        </p>
      </div>
    </main>
  );
}
