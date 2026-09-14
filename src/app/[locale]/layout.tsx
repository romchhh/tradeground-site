import { LanguageProvider } from "@/i18n/LanguageContext";
import { isLocale, type Locale, defaultLocale } from "@/i18n/config";
import { buildLocaleMetadata } from "@/lib/seo";
import { htmlLang } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import SiteFX from "@/components/fx/SiteFX";
import { CoverEngine } from "@/components/fx/CoverPin";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildLocaleMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const lang = htmlLang[locale] ?? htmlLang[defaultLocale];

  return (
    <LanguageProvider locale={locale}>
      <div lang={lang}>
        <JsonLd locale={locale} />
        <SiteFX />
        <CoverEngine />
        {children}
      </div>
    </LanguageProvider>
  );
}
