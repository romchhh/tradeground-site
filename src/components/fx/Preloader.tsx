"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [phase, setPhase] = useState<"show" | "out" | "gone">("show");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduce ? 280 : 1900;
    const started = performance.now();
    let closed = false;
    let hideTimer = 0;
    let removeTimer = 0;

    const finish = () => {
      if (closed) return;
      closed = true;
      const wait = Math.max(0, minMs - (performance.now() - started));
      hideTimer = window.setTimeout(() => {
        setPhase("out");
        removeTimer = window.setTimeout(() => setPhase("gone"), reduce ? 0 : 780);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    const cap = window.setTimeout(finish, 4200);
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(cap);
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`preloader${phase === "out" ? " is-out" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader__glow" />
      <div className="preloader__mark">
        <img
          src="/media/hero/mini-logo.svg"
          alt=""
          className="preloader__tg"
        />
        <p className="preloader__word">
          <span>TRADE</span>
          <span>GROUND</span>
        </p>
      </div>
    </div>
  );
}
