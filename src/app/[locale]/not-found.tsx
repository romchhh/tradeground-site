"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

export default function LocaleNotFound() {
  const { t, href, locale } = useI18n();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "linear-gradient(165deg, #000100 0%, #10100F 55%, #1B1C18 100%)",
      }}
    >
      <p className="font-display text-[13px] font-bold uppercase tracking-[0.2em] text-accent">
        404
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/logo.svg"
        alt="TradeGround"
        className="mt-6 h-10 w-auto opacity-90"
      />
      <h1
        className="mt-10 font-display font-extrabold uppercase tracking-[-0.02em] text-text"
        style={{ fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 0.95 }}
      >
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md font-body text-[15px] leading-relaxed text-text-light">
        {t.notFound.description}
      </p>
      <Link
        href={href()}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-[14px] font-semibold text-bg transition-transform hover:scale-[1.03] hover:bg-accent-light"
      >
        {t.notFound.home}
      </Link>
      <p className="mt-6 font-body text-xs text-muted">{locale.toUpperCase()}</p>
    </main>
  );
}
