"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageContext";

function BrandArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
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

export default function MarketplaceView({
  dict,
}: {
  dict: Dictionary["marketplace"];
}) {
  const { marketplace, href, locale } = useI18n();

  return (
    <div className="relative bg-bg text-text">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 80% 0%, rgba(192,219,154,0.14), transparent 55%)",
        }}
      />

      {/* Hero */}
      <section className="site-container relative z-10 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top))] md:pb-24 md:pt-36">
        <div className="flex flex-row items-center gap-5 sm:gap-8 lg:gap-14 xl:gap-20">
          <div className="order-2 min-w-0 flex-1 lg:order-1">
            <h1 className="section-title max-w-[16ch]">
              {dict.title}
              <br />
              <span className="text-accent">{dict.titleAccent}</span>
            </h1>
            <p className="section-subtitle mt-4 max-w-xl sm:mt-6">{dict.lead}</p>
          </div>

          <div className="order-1 w-[38%] max-w-[160px] shrink-0 self-center sm:max-w-[200px] md:w-[42%] md:max-w-[260px] lg:order-2 lg:w-auto lg:max-w-[320px] xl:max-w-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/marketplace-hero.png"
              alt="TradeGround Marketplace"
              className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="site-container relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dict.categories.map((cat) => (
            <a
              key={cat.id}
              href={`${marketplace}&category=${cat.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[24px] border border-white/8 bg-surface p-6 transition-colors duration-300 hover:border-accent/35 hover:bg-surface-2 md:min-h-[200px] md:rounded-[28px] md:p-7"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.icon}
                alt=""
                className="mb-8 h-10 w-10 transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
              />
              <div>
                <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-text md:text-[16px]">
                  {cat.title}
                </h2>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-muted md:text-[15px]">
                  {cat.desc}
                </p>
              </div>
            </a>
          ))}

          <a
            href={`/${locale}#categories`}
            className="group flex flex-col justify-between rounded-[24px] border border-dashed border-white/15 bg-transparent p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.03] md:min-h-[200px] md:rounded-[28px] md:p-7"
          >
            <span className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-accent transition-transform duration-300 group-hover:rotate-[-20deg] md:h-12 md:w-12">
              <BrandArrow />
            </span>
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {dict.moreLabel}
              </p>
              <h2 className="mt-2 font-display text-[15px] font-bold uppercase tracking-[0.08em] text-text md:text-[16px]">
                {dict.moreCta}
              </h2>
            </div>
          </a>
        </div>
      </section>

      {/* Personal */}
      <section className="relative z-10 border-t border-white/8">
        <div className="site-container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="section-title">{dict.personalTitle}</h2>
            <p className="section-subtitle mt-6">{dict.personalDesc}</p>
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="site-container relative z-10 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-surface md:rounded-[36px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(192,219,154,0.16), transparent 55%)",
            }}
          />
          <div className="relative grid gap-10 px-6 py-10 md:grid-cols-[1.2fr_1fr] md:gap-14 md:px-12 md:py-14 lg:px-16">
            <div>
              <h2 className="section-title">
                {dict.businessTitle}{" "}
                <span className="text-accent">{dict.businessTitleAccent}</span>
              </h2>
              <p className="section-subtitle mt-5 max-w-xl">{dict.businessDesc}</p>
              <a
                href={href("#private")}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-6 pr-2 font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black transition-transform hover:scale-[1.02] sm:text-[14px]"
              >
                {dict.businessCta}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-accent transition-transform duration-300 group-hover:rotate-[-15deg]">
                  <BrandArrow />
                </span>
              </a>
            </div>

            <ul className="flex flex-col justify-center gap-3 md:gap-4">
              {dict.businessFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border-b border-white/8 pb-3 font-display text-[15px] font-bold tracking-[-0.01em] text-text last:border-0 last:pb-0 md:text-[18px]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2.5 6.2l2.2 2.2L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open CTA — white slab with round corners */}
      <section className="relative z-10 bg-bg px-0 pb-6 pt-2 md:pb-8 md:pt-4">
        <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-14 text-center md:rounded-[40px] md:px-12 md:py-20 lg:rounded-[48px] lg:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(192,219,154,0.22), transparent 60%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="section-title section-title-dark">{dict.openTitle}</h2>
            <p className="section-subtitle section-subtitle-dark section-subtitle-center mx-auto mt-5">
              {dict.openDesc}
            </p>
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#000100] py-2.5 pl-7 pr-2.5 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            >
              {dict.openCta}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 group-hover:rotate-[-15deg]">
                <BrandArrow />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
