import { redirect } from "next/navigation";
import { PasskeyEnrol } from "@/components/admin/PasskeyEnrol";
import { hasBootstrapToken } from "@/lib/admin/env";
import { credentialCount } from "@/lib/admin/webauthn";

/**
 * First-run enrolment.
 *
 * Open only while the credential table is empty. Once a passkey exists this
 * page redirects to sign-in and the bootstrap branch of the API refuses to act,
 * so the window closes permanently the moment it has been used — which is why
 * leaving `ADMIN_BOOTSTRAP_TOKEN` in the environment afterwards is harmless.
 *
 * Further passkeys are added from `/admin/security`, authorised by an existing
 * session rather than by the token.
 */
export default async function EnrolPage() {
  if ((await credentialCount()) > 0) redirect("/admin/login");

  if (!hasBootstrapToken()) {
    return (
      <main id="main" className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-6 text-burgundy">Restore Europa · Administration</p>
          <h1 className="font-serif text-display-2 font-normal text-ink">Enrolment closed</h1>
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
            No passkey is enrolled and no <code className="text-ink">ADMIN_BOOTSTRAP_TOKEN</code> is
            set, so there is no way to establish the first administrator. Set one in the
            environment and reload.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main" className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-6 text-burgundy">Restore Europa · Administration</p>
        <h1 className="font-serif text-display-2 font-normal text-ink">Enrol the first passkey</h1>

        <p className="mt-6 mb-10 text-[0.9375rem] leading-relaxed text-muted">
          No administrator exists yet. Enrol a passkey to create one. Once this is done, this page
          closes and further devices can only be added from an authenticated session.
        </p>

        <PasskeyEnrol mode="bootstrap" />

        <p className="mt-10 border-t border-hairline pt-6 text-micro leading-relaxed text-faint">
          Enrol a second passkey afterwards, on a different device. A single passkey is a single
          point of failure, and there is no password to fall back on.
        </p>
      </div>
    </main>
  );
}
