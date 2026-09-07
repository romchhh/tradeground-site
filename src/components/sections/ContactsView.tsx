"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

function BrandArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
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

type Topic = Dictionary["contacts"]["topics"][number];

export default function ContactsView({ dict }: { dict: Dictionary["contacts"] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [sentTopic, setSentTopic] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const toggle = (id: string) => {
    setSentTopic(null);
    setName("");
    setContact("");
    setMessage("");
    setOpenId((prev) => (prev === id ? null : id));
  };

  const onSubmit = (e: FormEvent, topic: Topic) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    setSentTopic(topic.id);
  };

  return (
    <section className="relative min-h-[100svh] bg-bg text-text">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 12% 8%, rgba(192,219,154,0.12), transparent 55%)",
        }}
      />

      <div className="site-container relative z-10 pb-20 pt-[calc(6.5rem+env(safe-area-inset-top))] md:pb-28 md:pt-36">
        <header className="mb-12 max-w-3xl md:mb-16">
          <h1 className="section-title">{dict.title}</h1>
          <p className="section-subtitle mt-5">{dict.subtitle}</p>
          <p className="mt-2 font-body text-[16px] leading-relaxed text-muted md:text-[18px]">
            {dict.lead}
          </p>
        </header>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[28px] border border-white/8 bg-surface md:rounded-[32px]">
            {dict.topics.map((topic, index) => {
              const isOpen = openId === topic.id;
              const isSent = sentTopic === topic.id;

              return (
                <div
                  key={topic.id}
                  className={index > 0 ? "border-t border-white/8" : ""}
                >
                  <button
                    type="button"
                    onClick={() => toggle(topic.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 px-5 py-6 text-left transition-colors hover:bg-white/[0.03] md:px-8 md:py-7"
                  >
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-[15px] font-bold uppercase tracking-[0.06em] text-text md:text-[16px]">
                        {topic.title}
                      </h2>
                      <p className="mt-2 max-w-2xl font-body text-[14px] leading-relaxed text-muted md:text-[15px]">
                        {topic.desc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 font-body text-[13px] font-semibold text-accent">
                        {topic.cta}
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-bg">
                          <BrandArrow
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-90" : ""
                            }`}
                          />
                        </span>
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/6 bg-bg/40 px-5 pb-7 pt-2 md:px-8 md:pb-8">
                        {isSent ? (
                          <div className="rounded-[22px] bg-accent/15 px-5 py-8 text-center md:px-8">
                            <p className="font-display text-[28px] font-extrabold uppercase tracking-[-0.02em] text-text md:text-[36px]">
                              {dict.successTitle}
                            </p>
                            <p className="mt-3 font-body text-[15px] text-muted">
                              {dict.successDesc}
                            </p>
                          </div>
                        ) : (
                          <form
                            onSubmit={(e) => onSubmit(e, topic)}
                            className="space-y-5 md:space-y-6"
                          >
                            <label className="block">
                              <span className="mb-2 block font-body text-[13px] font-medium text-muted">
                                {dict.formNameLabel}
                              </span>
                              <input
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={dict.formNamePlaceholder}
                                className="w-full border-0 border-b border-white/15 bg-transparent py-3 font-body text-[16px] text-text outline-none transition-colors placeholder:text-white/25 focus:border-accent"
                              />
                            </label>

                            <label className="block">
                              <span className="mb-2 block font-body text-[13px] font-medium text-muted">
                                {dict.formContactLabel}
                              </span>
                              <input
                                required
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder={dict.formContactPlaceholder}
                                className="w-full border-0 border-b border-white/15 bg-transparent py-3 font-body text-[16px] text-text outline-none transition-colors placeholder:text-white/25 focus:border-accent"
                              />
                            </label>

                            <label className="block">
                              <span className="mb-2 block font-body text-[13px] font-medium text-muted">
                                {dict.formMessageLabel}
                              </span>
                              <textarea
                                required
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={dict.formMessagePlaceholder}
                                className="w-full resize-y border-0 border-b border-white/15 bg-transparent py-3 font-body text-[16px] text-text outline-none transition-colors placeholder:text-white/25 focus:border-accent"
                              />
                            </label>

                            <button
                              type="submit"
                              className="group inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-6 pr-2 font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black transition-transform hover:scale-[1.02]"
                            >
                              {dict.submit}
                              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-accent transition-transform group-hover:rotate-[-15deg]">
                                <BrandArrow />
                              </span>
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 md:mt-20">
            <p className="mb-6 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              {dict.otherTitle}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <a
                href={`mailto:${dict.emailValue}`}
                className="rounded-[22px] border border-white/8 bg-surface px-5 py-5 transition-colors hover:border-accent/30 hover:bg-white/[0.03]"
              >
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {dict.emailLabel}
                </p>
                <p className="mt-2 break-all font-display text-[15px] font-bold text-text">
                  {dict.emailValue}
                </p>
              </a>
              <a
                href={dict.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[22px] border border-white/8 bg-surface px-5 py-5 transition-colors hover:border-accent/30 hover:bg-white/[0.03]"
              >
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {dict.telegramLabel}
                </p>
                <p className="mt-2 font-display text-[15px] font-bold text-text">
                  {dict.telegramValue}
                </p>
              </a>
              <a
                href={dict.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[22px] border border-white/8 bg-surface px-5 py-5 transition-colors hover:border-accent/30 hover:bg-white/[0.03]"
              >
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {dict.instagramLabel}
                </p>
                <p className="mt-2 font-display text-[15px] font-bold text-text">
                  {dict.instagramValue}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
