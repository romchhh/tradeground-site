"use client";

import Image from "next/image";
import Link from "next/link";
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
  const cards = home.onePlace.categories.map((cat) => ({
    cat,
    meta: categoryMeta[cat.id],
  }));
  const rowA = cards.filter((_, i) => i % 2 === 0);
  const rowB = cards.filter((_, i) => i % 2 === 1);

  return (
    <section className="one-place screen" id="one-place">
      <div
        className="one-place__bg"
        style={{ backgroundImage: "url('/media/one-place/background-one-place.jpg')" }}
      />

      <div className="one-place__stage">
        <span className="section-tag section-tag--dark one-place__tag">
          02 <i /> ONE PLACE
        </span>

        <div className="one-place__orbit">
          {cards.map(({ cat, meta }, i) => (
            <div
              key={cat.id}
              className="one-place__slot"
              style={{ ["--i" as string]: i }}
            >
              <PlaceCard cat={cat} meta={meta} />
            </div>
          ))}
        </div>

        <div className="one-place__marquees">
          {[rowA, rowB].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`one-place__marquee${rowIndex === 1 ? " one-place__marquee--back" : ""}`}
            >
              <div className="one-place__track">
                {[0, 1].map((copy) =>
                  row.map(({ cat, meta }) => (
                    <PlaceCard key={`${cat.id}-${copy}`} cat={cat} meta={meta} />
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
