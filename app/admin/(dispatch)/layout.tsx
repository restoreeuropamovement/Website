import Link from "next/link";
import { redirect } from "next/navigation";

import { currentSession } from "@/lib/admin/session";

/**
 * The gate for the packing list, and the whole of the chrome a dispatch
 * account ever sees.
 *
 * A route group of its own rather than a page under `(dashboard)`, so that
 * the two layouts never share a tree: a dispatch account is turned away by
 * `(dashboard)/layout.tsx` on its first render there, and nothing below this
 * layout links into it. Administrators may use this page too, and get a
 * link back.
 */
export default async function DispatchLayout({ children }: { children: React.ReactNode }) {
  const session = await currentSession();
  if (!session) redirect("/admin/login");

  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5">
          <span className="eyebrow text-burgundy">Restore Europa · Dispatch</span>
          {session.user.role === "admin" ? (
            <Link href="/admin" className="text-[0.875rem] text-muted hover:text-ink">
              Back to administration
            </Link>
          ) : null}
          <div className="ml-auto flex items-center gap-4 text-micro text-faint">
            <span>{session.user.displayName || session.user.username}</span>
            <form action="/api/admin/auth/logout" method="post">
              <button
                type="submit"
                className="border border-rule px-3 py-1.5 text-micro text-muted transition-colors hover:border-burgundy hover:text-burgundy"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
      </main>
    </>
  );
}
