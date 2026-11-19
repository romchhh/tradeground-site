"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

export function ForEveryone() {
  const { home, marketplace } = useI18n();
  const e = home.everyone;

  return (
    <section className="everyone screen" id="about">
      <div className="container everyone__inner">
        <div className="everyone__header">
          <div>
            <div className="everyone__labels">
              <span className="is-active">{e.labelActive}</span>
            </div>
            <h2 className="everyone__title">
              {e.title}
              <br />
              <span>{e.titleAccent}</span>
            </h2>
          </div>
          <p className="everyone__script">
            {e.script[0]}
            <br />
            {e.script[1]}
            <br />
            {e.script[2]}
          </p>
        </div>

        <div className="everyone__grid">
          <article className="everyone-card">
            <Image
              src="/media/everyone/private/everyone-1.png"
              alt=""
              fill
              className="everyone-card__bg"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="everyone-card__overlay" />

            <div className="everyone-card__content">
              <h3>{e.privateTitle}</h3>
              <p>{e.privateText}</p>
            </div>

            <div className="everyone-card__float everyone-card__float--sofa">
              <Image
                src="/media/everyone/private/photo-sofa.png"
                alt=""
                width={88}
                height={68}
              />
              <div>
                <strong>{e.sofa}</strong>
                <span>280 €</span>
              </div>
              <Image
                src="/media/everyone/private/button-heart.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>

            <div className="everyone-card__float everyone-card__float--pro">
              <Image
                src="/media/everyone/private/photo-electrician.png"
                alt=""
                width={52}
                height={52}
                className="everyone-card__avatar"
              />
              <div>
                <strong>{e.electrician}</strong>
                <span className="everyone-card__rating">
                  <Image
                    src="/media/everyone/private/star.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                  5.0
                </span>
              </div>
            </div>

            <div className="everyone-card__float everyone-card__float--shoes">
              <Image
                src="/media/everyone/private/photo-sneakers.png"
                alt=""
                width={88}
                height={68}
              />
              <div>
                <strong>{e.sneakers}</strong>
                <span>120 €</span>
              </div>
              <Image
                src="/media/everyone/private/button-heart.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>

            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent everyone-card__btn"
            >
              {e.more}
              <Image
                src="/media/hero/button-down-black.svg"
                alt=""
                width={9}
                height={9}
                className="chev chev--bl"
              />
            </a>
          </article>

          <article className="everyone-card" id="business">
            <Image
              src="/media/everyone/business/everyone-2.png"
              alt=""
              fill
              className="everyone-card__bg"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="everyone-card__overlay" />

            <div className="everyone-card__content">
              <h3>{e.businessTitle}</h3>
              <p>{e.businessText}</p>
            </div>

            <div className="everyone-card__widget everyone-card__widget--stats">
              <div className="everyone-card__widget-top">
                <Image
                  src="/media/everyone/business/stats.svg"
                  alt=""
                  width={21}
                  height={25}
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
              <span>{e.newClients}</span>
              <strong>+12</strong>
              <div className="everyone-card__avatars">
                <Image
                  src="/media/everyone/business/photo-client-1.png"
                  alt=""
                  width={32}
                  height={32}
                />
                <Image
                  src="/media/everyone/business/photo-client-2.png"
                  alt=""
                  width={32}
                  height={32}
                />
                <Image
                  src="/media/everyone/business/photo-client-3.png"
                  alt=""
                  width={32}
                  height={32}
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

            <Link href="#contacts" className="btn btn--accent everyone-card__btn">
              {e.more}
              <Image
                src="/media/hero/button-down-black.svg"
                alt=""
                width={9}
                height={9}
                className="chev chev--bl"
              />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ForEveryone;
