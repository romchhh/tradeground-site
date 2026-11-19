"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";

const phones = [
  "/media/telegram/slider-phone-1.png",
  "/media/telegram/slider-phone-2.png",
  "/media/telegram/slider-phone-3.png",
];

const featureIcons = [
  "/media/telegram/click.svg",
  "/media/telegram/messenger.svg",
  "/media/telegram/translate.svg",
];

export function PoweredByTelegram() {
  const { home } = useI18n();
  const slides = home.telegram.slides;
  const features = home.telegram.features;
  const count = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      if (reduce.matches) return;
      const el = trackRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const index = Math.min(count - 1, Math.floor((scrolled / total) * count));
      setActive((prev) => (prev === index ? prev : index));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduce.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduce.removeEventListener("change", update);
    };
  }, [count]);

  const goTo = (index: number) => {
    const next = (index + count) % count;
    const el = trackRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce) {
      setActive(next);
      return;
    }
    const total = Math.max(0, el.offsetHeight - window.innerHeight);
    const top =
      el.getBoundingClientRect().top + window.scrollY + (total / count) * next + 12;
    const root = document.scrollingElement;
    if (root) root.style.scrollBehavior = "auto";
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="telegram-scroll" ref={trackRef} style={{ ["--n" as string]: count }}>
      <div className="telegram-scroll__pin">
        <section className="telegram screen" id="marketplace">
          <div className="telegram__frame">
            <div className="telegram__glow" aria-hidden />

            <div className="container telegram__inner">
              <div className="telegram__left">
                <span className="section-tag section-tag--light">
                  03 <i /> POWERED BY TELEGRAM
                </span>

                <h2 className="telegram__title">
                  {home.telegram.title[0]}
                  <br />
                  {home.telegram.title[1]}
                  <br />
                  {home.telegram.title[2]}
                </h2>

                <p className="telegram__subtitle">{home.telegram.subtitle}</p>

                <div className="telegram__features">
                  {features.map((f, i) => (
                    <article
                      key={f.title}
                      className={`telegram-card${i === active ? " is-active" : ""}`}
                      onClick={() => goTo(i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          goTo(i);
                        }
                      }}
                    >
                      <div className="telegram-card__icon">
                        <Image src={featureIcons[i]} alt="" width={36} height={36} />
                      </div>
                      <h3 className="telegram-card__title">{f.title}</h3>
                      <p className="telegram-card__text">{f.text}</p>
                    </article>
                  ))}
                </div>

                <Link href="#contacts" className="btn btn--light">
                  {home.telegram.cta}
                  <Image
                    src="/media/hero/button-down-black.svg"
                    alt=""
                    width={9}
                    height={9}
                    className="chev chev--bl"
                  />
                </Link>
              </div>

              <div className="telegram__phone">
                {phones.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={i === active ? home.telegram.phoneAlt : ""}
                    width={420}
                    height={840}
                    priority={i === 0}
                    className={`telegram__phone-img${i === active ? " is-active" : ""}`}
                  />
                ))}
              </div>

              <div className="telegram__steps">
                <div className="telegram__rail">
                  {slides.map((item, i) => (
                    <button
                      key={item.stepTitle}
                      type="button"
                      className={`telegram__step ${i === active ? "is-active" : ""}`}
                      onClick={() => goTo(i)}
                    >
                      <span className="telegram__dot" />
                      <span className="telegram__step-body">
                        <strong>
                          {String(i + 1).padStart(2, "0")} {item.stepTitle}
                        </strong>
                        <span>{item.stepText}</span>
                      </span>
                    </button>
                  ))}
                </div>

                <div className="telegram__controls">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    aria-label={home.telegram.prevAria}
                  >
                    <Image
                      src="/media/telegram/button-left.svg"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </button>
                  <span className="telegram__count">
                    {active + 1} / {count}
                  </span>
                  <span className="telegram__progress" aria-hidden>
                    <span style={{ ["--i" as string]: active }} />
                  </span>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    aria-label={home.telegram.nextAria}
                  >
                    <Image
                      src="/media/telegram/button-right.svg"
                      alt=""
                      width={44}
                      height={44}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PoweredByTelegram;
