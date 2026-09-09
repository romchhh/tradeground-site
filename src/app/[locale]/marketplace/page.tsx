import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import MarketplaceView from "@/components/sections/MarketplaceView";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  alternateLanguages,
  localeUrl,
  ogLocale,
} from "@/lib/site";
import { locales } from "@/i18n/config";

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
  const dict = getDictionary(locale).marketplace;
  const url = localeUrl(locale, "marketplace");

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: url,
      languages: alternateLanguages("marketplace"),
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

export default async function MarketplacePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <MarketplaceView dict={dict.marketplace} />
      </main>
      <Footer cornerBg="dark" />
    </>
  );
}
