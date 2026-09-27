import type { Metadata } from "next";
import { SetupNotice } from "@/components/admin/SetupNotice";
import { requireVeil } from "@/lib/admin/veil";
import { hasDatabase } from "@/lib/db";

/**
 * The outermost admin layout. Deliberately does **not** check for a session.
 *
 * `/admin/login` lives under this path too, and a session check here would
 * redirect the login page to itself. The gate is one level down, in
 * `(dashboard)/layout.tsx`, which wraps every page that requires an
 * authenticated administrator. `(entry)` holds the two that must remain
 * reachable without one.
 */
export const metadata: Metadata = {
  title: "Administration",
  // Belt and braces with the `X-Robots-Tag` the proxy sets on every response.
  robots: { index: false, follow: false, nocache: true },
};

/**
 * Nothing under `/admin` may be prerendered or cached. Inherited by every
 * segment below, which is both a correctness requirement — these pages are
 * per-administrator and read the session cookie — and a safety one: a
 * prerendered admin page is a copy of privileged content sitting in the build
 * output, and the build has no session to scope it to.
 */
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  /*
   * Before anything else, including the setup notice below: when a veil is
   * configured and this browser has not presented it, none of this exists. See
   * `lib/admin/veil.ts` — it is a curtain and not a lock, and nothing after this
   * line is relaxed on account of it.
   */
  await requireVeil();

  // Without a database there are no credentials to check a passkey against, so
  // there is nothing here that could be safely unlocked.
  if (!hasDatabase()) {
    return (
      <div className="flex min-h-dvh flex-col bg-canvas">
        <main id="main" className="flex-1">
          <SetupNotice />
        </main>
      </div>
    );
  }

  return <div className="flex min-h-dvh flex-col bg-canvas">{children}</div>;
}
