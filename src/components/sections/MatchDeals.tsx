"use client";

import { useI18n } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const MATCH_IMAGES = [
  "/media/pe-terrace.jpg",
  "/media/plan-business.jpg",
  "/media/pe-chill.jpg",
];

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 1.5c1.8 0 3.2 1.4 3.2 3.1C9.2 6.6 6 10.5 6 10.5S2.8 6.6 2.8 4.6C2.8 2.9 4.2 1.5 6 1.5z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="6" cy="4.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function MatchDeals() {
  const { t, marketplace } = useI18n();
  const m = t.matches;

  return (
    <section id="matches" className="relative bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 12% 18%, rgba(192,219,154,0.14), transparent 60%)",
        }}
      />

      <div className="site-container relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(320px,0.88fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-24">
          {/* Left — sticky */}
          <aside className="lg:sticky lg:top-28 lg:z-10 lg:self-start lg:pb-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-body text-[13px] text-[#656B4D]">
                {t.nav.matches}
              </span>
              <a
                href="#matches-list"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#000100] px-3.5 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition-transform hover:scale-[1.03]"
              >
                {m.badge}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M6 2.5v7M6 9.5L3.5 7M6 9.5L8.5 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <h2 className="section-title section-title-dark max-w-[14ch] text-balance">
              {m.line1}
              <br />
              <span className="text-olive">{m.line2}</span>
            </h2>

            <p className="mt-7 max-w-[18ch] font-display text-[clamp(20px,2.6vw,28px)] font-bold uppercase leading-[1.12] tracking-[-0.01em] text-[#000100] text-balance">
              <span className="text-olive">{m.brand}</span>
              <br />
              {m.unites}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-2">
              {[
                { label: m.seeking, tone: "muted" as const },
                { label: "=", tone: "eq" as const },
                { label: m.offering, tone: "accent" as const },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full px-4 font-body text-[12px] font-semibold tracking-[0.02em] ${
                    item.tone === "eq"
                      ? "w-10 bg-accent px-0 font-display text-base font-extrabold tracking-normal text-bg"
                      : item.tone === "accent"
                        ? "bg-[#000100] text-white"
                        : "bg-[#F3F3F0] text-[#656B4D] ring-1 ring-black/[0.04]"
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(0,1,0,0.07)] ring-1 ring-black/[0.04]">
              <div className="relative h-[140px] w-full sm:h-[160px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/plan-start.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-[15px] font-bold leading-snug text-white sm:text-[16px]">
                    {m.bottom}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
                <span className="font-body text-[12px] text-[#979387]">
                  TradeGround · DE
                </span>
                <a
                  href={marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-body text-[13px] font-semibold text-[#000100] transition-colors hover:text-olive"
                >
                  {m.cta}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 group-hover:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right — matches */}
          <div id="matches-list" className="flex flex-col gap-7 md:gap-8 lg:min-h-[145vh] lg:gap-10 lg:pb-28">
            {m.items.map((item, i) => (
              <motion.article
                key={`${item.seekTitle}-${item.offerTitle}`}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_16px_48px_rgba(0,1,0,0.06)] ring-1 ring-black/[0.04] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(0,1,0,0.1)] md:rounded-[32px] md:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#979387]">
                      <span className="font-body text-[11px] font-semibold tracking-[0.04em] text-[#979387]">
                        {m.matchLabel}
                      </span>
                      <span className="font-display text-[13px] font-bold text-olive">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[28ch] font-body text-[13px] leading-snug text-[#656B4D] md:text-[14px]">
                      {item.seekTitle}
                      {item.seekSub ? ` · ${item.seekSub}` : ""}
                      {" → "}
                      {item.offerTitle}
                    </p>
                  </div>

                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl sm:h-[88px] sm:w-[88px] md:h-[96px] md:w-[96px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={MATCH_IMAGES[i % MATCH_IMAGES.length]}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-0 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                  {/* Seek */}
                  <div className="rounded-[22px] bg-[#F6F6F3] p-5 md:p-6">
                    <p className="mb-3 font-body text-[12px] font-semibold tracking-[0.02em] text-[#979387]">
                      {m.seeking}
                    </p>
                    <h3 className="font-display text-[20px] font-bold leading-[1.15] tracking-[-0.02em] text-[#000100] md:text-[24px]">
                      {item.seekTitle}
                    </h3>
                    {item.seekSub && (
                      <p className="mt-2 font-body text-[14px] leading-snug text-[#656B4D]">
                        {item.seekSub}
                      </p>
                    )}
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-body text-[12px] font-medium text-[#656B4D] ring-1 ring-black/[0.05]">
                      <PinIcon className="text-olive" />
                      {item.seekCity}
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="relative z-10 flex items-center justify-center py-3 sm:px-2 sm:py-0">
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C0DB9A] to-transparent sm:block sm:h-auto sm:w-full sm:bg-gradient-to-r sm:via-[#C0DB9A]" />
                    <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C0DB9A]/80 to-transparent sm:hidden" />
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-bg shadow-[0_10px_28px_rgba(192,219,154,0.55)] ring-4 ring-white"
                    >
                      =
                    </motion.span>
                  </div>

                  {/* Offer */}
                  <div
                    className="rounded-[22px] p-5 md:p-6"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(192,219,154,0.35) 0%, rgba(212,233,176,0.45) 45%, rgba(239,241,240,0.9) 100%)",
                    }}
                  >
                    <p className="mb-3 font-body text-[12px] font-semibold tracking-[0.02em] text-[#656B4D]">
                      {m.offering}
                    </p>
                    <h3 className="font-display text-[20px] font-bold leading-[1.15] tracking-[-0.02em] text-[#000100] md:text-[24px]">
                      {item.offerTitle}
                    </h3>
                    {item.offerSub && (
                      <p className="mt-2 font-body text-[14px] leading-snug text-[#2C3024]/80">
                        {item.offerSub}
                      </p>
                    )}
                    <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 font-body text-[12px] font-medium text-[#2C3024] ring-1 ring-black/[0.04]">
                      <PinIcon className="text-olive" />
                      {item.offerCity}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
