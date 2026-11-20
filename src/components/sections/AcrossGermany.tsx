"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { GERMANY_CITIES } from "@/data/germanyCities";

const GermanyLeafletMap = dynamic(
  () =>
    import("@/components/sections/GermanyLeafletMap").then(
      (m) => m.GermanyLeafletMap
    ),
  {
    ssr: false,
    loading: () => <div className="germany__map-leaflet" aria-hidden />,
  }
);

export function AcrossGermany() {
  const { home, marketplace } = useI18n();
  const g = home.germany;
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const focusId = hoveredId ?? activeId;
  const focus =
    GERMANY_CITIES.find((c) => c.id === focusId) ?? null;
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
      { threshold: 0.15, rootMargin: "80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onSelect = useCallback((id: string) => {
    setActiveId(id);
    setHoveredId(id);
  }, []);

  const onHover = useCallback((id: string | null) => {
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
          <GermanyLeafletMap
            cities={GERMANY_CITIES}
            highlightId={focusId}
            selectedId={activeId}
            mapLabel={g.mapAlt}
            revealed={revealed}
            onSelect={onSelect}
            onHover={onHover}
          />

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
