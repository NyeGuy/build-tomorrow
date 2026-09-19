# Build Tomorrow

Fundraising microsite for **SCAD STEC** (School of Creative Technology). Static Astro. Cash gifts advertise out to **SCAD Giving** on white buttons. This site does not collect payments.

Phase 1 — four pages: `/` · `/technology/` · `/designtomorrow/` · `/give/`.

Sibling playground (Vercel, base `/`): [NyeGuy/build-tomorrow-play](https://github.com/NyeGuy/build-tomorrow-play).

## Ownership

| Role | Who |
| --- | --- |
| Owner | Anvil (Forge family) |
| Lead | Forge |
| CoS | Nyborg |
| Merge | Nye only |

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4321/build-tomorrow/](http://localhost:4321/build-tomorrow/)

The `/build-tomorrow/` prefix matches GitHub project Pages. Do not drop it when checking links.

```bash
npm run build        # Pages build → dist/ at base /build-tomorrow/
npm run build:scad   # SCAD static drop → dist/ at base /
npm run preview      # serve dist/ locally (run build first)
```

`astro build` writes plain static HTML. `build:scad` is the copy you zip for SCAD hosting.

## GitHub Pages

Configured as a **project site**:

`https://nyeguy.github.io/build-tomorrow/`

`astro.config.mjs` sets `site` to `https://nyeguy.github.io` and `base` to `/build-tomorrow`. `.github/workflows/deploy.yml` builds on push to `main` (and on manual **Run workflow**) with the official Astro GitHub Action.

### Enable Pages after this workflow is on `main`

1. Open the repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. If prompted, allow the `github-pages` environment.
4. Re-run **Deploy to GitHub Pages** under the **Actions** tab, or push an empty commit to `main`.

## Edit copy

All visitor-facing text is under `content/`. Components read those files.

| File | What it holds |
| --- | --- |
| `content/site.json` | Name, nav, footer, logo bracket |
| `content/home.json` | Home hero, three ways to give, goal strip ($200,000 by May 10) |
| `content/technology.json` | Technology Fund page |
| `content/designtomorrow.json` | Design Tomorrow tiers TITLE / PRESENTING / TRACK / PARTNER |
| `content/give.json` | Give paths, hardware wishlist, two forms |
| `content/funds.ts` | `TECH_FUND_URL` and `DT_FUND_URL` (SCAD Giving placeholders) |

### SCAD Giving URLs

Paste live Advancement links in `content/funds.ts` when they exist. Phase 1 ships placeholders. Do not wait on those links.

White buttons never use the yellow accent.

### Swap the logo or photos

Header/footer mark and hero/wishlist frames are **[Logo]** / **[Photo]** brackets until assets land. Drop files in `public/` and point `content/` at them in a later pass. Do not invent marks.

## Design tokens

| Use | Value |
| --- | --- |
| Surfaces | `#1C1C1C` / `#262626` / `#333333` |
| Text | `#F2F2F2` / `#C8C8C8` / `#8A8A8A` |
| Accent (eyebrows, rules, active nav, goal strip only) | `#FFD60A` |
| CTA buttons | White. Never yellow. |
| Type | Archivo (Google Fonts) |

## Stack

- Astro, `output: 'static'`
- Zero runtime JavaScript
- GitHub Actions → GitHub Pages
- `npm run build:scad` for a root-base static export
