import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ContactsView from "@/components/sections/ContactsView";
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
  const dict = getDictionary(locale).contacts;
  const url = localeUrl(locale, "contacts");

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: url,
      languages: alternateLanguages("contacts"),
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

export default async function ContactsPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <ContactsView dict={dict.contacts} />
      </main>
      <Footer cornerBg="dark" />
    </>
  );
}
