import {
  jsonLdOrganization,
  jsonLdSoftwareApp,
  jsonLdWebSite,
} from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export default function JsonLd({ locale }: { locale: Locale }) {
  const graph = [
    jsonLdOrganization(locale),
    jsonLdWebSite(locale),
    jsonLdSoftwareApp(locale),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph.map(({ "@context": _c, ...rest }) => rest),
        }),
      }}
    />
  );
}
