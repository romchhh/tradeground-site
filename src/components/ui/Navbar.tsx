"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale, isLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

function BrandArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 4l8 8M12 5v7H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function localeHref(code: Locale, pathname: string | null) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) {
    parts[0] = code;
    return `/${parts.join("/")}`;
  }
  return `/${code}`;
}

export default function Navbar() {
  const { t, marketplace, href, locale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: href("#hero"), external: false },
    { label: t.nav.marketplace, href: marketplace, external: true },
    { label: t.nav.business, href: href("#private"), external: false },
    { label: t.nav.contacts, href: `/${locale}/contacts`, external: false },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  const showCompact = scrolled;

  return (
    <>
      {/* Fixed TG mark — always visible */}
      <Link
        href={href("#hero")}
        className="fixed left-[max(1rem,env(safe-area-inset-left))] top-[max(1rem,env(safe-area-inset-top))] z-[70] flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-bg shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform hover:scale-[1.04] sm:left-[max(1.25rem,env(safe-area-inset-left))] md:left-10 lg:left-14"
        aria-label="TradeGround"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/tg-mark.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Full top bar — visible until scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen || showCompact
            ? "pointer-events-none -translate-y-3 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="site-container flex h-[72px] items-center justify-end gap-3 pt-[env(safe-area-inset-top)] sm:gap-4 md:h-[80px]">
          <div className="mr-auto hidden w-11 shrink-0 md:block" aria-hidden />

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-8">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[13px] text-white/85 transition-colors duration-200 hover:text-white xl:text-[14px]"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-body text-[13px] text-white/85 transition-colors duration-200 hover:text-white xl:text-[14px]"
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black transition-transform duration-200 hover:scale-[1.03] sm:pl-5 sm:text-[14px]"
            >
              {t.nav.open}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-200 group-hover:rotate-[-20deg]">
                <BrandArrow />
              </span>
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label={t.nav.menu}
            >
              <BrandArrow />
            </button>
          </div>
        </div>
      </nav>

      {/* Compact brand arrow — when scrolled / menu items hidden */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label={t.nav.menu}
        className={`fixed right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-[70] flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg shadow-[0_10px_28px_rgba(192,219,154,0.45)] transition-all duration-400 hover:scale-[1.05] hover:bg-accent-light sm:right-[max(1.25rem,env(safe-area-inset-right))] md:right-10 lg:right-14 ${
          showCompact && !menuOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0"
        }`}
      >
        <BrandArrow />
      </button>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[80] transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(165deg, #000100 0%, #10100F 48%, #1B1C18 100%)",
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="pointer-events-none absolute -right-16 top-20 h-[300px] w-[300px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(192,219,154,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="site-container relative z-10 flex h-[calc(72px+env(safe-area-inset-top))] items-center justify-between pt-[env(safe-area-inset-top)]">
          <Link
            href={href("#hero")}
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/tg-mark.png" alt="TradeGround" className="h-full w-full object-cover" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label={t.nav.close}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-bg transition-transform hover:scale-[1.05]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M4 4l8 8M12 4L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="site-container relative z-10 flex h-[calc(100%-72px-env(safe-area-inset-top))] flex-col pb-[max(2rem,env(safe-area-inset-bottom))] pt-6">
          <nav className="flex flex-1 flex-col justify-center gap-1">
            {links.map((l, i) => {
              const className = `group flex items-center justify-between gap-4 border-b border-white/8 py-4 font-display text-[clamp(22px,6.5vw,40px)] font-extrabold uppercase leading-[1.1] tracking-[-0.02em] text-text transition-all duration-500 hover:text-accent ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`;
              const style = { transitionDelay: menuOpen ? `${70 + i * 50}ms` : "0ms" };
              const arrow = (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent transition-transform group-hover:rotate-[-20deg] sm:h-11 sm:w-11">
                  <BrandArrow />
                </span>
              );
              return l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className={className}
                  style={style}
                >
                  <span>{l.label}</span>
                  {arrow}
                </a>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                  style={style}
                >
                  <span>{l.label}</span>
                  {arrow}
                </a>
              );
            })}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-5 transition-all duration-500 sm:flex-row sm:items-center sm:justify-between ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "320ms" : "0ms" }}
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="https://instagram.com/tradeground"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
              >
                Telegram
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
              {locales.map((code, i) => (
                <span key={code} className="inline-flex items-center">
                  {i > 0 && (
                    <span className="mx-1.5 font-body text-[11px] text-white/20">/</span>
                  )}
                  <Link
                    href={localeHref(code as Locale, pathname)}
                    onClick={() => setMenuOpen(false)}
                    className={`font-body text-[12px] uppercase tracking-[0.12em] transition-colors ${
                      code === locale
                        ? "text-accent"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {localeLabels[code as Locale]}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
