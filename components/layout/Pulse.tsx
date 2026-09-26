"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { localeFromPath } from "@/lib/i18n";

/**
 * Two measurements the upstream analytics cannot make: that somebody is
 * reading now, and for how long.
 *
 * Deliberately small, and deliberately forgetful. The token below is a random
 * value generated once per tab and held in a module variable — not a cookie,
 * not `localStorage`, not `sessionStorage`. Reloading the page produces a new
 * one, so it cannot recognise a returning reader, which is what keeps the
 * site's promise to set nothing on your device literally true and keeps the
 * consent banner unnecessary.
 *
 * Renders nothing.
 */

/** One per tab, for the life of the tab. Never written anywhere persistent. */
let token: string | undefined;

function tabToken(): string {
  if (token) return token;
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  token = Array.from(bytes, (byte) => byte.toString(36).padStart(2, "0")).join("").slice(0, 32);
  return token;
}

/** Often enough to survive the ninety-second window, rare enough to be cheap. */
const HEARTBEAT_MS = 30_000;

interface Beacon {
  readonly token: string;
  readonly path: string;
  readonly locale: string;
  readonly seconds?: number;
  readonly leaving?: boolean;
}

function send(beacon: Beacon, unloading: boolean): void {
  const body = JSON.stringify(beacon);

  /*
   * `sendBeacon` is the only thing a browser guarantees to deliver once the
   * page is going away; `fetch` from `pagehide` is routinely cancelled. While
   * the page is alive, `keepalive` lets the heartbeat survive a navigation
   * that happens mid-flight.
   */
  if (unloading && typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon("/api/pulse", new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch("/api/pulse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Measurement must never be the reason a page misbehaves.
  });
}

export function Pulse() {
  const pathname = usePathname();

  /*
   * Foreground time only. `engaged` is what has already been banked; `since`
   * is when the current visible stretch began, or undefined while hidden. A
   * tab left open in a background window accumulates nothing, which is the
   * difference between time spent reading and time spent existing.
   */
  const engaged = useRef(0);
  const since = useRef<number | undefined>(undefined);

  useEffect(() => {
    const path = pathname || "/";
    const locale = localeFromPath(path);
    const id = tabToken();

    engaged.current = 0;
    since.current = document.visibilityState === "visible" ? Date.now() : undefined;

    const banked = () => {
      const running = since.current === undefined ? 0 : Date.now() - since.current;
      return Math.round((engaged.current + running) / 1000);
    };

    send({ token: id, path, locale }, false);
    const timer = window.setInterval(() => send({ token: id, path, locale }, false), HEARTBEAT_MS);

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        since.current = Date.now();
        send({ token: id, path, locale }, false);
        return;
      }

      /*
       * Hiding is reported as leaving. On a phone this is usually the last
       * event a page gets, so the reading is banked here rather than gambled
       * on `pagehide` firing later; coming back re-announces presence above.
       */
      if (since.current !== undefined) {
        engaged.current += Date.now() - since.current;
        since.current = undefined;
      }
      send({ token: id, path, locale, seconds: banked(), leaving: true }, true);
      engaged.current = 0;
    };

    const onPageHide = () => send({ token: id, path, locale, seconds: banked(), leaving: true }, true);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);

    /*
     * Cleanup runs on an in-site navigation too, which is exactly when this
     * page's reading has ended and the next one's begins. `leaving` is false:
     * the reader has not left, they have moved, and dropping their presence
     * row here would make them flicker out of the live count between pages.
     */
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      const seconds = banked();
      if (seconds >= 1) send({ token: id, path, locale, seconds }, false);
    };
  }, [pathname]);

  return null;
}
