import { defineConfig } from 'astro/config';

// GitHub project Pages: https://nyeguy.github.io/build-tomorrow/
// SCAD static drop: `npm run build:scad` writes dist/ at base `/`.
const scad = process.env.SCAD_EXPORT === '1';

export default defineConfig({
  site: scad ? 'https://www.scad.edu' : 'https://nyeguy.github.io',
  base: scad ? '/' : '/build-tomorrow',
  output: 'static',
  trailingSlash: 'always',
});
