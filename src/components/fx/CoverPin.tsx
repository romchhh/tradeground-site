"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export function CoverEngine() {
  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!motionOk) return;

    const pinEls = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>('[data-cover-pin="pin"]')
      );

    // Stick only after the whole block has scrolled through.
    // Tall sections get a negative top so their bottom reaches the viewport first.
    const applyTops = () => {
      const vh = window.innerHeight;
      pinEls().forEach((el) => {
        const top = Math.min(0, vh - el.offsetHeight);
        const next = `${top}px`;
        if (el.style.top !== next) el.style.top = next;
      });
    };

    let raf = 0;
    let lastScrollY = -1;

    const tick = () => {
      const pins = pinEls();
      const vh = window.innerHeight;
      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      const lift = isMobile ? 8 : 18;
      const shrink = isMobile ? 0.012 : 0.025;

      pins.forEach((el, i) => {
        const next = pins[i + 1];
        if (!next) {
          if (el.style.transform) el.style.transform = "";
          return;
        }
        const top = next.getBoundingClientRect().top;
        // Skip work when the next pin is far from the viewport
        if (top > vh + 120 || top < -vh) {
          if (top > vh + 120 && el.style.transform) el.style.transform = "";
          return;
        }
        const p = Math.min(1, Math.max(0, 1 - top / vh));
        el.style.transform = `translate3d(0, ${p * lift}px, 0) scale(${1 - p * shrink})`;
      });
    };

    const onScroll = () => {
      const y = window.scrollY | 0;
      if (y === lastScrollY) return;
      lastScrollY = y;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        tick();
      });
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        applyTops();
        tick();
      }, 100);
    };

    applyTops();
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
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
