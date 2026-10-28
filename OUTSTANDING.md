# Outstanding: details needed before the site is final

Nothing below is shown on the live site until it is provided. Placeholders are not published.

## Needs your input

- [ ] **Public contact email**: set `email` in `src/data/site.ts`. Until then the contact form is the only contact route.
- [ ] **Form notifications**: in Netlify, add an email notification for the `contact` form so submissions reach your inbox (see README).
- [ ] **Custom domain**: the site uses `dove-ventures.netlify.app`. Update the three places listed in the README when a domain is chosen.
- [ ] **Registered company name and address**: set `legalName` in `src/data/site.ts` for the footer copyright line.
- [ ] **Dove logo approval**: the dove-with-olive-branch mark was created for this site. Approve it, or supply final artwork and replace `DoveMark.astro` and `public/favicon.svg` (then regenerate `favicon-32.png`, `apple-touch-icon.png` and `og-image.png`).
- [ ] **Founder and origin story**: the Our Story page deliberately has no founder biography, dates or milestones. Add them only once written and approved.
- [ ] **Product problem statements**: the "problem it solves" and "who it is for" text in `src/data/ventures.ts` was written from the confirmed product descriptions. Please review the wording.
- [ ] **Product screenshots**: neither product has screenshots on the site yet. Add them via the `image` field (see README).
- [ ] **Launch status**: no status label is shown for either product. Set `status` on a venture if you want to say, for example, that it is free during early access.
- [ ] **Product URLs**: currently the Netlify addresses (`gatherhq-app.netlify.app`, `pastora-platform.netlify.app`). Update in `ventures.ts` when the products get their own domains.
- [ ] **Privacy policy and legal pages**: none exist yet, so none are linked. The contact form collects name and email, so a privacy notice is advisable before promoting the site.
