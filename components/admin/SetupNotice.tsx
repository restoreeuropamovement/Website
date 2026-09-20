/**
 * Shown when `DATABASE_URL` is absent.
 *
 * The admin surface has no offline mode: with no database there are no
 * credentials to verify a passkey against, so there is nothing here that could
 * be safely unlocked. Saying that, and listing exactly what is missing, is more
 * useful than a connection stack trace — and far better than a placeholder
 * dashboard that implies the panel works.
 */
const VARIABLES = [
  {
    name: "DATABASE_URL",
    note: "PostgreSQL 13 or later. Any host: Neon, Supabase, Vercel Postgres or your own server.",
  },
  {
    name: "ADMIN_SESSION_SECRET",
    note: "At least 32 characters. Generate: node -e \"console.log(crypto.randomBytes(48).toString('base64url'))\"",
  },
  {
    name: "ADMIN_RP_ID",
    note: "Registrable domain the passkey binds to — restoreeuropa.eu. No scheme, port or www.",
  },
  { name: "ADMIN_ORIGIN", note: "Exact origin, including scheme — https://restoreeuropa.eu." },
  {
    name: "ADMIN_BOOTSTRAP_TOKEN",
    note: "One-time token for enrolling the first passkey. Inert once one exists.",
  },
  {
    name: "MEMBER_ENCRYPTION_KEY",
    note: "32 bytes, base64url. Encrypts members' names and addresses. Needed only for /admin/members.",
  },
] as const;

export function SetupNotice() {
  return (
    <div className="mx-auto max-w-(--container-reading) px-6 py-20">
      <p className="eyebrow mb-6 text-burgundy">Administration</p>
      <h1 className="font-serif text-display-2 font-normal text-ink">Not configured</h1>

      <p className="mt-8 text-reading text-body/92">
        This deployment has no database, so there is nothing to authenticate against and no journal
        to edit. The public site is unaffected — it is serving essays from{" "}
        <code className="text-ink">content/journal/articles.ts</code>, exactly as it did before the
        admin surface existed.
      </p>

      <p className="mt-6 text-reading text-body/92">
        Set the following, run <code className="text-ink">npm run db:migrate</code>, then{" "}
        <code className="text-ink">npm run db:seed</code> to copy the existing essays into the
        database.
      </p>

      <dl className="mt-10 flex flex-col border-t border-hairline">
        {VARIABLES.map((variable) => (
          <div key={variable.name} className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
            <dt className="text-[0.875rem] font-medium text-ink">
              <code>{variable.name}</code>
            </dt>
            <dd className="text-[0.9375rem] leading-relaxed text-muted">{variable.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
