"use client";
import { useI18n } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t, marketplace } = useI18n();

  return (
    <section
      id="hero"
      className="snap-section relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/55 to-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/45" />
      </div>

      <div className="site-container relative z-10 flex min-h-screen flex-col pb-10 pt-24 lg:pb-14 lg:pt-28">
        <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="animate-fadeUp flex w-full flex-col justify-center lg:max-w-[48%]">
            <h1 className="font-display text-[clamp(42px,7.5vw,92px)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-text">
              {t.hero.line1}
              <br />
              <span className="text-accent">{t.hero.line2}</span>
            </h1>
            <p className="section-subtitle mt-6 max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-8">
              <a
                href={marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between gap-4 rounded-full bg-accent py-2.5 pl-7 pr-2.5 text-[14px] font-semibold text-bg transition-transform duration-300 hover:bg-accent-light sm:w-[274px] sm:hover:scale-[1.02]"
              >
                {t.hero.cta}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:translate-x-0.5">
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
            </div>
          </div>

          <div className="animate-fadeUp delay-100 relative flex w-full flex-1 items-center justify-center lg:max-w-[54%] lg:justify-end lg:self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/hero-phones.png"
              alt="TradeGround"
              className="relative z-10 h-auto w-full max-w-[480px] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] lg:max-w-[600px] lg:translate-x-6 xl:translate-x-10"
            />
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-6 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="animate-fadeUp delay-200 flex w-full flex-row items-stretch gap-2.5 sm:gap-3 lg:w-auto lg:max-w-[560px]">
            <div className="flex min-h-[170px] flex-1 flex-col justify-between rounded-[22px] bg-accent p-3.5 text-bg sm:min-h-[200px] sm:rounded-[28px] sm:p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bg/25 sm:h-8 sm:w-8">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.8 2.8l1.1 1.1M10.1 10.1l1.1 1.1M2.8 11.2l1.1-1.1M10.1 3.9l1.1-1.1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="font-body text-[11px] font-medium leading-tight sm:text-[13px]">
                  {t.hero.cardAll}
                </span>
              </div>
              <div>
                <div className="font-display text-[40px] font-extrabold leading-none tracking-tight sm:text-[64px]">
                  {t.hero.cardStats}
                </div>
                <p className="mt-1.5 font-body text-[10px] leading-snug text-bg/80 sm:mt-2 sm:text-[12px]">
                  {t.hero.cardStatsDesc}
                </p>
              </div>
            </div>

            <div className="liquid-glass flex min-h-[170px] flex-1 flex-col justify-between rounded-[22px] p-3.5 text-text sm:min-h-[200px] sm:rounded-[28px] sm:p-5">
              <div className="relative z-10 flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 sm:h-9 sm:w-9">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26-.08-.07-.2-.05-.28-.03-.12.03-2.04 1.3-5.76 3.82-.54.37-1.04.56-1.48.55-.49-.01-1.42-.27-2.12-.5-.85-.28-1.54-.44-1.48-.93.03-.26.42-.52 1.17-.8 4.57-1.99 7.63-3.31 9.17-3.94 4.36-1.8 5.27-2.11 5.86-2.12.13 0 .42.03.61.18.16.13.21.3.23.47-.02.1-.02.24-.03.27z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="font-display text-[14px] font-semibold leading-tight sm:text-[17px]">
                  {t.hero.cardTg}
                </span>
              </div>
              <p className="relative z-10 font-body text-[13px] leading-snug text-text sm:text-[15px] sm:leading-relaxed">
                {t.hero.cardTgDesc}
              </p>
            </div>
          </div>

          <div className="animate-fadeUp delay-300 flex w-full flex-nowrap items-center justify-between gap-1.5 sm:justify-start sm:gap-2.5 lg:w-auto lg:max-w-[340px] lg:flex-wrap lg:justify-end">
            <span className="hero-tag hidden h-10 w-10 shrink-0 !px-0 sm:inline-flex">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="2" fill="currentColor" />
                <path
                  d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M3.05 12.95l1.4-1.4M11.55 4.45l1.4-1.4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="hero-tag shrink-0 !px-3 !py-2 text-[12px] sm:!px-[18px] sm:!py-[9px] sm:text-[13px]">
              {t.hero.tagGoods}
            </span>
            <span className="hero-tag shrink-0 !px-3 !py-2 text-[12px] sm:!px-[18px] sm:!py-[9px] sm:text-[13px]">
              {t.hero.tagServices}
            </span>
            <span className="hero-tag shrink-0 !px-3 !py-2 text-[12px] sm:!px-[18px] sm:!py-[9px] sm:text-[13px]">
              {t.hero.tagAds}
            </span>
            <span className="hero-tag shrink-0 !px-3 !py-2 text-[12px] sm:!px-[18px] sm:!py-[9px] sm:text-[13px]">
              {t.hero.tagCommunity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
