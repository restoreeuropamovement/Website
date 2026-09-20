import { NextResponse } from "next/server";

/**
 * Responses for the authentication endpoints.
 *
 * `no-store` on every one of them: an intermediary must never hold a challenge
 * or a session response, and a browser must not replay one from its back/forward
 * cache.
 */
export function jsonResponse(body: unknown, status = 200): NextResponse {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" },
  });
}

/**
 * Deliberately uninformative failure.
 *
 * The caller learns that the ceremony failed and nothing else. Distinguishing
 * "no such account" from "wrong passkey", or echoing a verifier's internal
 * message, hands an attacker a way to enumerate administrators and to probe
 * which part of the check they defeated. Detail goes to the audit log, where
 * only we can read it.
 */
export function opaqueFailure(status = 400): NextResponse {
  return jsonResponse({ error: "Authentication failed." }, status);
}
