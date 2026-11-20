import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import BusinessView from "@/components/sections/BusinessView";
import { isLocale, type Locale, locales } from "@/i18n/config";
import { getBusinessDictionary } from "@/i18n/business";
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
  const dict = getBusinessDictionary(locale);
  const url = localeUrl(locale, "business");

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: url,
      languages: alternateLanguages("business"),
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

export default async function BusinessPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getBusinessDictionary(locale);

  return (
    <>
      <Navbar />
      <main id="main" className="about-page business-page">
        <BusinessView dict={dict} />
      </main>
    </>
  );
}
