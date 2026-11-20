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

const heroTiles = [
  { src: "/media/one-place/01-car.png", label: "Auto", rot: -8 },
  { src: "/media/one-place/02-furniture.png", label: "Home", rot: 6 },
  { src: "/media/one-place/12-fashion.png", label: "Fashion", rot: -4, dark: true },
  { src: "/media/one-place/03-electronics.png", label: "Tech", rot: 7, dark: true },
];

const storyShots = [
  "/media/connects/01/photo-connects-1.png",
  "/media/connects/01/photo-connects-2.png",
  "/media/everyone/private/photo-sofa.png",
  "/media/everyone/private/photo-electrician.png",
];

const marketItems = [
  { src: "/media/one-place/04-real-estate.png", title: "Housing" },
  { src: "/media/one-place/08-services.png", title: "Services", dark: true },
  { src: "/media/one-place/06-business.png", title: "Business" },
  { src: "/media/one-place/05-sport.png", title: "Sport" },
  { src: "/media/one-place/10-child-products.png", title: "Kids" },
  { src: "/media/one-place/07-animals.png", title: "Pets" },
];

export default function AboutView({ dict }: { dict: Dictionary["about"] }) {
  const { marketplace } = useI18n();

  return (
    <div className="cover-stack">
      <CoverPin z={1} round={false}>
        <section className="about-block about-block--dark about-block--hero" id="hero">
          <div className="about-block__glow" aria-hidden />
          <div className="container about-block__split">
            <div className="about-block__copy">
              <Tag n="01" label="ABOUT" tone="light" />
              <h1 className="about-title">
                {dict.title}
                <br />
                <em>{dict.titleAccent}</em>
              </h1>
              <p className="about-lead">{dict.lead}</p>
            </div>

            <div className="about-hero-mosaic" aria-hidden>
              {heroTiles.map((tile) => (
                <figure
                  key={tile.src}
                  className={`about-hero-tile${tile.dark ? " about-hero-tile--dark" : ""}`}
                  style={{ ["--rot" as string]: `${tile.rot}deg` }}
                >
                  <Image src={tile.src} alt="" fill sizes="220px" className="about-hero-tile__img" />
                  <figcaption>{tile.label}</figcaption>
                </figure>
              ))}
              <div className="about-hero-float about-hero-float--sofa">
                <Image
                  src="/media/everyone/private/photo-sofa.png"
                  alt=""
                  width={88}
                  height={68}
                />
                <div>
                  <strong>IKEA Sofa</strong>
                  <span>280 €</span>
                </div>
              </div>
              <div className="about-hero-float about-hero-float--pro">
                <Image
                  src="/media/everyone/private/photo-electrician.png"
                  alt=""
                  width={44}
                  height={44}
                  className="about-hero-float__avatar"
                />
                <div>
                  <strong>Electrician</strong>
                  <span>5.0 ★</span>
                </div>
              </div>
            </div>
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
              <div className="about-story-shots" aria-hidden>
                {storyShots.map((src, i) => (
                  <div key={src} className={`about-story-shot about-story-shot--${i + 1}`}>
                    <Image src={src} alt="" fill sizes="180px" />
                  </div>
                ))}
              </div>
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
        <section className="about-block about-block--dark about-block--market">
          <div className="about-block__glow about-block__glow--right" aria-hidden />
          <div className="container about-block__split about-block__split--reverse">
            <div className="about-block__copy">
              <Tag n="03" label="MARKETPLACE" tone="light" />
              <h2 className="about-title">{dict.buyTitle}</h2>
              <p className="about-lead">{dict.buyDesc}</p>
            </div>
            <div className="about-market-grid" aria-hidden>
              {marketItems.map((item) => (
                <figure
                  key={item.src}
                  className={`about-market-card${item.dark ? " about-market-card--dark" : ""}`}
                >
                  <Image src={item.src} alt="" fill sizes="160px" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={4} tone="light">
        <section className="about-block about-block--light about-block--tg">
          <div className="container about-block__split">
            <div className="about-block__copy">
              <Tag n="04" label="TELEGRAM" tone="dark" />
              <h2 className="about-title">
                {dict.simpleTitle}
                <br />
                <em>{dict.simpleTitleAccent}</em>
              </h2>
              <p className="about-lead about-lead--ink">{dict.simpleDesc}</p>
              <p className="about-lead about-lead--ink">{dict.simpleNote}</p>
            </div>
            <div className="about-phones" aria-hidden>
              {[
                "/media/telegram/slider-phone-1.png",
                "/media/telegram/slider-phone-2.png",
                "/media/telegram/slider-phone-3.png",
              ].map((src, i) => (
                <div key={src} className={`about-phone about-phone--${i + 1}`}>
                  <Image src={src} alt="" width={220} height={440} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={5}>
        <section className="about-block about-block--dark about-block--future">
          <div className="about-block__glow" aria-hidden />
          <div className="container about-block__split">
            <div className="about-block__copy">
              <Tag n="05" label="NEXT" tone="light" />
              <h2 className="about-title">
                {dict.futureTitle}
                <br />
                <em>{dict.futureTitleAccent}</em>
              </h2>
              <p className="about-lead">{dict.futureDesc}</p>
            </div>
            <div className="about-future-collage" aria-hidden>
              <div className="about-future-main">
                <Image
                  src="/media/everyone/private/everyone-1.png"
                  alt=""
                  fill
                  sizes="420px"
                />
              </div>
              <div className="about-future-side">
                <Image
                  src="/media/everyone/business/everyone-2.png"
                  alt=""
                  fill
                  sizes="260px"
                />
              </div>
              <div className="about-future-chip about-future-chip--stats">
                <strong>+230%</strong>
                <span>reach</span>
              </div>
              <div className="about-future-chip about-future-chip--people">
                <div className="about-future-avatars">
                  <Image
                    src="/media/everyone/business/photo-client-1.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/media/everyone/business/photo-client-2.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/media/everyone/business/photo-client-3.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <strong>+12</strong>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={6} tone="light">
        <section className="about-block about-block--light about-block--close">
          <div className="container about-block__inner about-close">
            <div className="about-close__copy">
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
            <div className="about-close__strip" aria-hidden>
              {[
                "/media/one-place/09-house.png",
                "/media/one-place/11-health.png",
                "/media/one-place/12-fashion.png",
                "/media/one-place/03-electronics.png",
              ].map((src) => (
                <div key={src} className="about-close__thumb">
                  <Image src={src} alt="" fill sizes="120px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={7} pin={false}>
        <Footer />
      </CoverPin>
    </div>
  );
}
