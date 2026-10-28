// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Keep in sync with site.url in src/data/site.ts
  site: 'https://dove-ventures.netlify.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
