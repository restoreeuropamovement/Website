import { HONEYPOT_FIELD } from "@/lib/spam";

/**
 * The decoy field. See lib/spam.ts for why it exists and why it is not a
 * CAPTCHA.
 *
 * Positioned off-screen rather than `display: none`, because a fair number of
 * submitters skip fields that are outright hidden and fill in ones that are
 * merely out of view. `tabindex="-1"` keeps it off the keyboard path,
 * `aria-hidden` keeps it out of the accessibility tree, and `autoComplete="off"`
 * stops a browser helpfully filling it in and locking a real person out.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_FIELD}>Website</label>
      <input
        id={HONEYPOT_FIELD}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
