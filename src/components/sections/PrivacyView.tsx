"use client";

import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import type { PrivacyDictionary } from "@/i18n/privacy";
import { useI18n } from "@/i18n/LanguageContext";

export function PrivacyView({ dict }: { dict: PrivacyDictionary }) {
  const { locale, home } = useI18n();

  return (
    <div className="privacy">
      <section className="privacy-hero">
        <div className="container privacy-hero__inner">
          <h1 className="privacy-hero__title">{dict.title}</h1>
          <p className="privacy-hero__updated">{dict.updated}</p>
        </div>
      </section>

      <section className="privacy-body">
        <div className="container privacy-body__inner">
          {dict.sections.map((section) => (
            <article key={section.heading} className="privacy-block">
              <h2 className="privacy-block__title">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="privacy-block__text">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}

          <p className="privacy-body__back">
            <Link href={`/${locale}/contacts`}>→ {home.nav.contacts}</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyView;