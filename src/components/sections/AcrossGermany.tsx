"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { GERMANY_CITIES } from "@/data/germanyCities";
import { GermanyLeafletMap } from "@/components/sections/GermanyLeafletMap";

export function AcrossGermany() {
  const { home, marketplace } = useI18n();
  const g = home.germany;
  const [activeId, setActiveId] = useState("hamburg");
  const active = GERMANY_CITIES.find((c) => c.id === activeId) ?? GERMANY_CITIES[0];
  const cityMarketplace = `${marketplace}&city=${encodeURIComponent(active.name)}`;

  return (
    <section className="germany screen" id="germany">
      <div className="container germany__inner">
        <span className="section-tag section-tag--dark">
          06 <i /> ACROSS GERMANY
        </span>

        <div className="germany__map-card">
          <p className="germany__map-hint">{g.mapHint}</p>
          <GermanyLeafletMap
            cities={GERMANY_CITIES}
            activeId={activeId}
            mapLabel={g.mapAlt}
            onSelect={setActiveId}
          />

          <div className="germany__tooltip" role="status" aria-live="polite">
            <div className="germany__tooltip-icon">
              <Image
                src="/media/germany/map-block-inside.svg"
                alt=""
                width={23}
                height={29}
              />
            </div>
            <div className="germany__tooltip-copy">
              <h3>{active.name}</h3>
              <p>
                {active.ads ?? 120} {g.activeAds}
                <br />+{active.weekly ?? 24} {g.newWeek}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcrossGermany;