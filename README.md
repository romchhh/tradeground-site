# TradeGround

Marketplace landing for life in Germany — Telegram bot `@TradeGroundBot`.

## Locales

| Path | Language |
|------|----------|
| `/ua` | Ukrainian |
| `/ru` | Russian |
| `/en` | English |
| `/de` | German |

`/` redirects to `/ua`.

## Setup

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_SITE_URL to your production domain
npm install
npm run dev
```

## Production checklist

- `NEXT_PUBLIC_SITE_URL` — canonical origin (used in sitemap, OG, robots)
- `/sitemap.xml` — multilingual sitemap
- `/robots.txt`
- `/llms.txt` — AI crawler hints
- `/humans.txt`
- `/.well-known/security.txt`
- `/manifest.webmanifest` — PWA manifest
- Locale SEO: title, description, keywords, hreflang, Open Graph, Twitter, JSON-LD

## Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```
