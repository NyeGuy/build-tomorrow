# Build Tomorrow — dev pipeline

Official GitHub Pages / SCAD-static site for the **STEC Build Tomorrow** fundraising campaign. Static Astro. No CMS, no analytics, no payment collection. Cash gifts advertise out to SCAD Giving.

## Ownership

Owner **Anvil** (Forge family) · Lead **Forge** · CoS **Nyborg** · Merge **Nye only**

This track is Build Tomorrow only. Anvil owns the work; Forge leads; Nyborg is Chief of Staff. Nye is the only person who merges to `main`.

## GitHub

| | |
| --- | --- |
| Remote | https://github.com/NyeGuy/build-tomorrow |
| Default branch | `main` |
| Sibling (Vercel playground) | https://github.com/NyeGuy/build-tomorrow-play |
| Live site (after Pages is enabled on `main`) | https://nyeguy.github.io/build-tomorrow/ |

**PR rules**

- Work on a branch. Never push `main`.
- Open a pull request. Do not merge it.
- Nye merges. No one else.

`main` on this remote may still be the initial stub until the site PR lands. The stack documented here is the Astro/Pages tree (`package.json`, `astro.config.mjs`, `.github/workflows/deploy.yml`, `content/`).

## Local

No `.nvmrc`. `package.json` `engines.node` is `>=22`. Use **Node.js 22** or newer.

```bash
npm i
npm run dev
```

Dev server: [http://localhost:4321/build-tomorrow/](http://localhost:4321/build-tomorrow/)

```bash
npm run build
```

Writes the static site to `dist/` at base `/build-tomorrow/`.

```bash
npm run build:scad
```

Writes the same HTML to `dist/` at base `/` for a SCAD hosting drop.

### npm scripts

| Script | Command | What it does |
| --- | --- | --- |
| `dev` | `astro dev` | Local dev server |
| `build` | `astro build` | Production static build → `dist/` (Pages base) |
| `build:scad` | `SCAD_EXPORT=1 astro build` | Static build → `dist/` at base `/` |
| `preview` | `astro preview` | Serve `dist/` locally (run `build` first) |

### Base path (GitHub project Pages)

This repo is a **project site**, not a user site. `astro.config.mjs` sets (unless `SCAD_EXPORT=1`):

- `site`: `https://nyeguy.github.io`
- `base`: `/build-tomorrow`
- `output`: `static`
- `trailingSlash`: `always`

The URL prefix is `/build-tomorrow/` (repo-name base). Local, preview, and production links must keep it. `src/lib/paths.ts` (`withBase`) prefixes in-site hrefs. Do not drop the prefix when checking nav, footer, favicon, or forms.

Expected production URLs:

- `https://nyeguy.github.io/build-tomorrow/`
- `https://nyeguy.github.io/build-tomorrow/technology/`
- `https://nyeguy.github.io/build-tomorrow/designtomorrow/`
- `https://nyeguy.github.io/build-tomorrow/give/`

The sibling playground [`NyeGuy/build-tomorrow-play`](https://github.com/NyeGuy/build-tomorrow-play) uses `base: '/'` and deploys to Vercel. Do not copy that root base here, and do not add a Pages workflow there.

## Deploy

**GitHub Actions → GitHub Pages.** Workflow file: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

Name: **Deploy to GitHub Pages**.

| Trigger | What happens |
| --- | --- |
| Push to `main` | Build + deploy to GitHub Pages |
| `workflow_dispatch` (Actions → **Run workflow**) | Same build + deploy, from the branch you select |

There is **no** `pull_request` trigger and **no** PR preview environment.

**Build job:** `actions/checkout@v7`, then [`withastro/action@v6`](https://github.com/withastro/action) (install, `astro build`, upload Pages artifact).

**Deploy job:** `actions/deploy-pages@v5` into the `github-pages` environment.

Pages will not publish until repo **Settings → Pages → Build and deployment → Source** is **GitHub Actions**, and the `github-pages` environment is allowed.

**SCAD hosting:** run `npm run build:scad` and hand `dist/` to SCAD as plain static HTML.

## Cursor

**Open the repo**

1. Clone `https://github.com/NyeGuy/build-tomorrow`.
2. In Cursor: **File → Open Folder** on the clone.
3. Use Node 22+, then `npm i` and `npm run dev` as in [Local](#local).

**Cloud-agent expectations**

- Create a feature branch. Never push `main`.
- Open a PR. Do not merge. Nye merges.
- Follow [AGENTS.md](./AGENTS.md).
- Mirror `build-tomorrow-play` when that sibling lands.

**Where editable content lives**

Visitor-facing copy is in [`content/`](./content/).

| Path | What it holds |
| --- | --- |
| `content/site.json` | Name, nav, footer, logo bracket |
| `content/home.json` | Hero, three ways to give, goal strip |
| `content/technology.json` | Technology Fund |
| `content/designtomorrow.json` | TITLE / PRESENTING / TRACK / PARTNER |
| `content/give.json` | Wishlist + two forms |
| `content/funds.ts` | `TECH_FUND_URL` / `DT_FUND_URL` placeholders |

Agent rules: [AGENTS.md](./AGENTS.md). Human overview: [README.md](./README.md).

## Out of scope / do NOT touch

This track is **Build Tomorrow only**.

Do not touch:

- **Satellite Lab** nested content, tracks, people, or lab branding
- **Agent Arena**
- **build-tomorrow-play** deploy target (Vercel). Official Pages stays here.
- **CMS**, analytics, or invented SCAD Giving URLs
- **Invented logos, photos, gift amounts, or partner marks**
