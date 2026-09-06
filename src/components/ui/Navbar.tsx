"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

export default function Navbar() {
  const { t, marketplace, href, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.categories, href: href("#categories") },
    { label: t.nav.telegram, href: href("#telegram") },
    { label: t.nav.forWhom, href: href("#private") },
    { label: t.nav.product, href: href("#product") },
    { label: t.nav.location, href: href("#map") },
  ];

  const menuLinks = [
    { label: t.nav.home, href: href("#hero") },
    ...links,
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on locale change
  useEffect(() => {
    setMenuOpen(false);
  }, [locale]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "pointer-events-none opacity-0"
            : scrolled
              ? "border-b border-white/5 bg-surface/90 backdrop-blur-xl opacity-100"
              : "bg-transparent opacity-100"
        }`}
      >
        <div className="site-container flex h-[72px] items-center justify-between gap-4">
          <Link href={href("#hero")} className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/logo.svg"
              alt="TradeGround"
              className="h-8 w-auto md:h-9"
            />
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[13px] text-white/85 transition-colors duration-200 hover:text-white xl:text-[14px]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-5 pr-2 font-body text-[14px] font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              {t.nav.start}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <button
            type="button"
            className="flex items-center gap-2.5 p-1 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.menu}
          >
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              {t.nav.menu}
            </span>
            <span className="flex w-7 flex-col gap-[5px]">
              <span className="block h-[2.5px] w-full rounded-full bg-white" />
              <span className="block h-[2.5px] w-full rounded-full bg-white" />
              <span className="block h-[2.5px] w-full rounded-full bg-white" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(165deg, #000100 0%, #10100F 50%, #1B1C18 100%)",
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="pointer-events-none absolute -right-20 top-24 h-[320px] w-[320px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(192,219,154,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="site-container relative z-10 flex h-[72px] items-center justify-between">
          <Link
            href={href("#hero")}
            onClick={() => setMenuOpen(false)}
            className="flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/logo.svg" alt="TradeGround" className="h-8 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label={t.nav.close}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-text transition-colors hover:border-accent hover:text-accent"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="site-container relative z-10 flex h-[calc(100%-72px)] flex-col pb-10 pt-4">
          <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
            {menuLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-[clamp(26px,8vw,40px)] font-extrabold uppercase leading-[1.1] tracking-[-0.02em] text-text transition-all duration-500 hover:text-accent ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${60 + i * 45}ms` : "0ms" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div
            className={`mt-6 space-y-5 transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "360ms" : "0ms" }}
          >
            <LanguageSwitcher variant="menu" />
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="group flex w-full items-center justify-between gap-4 rounded-full bg-accent py-3 pl-7 pr-2.5 text-[15px] font-semibold text-bg"
            >
              {t.nav.join}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-accent">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <p className="text-center font-body text-[13px] text-muted">
              @TradeGroundBot
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
