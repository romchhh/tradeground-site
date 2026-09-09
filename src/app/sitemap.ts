import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = ["", "contacts", "marketplace"];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? (locale === "ua" ? 1 : 0.9) : 0.7,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [l === "ua" ? "uk" : l, localeUrl(l, path)]),
          ["x-default", localeUrl("ua", path)],
        ]),
      },
    }))
  );
}
