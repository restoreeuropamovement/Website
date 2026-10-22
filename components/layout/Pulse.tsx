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
 * It is also silent whenever there is nothing to report: a hidden tab and a
 * tab nobody has touched for five minutes both stop talking to the server
 * altogether. See `IDLE_MS`, which is the part of this file that decides what
 * the whole measurement costs.
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

/**
 * How long a tab may go without a sign of life before it stops reporting.
 *
 * This constant, and not the interval above, is what the measurement costs.
 * A serverless database is billed for the hours it is awake and sleeps after
 * five minutes of silence, so the bill follows how much of the day something
 * is talking to it and not how often. Halving the heartbeat would have saved
 * nothing; one forgotten tab beating away at any rate at all keeps the
 * database awake around the clock, and that is precisely what happened.
 *
 * So the beacon reports only while the tab is visible and only while somebody
 * is still doing something in it. Five minutes of stillness and it goes quiet
 * until the next scroll, keypress or movement, which also ends the reading —
 * a page is held by a reader for as long as there is a reader, not for as
 * long as it is on the screen.
 */
const IDLE_MS = 5 * 60_000;

/**
 * What counts as somebody still being there.
 *
 * Deliberately coarse. Anything finer would be a behavioural record, and the
 * only thing done with these events is to move a timestamp held in a local
 * variable — nothing about them is sent anywhere or written down.
 */
const ACTIVITY = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll"] as const;

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
    since.current = undefined;

    /** The timer, and by its existence whether this tab is reporting at all. */
    let timer: number | undefined;
    let lastActive = Date.now();

    /** Foreground seconds so far, counted up to `until`. */
    const banked = (until: number) => {
      const running = since.current === undefined ? 0 : Math.max(0, until - since.current);
      return Math.round((engaged.current + running) / 1000);
    };

    /** Announce presence and start beating. Ignored unless the tab is visible. */
    const begin = () => {
      if (timer !== undefined || document.visibilityState !== "visible") return;
      since.current = Date.now();
      send({ token: id, path, locale }, false);
      timer = window.setInterval(beat, HEARTBEAT_MS);
    };

    /**
     * Stop reporting, banking the reading up to `until`.
     *
     * The reading and the departure go in one beacon because `sendBeacon`
     * during `pagehide` gets a single chance, and a second request would
     * simply not be delivered.
     */
    const end = (until: number, unloading: boolean) => {
      if (timer === undefined) return;
      window.clearInterval(timer);
      timer = undefined;

      const seconds = banked(until);
      since.current = undefined;
      engaged.current = 0;
      send({ token: id, path, locale, seconds, leaving: true }, unloading);
    };

    /*
     * The reading is banked up to the last sign of life rather than up to the
     * moment the stillness was noticed, so the five minutes spent deciding
     * that nobody is there are not themselves counted as reading.
     */
    const beat = () => {
      if (Date.now() - lastActive >= IDLE_MS) end(lastActive, false);
      else send({ token: id, path, locale }, false);
    };

    const onActivity = () => {
      lastActive = Date.now();
      begin();
    };

    /*
     * Hiding is reported as leaving. On a phone this is usually the last
     * event a page gets, so the reading is banked here rather than gambled on
     * `pagehide` firing later; coming back re-announces presence.
     */
    const onVisibility = () => {
      if (document.visibilityState === "visible") onActivity();
      else end(Date.now(), true);
    };

    const onPageHide = () => end(Date.now(), true);

    begin();

    for (const event of ACTIVITY) {
      document.addEventListener(event, onActivity, { passive: true });
    }
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);

    /*
     * Cleanup runs on an in-site navigation too, which is exactly when this
     * page's reading has ended and the next one's begins. `leaving` is false:
     * the reader has not left, they have moved, and dropping their presence
     * row here would make them flicker out of the live count between pages.
     */
    return () => {
      for (const event of ACTIVITY) document.removeEventListener(event, onActivity);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);

      if (timer === undefined) return;
      window.clearInterval(timer);
      timer = undefined;

      const seconds = banked(Date.now());
      if (seconds >= 1) send({ token: id, path, locale, seconds }, false);
    };
  }, [pathname]);

  return null;
}
