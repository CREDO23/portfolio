# thierrybakera.com

Personal site of Thierry Bakera, built with [Astro](https://astro.build) as a static site.

## Develop

Requires Node.js 22.12+ (see `.nvmrc`; odd-numbered versions are not supported).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes the static site to dist/
npm run preview  # serves dist/ locally
```

## Structure

```
public/          static files served as-is (favicon, later the CV PDF)
src/pages/       one file per route; index.astro is the home page
astro.config.mjs site URL and build settings
wrangler.jsonc   Cloudflare Workers deploy settings
```

## Deploy

The build output is plain HTML in `dist/`, served as static assets by Cloudflare Workers (`wrangler.jsonc`).
Workers Builds is connected to this repo: build command `npm run build`, deploy command `npx wrangler deploy`.
Every push to `main` deploys; other branches get a preview URL.
