import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  alternateLanguages,
  htmlLang,
  localeUrl,
  ogLocale,
} from "@/lib/site";

export function buildLocaleMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const url = localeUrl(locale);
  const languages = alternateLanguages();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.title,
      template: `%s · ${SITE_NAME}`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "marketplace",
    classification: "Business",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      images: [
        {
          url: absoluteUrl("/og.svg"),
          width: 1200,
          height: 630,
          alt: t.meta.title,
          type: "image/svg+xml",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [absoluteUrl("/og.svg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/icon.svg" }],
      shortcut: ["/icon.svg"],
    },
    manifest: "/manifest.webmanifest",
    other: {
      "theme-color": "#000100",
      "color-scheme": "dark",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": SITE_NAME,
    },
  };
}

export function jsonLdOrganization(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/media/logo.svg"),
    description: t.meta.description,
    sameAs: [
      "https://t.me/TradeGroundBot",
      "https://instagram.com/tradeground",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://t.me/TradeGroundBot",
      availableLanguage: locales.map((l) => htmlLang[l]),
    },
  };
}

export function jsonLdWebSite(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: localeUrl(locale),
    description: t.meta.description,
    inLanguage: htmlLang[locale],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://t.me/TradeGroundBot",
      "query-input": "required name=search_term_string",
    },
  };
}

export function jsonLdSoftwareApp(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Telegram",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description: t.meta.description,
    url: localeUrl(locale),
    image: absoluteUrl("/og.svg"),
  };
}
