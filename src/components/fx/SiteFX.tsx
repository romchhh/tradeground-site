"use client";

import { useEffect, useState } from "react";

export default function SiteFX() {
  const [pos, setPos] = useState({ x: 50, y: 20 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || !motionOk) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="grain-layer" aria-hidden />
      {enabled && (
        <div
          className="pointer-events-none fixed inset-0 z-[40] hidden lg:block"
          aria-hidden
          style={{
            background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(192,219,154,0.11), transparent 55%)`,
          }}
        />
      )}
    </>
  );
}
