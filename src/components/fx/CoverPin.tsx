"use client";

import type { ReactNode } from "react";

/** Kept for pages that still wrap sections; no sticky overlap. */
export function CoverEngine() {
  return null;
}

export function CoverPin({
  z,
  round = true,
  tone = "dark",
  clip = true,
  pin: _pin = true,
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
      data-cover-pin="static"
      className={`cover-pin ${round ? "cover-pin-round" : ""} ${
        tone === "light" ? "bg-white" : "bg-bg"
      } ${clip && round ? "cover-pin-clip" : ""} ${fill ? "cover-pin-fill" : ""}`}
      style={{ zIndex: "auto", position: "relative" }}
    >
      {children}
    </div>
  );
}
