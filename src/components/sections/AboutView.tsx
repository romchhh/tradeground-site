"use client";

import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageContext";
import { CoverPin } from "@/components/fx/CoverPin";
import { Footer } from "@/components/sections/Footer";

function Tag({ n, label, tone }: { n: string; label: string; tone: "light" | "dark" }) {
  return (
    <span className={`section-tag section-tag--${tone}`}>
      {n} <i /> {label}
    </span>
  );
}

export default function AboutView({ dict }: { dict: Dictionary["about"] }) {
  const { marketplace } = useI18n();

  return (
    <div className="cover-stack">
      <CoverPin z={1} round={false}>
        <section className="about-block about-block--dark" id="hero">
          <div className="about-block__glow" aria-hidden />
          <div className="container about-block__inner">
            <Tag n="01" label="ABOUT" tone="light" />
            <h1 className="about-title">
              {dict.title}
              <br />
              <em>{dict.titleAccent}</em>
            </h1>
            <p className="about-lead">{dict.lead}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={2} tone="light">
        <section className="about-block about-block--light about-block--story">
          <div className="container about-story">
            <div>
              <Tag n="02" label="STORY" tone="dark" />
              <h2 className="about-title">
                {dict.storyTitle}
                <br />
                <em>{dict.storyTitleAccent}</em>
              </h2>
            </div>
            <div className="about-copy">
              {dict.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="about-reveal">{dict.storyReveal}</p>
              <p className="about-founder">
                — {dict.founderName}
                <span>{dict.founderRole}</span>
              </p>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={3}>
        <section className="about-block about-block--dark">
          <div className="about-block__glow about-block__glow--right" aria-hidden />
          <div className="container about-block__inner">
            <Tag n="03" label="MARKETPLACE" tone="light" />
            <h2 className="about-title">{dict.buyTitle}</h2>
            <p className="about-lead">{dict.buyDesc}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={4} tone="light">
        <section className="about-block about-block--light">
          <div className="container about-block__inner">
            <Tag n="04" label="TELEGRAM" tone="dark" />
            <h2 className="about-title">
              {dict.simpleTitle}
              <br />
              <em>{dict.simpleTitleAccent}</em>
            </h2>
            <p className="about-lead about-lead--ink">{dict.simpleDesc}</p>
            <p className="about-lead about-lead--ink">{dict.simpleNote}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={5}>
        <section className="about-block about-block--dark">
          <div className="about-block__glow" aria-hidden />
          <div className="container about-block__inner">
            <Tag n="05" label="NEXT" tone="light" />
            <h2 className="about-title">
              {dict.futureTitle}
              <br />
              <em>{dict.futureTitleAccent}</em>
            </h2>
            <p className="about-lead">{dict.futureDesc}</p>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={6} tone="light">
        <section className="about-block about-block--light about-block--close">
          <div className="container about-block__inner">
            <h2 className="about-title">
              {dict.ctaLine1}
              <br />
              <em>{dict.ctaLine2}</em>
            </h2>
            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent about-join"
            >
              {dict.cta}
              <Image
                src="/media/hero/button-down-black.svg"
                alt=""
                width={9}
                height={9}
                className="chev chev--bl"
              />
            </a>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={7} pin={false}>
        <Footer />
      </CoverPin>
    </div>
  );
}
