import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "ua" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((l) => [l === "ua" ? "uk" : l, localeUrl(l)]),
        ["x-default", localeUrl("ua")],
      ]),
    },
  }));
}
