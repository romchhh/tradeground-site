"use client";

import { FormEvent, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Footer } from "@/components/sections/Footer";

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M9 3.2L3.4 8.8M3.4 4.4V8.8H7.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.2 4.4L9 9.2l6.8-4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M16.2 2.6L1.8 8.1c-.9.35-.88 1.16-.16 1.46l3.7 1.16 1.42 4.36c.18.54.08.76.62.76.36 0 .52-.16.72-.36l2.08-2.02 3.86 2.86c.7.38 1.22.18 1.4-.66l2.54-11.96c.26-1.04-.4-1.52-1.08-1.22z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13.1" cy="4.9" r="0.8" fill="currentColor" />
    </svg>
  );
}

type Topic = Dictionary["contacts"]["topics"][number];
type FieldKey = Topic["fields"][number];

const tones = ["general", "business", "ads", "support"] as const;

const emptyForm = {
  name: "",
  company: "",
  city: "",
  contact: "",
  budget: "",
  platform: "",
  message: "",
};

export default function ContactsView({ dict }: { dict: Dictionary["contacts"] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [sentTopic, setSentTopic] = useState<string | null>(null);
  const [errorTopic, setErrorTopic] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const labelMap = useMemo(
    () =>
      ({
        name: { label: dict.formNameLabel, placeholder: dict.formNamePlaceholder },
        company: {
          label: dict.formCompanyLabel,
          placeholder: dict.formCompanyPlaceholder,
        },
        city: { label: dict.formCityLabel, placeholder: dict.formCityPlaceholder },
        contact: {
          label: dict.formContactLabel,
          placeholder: dict.formContactPlaceholder,
        },
        budget: {
          label: dict.formBudgetLabel,
          placeholder: dict.formBudgetPlaceholder,
        },
        platform: {
          label: dict.formPlatformLabel,
          placeholder: dict.formPlatformOptions[0],
        },
        message: {
          label: dict.formMessageLabel,
          placeholder: dict.formMessagePlaceholder,
        },
      }) as Record<FieldKey, { label: string; placeholder: string }>,
    [dict]
  );

  const toggle = (id: string) => {
    setSentTopic(null);
    setErrorTopic(null);
    setForm(emptyForm);
    setOpenId((prev) => (prev === id ? null : id));
  };

  const setField = (key: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: FormEvent, topic: Topic) => {
    e.preventDefault();
    if (sending) return;

    for (const key of topic.fields) {
      if (!form[key].trim()) return;
    }

    setSending(true);
    setErrorTopic(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          contact: form.contact.trim(),
          message: form.message.trim(),
          company: form.company.trim() || undefined,
          city: form.city.trim() || undefined,
          budget: form.budget.trim() || undefined,
          platform: form.platform.trim() || undefined,
          topicId: topic.id,
          topicTitle: topic.title,
        }),
      });

      if (!res.ok) {
        setErrorTopic(topic.id);
        return;
      }

      setSentTopic(topic.id);
    } catch {
      setErrorTopic(topic.id);
    } finally {
      setSending(false);
    }
  };

  const renderField = (key: FieldKey) => {
    const meta = labelMap[key];
    if (key === "message") {
      return (
        <label key={key}>
          <span>{meta.label}</span>
          <textarea
            required
            name={key}
            rows={3}
            value={form.message}
            placeholder={meta.placeholder}
            onChange={(e) => setField("message", e.target.value)}
          />
        </label>
      );
    }
    if (key === "platform") {
      return (
        <label key={key}>
          <span>{meta.label}</span>
          <select
            required
            name={key}
            value={form.platform}
            onChange={(e) => setField("platform", e.target.value)}
          >
            <option value="" disabled>
              {meta.placeholder}
            </option>
            {dict.formPlatformOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      );
    }
    return (
      <label key={key}>
        <span>{meta.label}</span>
        <input
          required
          name={key}
          autoComplete={key === "name" ? "name" : key === "contact" ? "email" : "off"}
          value={form[key]}
          placeholder={meta.placeholder}
          onChange={(e) => setField(key, e.target.value)}
        />
      </label>
    );
  };

  return (
    <>
      <section className="talk">
        <div className="container talk__top">
          <h1 className="talk__title">{dict.title}</h1>
          <p className="talk__sub">
            {dict.subtitle}
            <br />
            {dict.lead}
          </p>

          <div className="talk__rows">
            {dict.topics.map((topic, index) => {
              const isOpen = openId === topic.id;
              const isSent = sentTopic === topic.id;
              const tone = tones[index] ?? "general";

              return (
                <article
                  key={topic.id}
                  className={`talk-row talk-row--${tone}${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="talk-row__head"
                    aria-expanded={isOpen}
                    onClick={() => toggle(topic.id)}
                  >
                    <span className="talk-row__copy">
                      <h2 className="talk-row__title">{topic.title}</h2>
                      <p className="talk-row__desc">{topic.desc}</p>
                    </span>
                    <span className="talk-row__cta">
                      {topic.cta}
                      <Arrow />
                    </span>
                  </button>

                  <div className={`talk-row__panel${isOpen ? " is-open" : ""}`}>
                    <div className="talk-row__panel-inner">
                      {isOpen && isSent ? (
                        <div className="talk-sent">
                          <strong>{dict.successTitle}</strong>
                          <p>{dict.successDesc}</p>
                        </div>
                      ) : isOpen && errorTopic === topic.id ? (
                        <div className="talk-sent talk-sent--error">
                          <strong>{dict.errorTitle}</strong>
                          <p>{dict.errorDesc}</p>
                        </div>
                      ) : isOpen ? (
                        <form className="talk-form" onSubmit={(e) => onSubmit(e, topic)}>
                          {topic.fields.map((field) => renderField(field))}
                          <button
                            type="submit"
                            className="btn btn--light talk-form__submit"
                            disabled={sending}
                          >
                            {dict.submit}
                            <Arrow />
                          </button>
                        </form>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="talk__connect">
          <div className="container">
            <h2>{dict.otherTitle}</h2>
            <div className="talk__links">
              <a className="talk-link talk-link--mail" href={`mailto:${dict.emailValue}`}>
                <MailIcon />
                {dict.emailValue}
              </a>
              <a
                className="talk-link talk-link--tg"
                href={dict.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon />
                {dict.telegramValue}
              </a>
              <a
                className="talk-link talk-link--ig"
                href={dict.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                {dict.instagramValue}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
