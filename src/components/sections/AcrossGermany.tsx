"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import {
  GERMANY_CITIES,
  citiesBySpreadOrder,
} from "@/data/germanyCities";

export function AcrossGermany() {
  const { home, marketplace } = useI18n();
  const g = home.germany;
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const ordered = useMemo(() => citiesBySpreadOrder(GERMANY_CITIES), []);
  const focusId = hoveredId ?? activeId;
  const focus = GERMANY_CITIES.find((c) => c.id === focusId) ?? null;
  const cityMarketplace = focus
    ? `${marketplace}&city=${encodeURIComponent(focus.filter)}`
    : marketplace;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    let i = 0;
    const timers: number[] = [];
    ordered.forEach((_, index) => {
      const t = window.setTimeout(() => {
        i = index + 1;
        setVisibleCount(i);
      }, 90 + index * 110);
      timers.push(t);
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [revealed, ordered]);

  const onSelect = useCallback((id: string) => {
    setActiveId(id);
    setHoveredId(id);
  }, []);

  return (
    <section className="germany screen" id="germany" ref={sectionRef}>
      <div className="container germany__inner">
        <span className="section-tag section-tag--dark">
          06 <i /> ACROSS GERMANY
        </span>

        <div className="germany__map-card">
          <p className="germany__map-hint">{g.mapHint}</p>

          <div className="germany__map-photo" role="img" aria-label={g.mapAlt}>
            <Image
              src="/media/germany/map.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              className="germany__map-img"
              priority={false}
            />

            {ordered.map((city, index) => {
              const shown = index < visibleCount;
              const isFocus = focusId === city.id;
              return (
                <button
                  key={city.id}
                  type="button"
                  className={`germany-pin${city.featured ? " germany-pin--featured" : ""}${
                    shown ? " is-shown" : ""
                  }${isFocus ? " is-active" : ""}`}
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  aria-label={city.name}
                  aria-pressed={activeId === city.id}
                  onClick={() => onSelect(city.id)}
                  onMouseEnter={() => setHoveredId(city.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(city.id)}
                  onBlur={() => setHoveredId(null)}
                >
                  <span className="germany-pin__dot" aria-hidden />
                  <span className="germany-pin__name">{city.name}</span>
                </button>
              );
            })}
          </div>

          <div
            className={`germany__tooltip${focus ? " is-visible" : ""}`}
            role="status"
            aria-live="polite"
            aria-hidden={!focus}
          >
            {focus ? (
              <>
                <div className="germany__tooltip-icon">
                  <Image
                    src="/media/germany/map-block-inside.svg"
                    alt=""
                    width={23}
                    height={29}
                  />
                </div>
                <div className="germany__tooltip-copy">
                  <h3>{focus.name}</h3>
                  <p>
                    {focus.ads} {g.activeAds}
                    <br />+{focus.weekly} {g.newWeek}
                  </p>
                </div>
                <a
                  href={cityMarketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="germany__tooltip-btn"
                >
                  {g.view}
                  <Image
                    src="/media/hero/button-down-black.svg"
                    alt=""
                    width={8}
                    height={8}
                    className="chev chev--tr"
                  />
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcrossGermany;
