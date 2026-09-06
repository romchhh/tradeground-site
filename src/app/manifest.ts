import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Marketplace for life in Germany — goods, services and community in Telegram.",
    start_url: "/ua",
    scope: "/",
    display: "standalone",
    background_color: "#000100",
    theme_color: "#000100",
    lang: "uk",
    dir: "ltr",
    categories: ["shopping", "business", "social"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    related_applications: [
      {
        platform: "webapp",
        url: "https://t.me/TradeGroundBot",
      },
    ],
    prefer_related_applications: false,
    id: SITE_URL,
  };
}
