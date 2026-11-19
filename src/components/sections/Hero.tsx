"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, marketplaceUrl, type Locale, isLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageContext";

function localeHref(code: Locale, pathname: string | null) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) {
    parts[0] = code;
    return `/${parts.join("/")}`;
  }
  return `/${code}`;
}

export function Hero() {
  const { locale, home } = useI18n();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const marketplaceBot = marketplaceUrl(locale);
  const marketplacePage = `/${locale}/marketplace`;
  const contactsPage = `/${locale}/contacts`;
  const aboutPage = `/${locale}/about`;
  const businessPage = `/${locale}#business`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const headerBar = (
    <>
      <div className={`hero-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="container">
          <nav className="nav">
            <Link href={`/${locale}`} className="nav__logo">
              <Image
                src="/media/hero/mini-logo.svg"
                alt="Trade Ground"
                width={48}
                height={34}
                priority
              />
            </Link>

            <ul className="nav__links">
              <li>
                <Link href={aboutPage}>{home.nav.about}</Link>
              </li>
              <li>
                <Link href={marketplacePage}>{home.nav.marketplace}</Link>
              </li>
              <li>
                <Link href={businessPage}>{home.nav.business}</Link>
              </li>
              <li>
                <Link href={contactsPage}>{home.nav.contacts}</Link>
              </li>
            </ul>

            <div className="nav__right">
              <div ref={langRef} style={{ position: "relative" }}>
                <button
                  className="lang-switch"
                  type="button"
                  aria-expanded={langOpen}
                  aria-haspopup="listbox"
                  onClick={() => setLangOpen((v) => !v)}
                >
                  {localeLabels[locale]}
                  <Image
                    src="/media/hero/button-down-white.svg"
                    alt=""
                    width={9}
                    height={9}
                    className="chev"
                  />
                </button>
                {langOpen && (
                  <ul
                    role="listbox"
                    style={{
                      position: "absolute",
                      top: "100%",
                      right: 0,
                      marginTop: 8,
                      minWidth: 88,
                      padding: "6px 0",
                      borderRadius: 12,
                      background: "#10100F",
                      border: "1px solid rgba(255,255,255,0.1)",
                      zIndex: 20,
                      listStyle: "none",
                    }}
                  >
                    {locales.map((code) => (
                      <li key={code} role="option" aria-selected={code === locale}>
                        <Link
                          href={localeHref(code as Locale, pathname)}
                          onClick={() => setLangOpen(false)}
                          style={{
                            display: "block",
                            padding: "8px 14px",
                            fontSize: 13,
                            fontWeight: 600,
                            color:
                              code === locale
                                ? "var(--lime)"
                                : "rgba(255,255,255,0.85)",
                          }}
                        >
                          {localeLabels[code as Locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={marketplaceBot}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--light nav__cta"
              >
                {home.nav.openMarketplace}
                <Image
                  src="/media/hero/button-down-black.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="chev chev--tr"
                />
              </a>
              <button
                type="button"
                className="nav-burger"
                aria-label="Menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
              >
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className={`nav-sheet${menuOpen ? " is-open" : ""}`}>
        <div className="nav-sheet__top">
          <Image
            src="/media/hero/mini-logo.svg"
            alt="Trade Ground"
            width={48}
            height={34}
          />
          <button
            type="button"
            className="nav-sheet__close"
            aria-label="Close"
            onClick={() => setMenuOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>
        <nav className="nav-sheet__links">
          <Link href={aboutPage} onClick={() => setMenuOpen(false)}>
            {home.nav.about}
          </Link>
          <Link href={marketplacePage} onClick={() => setMenuOpen(false)}>
            {home.nav.marketplace}
          </Link>
          <Link href={businessPage} onClick={() => setMenuOpen(false)}>
            {home.nav.business}
          </Link>
          <Link href={contactsPage} onClick={() => setMenuOpen(false)}>
            {home.nav.contacts}
          </Link>
        </nav>
        <a
          href={marketplaceBot}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--light nav-sheet__cta"
        >
          {home.nav.openMarketplace}
          <Image
            src="/media/hero/button-down-black.svg"
            alt=""
            width={9}
            height={9}
            className="chev chev--tr"
          />
        </a>
      </div>
    </>
  );

  return (
    <header className="hero screen" id="hero">
      {mounted ? createPortal(headerBar, document.body) : null}

      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero/tg-hero-bg.png"
      >
        <source src="/media/hero/video-tg-hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        className="hero__bg"
        style={{ backgroundImage: "url('/media/hero/tg-hero-bg.png')" }}
      />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-trade">{home.hero.line1}</span>
            <br />
            <span className="hero__title-ground">{home.hero.line2}</span>
          </h1>
          <p className="hero__subtitle">{home.hero.subtitle}</p>
        </div>

        <a href="#one-place" className="scroll-btn" aria-label={home.hero.scrollAria}>
          <Image
            src="/media/hero/button-scroll-white.svg"
            alt=""
            width={62}
            height={62}
          />
        </a>
      </div>

      <div className="hero__phone">
        <Image
          src="/media/hero/mobile-hero.png"
          alt={home.hero.phoneAlt}
          width={835}
          height={982}
          priority
        />
      </div>
    </header>
  );
}

export default Hero;
