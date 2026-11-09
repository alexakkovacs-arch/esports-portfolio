# Alexa Kovacevich: Esports Portfolio

Personal portfolio for Alexa Kovacevich, with the original fuchsia, black and cream anti-design visual identity preserved from lexkk.com.

## Pages

- **Home (`/`)**: skills, featured event, projects, awards, partners, contact CTA.
- **Project pages (`/work/:slug`)**: case studies, photos, graphics and YouTube videos.
- **Events (`/events`)**: history of esports events and broadcasts.
- **Contact (`/contact`)**: opens an email draft. GitHub Pages cannot process form submissions; the visitor must press Send in their email app.

## Hosting

The portfolio is a static React + TanStack Router + Vite website deployed on **GitHub Pages** using `.github/workflows/pages.yml`. No Netlify plan or image CDN is required. Original images are served from `public/img`.

For the initial GitHub Pages repository URL (`https://alexakkovacs-arch.github.io/esports-portfolio/`), the workflow builds with `GITHUB_PAGES_BASE_PATH=/esports-portfolio/`. **When moving lexkk.com**, change the workflow value to `/`, then set `lexkk.com` in repository **Settings → Pages → Custom domain** before updating Namecheap DNS. This prevents premature downtime. In Settings → Pages, set the publish source to **GitHub Actions**.

GitHub Pages is static hosting; project routes are copied to individual `index.html` entry points during build by `scripts/copy-pages.mjs`, so refresh and direct links work.

## Editing content

All projects, awards, skills and partner entries live in `src/data/portfolio.ts`. Personal contact links are in `src/lib/site.ts`; event history is in `src/data/events.ts`. Photos are in `public/img`, logos in `public/img/logos`, and decorative images in `public/img/shapes`.

## Local development

```bash
pnpm install --no-frozen-lockfile
pnpm dev
```

To check static output: `pnpm build`. Tests: `pnpm test`.

The migration keeps the original site markup, styles, images, typography and animations; only hosting/asset paths and contact delivery change.
