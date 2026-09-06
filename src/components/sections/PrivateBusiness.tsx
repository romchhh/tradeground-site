"use client";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";

export default function PrivateBusiness() {
  const { t, marketplace } = useI18n();
  const [active, setActive] = useState(0);
  const plans = t.audience.items;

  return (
    <section id="private" className="relative overflow-visible bg-bg">
      <div className="site-container flex flex-col justify-center overflow-visible py-14 md:min-h-[100svh] md:py-28">
        <div className="mb-8 md:mb-14">
          <h2 className="section-title">
            {t.audience.title}{" "}
            <span className="text-accent">{t.audience.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.audience.subtitle}</p>
        </div>

        <div className="relative z-0 flex flex-col gap-3 overflow-visible md:gap-4">
          {plans.map((p, i) => {
            const isActive = active === i;
            return (
              <a
                key={p.id}
                href={`${marketplace}&audience=${p.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onTouchStart={() => setActive(i)}
                className="group relative block rounded-[24px] transition-[min-height,background] duration-500 md:rounded-[36px]"
                style={{
                  background: isActive
                    ? "linear-gradient(105deg, #10100F 0%, #1B1C18 42%, #C0DB9A 78%, #D4E9B0 100%)"
                    : "#10100F",
                  minHeight: isActive ? 148 : 112,
                  zIndex: isActive ? 30 : 1,
                }}
              >
                {isActive && (
                  <span
                    className="pointer-events-none absolute inset-y-0 left-0 w-[55%] overflow-hidden rounded-[24px] opacity-60 md:rounded-[36px]"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 50%, rgba(192,219,154,0.28) 0%, transparent 70%)",
                    }}
                  />
                )}

                <div className="relative flex h-full min-h-[112px] items-center justify-between gap-3 overflow-visible px-4 py-5 sm:gap-4 sm:px-5 sm:py-6 md:min-h-[140px] md:gap-8 md:px-8 md:py-7 lg:px-10">
                  <div className="relative z-10 min-w-0 flex-1 pr-1 md:max-w-lg lg:max-w-xl">
                    <h3 className="font-display text-[20px] font-bold leading-tight text-text sm:text-[22px] md:text-[28px] lg:text-[32px]">
                      {p.label}
                    </h3>
                    <p
                      className={`mt-2 font-body text-[13px] leading-relaxed md:text-[15px] ${
                        isActive ? "text-text/90" : "text-muted"
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div
                    className={`pointer-events-none absolute right-[56px] top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 sm:block md:right-[88px] lg:right-[110px] ${
                      isActive
                        ? "translate-x-0 rotate-[-10deg] scale-100 opacity-100"
                        : "translate-x-6 rotate-[-4deg] scale-90 opacity-0"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      className="h-[150px] w-[170px] rounded-2xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.55)] md:h-[180px] md:w-[210px] lg:h-[200px] lg:w-[230px]"
                    />
                  </div>

                  <div
                    className={`relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-11 sm:w-11 md:h-12 md:w-12 ${
                      isActive
                        ? "bg-white text-bg"
                        : "border border-white/25 bg-transparent text-text"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3.5 9h11M9 3.5l5.5 5.5-5.5 5.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
