"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export function CoverEngine() {
  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mq = window.matchMedia("(min-width: 768px)");
    if (!motionOk) return;

    let raf = 0;
    const tick = () => {
      const pins = Array.from(
        document.querySelectorAll<HTMLElement>('[data-cover-pin="pin"]')
      );
      if (!mq.matches) {
        pins.forEach((el) => {
          el.style.transform = "";
          el.style.filter = "";
        });
        return;
      }
      const vh = window.innerHeight;
      pins.forEach((el, i) => {
        const next = pins[i + 1];
        if (!next) {
          el.style.transform = "";
          el.style.filter = "";
          return;
        }
        const top = next.getBoundingClientRect().top;
        if (top > vh + 80 || top < -vh) {
          if (top > vh + 80) el.style.transform = "";
          return;
        }
        const p = Math.min(1, Math.max(0, 1 - top / vh));
        el.style.transform = `translate3d(0, ${p * 28}px, 0) scale(${1 - p * 0.04})`;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        tick();
      });
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", tick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

export function CoverPin({
  z,
  round = true,
  tone = "dark",
  clip = true,
  pin = true,
  fill = false,
  children,
}: {
  z: number;
  round?: boolean;
  tone?: "dark" | "light";
  clip?: boolean;
  pin?: boolean;
  fill?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      data-cover-pin={pin ? "pin" : "static"}
      className={`cover-pin ${pin ? "cover-pin-sticky" : ""} ${
        round ? "cover-pin-round" : ""
      } ${tone === "light" ? "bg-white" : "bg-bg"} ${
        clip && round ? "cover-pin-clip" : ""
      } ${fill ? "cover-pin-fill" : ""}`}
      style={{ zIndex: z }}
    >
      {children}
    </div>
  );
}
