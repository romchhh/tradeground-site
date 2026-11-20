"use client";

import Image from "next/image";
import Link from "next/link";
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

const categoryPhotos: Record<string, string> = {
  goods: "/media/connects/02/photo-connects-5.png",
  services: "/media/connects/02/photo-connects-3.png",
  jobs: "/media/connects/03/photo-connects-6.png",
  realestate: "/media/connects/03/photo-connects-5.png",
  free: "/media/connects/01/photo-connects-2.png",
};

const personalShots = [
  "/media/everyone/private/everyone-1.png",
  "/media/connects/01/photo-connects-1.png",
  "/media/connects/02/photo-connects-5.png",
  "/media/everyone/business/everyone-2.png",
];

export default function MarketplaceView({
  dict,
}: {
  dict: Dictionary["marketplace"];
}) {
  const { marketplace, locale, home } = useI18n();
  const e = home.everyone;

  return (
    <div className="cover-stack">
      {/* 01 HERO */}
      <CoverPin z={1} round={false}>
        <section className="about-block about-block--dark mkt-hero" id="hero">
          <div className="about-block__glow" aria-hidden />
          <div className="container about-block__split">
            <div className="about-block__copy">
              <Tag n="01" label="MARKETPLACE" tone="light" />
              <h1 className="about-title">
                {dict.title}
                <br />
                <em>{dict.titleAccent}</em>
              </h1>
              <p className="about-lead">{dict.lead}</p>
              <a
                href={marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent about-join"
              >
                {dict.openCta}
                <Image
                  src="/media/hero/button-down-black.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="chev chev--bl"
                />
              </a>
            </div>

            <div className="mkt-hero__visual" aria-hidden>
              <div className="mkt-hero__phone">
                <Image
                  src="/media/marketplace-hero.png"
                  alt=""
                  width={360}
                  height={720}
                  priority
                  className="mkt-hero__phone-img"
                />
              </div>
              <div className="mkt-hero__float mkt-hero__float--sofa">
                <span className="mkt-hero__thumb mkt-hero__thumb--dark">
                  <Image
                    src="/media/everyone/private/photo-sofa.png"
                    alt=""
                    width={72}
                    height={56}
                  />
                </span>
                <div>
                  <strong>{e.sofa}</strong>
                  <span>280 €</span>
                </div>
              </div>
              <div className="mkt-hero__float mkt-hero__float--pro">
                <Image
                  src="/media/everyone/private/photo-electrician.png"
                  alt=""
                  width={44}
                  height={44}
                  className="mkt-hero__avatar"
                />
                <div>
                  <strong>{e.electrician}</strong>
                  <span>5.0 ★</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 02 CATEGORIES */}
      <CoverPin z={2} tone="light">
        <section className="about-block about-block--light mkt-cats">
          <div className="container">
            <Tag n="02" label="CATEGORIES" tone="dark" />
            <h2 className="about-title">
              {dict.categoriesTitle}
              <br />
              <em>{dict.categoriesTitleAccent}</em>
            </h2>
            <p className="about-lead about-lead--ink mkt-cats__lead">{dict.lead}</p>

            <div className="mkt-cat-grid">
              {dict.categories.map((cat) => {
                const photo = categoryPhotos[cat.id] ?? categoryPhotos.goods;
                return (
                  <a
                    key={cat.id}
                    href={`${marketplace}&category=${cat.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mkt-cat"
                  >
                    <div className="mkt-cat__photo">
                      <Image
                        src={photo}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                      <span className="mkt-cat__icon">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={cat.icon} alt="" width={28} height={28} />
                      </span>
                    </div>
                    <div className="mkt-cat__body">
                      <h3>{cat.title}</h3>
                      <p>{cat.desc}</p>
                    </div>
                  </a>
                );
              })}

              <Link href={`/${locale}#one-place`} className="mkt-cat mkt-cat--more">
                <div className="mkt-cat__photo mkt-cat__photo--more">
                  <Image
                    src="/media/one-place/12-fashion.png"
                    alt=""
                    fill
                    sizes="33vw"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="mkt-cat__body">
                  <span className="mkt-cat__eyebrow">{dict.moreLabel}</span>
                  <h3>{dict.moreCta}</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 03 PERSONAL */}
      <CoverPin z={3}>
        <section className="about-block about-block--dark mkt-personal">
          <div className="about-block__glow about-block__glow--right" aria-hidden />
          <div className="container about-block__split">
            <div className="about-block__copy">
              <Tag n="03" label="PERSONAL" tone="light" />
              <h2 className="about-title">{dict.personalTitle}</h2>
              <p className="about-lead">{dict.personalDesc}</p>
            </div>
            <div className="mkt-personal__shots" aria-hidden>
              {personalShots.map((src, i) => (
                <div
                  key={src}
                  className={`mkt-personal__shot mkt-personal__shot--${i + 1}`}
                >
                  <Image src={src} alt="" fill sizes="240px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 04 BUSINESS */}
      <CoverPin z={4} tone="light">
        <section className="about-block about-block--light mkt-biz">
          <div className="container about-block__split about-block__split--reverse">
            <div className="about-block__copy">
              <Tag n="04" label="BUSINESS" tone="dark" />
              <h2 className="about-title">
                {dict.businessTitle}
                <br />
                <em>{dict.businessTitleAccent}</em>
              </h2>
              <p className="about-lead about-lead--ink">{dict.businessDesc}</p>
              <ul className="mkt-biz__list">
                {dict.businessFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                href={`/${locale}/business`}
                className="btn btn--accent about-join"
              >
                {dict.businessCta}
                <Image
                  src="/media/hero/button-down-black.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="chev chev--bl"
                />
              </Link>
            </div>

            <div className="mkt-biz__card-wrap" aria-hidden>
              <article className="everyone-card everyone-card--business mkt-biz__card">
                <div className="everyone-card__media">
                  <Image
                    src="/media/everyone/business/everyone-2.png"
                    alt=""
                    fill
                    className="everyone-card__bg"
                    sizes="480px"
                  />
                  <div className="everyone-card__overlay" />
                </div>
                <div className="everyone-card__content">
                  <h3>{e.businessTitle}</h3>
                  <p>{e.businessText}</p>
                </div>
                <div className="everyone-card__widget everyone-card__widget--stats">
                  <div className="everyone-card__widget-top">
                    <Image
                      src="/media/everyone/business/stats.svg"
                      alt=""
                      width={22}
                      height={26}
                    />
                    <Image
                      src="/media/everyone/business/arrow-up.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                  </div>
                  <strong>+230%</strong>
                  <span>{e.views}</span>
                </div>
                <div className="everyone-card__widget everyone-card__widget--clients">
                  <div className="everyone-card__clients-copy">
                    <span>{e.newClients}</span>
                    <strong>+12</strong>
                  </div>
                  <div className="everyone-card__avatars">
                    <Image
                      src="/media/everyone/business/photo-client-1.png"
                      alt=""
                      width={34}
                      height={34}
                    />
                    <Image
                      src="/media/everyone/business/photo-client-2.png"
                      alt=""
                      width={34}
                      height={34}
                    />
                    <Image
                      src="/media/everyone/business/photo-client-3.png"
                      alt=""
                      width={34}
                      height={34}
                    />
                    <span className="everyone-card__plus">
                      <Image
                        src="/media/everyone/business/plus.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 05 OPEN */}
      <CoverPin z={5} tone="light">
        <section className="about-block about-block--light about-block--close">
          <div className="container about-block__inner about-close">
            <div className="about-close__copy">
              <Tag n="05" label="OPEN" tone="dark" />
              <h2 className="about-title">
                {dict.openTitle}
              </h2>
              <p className="about-lead about-lead--ink">{dict.openDesc}</p>
              <a
                href={marketplace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent about-join"
              >
                {dict.openCta}
                <Image
                  src="/media/hero/button-down-black.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="chev chev--bl"
                />
              </a>
            </div>
          </div>
        </section>
      </CoverPin>

      <CoverPin z={6} pin={false}>
        <Footer />
      </CoverPin>
    </div>
  );
}
