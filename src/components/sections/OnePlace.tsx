"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { useI18n } from "@/i18n/LanguageContext";

/** Resting orbit layout (% of orbit box) — must match globals.css */
const ORBIT_LAYOUT: Record<string, { left: number; top: number; w: number; h: number }> =
  {
    c1: { left: 5.5, top: 4.5, w: 16.2, h: 20.4 },
    c2: { left: 25.5, top: 2.8, w: 16.2, h: 20.4 },
    c3: { left: 48.5, top: 4, w: 16.2, h: 20.4 },
    c4: { left: 72, top: 3.6, w: 16.2, h: 20.4 },
    c5: { left: 1.2, top: 26, w: 18.6, h: 23.4 },
    c6: { left: 76.5, top: 29, w: 16.2, h: 20.4 },
    c7: { left: 2.4, top: 57, w: 16.2, h: 20.4 },
    c8: { left: 77, top: 57.5, w: 16.2, h: 20.4 },
    c9: { left: 12, top: 72, w: 16.2, h: 20.4 },
    c10: { left: 31.5, top: 70.5, w: 16.2, h: 20.4 },
    c11: { left: 51.5, top: 69.5, w: 16.2, h: 20.4 },
    c12: { left: 73, top: 73, w: 16.2, h: 20.4 },
  };

const STAGE_CENTER_X = 0.5;
const STAGE_CENTER_Y = 0.46;

const categoryMeta: Record<
  string,
  { image: string; dark?: boolean; big?: boolean }
> = {
  c1: { image: "/media/one-place/01-car.png" },
  c2: { image: "/media/one-place/02-furniture.png" },
  c3: { image: "/media/one-place/03-electronics.png", dark: true },
  c4: { image: "/media/one-place/04-real-estate.png" },
  c5: { image: "/media/one-place/12-fashion.png", dark: true, big: true },
  c6: { image: "/media/one-place/05-sport.png" },
  c7: { image: "/media/one-place/11-health.png" },
  c8: { image: "/media/one-place/06-business.png" },
  c9: { image: "/media/one-place/10-child-products.png" },
  c10: { image: "/media/one-place/09-house.png" },
  c11: { image: "/media/one-place/08-services.png", dark: true },
  c12: { image: "/media/one-place/07-animals.png" },
};

function PlaceCard({
  cat,
  meta,
  index,
}: {
  cat: { id: string; title: string; count: string };
  meta: { image: string; dark?: boolean; big?: boolean };
  index?: number;
}) {
  return (
    <article
      className={[
        "card",
        `card--${cat.id}`,
        meta.dark ? "card--dark" : "card--light",
        meta.big ? "card--big" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        typeof index === "number"
          ? ({ ["--i" as string]: index } as CSSProperties)
          : undefined
      }
      data-orbit-card={typeof index === "number" ? "" : undefined}
    >
      <div className="card__photo">
        <Image
          src={meta.image}
          alt={cat.title}
          fill
          sizes="240px"
          className="card__img"
        />
      </div>
      <h3 className="card__title">{cat.title}</h3>
      <p className="card__count">{cat.count}</p>
    </article>
  );
}

export function OnePlace() {
  const { home, marketplace } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const cards = home.onePlace.categories.map((cat) => ({
    cat,
    meta: categoryMeta[cat.id],
  }));
  const rowA = cards.filter((_, i) => i % 2 === 0);
  const rowB = cards.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    const section = sectionRef.current;
    const orbit = orbitRef.current;
    if (!section || !orbit) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      section.classList.add("is-static");
      return;
    }

    const specs = [...orbit.querySelectorAll<HTMLElement>("[data-orbit-card]")]
      .map((card) => {
        const id = [...card.classList]
          .find((c) => /^card--c\d+$/.test(c))
          ?.replace("card--", "");
        const layout = id ? ORBIT_LAYOUT[id] : undefined;
        const rot =
          parseFloat(getComputedStyle(card).getPropertyValue("--card-rot")) || 0;
        return layout ? { card, layout, rot } : null;
      })
      .filter((s): s is NonNullable<typeof s> => Boolean(s));

    const FLIGHT = 1.15;
    const GAP = 0.32;
    const easeOut = (t: number) => 1 - (1 - t) ** 3;
    const easeIn = (t: number) => t ** 3;

    let raf = 0;
    let last = 0;
    let clock = 0;
    let rate = 1;
    let rateTarget = 1;
    const idleRate = 1;
    const maxRate = 2.05;
    let running = false;

    const hideCard = (card: HTMLElement) => {
      card.style.opacity = "0";
      card.style.visibility = "hidden";
      card.style.filter = "none";
      card.style.transform = "";
      card.style.zIndex = "";
    };

    const tick = (now: number) => {
      if (!running) return;
      if (!last) last = now;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      rate += (rateTarget - rate) * 0.12;
      clock += dt * rate;

      const box = orbit.getBoundingClientRect();
      const w = box.width;
      const h = box.height;
      if (w < 8 || h < 8) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const cx = w * STAGE_CENTER_X;
      const cy = h * STAGE_CENTER_Y;
      const viewR = window.innerWidth;
      const viewB = window.innerHeight;
      const n = specs.length;
      const cycle = Math.max(n * GAP, FLIGHT + GAP);

      specs.forEach(({ card, layout, rot }, index) => {
        const local = (((clock - index * GAP) % cycle) + cycle) % cycle;
        const u = local / FLIGHT;
        if (u > 1) {
          hideCard(card);
          return;
        }

        const { left, top, w: cw, h: ch } = layout;
        const cardW = (cw / 100) * w;
        const cardH = (ch / 100) * h;
        const cardCx = ((left + cw / 2) / 100) * w;
        const cardCy = ((top + ch / 2) / 100) * h;
        const ox = cx - cardCx;
        const oy = cy - cardCy;

        let vx = cardCx - cx;
        let vy = cardCy - cy;
        const len = Math.hypot(vx, vy) || 1;
        vx /= len;
        vy /= len;

        const seatVx = box.left + cardCx;
        const seatVy = box.top + cardCy;
        const pad = 48;
        let travel = 2400;
        if (vx > 0.02) travel = Math.min(travel, (viewR + cardW / 2 + pad - seatVx) / vx);
        if (vx < -0.02) travel = Math.min(travel, (0 - cardW / 2 - pad - seatVx) / vx);
        if (vy > 0.02) travel = Math.min(travel, (viewB + cardH / 2 + pad - seatVy) / vy);
        if (vy < -0.02) travel = Math.min(travel, (0 - cardH / 2 - pad - seatVy) / vy);
        travel = Math.max(travel, Math.hypot(ox, oy) * 0.35);

        let x = 0;
        let y = 0;
        let opacity = 1;
        let blur = 0;
        let scale = 1;
        let spin = rot;

        if (u < 0.46) {
          const p = easeOut(u / 0.46);
          x = ox * (1 - p);
          y = oy * (1 - p);
          opacity = Math.min(1, p * 1.35);
          blur = (1 - p) * 8;
          scale = 0.62 + 0.38 * p;
          spin = rot * p;
        } else if (u < 0.62) {
          x = 0;
          y = 0;
          opacity = 1;
          blur = 0;
          scale = 1;
          spin = rot;
        } else {
          const p = easeIn((u - 0.62) / 0.38);
          x = vx * travel * p;
          y = vy * travel * p;
          opacity = p < 0.78 ? 1 : 1 - (p - 0.78) / 0.22;
          blur = p * 4;
          scale = 1 + p * 0.06;
          spin = rot;
        }

        card.style.visibility = "visible";
        card.style.zIndex = String(30 - Math.round(u * 20));
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "none";
        card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${spin.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      });

      raf = requestAnimationFrame(tick);
    };

    let lastY = window.scrollY;
    let lastScrollT = performance.now();
    let settle = 0;

    const onScroll = () => {
      if (!running) return;
      const now = performance.now();
      const y = window.scrollY;
      const dt = Math.max(16, now - lastScrollT);
      const vy = Math.abs(y - lastY) / dt;
      lastY = y;
      lastScrollT = now;
      rateTarget = Math.min(maxRate, idleRate + vy * 8);
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        rateTarget = idleRate;
      }, 180);
    };

    let inView = false;

    const setActive = (active: boolean) => {
      if (active === inView) return;
      inView = active;
      if (active) {
        specs.forEach(({ card }) => hideCard(card));
        clock = 0;
        last = 0;
        rate = idleRate;
        rateTarget = idleRate;
        running = true;
        section.classList.add("is-bursting");
        window.addEventListener("scroll", onScroll, { passive: true });
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        section.classList.remove("is-bursting");
        window.removeEventListener("scroll", onScroll);
        window.clearTimeout(settle);
        specs.forEach(({ card }) => hideCard(card));
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActive(false);
          return;
        }
        if (entry.intersectionRatio >= 0.12) setActive(true);
      },
      { threshold: [0, 0.08, 0.12, 0.22, 0.4] }
    );
    io.observe(section);

    return () => {
      running = false;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="one-place screen"
      id="one-place"
      ref={sectionRef}
      style={{ ["--one-place-rate" as string]: 1.35 }}
    >
      <div
        className="one-place__bg"
        style={{
          backgroundImage: "url('/media/one-place/background-one-place.jpg')",
        }}
      />

      <div className="one-place__stage">
        <span className="section-tag section-tag--dark one-place__tag">
          02 <i /> ONE PLACE
        </span>

        <div className="one-place__orbit" aria-hidden ref={orbitRef}>
          {cards.map(({ cat, meta }, index) => (
            <PlaceCard key={cat.id} cat={cat} meta={meta} index={index} />
          ))}
        </div>

        <div className="one-place__marquees">
          {[rowA, rowB].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`one-place__marquee${
                rowIndex === 1 ? " one-place__marquee--back" : ""
              }`}
            >
              <div className="one-place__track">
                {[0, 1].map((copy) =>
                  row.map(({ cat, meta }) => (
                    <PlaceCard
                      key={`${cat.id}-${copy}`}
                      cat={cat}
                      meta={meta}
                    />
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="one-place__center">
          <h2 className="one-place__title">
            {home.onePlace.titleLine1}
            <br />
            {home.onePlace.titleLine2Before}
            <span>{home.onePlace.titleAccent}</span>
          </h2>
          <p className="one-place__subtitle">{home.onePlace.subtitle}</p>
          <a
            href={marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent"
          >
            {home.onePlace.cta}
            <Image
              src="/media/hero/button-down-black.svg"
              alt=""
              width={9}
              height={9}
              className="chev chev--tr"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default OnePlace;
