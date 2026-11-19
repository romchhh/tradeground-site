"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export function CoverEngine() {
  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pinEls = () =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-cover-pin="pin"]'));

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
    const tick = () => {
      if (!motionOk) return;
      const pins = pinEls();
      const vh = window.innerHeight;
      const isMobile = window.matchMedia("(max-width: 900px)").matches;
      const lift = isMobile ? 12 : 28;
      const shrink = isMobile ? 0.02 : 0.04;

      pins.forEach((el, i) => {
        const next = pins[i + 1];
        if (!next) {
          el.style.transform = "";
          return;
        }
        const top = next.getBoundingClientRect().top;
        if (top > vh + 80 || top < -vh) {
          if (top > vh + 80) el.style.transform = "";
          return;
        }
        const p = Math.min(1, Math.max(0, 1 - top / vh));
        el.style.transform = `translate3d(0, ${p * lift}px, 0) scale(${1 - p * shrink})`;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        tick();
      });
    };

    const ro = new ResizeObserver(() => applyTops());
    const watch = () => {
      pinEls().forEach((el) => ro.observe(el));
      applyTops();
    };

    watch();
    tick();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", applyTops, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyTops);
      window.removeEventListener("resize", onScroll);
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
