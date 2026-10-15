# AGENTS.md

Edit this file, not `CLAUDE.md` (`CLAUDE.md` is a symlink).

## Overview

Personal site of Thierry Bakera, served at thierrybakera.com. One static page built with Astro 7 and TypeScript; `astro build` writes plain HTML to `dist/`. No server, no database, no client framework.

The design is fixed. `src/styles/tokens.css` and the `/styleguide` page are its source of truth; build with them, do not redesign.

## Code organization

Applies to every new file.

**Must**

- One responsibility per file. A page section is one component; a building block is one component.
- Content lives in data, layout lives in components. Changing text, a link or a date must never require touching a component.
- Names state what and why, not how.
- Comments state intent only, a line or two: a constraint, a rejected alternative, a number that needs a reason.

**Must not**

- Do not add catch-all folders (`utils`, `helpers`, `common`, `misc`, `shared`).
- Do not put new work in a nearby file because it is convenient. New responsibility, new file.
- Do not add a dependency when a few lines of Astro or CSS do the job. Say why in the PR when you do add one.

## Layout

| Path                    | Holds                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `src/pages/`            | Routes. `index.astro` composes sections; no markup beyond that.                           |
| `src/sections/`         | One component per page section (Work, Experience, Labs, …).                               |
| `src/components/`       | The building blocks: `Section`, `List`, `Row`, `TextLink`, `Button`, `Pill`, `StatusDot`. |
| `src/layouts/`          | The single page layout: head, meta, fonts, skip link.                                     |
| `src/content/`          | Data in `json/` and `markdown/`, schemas in `src/content.config.ts`, code at its root.    |
| `src/styles/tokens.css` | Every design token. The only file allowed raw values.                                     |
| `public/`               | Files served as-is: favicon, CV PDF.                                                      |

## Design system

- Every colour, size, space, radius and font comes from a token in `src/styles/tokens.css`. No hex, px or font names anywhere else, except font registration in `astro.config.mjs` (the Fonts API needs the family names there).
- Dark mode is switched in `tokens.css` only (`prefers-color-scheme`). Components never branch on theme.
- Spacing uses the scale only: 2 · 4 · 6 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 32 · 56 · 80 · 96 px.
- Accent (teal) appears in four places only: link markers (`↗`, `↓`), link hover, status dots, and the dot after the logo. Highlighted words in the intro stay foreground colour, not accent.
- Links in text and rows (`TextLink`, `Row`) show `↗` after their label; nav, footer, logo, buttons and pills don't. Every link turns accent on hover, except the solid button. One solid button per call to action ("Email me"); everything else is outline.
- Styles are scoped in the component that owns them. No Tailwind, no CSS-in-JS, no UI library.
- `/styleguide` shows every token and component. Add a new component there in the same change.

## Content

- Add or edit content in `src/content/`, never in components.
- Lists are newest first.
- Copy is plain and factual. No superlatives, no numbers about the owner that are not verifiable (commit counts, rankings).
- Placeholders (CV, booking links) are empty strings in data. Components hide a button whose link is empty; never ship `#` links.

## Accessibility

- Real elements: `<a href>` for links, `<button>` for actions, one `<h1>`, sections with headings.
- Visible focus ring on every interactive element (`--focus-ring`).
- Text contrast at least 4.5:1 in both themes.
- Decorative glyphs (`↗`, dots) are `aria-hidden="true"`.
- The page works at 320 px wide with no horizontal scroll.

## Commands

```bash
npm install
npm run dev            # http://localhost:4321
npm run check          # astro check (types)
npm run format         # prettier, rewrites files
npm run format:check   # prettier, fails on unformatted files
npm run lint:css       # stylelint, fails on raw values outside tokens.css
npm run build          # check + build to dist/
npm run preview        # serve dist/
```

Package manager is **npm**. Do not add other lockfiles. Node version is pinned in `.nvmrc`.

## Checks

There are no unit tests: the site is static content. A change is done when:

- `npm run format:check`, `npm run lint:css` and `npm run build` pass with no warnings.
- The page renders correctly at 390 px and 1440 px, in light and dark.
- `/styleguide` still shows every component correctly.

CI runs the format check, the CSS lint and the build on every pull request and every push to `main`.

## Pull requests

- Open PRs against `main`.
- One concern per PR.
- Commit messages: one line, Conventional Commits (`type(scope): summary`), no body.
- PR title: same format. PR description: a few short lines on what changed and how to check it; a screenshot for any visual change. No long write-ups.
- Do not commit, push or open a PR unless asked.

## Boundaries

- Do not change the approved design (layout, colours, type, wording) without the owner's OK. Propose it in the PR description instead.
- Do not add third-party scripts. Analytics are Cloudflare Web Analytics (enabled on the host, not in code) and, later, Umami for click events; nothing else.
- Do not add client-side JavaScript unless a feature cannot work without it.

## Security

- Never commit `.env` or secrets.
- Personal data on the site is limited to what is already public: name, city, email, profile links. No phone number.
