import { InviteAdministrator } from "@/components/admin/InviteAdministrator";
import { PasskeyElevation } from "@/components/admin/PasskeyElevation";
import { PasskeyEnrol } from "@/components/admin/PasskeyEnrol";
import { listAdministrators, listPendingInvites } from "@/lib/admin/administrators";
import { recentAudit } from "@/lib/admin/audit";
import { isElevated, requireSession } from "@/lib/admin/session";
import { listPasskeys } from "@/lib/admin/webauthn";
import {
  createInviteAction,
  deletePasskeyAction,
  disableAdministratorAction,
  revokeInviteAction,
  revokeSessionsAction,
} from "./actions";

function formatMoment(value: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(value);
}

export default async function SecurityPage() {
  const session = await requireSession();
  const [passkeys, administrators, invites, audit] = await Promise.all([
    listPasskeys(session.user.id),
    listAdministrators(),
    listPendingInvites(),
    recentAudit(60),
  ]);

  const single = passkeys.length <= 1;
  const elevated = isElevated(session);

  return (
    <div className="flex flex-col gap-12">
      <header>
        <p className="eyebrow mb-4 text-burgundy">Security</p>
        <h1 className="font-serif text-display-2 font-normal text-ink">Passkeys and activity</h1>
      </header>

      {single ? (
        <p className="border-l-2 border-gold/65 py-1 pl-5 text-reading text-muted">
          You have one passkey. There is no password to fall back on, so losing that device means
          clearing the credential table by hand to recover. Enrol a second one on another device.
        </p>
      ) : null}

      <section className="flex flex-col gap-6">
        <h2 className="eyebrow text-muted">Enrolled passkeys</h2>

        <ul className="flex flex-col border-t border-hairline">
          {passkeys.map((passkey) => (
            <li
              key={passkey.id}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-hairline py-4"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[0.9375rem] text-ink">{passkey.label}</p>
                <p className="mt-1 text-micro text-faint">
                  {passkey.deviceType === "multiDevice" ? "Synced across devices" : "Single device"}
                  {passkey.backedUp ? " · backed up" : ""} · enrolled{" "}
                  {formatMoment(passkey.createdAt)}
                  {passkey.lastUsedAt ? ` · last used ${formatMoment(passkey.lastUsedAt)}` : " · never used"}
                </p>
              </div>

              <form action={deletePasskeyAction}>
                <input type="hidden" name="credentialId" value={passkey.id} />
                <button
                  type="submit"
                  disabled={single}
                  title={single ? "Enrol another passkey before removing this one." : undefined}
                  className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Remove
                </button>
              </form>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 border border-hairline p-6">
        <h2 className="eyebrow text-muted">Add another passkey</h2>
        <p className="text-[0.875rem] leading-relaxed text-muted">
          Authorised by this session — no bootstrap token is involved or accepted here.
        </p>
        <PasskeyEnrol mode="additional" />
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="eyebrow text-muted">Administrators</h2>
          <p className="mt-2 text-micro leading-relaxed text-faint">
            Everyone with an account of their own. Separate accounts are not bureaucracy: the audit
            log below names whoever read the membership roll, and two people sharing one passkey
            would make every one of those lines a guess.
          </p>
        </div>

        <ul className="flex flex-col border-t border-hairline">
          {administrators.map((administrator) => {
            const isSelf = administrator.id === session.user.id;
            const pending = administrator.passkeys === 0;

            return (
              <li
                key={administrator.id}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-hairline py-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[0.9375rem] text-ink">
                    {administrator.displayName}
                    <span className="ml-2 text-micro text-faint">{administrator.username}</span>
                    {isSelf ? <span className="ml-2 text-micro text-gold">you</span> : null}
                  </p>
                  <p className="mt-1 text-micro text-faint">
                    {administrator.disabledAt
                      ? `Disabled ${formatMoment(administrator.disabledAt)}`
                      : pending
                        ? "Invited · no passkey enrolled yet"
                        : `${administrator.passkeys} ${administrator.passkeys === 1 ? "passkey" : "passkeys"}`}
                    {administrator.lastSeenAt
                      ? ` · last signed in ${formatMoment(administrator.lastSeenAt)}`
                      : ""}
                  </p>
                </div>

                {isSelf || administrator.disabledAt ? null : (
                  <form action={disableAdministratorAction}>
                    <input type="hidden" name="administratorId" value={administrator.id} />
                    <button
                      type="submit"
                      disabled={!elevated}
                      title={
                        elevated ? undefined : "Confirm your passkey below to disable an account."
                      }
                      className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Disable
                    </button>
                  </form>
                )}
              </li>
            );
          })}
        </ul>

        {invites.length > 0 ? (
          <div className="flex flex-col gap-3">
            <h3 className="eyebrow text-muted">Unclaimed invitations</h3>
            <ul className="flex flex-col border-t border-hairline">
              {invites.map((invite) => (
                <li
                  key={invite.id}
                  className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-hairline py-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.9375rem] text-ink">{invite.username}</p>
                    <p className="mt-1 text-micro text-faint">
                      Issued {formatMoment(invite.createdAt)}
                      {invite.invitedBy ? ` by ${invite.invitedBy}` : ""} · expires{" "}
                      {formatMoment(invite.expiresAt)}
                    </p>
                  </div>

                  <form action={revokeInviteAction}>
                    <input type="hidden" name="inviteId" value={invite.id} />
                    <button
                      type="submit"
                      className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
                    >
                      Withdraw
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="flex flex-col gap-6 border border-hairline p-6">
        <div>
          <h2 className="eyebrow text-muted">Invite an administrator</h2>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
            Creates an account and a single-use link that lets them enrol a passkey of their own on
            their own device. Nothing about the link identifies them; it is the account you name
            here that the audit log will show.
          </p>
        </div>

        {/*
          Elevated, not merely signed in. Admitting an administrator is the one
          action that can hand the membership roll to somebody new, so it is
          held to the same bar as reading the roll: a passkey touch from the
          last few minutes. The button above is disabled on the same test.
        */}
        {elevated ? (
          <InviteAdministrator action={createInviteAction} />
        ) : (
          <PasskeyElevation reason="Admitting a new administrator, or removing one, gives somebody else access to everything here — including the membership roll. It needs a fresh passkey touch, so a session left unattended cannot be used to create a second way in." />
        )}
      </section>

      <section className="flex flex-col gap-4 border border-burgundy/40 p-6">
        <h2 className="eyebrow text-burgundy">Revoke all sessions</h2>
        <p className="text-[0.875rem] leading-relaxed text-muted">
          Invalidates every signed-in session for your account, this one included, so you will be
          asked for your passkey again. Use it if a device has gone missing.
        </p>
        <form action={revokeSessionsAction}>
          <button
            type="submit"
            className="border border-burgundy/60 px-5 py-2.5 text-[0.875rem] text-burgundy transition-colors hover:bg-burgundy/10"
          >
            Revoke every session
          </button>
        </form>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="eyebrow text-muted">Activity log</h2>
          <p className="mt-2 text-micro leading-relaxed text-faint">
            Append-only. Failed sign-in attempts are recorded as well as successful ones — a run of
            failures is the only warning this system gives that someone is probing it. Addresses are
            stored as keyed hashes, never as addresses.
          </p>
        </div>

        {audit.length === 0 ? (
          <p className="text-[0.875rem] text-muted">Nothing recorded yet.</p>
        ) : (
          <ul className="flex flex-col border-t border-hairline">
            {audit.map((entry) => (
              <li
                key={entry.id}
                className="grid gap-x-6 gap-y-1 border-b border-hairline py-3 sm:grid-cols-[11rem_9rem_1fr]"
              >
                <time dateTime={entry.at.toISOString()} className="numerals-tabular text-micro text-faint">
                  {formatMoment(entry.at)}
                </time>
                <span
                  className={
                    entry.outcome === "failure"
                      ? "text-micro text-burgundy"
                      : "text-micro text-muted"
                  }
                >
                  {entry.action}
                </span>
                <span className="text-micro text-muted">
                  {entry.actorLabel ? `${entry.actorLabel} · ` : ""}
                  {Object.entries(entry.detail)
                    .map(([key, value]) => `${key}: ${String(value)}`)
                    .join(", ") || "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
