"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/LanguageContext";

const pairMedia = [
  {
    cards: [
      {
        photo: "/media/connects/01/photo-connects-1.png",
        avatar: "/media/connects/01/connects-1.png",
        side: "left" as const,
      },
      {
        photo: "/media/connects/01/photo-connects-2.png",
        avatar: "/media/connects/01/connects-2.png",
        side: "right" as const,
      },
    ],
  },
  {
    cards: [
      {
        photo: "/media/connects/02/photo-connects-5.png",
        avatar: "/media/connects/02/connects-4.png",
        side: "left" as const,
      },
      {
        photo: "/media/connects/02/photo-connects-3.png",
        avatar: "/media/connects/02/connects-3.png",
        side: "right" as const,
      },
    ],
  },
  {
    cards: [
      {
        photo: "/media/connects/03/photo-connects-5.png",
        avatar: "/media/connects/03/connects-5.png",
        side: "left" as const,
      },
      {
        photo: "/media/connects/03/photo-connects-6.png",
        avatar: "/media/connects/03/connects-6.png",
        side: "right" as const,
      },
    ],
  },
];

function Pin() {
  return (
    <svg
      className="connects-card__pin"
      width="10"
      height="10"
      viewBox="0 0 12 12"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6 0.6a3.4 3.4 0 0 0-3.4 3.4c0 2.5 3.4 7.4 3.4 7.4s3.4-4.9 3.4-7.4A3.4 3.4 0 0 0 6 .6Zm0 4.6a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z"
      />
    </svg>
  );
}

export function Connects() {
  const { home } = useI18n();
  const c = home.connects;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const pairs = [...root.querySelectorAll<HTMLElement>(".connects__pair")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = (progress: number, el: HTMLElement) => {
      const value = Math.min(1, Math.max(0, progress));
      el.style.setProperty("--in", value.toFixed(3));
      el.classList.toggle("is-settled", value > 0.96);
    };

    if (reduce) {
      pairs.forEach((el) => apply(1, el));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const start = vh * 0.92;
      const end = vh * 0.36;
      pairs.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        apply((start - top) / (start - end), el);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="connects screen" id="connects" ref={sectionRef}>
      <div className="container connects__inner">
        <div className="connects__left">
          <div className="connects__intro">
            <span className="section-tag section-tag--dark">
              05 <i /> TRADEGROUND CONNECTS
            </span>

            <h2 className="connects__title">
              {c.titleLine1}
              <br />
              {c.titleLine2}
            </h2>

            <div className="connects__icons">
              <span>
                <Image
                  src="/media/connects/icons/click.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
              <span>
                <Image
                  src="/media/connects/icons/messenger.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
              <span className="is-active">
                <Image
                  src="/media/connects/icons/translate.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </span>
            </div>
          </div>

          <div className="connects__copy">
            <p className="connects__lead">{c.lead}</p>
            <p className="connects__text">{c.text}</p>
            <p className="connects__footer">{c.footer}</p>
          </div>
        </div>

        <div className="connects__collage">
          {c.pairs.map((pair, index) => {
            return (
              <div
                key={pair.badge}
                className={`connects__pair connects__pair--${index + 1}`}
                style={{ ["--in" as string]: 0 }}
              >
                <span className="connects__badge">
                  <Image
                    src="/media/connects/smiling-face.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  {pair.badge}
                </span>
                {pair.cards.map((card, cardIndex) => {
                  const media = pairMedia[index].cards[cardIndex];
                  return (
                    <article
                      key={`${card.role}-${media.side}`}
                      className={`connects-card connects-card--${media.side}`}
                    >
                      <div className="connects-card__meta">
                        <Image
                          src={media.avatar}
                          alt=""
                          width={28}
                          height={28}
                          className="connects-card__avatar"
                        />
                        <div className="connects-card__text">
                          <span className="connects-card__role">{card.role}</span>
                          <div className="connects-card__title-row">
                            <strong>{card.title}</strong>
                            {card.price ? <em>{card.price}</em> : null}
                          </div>
                          <span className="connects-card__detail">
                            <Pin />
                            {card.location}
                          </span>
                        </div>
                      </div>
                      <div className="connects-card__photo">
                        <Image src={media.photo} alt="" fill sizes="220px" />
                      </div>
                      <p className="connects-card__caption">{card.caption}</p>
                    </article>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Connects;
