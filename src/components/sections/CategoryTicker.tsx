"use client";

import { useI18n } from "@/i18n/LanguageContext";

export default function CategoryTicker() {
  const { t } = useI18n();
  const items = Object.values(t.categories.labels);
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-bg py-4 md:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent md:w-28" />
      <div className="animate-marquee flex w-max items-center gap-8 md:gap-12">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="flex items-center gap-8 md:gap-12">
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-white/55 md:text-[15px]">
              {label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
