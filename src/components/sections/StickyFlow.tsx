"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";
import Magnetic from "@/components/fx/Magnetic";

function BrandArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 4l8 8M12 5v7H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StickyFlow() {
  const { t, marketplace } = useI18n();
  const flow = t.flow;
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(
      flow.steps.length - 1,
      Math.max(0, Math.floor(v * flow.steps.length))
    );
    setActive(i);
  });

  return (
    <>
      {/* Mobile — stacked */}
      <section className="relative overflow-hidden bg-bg lg:hidden">
        <div className="site-container py-16">
          <h2 className="section-title max-w-[14ch]">
            {flow.title}{" "}
            <span className="text-accent">{flow.titleAccent}</span>
          </h2>
          <div className="relative mx-auto my-10 w-[58%] max-w-[220px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/marketplace-hero.png"
              alt=""
              className="h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(192,219,154,0.18)]"
            />
          </div>
          <ol className="space-y-5">
            {flow.steps.map((step) => (
              <li
                key={step.num}
                className="rounded-[24px] border border-white/8 bg-surface p-5"
              >
                <p className="font-display text-[12px] font-bold tracking-[0.16em] text-accent">
                  {step.num}
                </p>
                <h3 className="mt-2 font-display text-[20px] font-bold uppercase leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-text-light">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
          <a
            href={marketplace}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-6 pr-2 font-body text-[13px] font-semibold text-bg"
          >
            {t.hero.cta}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-accent">
              <BrandArrow />
            </span>
          </a>
        </div>
      </section>

      {/* Desktop — Revolut-style sticky phone */}
      <section
        ref={ref}
        className="relative hidden bg-bg lg:block"
        style={{ height: `${flow.steps.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 45% 55% at 22% 50%, rgba(192,219,154,0.14), transparent 60%)",
            }}
          />
          <div className="site-container relative z-10 grid w-full grid-cols-[0.9fr_1.1fr] items-center gap-10 xl:gap-20">
            <div className="relative flex justify-center">
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/marketplace-hero.png"
                alt="TradeGround"
                className="relative z-10 h-[min(78vh,720px)] w-auto object-contain transition-transform duration-700"
                style={{
                  transform: `translateY(${active * -12}px) rotate(${active * -2}deg)`,
                }}
              />
            </div>

            <div>
              <h2 className="section-title max-w-[12ch]">
                {flow.title}{" "}
                <span className="text-accent">{flow.titleAccent}</span>
              </h2>

              <div className="relative mt-10 min-h-[220px]">
                {flow.steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`absolute inset-0 transition-all duration-500 ${
                      i === active
                        ? "translate-y-0 opacity-100"
                        : i < active
                          ? "-translate-y-6 opacity-0"
                          : "translate-y-6 opacity-0"
                    }`}
                  >
                    <p className="font-display text-[14px] font-bold tracking-[0.18em] text-accent">
                      {step.num}
                    </p>
                    <h3 className="mt-3 font-display text-[32px] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] xl:text-[40px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md font-body text-[17px] leading-relaxed text-text-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-2">
                {flow.steps.map((step, i) => (
                  <span
                    key={step.num}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "w-10 bg-accent" : "w-4 bg-white/15"
                    }`}
                  />
                ))}
              </div>

              <Magnetic className="mt-10 inline-block">
                <a
                  href={marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pl-7 pr-2.5 font-body text-[14px] font-semibold text-bg transition-colors hover:bg-accent-light"
                >
                  {t.hero.cta}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-accent transition-transform group-hover:rotate-[-15deg]">
                    <BrandArrow />
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
