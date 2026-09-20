import Link from "next/link";
import { redirect } from "next/navigation";
import { PasskeySignIn } from "@/components/admin/PasskeySignIn";
import { currentSession } from "@/lib/admin/session";
import { credentialCount } from "@/lib/admin/webauthn";

/**
 * Sign-in page. Reachable without a session by design — it is the only page
 * under `/admin` that has to be, along with enrolment.
 */
export default async function LoginPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Already signed in? Don't present a sign-in form.
  if (await currentSession()) redirect("/admin");

  // No passkeys anywhere means this is a fresh installation, and the only way
  // in is enrolment with the bootstrap token.
  const enrolled = await credentialCount();
  if (enrolled === 0) redirect("/admin/enrol");

  const searchParams = await props.searchParams;
  const candidate = Array.isArray(searchParams.next) ? searchParams.next[0] : searchParams.next;

  /*
   * Only a path within the admin surface survives. Accepting an arbitrary value
   * here would turn the login page into an open redirect, which is a convenient
   * way to lend this domain's credibility to somebody else's landing page.
   */
  const next =
    candidate && candidate.startsWith("/admin/") && !candidate.startsWith("/admin/login")
      ? candidate
      : undefined;

  return (
    <main id="main" className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-6 text-burgundy">Restore Europe · Administration</p>
        <h1 className="font-serif text-display-2 font-normal text-ink">Sign in</h1>

        <p className="mt-6 mb-10 text-[0.9375rem] leading-relaxed text-muted">
          This surface is protected by a passkey. There is no password to enter, guess or leak.
        </p>

        <PasskeySignIn next={next} />

        <p className="mt-10 border-t border-hairline pt-6 text-micro leading-relaxed text-faint">
          Lost your device? A passkey cannot be recovered from here. Sign in with another enrolled
          passkey, or re-run enrolment with a fresh{" "}
          <code className="text-muted">ADMIN_BOOTSTRAP_TOKEN</code> after clearing{" "}
          <code className="text-muted">admin_credential</code>.
        </p>

        <p className="mt-6 text-micro text-faint">
          <Link href="/" className="underline underline-offset-4 hover:text-burgundy">
            Return to the public site
          </Link>
        </p>
      </div>
    </main>
  );
}
