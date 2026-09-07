"use client";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

export default function Footer({
  cornerBg = "white",
}: {
  /** Background behind the top rounded corners */
  cornerBg?: "white" | "dark";
}) {
  const { t, marketplace, href, locale } = useI18n();

  const navLinks = [
    { label: t.nav.about, to: href("#hero") },
    { label: t.nav.marketplace, to: marketplace, external: true },
    { label: t.nav.business, to: href("#private") },
    { label: t.nav.contacts, to: `/${locale}/contacts` },
  ];

  return (
    <footer
      id="footer"
      className={`relative w-full overflow-hidden ${
        cornerBg === "dark" ? "bg-bg" : "bg-white"
      }`}
    >
      <div className="w-full overflow-hidden rounded-t-[28px] bg-bg md:rounded-t-[40px] lg:rounded-t-[48px]">
        <div className="relative w-full overflow-hidden px-4 py-12 text-center sm:px-5 md:px-10 md:py-24 lg:px-14 lg:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/footer-cta-bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/75 to-bg" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, rgba(192,219,154,0.18) 0%, transparent 55%)",
            }}
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/logo.svg"
              alt="TradeGround"
              className="h-12 w-auto sm:h-16 md:h-20 lg:h-24"
            />
            <p className="section-subtitle section-subtitle-center mx-auto mt-6">
              {t.footer.desc}
            </p>
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-2.5 pl-7 pr-2.5 text-[14px] font-semibold text-bg transition-all duration-300 hover:scale-[1.03] hover:bg-accent-light"
            >
              {t.footer.join}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:translate-x-0.5">
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
        </div>

        <div className="w-full border-t border-white/8 px-4 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-6 sm:px-5 md:px-10 lg:px-14">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
              <Link
                href={href("#hero")}
                className="shrink-0 font-display text-[15px] font-bold tracking-[-0.02em] text-text transition-colors hover:text-accent md:text-[16px]"
              >
                TradeGround
              </Link>

              <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 md:gap-x-6 lg:gap-x-8">
                {navLinks.map((l) =>
                  l.external ? (
                    <a
                      key={l.label}
                      href={l.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[13px] text-text-light transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <a
                      key={l.label}
                      href={l.to}
                      className="font-body text-[13px] text-text-light transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  )
                )}
              </nav>

              <a
                href={marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent py-2 pl-5 pr-2 font-body text-[13px] font-medium text-bg transition-all duration-200 hover:scale-[1.03] hover:bg-accent-light"
              >
                {t.nav.open}
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

            <div className="mt-6 flex flex-col items-center gap-4 border-t border-white/6 pt-5 md:flex-row md:justify-between">
              <div className="flex items-center gap-2.5">
                <a
                  href={marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-text transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26-.08-.07-.2-.05-.28-.03-.12.03-2.04 1.3-5.76 3.82-.54.37-1.04.56-1.48.55-.49-.01-1.42-.27-2.12-.5-.85-.28-1.54-.44-1.48-.93.03-.26.42-.52 1.17-.8 4.57-1.99 7.63-3.31 9.17-3.94 4.36-1.8 5.27-2.11 5.86-2.12.13 0 .42.03.61.18.16.13.21.3.23.47-.02.1-.02.24-.03.27z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/tradeground"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-text transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              </div>

              <p className="font-body text-[11px] uppercase tracking-wide text-muted md:text-[12px]">
                {t.footer.rights}
              </p>

              <div className="flex items-center gap-5">
                <a href="#" className="font-body text-[12px] text-muted transition-colors hover:text-accent">
                  {t.footer.privacy}
                </a>
                <a href="#" className="font-body text-[12px] text-muted transition-colors hover:text-accent">
                  {t.footer.terms}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
