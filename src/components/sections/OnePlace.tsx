"use client";

import Image from "next/image";
import { useRef } from "react";
import { useI18n } from "@/i18n/LanguageContext";

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

/** Final offsets from stage center (cqi/cqh) + rotation — kept tight so cards stay in frame */
const flyLayout: Record<
  string,
  { x: number; y: number; rot: number; z?: number }
> = {
  c1: { x: -34, y: -28, rot: -6, z: 2 },
  c2: { x: -12, y: -30, rot: 4, z: 2 },
  c3: { x: 12, y: -29, rot: -3, z: 2 },
  c4: { x: 34, y: -27, rot: 5, z: 2 },
  c5: { x: -38, y: -4, rot: -7, z: 4 },
  c6: { x: 38, y: -2, rot: 6, z: 2 },
  c7: { x: -36, y: 18, rot: 4, z: 2 },
  c8: { x: 36, y: 20, rot: -4, z: 2 },
  c9: { x: -28, y: 30, rot: -5, z: 2 },
  c10: { x: -8, y: 32, rot: 3, z: 2 },
  c11: { x: 12, y: 31, rot: -4, z: 3 },
  c12: { x: 30, y: 29, rot: 5, z: 2 },
};

function PlaceCard({
  cat,
  meta,
}: {
  cat: { id: string; title: string; count: string };
  meta: { image: string; dark?: boolean; big?: boolean };
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
    >
      <div className="card__photo">
        <Image src={meta.image} alt={cat.title} fill sizes="240px" className="card__img" />
      </div>
      <h3 className="card__title">{cat.title}</h3>
      <p className="card__count">{cat.count}</p>
    </article>
  );
}

export function OnePlace() {
  const { home, marketplace } = useI18n();
  const fieldRef = useRef<HTMLDivElement>(null);

  const cards = home.onePlace.categories.map((cat) => ({
    cat,
    meta: categoryMeta[cat.id],
    layout: flyLayout[cat.id],
  }));

  return (
    <section className="one-place screen" id="one-place">
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

        <div className="one-place__field" ref={fieldRef} aria-hidden>
          {cards.map(({ cat, meta, layout }, i) => (
            <div
              key={cat.id}
              className="one-place__fly"
              data-fly-slot
              style={{
                ["--i" as string]: i,
                ["--tx" as string]: `${layout.x}cqi`,
                ["--ty" as string]: `${layout.y}cqh`,
                ["--rot" as string]: `${layout.rot}deg`,
                ["--z" as string]: layout.z ?? 2,
                zIndex: layout.z ?? 2,
              }}
            >
              <PlaceCard cat={cat} meta={meta} />
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
