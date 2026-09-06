export const locales = ["ua", "ru", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ua";

export const localeLabels: Record<Locale, string> = {
  ua: "UA",
  ru: "RU",
  en: "EN",
  de: "DE",
};

/** Site path for each language */
export function localePath(locale: Locale, hash = ""): string {
  return `/${locale}${hash}`;
}

/** Marketplace bot link per language */
export function marketplaceUrl(locale: Locale): string {
  return `https://t.me/TradeGroundBot?start=lang_${locale}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
