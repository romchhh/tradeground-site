"use client";
import { useEffect, useState } from "react";
import { GERMANY_PATH, GERMANY_VIEWBOX, MAP_CITIES } from "./germanyMapPath";
import { useI18n } from "@/i18n/LanguageContext";

type City = (typeof MAP_CITIES)[number] & { ads?: number; newWeek?: number };

const CITY_STATS: Record<string, { ads: number; newWeek: number }> = {
  Berlin: { ads: 45000, newWeek: 890 },
  München: { ads: 32000, newWeek: 612 },
  Hamburg: { ads: 487, newWeek: 112 },
  Frankfurt: { ads: 21000, newWeek: 340 },
  Köln: { ads: 18000, newWeek: 265 },
  Düsseldorf: { ads: 15000, newWeek: 198 },
  Stuttgart: { ads: 12000, newWeek: 156 },
  Dortmund: { ads: 11000, newWeek: 142 },
};

export default function GermanyMap() {
  const { t, marketplace, locale } = useI18n();
  const cities: City[] = MAP_CITIES.map((c) => ({
    ...c,
    ...CITY_STATS[c.name],
  }));
  const [activeCity, setActiveCity] = useState<City>(cities[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * MAP_CITIES.length);
      setActiveCity({
        ...MAP_CITIES[idx],
        ...CITY_STATS[MAP_CITIES[idx].name],
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const cityMarketplace = (name: string) =>
    `${marketplace}&city=${encodeURIComponent(name)}`;

  return (
    <section id="map" className="relative overflow-hidden bg-white">
      <div className="site-container relative z-10 flex flex-col items-center gap-10 py-14 md:min-h-[100svh] lg:flex-row lg:gap-16 lg:py-24">
        <div className="w-full flex-1">
          <h2 className="section-title section-title-dark mb-2 md:mb-3">
            {t.map.title} <span className="text-olive">{t.map.titleAccent}</span>
          </h2>
          <h3 className="section-title section-title-dark mb-0 text-[clamp(24px,7vw,64px)]">
            {t.map.headline}
            <br />
            <span className="text-olive">{t.map.headlineAccent}</span>
          </h3>
          <p className="section-subtitle section-subtitle-dark mb-6 md:mb-8">
            {t.map.desc}
          </p>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {cities.map((city) => {
              const isActive = activeCity.name === city.name;
              return (
                <button
                  key={city.name}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className="flex min-h-11 items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3"
                  style={{
                    background: isActive ? "rgba(192,219,154,0.45)" : "#FFFFFF",
                    border: isActive
                      ? "1px solid rgba(101,107,77,0.35)"
                      : "1px solid rgba(0,1,0,0.08)",
                    boxShadow: isActive
                      ? "0 8px 24px rgba(101,107,77,0.12)"
                      : "none",
                  }}
                >
                  <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{
                        background: isActive ? "#656B4D" : "#C5CBCB",
                      }}
                    />
                    <span
                      className={`truncate font-body text-[13px] sm:text-sm ${
                        isActive ? "font-medium text-[#000100]" : "text-[#656B4D]"
                      }`}
                    >
                      {city.name}
                    </span>
                  </div>
                  <span
                    className="shrink-0 font-display text-[11px] font-bold sm:text-xs"
                    style={{ color: isActive ? "#2C3024" : "#979387" }}
                  >
                    {city.users}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCity && (
            <a
              href={cityMarketplace(activeCity.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-start gap-3 rounded-2xl p-4 transition-transform hover:scale-[1.01] md:mt-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,1,0,0.08)",
                boxShadow: "0 10px 30px rgba(0,1,0,0.04)",
              }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/50">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-olive" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-bold text-[#000100]">
                  {activeCity.name}
                </div>
                <div className="mt-0.5 font-body text-xs text-[#656B4D]">
                  {activeCity.ads?.toLocaleString(
                    locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "uk-UA"
                  )}{" "}
                  {t.map.ads}
                </div>
                <div className="mt-0.5 font-body text-xs text-olive">
                  +{activeCity.newWeek} {t.map.newWeek}
                </div>
                <div className="mt-2 font-body text-xs font-medium text-[#000100]">
                  {t.map.viewCity} {activeCity.name} →
                </div>
              </div>
            </a>
          )}
        </div>

        <div className="relative w-full flex-1">
          <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[460px]">
            <svg
              viewBox={GERMANY_VIEWBOX}
              className="h-auto w-full"
              role="img"
              aria-label="Germany map"
            >
              <defs>
                <linearGradient id="deFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C0DB9A" stopOpacity="0.35" />
                  <stop offset="55%" stopColor="#EFF1F0" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#D4E9B0" stopOpacity="0.45" />
                </linearGradient>
                <filter id="deShadow" x="-8%" y="-8%" width="116%" height="116%">
                  <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#656B4D" floodOpacity="0.18" />
                </filter>
              </defs>

              <ellipse cx="210" cy="500" rx="150" ry="18" fill="rgba(101,107,77,0.12)" />
              <path
                d={GERMANY_PATH}
                fill="url(#deFill)"
                stroke="#656B4D"
                strokeWidth="1.6"
                strokeLinejoin="round"
                filter="url(#deShadow)"
              />

              {cities.map((city) => {
                const isActive = activeCity.name === city.name;
                const r = city.primary ? 7 : 5;
                return (
                  <g
                    key={city.name}
                    className="cursor-pointer"
                    onClick={() => setActiveCity(city)}
                    onMouseEnter={() => setActiveCity(city)}
                  >
                    {isActive && (
                      <>
                        <circle cx={city.x} cy={city.y} r={r + 14} fill="rgba(192,219,154,0.25)" className="animate-ping" style={{ animationDuration: "1.8s" }} />
                        <circle cx={city.x} cy={city.y} r={r + 7} fill="rgba(192,219,154,0.4)" />
                      </>
                    )}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={r}
                      fill={isActive ? "#2C3024" : city.primary ? "#656B4D" : "#979387"}
                      stroke={isActive ? "#C0DB9A" : "#FFFFFF"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                    />
                    {(isActive || city.primary) && (
                      <text
                        x={city.x + (city.x > 280 ? -10 : 10)}
                        y={city.y + 4}
                        textAnchor={city.x > 280 ? "end" : "start"}
                        fill={isActive ? "#000100" : "#656B4D"}
                        style={{
                          fontSize: city.primary ? 13 : 11,
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: isActive ? 700 : 500,
                        }}
                      >
                        {city.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            <div
              className="absolute bottom-2 left-2 rounded-2xl p-3 sm:p-3.5"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(0,1,0,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="mb-2 font-body text-[10px] uppercase tracking-wider text-[#979387]">
                {t.map.coverage}
              </div>
              <div className="flex items-center gap-2 font-body text-[11px] text-[#000100]">
                <span className="h-2 w-2 rounded-full bg-[#2C3024] ring-2 ring-accent" />
                {t.map.activeCity}
              </div>
              <div className="mt-1.5 flex items-center gap-2 font-body text-[11px] text-[#656B4D]">
                <span className="h-2 w-2 rounded-full bg-[#979387]" />
                {t.map.otherCity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
