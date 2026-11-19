"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/LanguageContext";
import { locales, localeLabels, marketplaceUrl, type Locale, isLocale } from "@/i18n/config";

function localeHref(code: Locale, pathname: string | null) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) {
    parts[0] = code;
    return `/${parts.join("/")}`;
  }
  return `/${code}`;
}

export default function Navbar({
  solid = true,
}: {
  solid?: boolean;
}) {
  const { home, locale } = useI18n();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const marketplaceBot = marketplaceUrl(locale);
  const marketplacePage = `/${locale}/marketplace`;

  const links = [
    { label: home.nav.about, to: `/${locale}/about`, external: false },
    { label: home.nav.marketplace, to: marketplacePage, external: false },
    { label: home.nav.business, to: `/${locale}#business`, external: false },
    { label: home.nav.contacts, to: `/${locale}/contacts`, external: false },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  return (
    <header className={`site-header${solid ? " site-header--solid" : ""}`}>
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
            {links.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.to} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ) : (
                  <a href={l.to}>{l.label}</a>
                )}
              </li>
            ))}
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
                            code === locale ? "var(--lime)" : "rgba(255,255,255,0.85)",
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
      <div className={`nav-sheet${menuOpen ? " is-open" : ""}`}>
        <div className="nav-sheet__top">
          <Image src="/media/hero/mini-logo.svg" alt="Trade Ground" width={48} height={34} />
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
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.to} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <a key={l.label} href={l.to} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            )
          )}
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
    </header>
  );
}
