import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminNav } from "@/components/admin/AdminNav";
import { currentSession } from "@/lib/admin/session";

/**
 * The authoritative gate.
 *
 * `proxy.ts` has already turned away anything without a validly signed cookie,
 * but that check is stateless and, per the Next documentation, may run detached
 * from this runtime. This is where the session is actually resolved against the
 * database — expiry, idle timeout, revocation, and whether the account is still
 * enabled — and it is the check that decides whether any page below renders.
 *
 * Every page beneath this layout is therefore authenticated by construction.
 * Mutations do not rely on that: each Server Action calls `requireSession()`
 * again, because a Server Action is a POST endpoint a caller can invoke directly
 * without ever loading the page whose form contains it.
 */
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await currentSession();

  if (!session) {
    // Reached when a cookie carries a valid signature but the session behind it
    // has expired or been revoked — precisely what the proxy cannot see.
    redirect("/admin/login");
  }

  return (
    <>
      <header className="border-b border-hairline bg-canvas-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5">
          <Link href="/admin" className="eyebrow text-burgundy">
            Restore Europe · Administration
          </Link>
          <AdminNav />
          <div className="ml-auto flex items-center gap-4 text-micro text-faint">
            <span>{session.user.displayName || session.user.username}</span>
            {/*
              A plain form POST, so signing out works with no JavaScript and
              cannot be triggered by a cross-site GET.
            */}
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
        <div className="mx-auto max-w-6xl px-6 py-12">{children}</div>
      </main>

      <footer className="border-t border-hairline px-6 py-6">
        <p className="mx-auto max-w-6xl text-micro text-faint">
          Not indexed, not linked from the public site, and reachable only with an enrolled passkey.
        </p>
      </footer>
    </>
  );
}
