import { locales, type Locale, defaultLocale } from "@/i18n/config";

/** Production site origin — override with NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://tradeground.app";

export const SITE_NAME = "TradeGround";
export const SITE_HANDLE = "@TradeGroundBot";
export const TELEGRAM_BOT = "https://t.me/TradeGroundBot";
export const SUPPORT_EMAIL = "hello@tradeground.app";

/** BCP 47 language tags for HTML / hreflang */
export const htmlLang: Record<Locale, string> = {
  ua: "uk",
  ru: "ru",
  en: "en",
  de: "de",
};

export const ogLocale: Record<Locale, string> = {
  ua: "uk_UA",
  ru: "ru_RU",
  en: "en_US",
  de: "de_DE",
};

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localeUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return absoluteUrl(`/${locale}${clean ? `/${clean}` : ""}`);
}

export function alternateLanguages(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[htmlLang[locale]] = localeUrl(locale, path);
  }
  languages["x-default"] = localeUrl(defaultLocale, path);
  return languages;
}

export function resolveLocale(value: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
