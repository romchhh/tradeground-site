"use client";

import Image from "next/image";
import type { BusinessDictionary } from "@/i18n/business";
import { useI18n } from "@/i18n/LanguageContext";
import { CoverPin } from "@/components/fx/CoverPin";
import { Footer } from "@/components/sections/Footer";

function SectionTag({ label, tone }: { label: string; tone: "light" | "dark" }) {
  const [num, ...rest] = label.split("—");
  const text = rest.join("—").trim();
  return (
    <span className={`section-tag section-tag--${tone}`}>
      {num.trim()} <i /> {text}
    </span>
  );
}

export default function BusinessView({ dict }: { dict: BusinessDictionary }) {
  const { locale, home } = useI18n();
  const e = home.everyone;
  const createHref = `https://t.me/TradeGroundBot?start=business_${locale}`;
  const createProHref = `https://t.me/TradeGroundBot?start=business_pro_${locale}`;

  return (
    <div className="cover-stack">
      {/* 01 HERO */}
      <CoverPin z={1} round={false}>
        <section className="biz-block biz-block--dark biz-hero" id="hero">
          <div className="about-block__glow" aria-hidden />
          <div className="container biz-split">
            <div className="biz-copy">
              <SectionTag label={dict.heroTag} tone="light" />
              <h1 className="about-title">
                {dict.heroTitle}
                <br />
                <em>{dict.heroTitleAccent}</em>
              </h1>
              <p className="about-lead">{dict.heroLead}</p>
              <a
                href={createHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent biz-cta"
              >
                {dict.readyCta}
                <Image
                  src="/media/hero/button-down-black.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="chev chev--bl"
                />
              </a>
            </div>

            <div className="biz-visual" aria-hidden>
              <article className="everyone-card everyone-card--business biz-visual__card">
                <div className="everyone-card__media">
                  <Image
                    src="/media/everyone/business/everyone-2.png"
                    alt=""
                    fill
                    className="everyone-card__bg"
                    sizes="(max-width: 900px) 100vw, 48vw"
                    priority
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

      {/* 02 TOOLS */}
      <CoverPin z={2} tone="light">
        <section className="biz-block biz-block--light">
          <div className="container">
            <SectionTag label={dict.toolsTag} tone="dark" />
            <h2 className="about-title">
              {dict.toolsTitle}
              <br />
              <em>{dict.toolsTitleAccent}</em>
            </h2>
            <p className="about-lead about-lead--ink">{dict.toolsLead}</p>
            <div className="biz-tools">
              {dict.tools.map((tool, i) => (
                <article key={tool.title} className="biz-tool">
                  <span className="biz-tool__num">0{i + 1}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 03 BUSINESS PAGE */}
      <CoverPin z={3}>
        <section className="biz-block biz-block--dark">
          <div className="about-block__glow about-block__glow--right" aria-hidden />
          <div className="container biz-split">
            <div className="biz-copy">
              <SectionTag label={dict.pageTag} tone="light" />
              <h2 className="about-title">
                {dict.pageTitle}
                <br />
                <em>{dict.pageTitleAccent}</em>
              </h2>
              <p className="about-lead">{dict.pageLead}</p>
              <ul className="biz-feature-list">
                {dict.pageFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="biz-showcase" aria-hidden>
              <div className="biz-showcase__card">
                <div className="biz-showcase__cover">
                  <Image
                    src="/media/everyone/business/everyone-2.png"
                    alt=""
                    fill
                    sizes="480px"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  />
                </div>
                <div className="biz-showcase__row">
                  <Image
                    src="/media/connects/01/connects-1.png"
                    alt=""
                    width={44}
                    height={44}
                    className="biz-profile__avatar"
                  />
                  <div>
                    <strong>{dict.profileName}</strong>
                    <span>{dict.profileCity}</span>
                  </div>
                </div>
                <div className="biz-showcase__grid">
                  {[
                    "/media/connects/02/photo-connects-3.png",
                    "/media/connects/02/photo-connects-5.png",
                    "/media/connects/03/photo-connects-5.png",
                    "/media/connects/03/photo-connects-6.png",
                  ].map((src) => (
                    <div key={src} className="biz-showcase__thumb">
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="110px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 04 DISCOVER */}
      <CoverPin z={4} tone="light">
        <section className="biz-block biz-block--light">
          <div className="container">
            <SectionTag label={dict.discoverTag} tone="dark" />
            <h2 className="about-title">
              {dict.discoverTitle}
              <br />
              <em>{dict.discoverTitleAccent}</em>
            </h2>
            <p className="about-lead about-lead--ink">{dict.discoverLead}</p>

            <div className="biz-discover">
              <div className="biz-discover__filters">
                <label>
                  <span>{dict.discoverFilterCity}</span>
                  <strong>Berlin</strong>
                </label>
                <label>
                  <span>{dict.discoverFilterField}</span>
                  <strong>Services</strong>
                </label>
              </div>
              <div className="biz-discover__cards">
                {dict.discoverCards.map((card, i) => (
                  <article key={card.name} className="biz-discover-card">
                    <div className="biz-discover-card__photo">
                      <Image
                        src={
                          [
                            "/media/everyone/business/everyone-2.png",
                            "/media/connects/03/photo-connects-5.png",
                            "/media/connects/03/photo-connects-6.png",
                          ][i]
                        }
                        alt=""
                        fill
                        sizes="280px"
                        style={{
                          objectFit: "cover",
                          objectPosition: i === 0 ? "center 28%" : "center",
                        }}
                      />
                    </div>
                    <div className="biz-discover-card__body">
                      <div className="biz-discover-card__top">
                        <strong>{card.name}</strong>
                        <span className="biz-discover-card__rating">
                          <Image
                            src="/media/everyone/private/star.svg"
                            alt=""
                            width={12}
                            height={12}
                          />
                          {card.rating}
                        </span>
                      </div>
                      <p>
                        {card.field} · {card.city}
                      </p>
                      <span className="biz-discover-card__ads">{card.ads}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 05 PLANS */}
      <CoverPin z={5}>
        <section className="biz-block biz-block--dark">
          <div className="about-block__glow" aria-hidden />
          <div className="container">
            <SectionTag label={dict.plansTag} tone="light" />
            <h2 className="about-title">
              {dict.plansTitle}
              <br />
              <em>{dict.plansTitleAccent}</em>
            </h2>
            <p className="about-lead">{dict.plansLead}</p>

            <div className="biz-plans">
              <article className="biz-plan">
                <header>
                  <span>{dict.planFreeName}</span>
                  <strong>{dict.planFreePrice}</strong>
                </header>
                <ul>
                  {dict.planFreeItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="biz-plan__note">{dict.planFreeNote}</p>
                <a
                  href={createHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--light"
                >
                  {dict.planCta}
                </a>
              </article>

              <article className="biz-plan biz-plan--pro">
                <header>
                  <span>{dict.planProName}</span>
                  <strong>
                    {dict.planProPrice}
                    <small>{dict.planProPeriod}</small>
                  </strong>
                </header>
                <ul>
                  {dict.planProItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="biz-plan__note">{dict.planProNote}</p>
                <a
                  href={createProHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--accent"
                >
                  {dict.planCta}
                </a>
              </article>
            </div>
          </div>
        </section>
      </CoverPin>

      {/* 06 READY */}
      <CoverPin z={6} tone="light">
        <section className="biz-block biz-block--light biz-ready">
          <div className="container biz-ready__inner">
            <SectionTag label={dict.readyTag} tone="dark" />
            <h2 className="about-title">
              {dict.readyTitle}
              <br />
              <em>{dict.readyTitleAccent}</em>
            </h2>
            <p className="about-lead about-lead--ink">{dict.readyLead}</p>
            <a
              href={createHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent about-join"
            >
              {dict.readyCta}
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
