# Alexa Kovacevich: Esports Portfolio

Personal portfolio for Alexa Kovacevich, a freelance creative in Windsor, Ontario who works on esports events, live broadcast production and marketing. The look comes from Alexa's Canva portfolio: fuchsia, black and cream, in a loud "anti-design" style.

## What's on the site

- **Home (`/`)**: hero and intro, a skills ticker and skill cards, the featured Sakura Anime Fest event with its numbers, the project grid, awards and nominations, a partner logo wall, and a contact call to action.
- **Project pages (`/work/:slug`)**: one case study per project, with roles, write-ups, graphics galleries and embedded YouTube videos. Current projects are St. Clair Saints, Saints Gauntlet Series, NA Rise + NA Premier, League Impact Series, CIE, CLOL Championships, Cupid Esports and Sakura Anime Fest.
- **Contact (`/contact`)**: email, phone, social links and a contact form that saves submissions with Netlify Forms.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19) with file-based routing
- Tailwind CSS v4 (theme tokens live in `src/styles.css`)
- Netlify Forms for the contact form
- Netlify Image CDN, so photos are resized and converted to WebP on request
- Google Fonts: Anton, Archivo, Instrument Serif and Space Mono

## Editing content

All portfolio content is in **`src/data/portfolio.ts`**: projects, sections, photos, videos, awards, partners and skills. Contact details and social links are in `src/lib/site.ts`. Images are stored in `public/img/`; logos are in `public/img/logos/` and decorative shapes are in `public/img/shapes/`.

To add a project, add an entry to the `projects` array with a unique `slug`, and put its images in `public/img/`. Its page at `/work/<slug>` is created automatically.

## Running locally

```bash
pnpm install
netlify dev        # or: pnpm dev (Vite only, no Netlify emulation)
```

Use `netlify dev` to try the Image CDN URLs and the form locally. Run tests with `pnpm test`.
