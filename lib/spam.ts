/**
 * The cheapest defence the public forms have, and the one that does most work.
 *
 * A field that is present in the markup, invisible on screen, skipped by the
 * keyboard and hidden from assistive technology. A person cannot fill it in;
 * the automated submitters that cause floods fill in every field they find.
 *
 * It is not a CAPTCHA and is not meant to be. A CAPTCHA is a third party
 * watching everyone who tries to join a political movement, in exchange for
 * stopping an attacker who was always going to read the form and skip the
 * field. This stops the indiscriminate traffic, costs nothing, ships no
 * JavaScript and tells no one outside the movement that you were here.
 *
 * The name is deliberately ordinary. `honeypot` would be recognised.
 */
export const HONEYPOT_FIELD = "website";

export function honeypotTripped(form: FormData): boolean {
  return String(form.get(HONEYPOT_FIELD) ?? "").trim().length > 0;
}

/**
 * Site-wide ceiling on submissions per hour, across every connection.
 *
 * The per-connection limit is the real control; this one exists for the case
 * it cannot see, which is the same script arriving from a few hundred
 * addresses. Set far above anything the movement produces organically, because
 * the failure mode of setting it low is the one that matters: an attacker who
 * can trip a global limit can shut the door on genuine applicants, which is a
 * worse outcome than a queue with junk in it that an administrator deletes.
 *
 * Tripping it is recorded as a failed submission, so a ceiling that is reached
 * shows up in the audit log rather than silently becoming the new normal.
 *
 * Raised from 300 before the movement's public launch. Three hundred an hour
 * is a sensible ceiling for a site nobody has heard of and a poor one for the
 * day it is announced: an hour of genuine interest would spend it, and every
 * applicant after that is turned away at the exact moment the movement is
 * most worth joining. The argument above decides the direction — the cost of
 * setting this too low is refusing real people, and the cost of setting it
 * too high is a queue an administrator empties.
 */
export const GLOBAL_HOURLY_LIMIT = 2000;
export const GLOBAL_WINDOW_SECONDS = 60 * 60;
