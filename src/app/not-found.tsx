import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const t = getDictionary(defaultLocale);

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
        alt={SITE_NAME}
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
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/${defaultLocale}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-[14px] font-semibold text-bg transition-transform hover:scale-[1.03] hover:bg-accent-light"
        >
          {t.notFound.home}
        </Link>
        <div className="flex gap-2">
          {(["ua", "ru", "en", "de"] as const).map((code) => (
            <Link
              key={code}
              href={`/${code}`}
              className="rounded-full border border-white/20 px-3 py-2 font-display text-[12px] font-bold text-text-light transition-colors hover:border-accent hover:text-accent"
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
