import { LanguageProvider } from "@/i18n/LanguageContext";
import { isLocale, type Locale, defaultLocale } from "@/i18n/config";
import { buildLocaleMetadata } from "@/lib/seo";
import { htmlLang } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "ua" },
    { locale: "ru" },
    { locale: "en" },
    { locale: "de" },
  ];
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  return buildLocaleMetadata(params.locale);
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const lang = htmlLang[locale] ?? htmlLang[defaultLocale];

  return (
    <LanguageProvider locale={locale}>
      <div lang={lang}>
        <JsonLd locale={locale} />
        {children}
      </div>
    </LanguageProvider>
  );
}
