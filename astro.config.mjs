// @ts-check
import { defineConfig } from 'astro/config';

// Static output, no adapter (spec §4).
//
// GitHub Pages project page (repo `ifelse-portfolio`, not <user>.github.io):
// without `base`, the HTML loads but every /_astro/*.css URL 404s.
// If the repo is ever renamed or the site moves to <user>.github.io,
// update BOTH values (see README → Despliegue).
export default defineConfig({
  site: 'https://malejandrarr.github.io',
  base: '/ifelse-portfolio',
  output: 'static',
});
