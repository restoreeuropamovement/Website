import { sessionSecret } from "@/lib/admin/env";

/**
 * Cryptographic helpers shared by the proxy and the server.
 *
 * Everything here goes through Web Crypto rather than `node:crypto` so the same
 * module can be imported from `proxy.ts` — which Next may deploy away from the
 * main Node runtime — without a second implementation drifting out of step with
 * this one.
 */

const encoder = new TextEncoder();

export function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * The `<ArrayBuffer>` parameter is not decoration: Web Crypto's `BufferSource`
 * excludes views backed by a `SharedArrayBuffer`, so the bare `Uint8Array` alias
 * is not assignable to it.
 */
export function fromBase64Url(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded.padEnd(Math.ceil(padded.length / 4) * 4, "="));
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/** 256 bits from the platform CSPRNG. Used for session tokens and labels. */
export function randomToken(bytes = 32): string {
  return toBase64Url(crypto.getRandomValues(new Uint8Array(bytes)));
}

/**
 * Session lookup key.
 *
 * The cookie carries the token; the database stores only this digest. A plain
 * hash is correct here rather than a slow password hash: the input is 256 bits
 * of uniform randomness, so there is no dictionary to search and no work factor
 * worth paying.
 */
export async function hashToken(token: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(token));
  return toBase64Url(new Uint8Array(digest));
}

async function hmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(sessionSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

/**
 * Keyed tag over a cookie value.
 *
 * This lets the proxy reject a forged or truncated cookie without touching the
 * database, so unauthenticated traffic to `/admin` costs no queries. It is a
 * cheap filter in front of the real check, never a substitute for it — the
 * authoritative test is the session row, verified in the admin layout.
 */
export async function sign(value: string): Promise<string> {
  const signature = await crypto.subtle.sign("HMAC", await hmacKey(), encoder.encode(value));
  return toBase64Url(new Uint8Array(signature));
}

/**
 * Compares two strings without leaking, through its running time, how many
 * leading characters matched. An early-exit `===` on a signature is enough to
 * let an attacker reconstruct a valid tag byte by byte.
 */
export function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function verifySigned(value: string, signature: string): Promise<boolean> {
  return constantTimeEqual(await sign(value), signature);
}

/**
 * Pseudonymises a client address for the audit log.
 *
 * Keyed with the session secret, so the output cannot be reversed by hashing
 * the four billion IPv4 addresses — which an unkeyed SHA-256 would permit in
 * minutes. Enough to correlate attempts from one source; not a record of who
 * visited.
 */
export async function hashIp(ip: string | null): Promise<string | null> {
  if (!ip) return null;
  return (await sign(`ip:${ip}`)).slice(0, 32);
}
