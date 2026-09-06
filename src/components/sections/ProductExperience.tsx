"use client";
import { useI18n } from "@/i18n/LanguageContext";

export default function ProductExperience() {
  const { t } = useI18n();
  const p = t.product;

  return (
    <section id="product" className="relative bg-white">
      <div className="overflow-hidden rounded-b-[24px] bg-bg sm:rounded-b-[28px] md:rounded-b-[40px] lg:rounded-b-[48px]">
        <div className="site-container flex flex-col py-14 md:min-h-[100svh] md:py-24">
          <div className="mb-6 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-8">
            <h2 className="section-title">
              {p.title}{" "}
              <span className="text-accent">{p.titleAccent}</span>
            </h2>
            <div className="hidden items-center gap-4 md:flex">
              <span className="font-display text-2xl text-muted">/</span>
              <p className="section-subtitle !mt-0 max-w-xs md:text-right">
                {p.subtitle}
              </p>
            </div>
            <p className="section-subtitle md:hidden">{p.subtitle}</p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 sm:auto-rows-[200px] sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 md:gap-4 lg:auto-rows-[240px]">
            <div className="group relative col-span-1 min-h-[260px] overflow-hidden rounded-[22px] sm:col-span-2 sm:row-span-2 sm:min-h-0 md:rounded-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/pe-main.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
              <div className="relative z-10 flex h-full min-h-[260px] flex-col p-5 sm:min-h-0 md:p-7">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-black/30 px-3 py-1 font-body text-[11px] text-text backdrop-blur-md">
                    {p.mainBadge}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-text backdrop-blur-md">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-display text-[22px] font-bold leading-tight text-text md:text-[28px] lg:text-[32px]">
                    {p.mainTitle}
                  </h3>
                  <p className="mt-2 max-w-sm font-body text-[13px] leading-relaxed text-white/75 md:text-sm">
                    {p.mainDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative col-span-1 min-h-[200px] overflow-hidden rounded-[22px] bg-surface-2 p-5 sm:min-h-0 md:rounded-[28px] md:p-6">
              <h3 className="font-display text-[18px] font-bold leading-tight text-text md:text-[22px]">
                {p.choiceTitle}
              </h3>
              <p className="mt-1.5 font-body text-[12px] text-muted md:text-[13px]">
                {p.choiceDesc}
              </p>
              <div className="absolute bottom-4 right-4 h-[55%] w-[70%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/pe-lecture-1.jpg" alt="" className="absolute bottom-0 right-2 h-[78%] w-[70%] rotate-[-8deg] rounded-2xl object-cover shadow-lg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/pe-lecture-2.jpg" alt="" className="absolute bottom-1 right-8 h-[72%] w-[65%] rotate-[6deg] rounded-2xl object-cover shadow-xl" />
              </div>
            </div>

            <div className="group relative col-span-1 min-h-[220px] overflow-hidden rounded-[22px] sm:row-span-2 sm:min-h-0 md:rounded-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/pe-zones.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
              <div className="relative z-10 flex h-full min-h-[220px] flex-col p-5 sm:min-h-0 md:p-6">
                <span className="w-fit rounded-full border border-white/25 bg-black/30 px-3 py-1 font-body text-[11px] text-text backdrop-blur-md">
                  {p.zonesBadge}
                </span>
                <div className="mt-auto">
                  <h3 className="font-display text-[24px] font-bold leading-[1.05] text-text md:text-[32px]">
                    {p.zonesLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
            </div>

            <div className="group relative col-span-1 min-h-[180px] overflow-hidden rounded-[22px] sm:min-h-0 md:rounded-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/pe-terrace.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[180px] items-end p-5 sm:min-h-0 md:p-6">
                <div className="flex items-end gap-2">
                  <span className="font-display text-[56px] font-extrabold leading-none text-text md:text-[72px]">
                    {p.audienceNum}
                  </span>
                  <p className="mb-2 max-w-[110px] font-body text-[13px] leading-snug text-text md:text-sm">
                    {p.audienceDesc}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative col-span-1 flex min-h-[200px] flex-col overflow-hidden rounded-[22px] p-5 sm:min-h-0 md:rounded-[28px] md:p-6"
              style={{
                background: "linear-gradient(160deg, #2C3024 0%, #656B4D 45%, #C0DB9A 100%)",
              }}
            >
              <div className="flex items-center justify-between">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-white/70">
                  <path d="M3 13V5M7 13V8M11 13V3M15 13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-body text-[11px] tracking-wide text-white/80">{p.hrLabel}</span>
                <span className="h-4 w-4 rounded-full border border-white/40" />
              </div>
              <div className="flex flex-1 items-center justify-center py-4">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg md:h-24 md:w-24">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="13" r="6" fill="#10100F"/>
                    <path d="M6 30c0-6.6 5.4-10 12-10s12 3.4 12 10" fill="#10100F"/>
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-bg">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-[18px] font-bold text-text md:text-[20px]">
                  {p.hrTitle}
                </h3>
                <p className="mt-1 font-body text-[12px] leading-snug text-white/80 md:text-[13px]">
                  {p.hrDesc}
                </p>
              </div>
            </div>

            <div className="group relative col-span-1 min-h-[200px] overflow-hidden rounded-[22px] sm:col-span-2 sm:min-h-0 md:rounded-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/pe-chill.jpg" alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[200px] flex-col items-center justify-end p-5 text-center sm:min-h-0 md:p-7">
                <p className="font-body text-[12px] text-white/75 md:text-sm">{p.chillEyebrow}</p>
                <h3 className="mt-1 font-display text-[22px] font-bold text-text md:text-[32px]">
                  {p.chillTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
