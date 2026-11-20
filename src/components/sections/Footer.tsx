"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

function InstagramIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
      <rect
        x="12"
        y="12"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="25.6" cy="14.4" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M27.8 13.2c.35-.14.72.16.62.52L25.1 28.2c-.1.36-.56.48-.8.21l-4.3-4.7-3.2 2.4c-.28.21-.68.05-.74-.29l-.9-5.1 10.3-7.8c.24-.18-.02-.52-.3-.35L14.9 19.3l-3.4-1.1c-.42-.14-.42-.74.01-.86l16.3-4.14z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer(_props?: {
  /** Kept for API compatibility with inner pages */
  cornerBg?: "white" | "dark";
}) {
  const { locale, home, marketplace } = useI18n();
  const f = home.footer;
  const marketplacePage = `/${locale}/marketplace`;

  return (
    <footer className="footer" id="site-footer">
      <div className="footer__shell">
        <div className="footer__bg" aria-hidden />

        <a href="#hero" className="footer__top" aria-label={f.topAria}>
          <Image
            src="/media/hero/button-down-black.svg"
            alt=""
            width={12}
            height={12}
            className="footer__top-icon"
          />
        </a>

        <div className="footer__content">
          <Image
            src="/media/footer/logo.svg"
            alt="TRADEGROUND"
            width={420}
            height={176}
            className="footer__logo"
            priority
          />

          <p className="footer__tagline">{f.tagline}</p>

          <div className="footer__tags">
            {f.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            href={marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light footer__cta"
          >
            {f.join}
            <Image
              src="/media/hero/button-down-black.svg"
              alt=""
              width={9}
              height={9}
              className="chev chev--tr"
            />
          </a>
        </div>

        <a
          href={marketplace}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__qr"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/footer/qr.png"
            alt={f.qrAlt}
            width={184}
            height={184}
            className="footer__qr-code"
          />
          <div>
            <strong>{f.qrTitle}</strong>
            <p>
              {f.qrTextLine1}
              <br />
              {f.qrTextLine2}
            </p>
          </div>
        </a>

        <div className="footer__bar">
          <div className="footer__social">
            <a
              href="https://instagram.com/tradeground"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://t.me/tradeground_support"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </div>

          <nav className="footer__links">
            <Link href={`/${locale}/about`}>{home.nav.about}</Link>
            <Link href={marketplacePage}>{home.nav.marketplace}</Link>
            <Link href={`/${locale}/business`}>{home.nav.business}</Link>
            <Link href={`/${locale}/contacts`}>{home.nav.contacts}</Link>
            <Link href={`/${locale}/privacy`}>{f.privacy}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
