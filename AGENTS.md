# AGENTS.md

This is the personal portfolio of Alexa Kovacevich (esports events, production and marketing). It is built with TanStack Start, React 19 and Tailwind v4, and deploys on Netlify. It has no database or auth. The only server-side feature is Netlify Forms.

## Architecture

- `src/data/portfolio.ts` is the **single source of content**: the `projects` array (with sections, photos and videos), `awards`, `partners`, `skills`, `toolkit` and `featuredSlug`. Change copy here, not in components.
- `src/lib/site.ts` holds identity, contact details, social links and `pageMeta()` for per-route `<head>` tags.
- `src/lib/img.ts` and `src/components/Img.tsx` build every raster image URL through the Netlify Image CDN (`/.netlify/images?url=…&w=…&fm=webp`) with a srcset. SVGs pass through unchanged. Always use `<Img>` for photos; don't link directly to `/img/*.jpg`.
- Routes:
  - `src/routes/index.tsx`: one-page home made of section components (Hero, Skills, Featured, Work, Awards, Partners, ContactCta). The header links to them with anchors (`#skills`, `#work`, `#awards`, `#partners`).
  - `src/routes/work/$slug.tsx`: project case study. The loader calls `notFound()` for unknown slugs.
  - `src/routes/contact.tsx` with `src/components/ContactForm.tsx`: the Netlify Forms contact form.
  - `src/routes/__root.tsx`: shell, Google Fonts, `SiteHeader`, `SiteFooter`.
- `public/contact.html` is the static form registration that Netlify detects at deploy. Keep its field names (`name`, `email`, `message`, `bot-field`, `form-name=contact`) in sync with `ContactForm.tsx`. The test in `ContactForm.test.tsx` depends on the labels "Name", "Email" and "Message" and the button text "Send message".

## Design system

- Palette (CSS variables and Tailwind colors in `src/styles.css`): `cream` #fff3ef (background), `ink` #0b0b0b, `fuchsia` #ff86c8, `fuchsia-hot` #ff4fae (used for text accents on cream for contrast), `gold` #eaa93d, `steel` #6e96b3, `tan` #e3b99f.
- Fonts: `font-display` (Anton, uppercase headlines), `font-serif` (Instrument Serif italic for playful asides), `font-sans` (Archivo body text), `font-mono` (Space Mono labels and buttons).
- Component classes: `.brutal` / `.brutal-sm` (thick border plus a hard offset shadow), `.brutal-hover`, `.btn` + `.btn-pink` / `.btn-ink`, `.display`, `.eyebrow`, `.highlight`, `.outline-text`, `.tape`.
- The anti-design look comes from slight rotations (`-rotate-1`, `rotate-2`), overlapping decorative shapes from `public/img/shapes/` (always `aria-hidden`), marquees and sticker labels. Animations are turned off under `prefers-reduced-motion`.

## Non-obvious decisions

- Images and copy came from Alexa's existing Canva site. Photos were re-encoded to JPG at 1400px or less before being committed. Some project and photo pairings were inferred, especially for CIE, League Impact Series and NA Rise + NA Premier (Division ONE). The CIE write-up and the League Impact Series "Broadcast Lead" role label are placeholders for Alexa to confirm.
- Award organizations aren't attached to individual awards because the source doesn't map them clearly. `awardBodies` lists them as a group.
- The template's blog, résumé and content-collections setup were removed on purpose. Don't reintroduce Markdown collections unless the owner asks for a blog.
- Don't run build or typecheck commands in agent sessions. The Netlify pipeline validates builds.
