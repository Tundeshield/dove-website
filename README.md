# Dove corporate website

The website for Dove, the company behind Gather HQ, Pastora and future ventures.

Built with [Astro](https://astro.build) as a fully static site and deployed on Netlify from this repository. There is no database, CMS or backend: the only dynamic piece is the contact form, handled by Netlify Forms.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Where things live

| What | File |
|---|---|
| Company name, tagline, URL, email, legal name | `src/data/site.ts` |
| Ventures (names, descriptions, URLs, colours) | `src/data/ventures.ts` |
| Working principles and values | `src/data/principles.ts` |
| Design tokens (colour, type, spacing, radii) | `src/styles/global.css` |
| Dove mark (open ring and disc versions) | `src/components/DoveMark.astro`, `public/favicon.svg` |
| Product marks | `src/components/VentureMark.astro` |
| Pages | `src/pages/` |

## Common changes

**Change a product URL or description**: edit its entry in `src/data/ventures.ts`. Every page updates.

**Add a venture**
1. Add an entry to `ventures` in `src/data/ventures.ts` (only confirmed facts).
2. Add its logo as a new case in `src/components/VentureMark.astro`.
3. Set `detailPage: true` to generate `/ventures/<slug>/` automatically. The homepage, ventures page, footer, contact topics and sitemap pick it up on their own.

**Add a product screenshot**: put the image in `public/ventures/` and set `image: { src, alt }` on the venture. It replaces the logo emblem on the detail page.

**Add a public email address**: set `email` in `src/data/site.ts`. It then appears in the footer and on the contact page.

**Move to a custom domain**: update `url` in `src/data/site.ts`, `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.

## Contact form

The form on `/contact/` uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify detects it at deploy time from the `data-netlify` attribute. Submissions appear under **Forms** in the Netlify dashboard; to receive them by email, add a notification under *Project configuration → Notifications → Emails and webhooks → Form submission notifications*. Spam is filtered with a honeypot field and Netlify's built-in filtering.

Without JavaScript, the form posts normally and shows `/contact/thanks/`.

## Design notes

- Palette: Forest `#263D2E`, Cream `#F5F1E8`, Sage `#B9C6B1`, Charcoal `#242722`, White, with olive `#B08D4C` reserved for the Dove mark.
- Type: Newsreader (headlines) and Hanken Grotesk (body and UI), self-hosted through Fontsource.
- Each venture is shown in its own brand colours (set in `theme` on the venture) so products keep their identity inside Dove's frame.
- Logo: a dove carrying an olive branch inside an open ring that begins at the wing tip. Use `<DoveMark />` (open ring) for the primary logo and `<DoveMark variant="disc" />` for icons and very small sizes.
- The only animation is the Dove mark drawing itself once in the homepage hero. It is skipped when the visitor prefers reduced motion.
