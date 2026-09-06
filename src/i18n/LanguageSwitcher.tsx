"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageContext";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M2.5 9h13M9 2.5c1.8 2 2.7 4.2 2.7 6.5S10.8 15 9 15.5M9 2.5C7.2 4.5 6.3 6.7 6.3 9S7.2 13.5 9 15.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function LanguageSwitcher({
  variant = "header",
}: {
  variant?: "header" | "menu";
}) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isMenu = variant === "menu";

  return (
    <div ref={rootRef} className={`relative ${isMenu ? "flex justify-center" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
        className={`inline-flex items-center gap-2 rounded-full border transition-all duration-200 ${
          isMenu
            ? "border-white/20 px-4 py-2.5 text-text hover:border-accent hover:text-accent"
            : "border-white/15 px-3 py-2 text-white/85 hover:border-white/30 hover:text-white"
        } ${open ? (isMenu ? "border-accent text-accent" : "border-white/40 text-white") : ""}`}
      >
        <GlobeIcon />
        <span className="font-display text-[12px] font-bold tracking-wide">
          {localeLabels[locale]}
        </span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Languages"
          className={`absolute z-50 min-w-[148px] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_16px_40px_rgba(0,0,0,0.45)] ${
            isMenu
              ? "bottom-full left-1/2 mb-2 -translate-x-1/2"
              : "right-0 top-full mt-2"
          }`}
        >
          <ul className="py-1.5">
            {locales.map((code) => {
              const active = code === locale;
              return (
                <li key={code} role="option" aria-selected={active}>
                  <Link
                    href={`/${code}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between gap-6 px-4 py-2.5 font-display text-[13px] font-bold tracking-wide transition-colors ${
                      active
                        ? "bg-accent/15 text-accent"
                        : "text-text-light hover:bg-white/5 hover:text-text"
                    }`}
                  >
                    <span>{localeLabels[code as Locale]}</span>
                    {active && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M3 7.5l2.5 2.5L11 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
