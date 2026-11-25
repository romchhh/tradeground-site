"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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

const AUTO_MS = 4200;
const RESUME_MS = 6500;

export function PoweredByTelegram() {
  const { home } = useI18n();
  const slides = home.telegram.slides;
  const features = home.telegram.features;
  const count = slides.length;

  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const resumeAtRef = useRef(0);
  const lastTickRef = useRef(0);
  const elapsedRef = useRef(0);

  const goTo = useCallback(
    (index: number, manual = false) => {
      const next = ((index % count) + count) % count;
      setActive(next);
      elapsedRef.current = 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${(next / count) * 100}%`;
      }
      if (manual) {
        resumeAtRef.current = performance.now() + RESUME_MS;
      }
    },
    [count]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0.2, 0.35, 0.5] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || !inView) return;

    let raf = 0;
    lastTickRef.current = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTickRef.current;
      lastTickRef.current = now;

      const holding = now < resumeAtRef.current;
      if (!holding) {
        elapsedRef.current += dt;
        const p = Math.min(1, elapsedRef.current / AUTO_MS);
        if (progressRef.current) {
          progressRef.current.style.width = `${((active + p) / count) * 100}%`;
        }
        if (p >= 1) {
          elapsedRef.current = 0;
          setActive((prev) => (prev + 1) % count);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, count, inView]);

  return (
    <section
      ref={sectionRef}
      className="telegram screen"
      id="marketplace"
    >
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
                <article key={f.title} className="telegram-card">
                  <div className="telegram-card__icon">
                    <Image src={featureIcons[i]} alt="" width={36} height={36} />
                  </div>
                  <h3 className="telegram-card__title">{f.title}</h3>
                  <p className="telegram-card__text">{f.text}</p>
                </article>
              ))}
            </div>

          </div>

          <div className="telegram__phone" aria-live="polite">
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
            <div className="telegram__rail" role="tablist" aria-label="Telegram steps">
              {slides.map((item, i) => (
                <button
                  key={item.stepTitle}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`telegram__step ${i === active ? "is-active" : ""}`}
                  onClick={() => goTo(i, true)}
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
                onClick={() => goTo(active - 1, true)}
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
                <span ref={progressRef} className="telegram__progress-fill" />
              </span>
              <button
                type="button"
                onClick={() => goTo(active + 1, true)}
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
  );
}

export default PoweredByTelegram;
