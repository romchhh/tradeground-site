"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageContext";
import { CoverPin } from "@/components/fx/CoverPin";
import Magnetic from "@/components/fx/Magnetic";

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

export default function AboutView({ dict }: { dict: Dictionary["about"] }) {
  const { marketplace } = useI18n();

  return (
    <>
      <CoverPin z={1} round={false}>
        <section className="relative overflow-hidden bg-bg text-text">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 30% at 15% 8%, rgba(192,219,154,0.14), transparent 55%)",
            }}
          />
          <div className="site-container relative z-10 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top))] md:pb-24 md:pt-36">
            <div className="flex flex-row items-center gap-5 sm:gap-8 lg:gap-14 xl:gap-20">
              <div className="order-2 min-w-0 flex-1 lg:order-1">
                <h1 className="section-title max-w-[14ch]">
                  {dict.title}
                  <br />
                  <span className="text-accent">{dict.titleAccent}</span>
                </h1>
                <p className="section-subtitle mt-4 max-w-xl sm:mt-6">{dict.lead}</p>
              </div>
              <div className="order-1 w-[40%] max-w-[150px] shrink-0 self-center sm:max-w-[200px] md:w-[44%] md:max-w-[280px] lg:order-2 lg:w-auto lg:max-w-[420px] xl:max-w-[480px]">
                <div className="overflow-hidden rounded-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:rounded-[28px] lg:rounded-[32px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/media/pe-terrace.jpg"
                    alt=""
                    className="aspect-[3/4] h-auto w-full object-cover object-center lg:aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={2} fill>
        <section className="relative bg-bg text-text">
          <div className="site-container py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 xl:gap-24">
              <div>
                <h2 className="section-title">
                  {dict.storyTitle}
                  <br />
                  <span className="text-accent">{dict.storyTitleAccent}</span>
                </h2>
              </div>
              <div className="space-y-5 md:space-y-6">
                {dict.storyParagraphs.map((p) => (
                  <p
                    key={p.slice(0, 32)}
                    className="font-body text-[15px] leading-relaxed text-text-light md:text-[17px] md:leading-[1.6]"
                  >
                    {p}
                  </p>
                ))}
                <div className="border-t border-white/10 pt-6 md:pt-8">
                  <p className="font-display text-[18px] font-bold uppercase tracking-[0.04em] text-accent md:text-[22px]">
                    {dict.storyReveal}
                  </p>
                  <p className="mt-4 font-display text-[15px] font-bold text-text md:text-[16px]">
                    — {dict.founderName}
                  </p>
                  <p className="mt-1 font-body text-[13px] text-muted md:text-[14px]">
                    {dict.founderRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={3} fill>
        <section className="relative bg-bg text-text">
          <div className="site-container py-16 md:py-24">
            <h2 className="section-title">{dict.buyTitle}</h2>
            <p className="section-subtitle mt-6 max-w-2xl">{dict.buyDesc}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={4} fill>
        <section className="relative bg-bg text-text">
          <div className="site-container py-16 md:py-24">
            <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-surface px-6 py-10 md:rounded-[36px] md:px-12 md:py-14">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 70% at 0% 50%, rgba(192,219,154,0.14), transparent 60%)",
                }}
              />
              <div className="relative z-10 max-w-3xl">
                <h2 className="section-title">
                  {dict.simpleTitle}
                  <br />
                  <span className="text-accent">{dict.simpleTitleAccent}</span>
                </h2>
                <p className="section-subtitle mt-6">{dict.simpleDesc}</p>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={5} fill>
        <section className="relative bg-bg text-text">
          <div className="site-container py-16 md:py-24">
            <h2 className="section-title max-w-[18ch]">
              {dict.futureTitle}{" "}
              <span className="text-accent">{dict.futureTitleAccent}</span>
            </h2>
            <p className="section-subtitle mt-6 max-w-2xl">{dict.futureDesc}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={6} tone="light" pin={false}>
        <section className="relative bg-white px-0 pb-6 pt-2 md:pb-8 md:pt-4">
          <div className="relative overflow-hidden px-6 py-14 text-center md:px-12 md:py-20 lg:py-24">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(192,219,154,0.22), transparent 60%)",
              }}
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="section-title section-title-dark">
                {dict.ctaLine1}
                <br />
                <span className="text-olive">{dict.ctaLine2}</span>
              </h2>
              <Magnetic className="mt-8 inline-block">
                <a
                  href={marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#000100] py-2.5 pl-7 pr-2.5 font-body text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  {dict.cta}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 group-hover:rotate-[-15deg]">
                    <BrandArrow />
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>
      </CoverPin>
    </>
  );
}
