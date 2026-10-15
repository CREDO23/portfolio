# thierrybakera.com

Personal site of Thierry Bakera, built with [Astro](https://astro.build) as a static site.

## Develop

Requires Node.js 18.20+ (20+ recommended).

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
```

## Deploy

The build output is plain HTML in `dist/`, so it can be hosted on any static host.
On Cloudflare Pages: framework preset **Astro**, build command `npm run build`, output directory `dist`.
Every push to the default branch deploys; every pull request gets a preview URL.
