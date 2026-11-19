import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import PrivacyView from "@/components/sections/PrivacyView";
import { isLocale, type Locale, locales } from "@/i18n/config";
import { getPrivacyDictionary } from "@/i18n/privacy";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  alternateLanguages,
  localeUrl,
  ogLocale,
} from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = getPrivacyDictionary(locale);
  const url = localeUrl(locale, "privacy");

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: url,
      languages: alternateLanguages("privacy"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: dict.metaTitle,
      description: dict.metaDescription,
      locale: ogLocale[locale],
      images: [
        {
          url: absoluteUrl("/og.svg"),
          width: 1200,
          height: 630,
          alt: dict.metaTitle,
        },
      ],
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getPrivacyDictionary(locale);

  return (
    <>
      <Navbar />
      <main id="main" className="privacy-page">
        <PrivacyView dict={dict} />
      </main>
    </>
  );
}