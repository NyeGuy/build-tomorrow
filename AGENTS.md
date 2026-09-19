# Agent rules — Build Tomorrow

Anvil owns this track (Forge family). Lead Forge · CoS Nyborg · Merge Nye only.

This repo is the official GitHub Pages / SCAD-static fundraising microsite for **STEC Build Tomorrow**. Work on a branch, open a PR, do not merge.

Sibling playground (Vercel, base `/`): [NyeGuy/build-tomorrow-play](https://github.com/NyeGuy/build-tomorrow-play). Mirror play when it lands. Do not add a Pages workflow there.

Pipeline and local/deploy steps: [PIPELINE.md](./PIPELINE.md).

Editable copy lives in [`content/`](./content/). Prefer editing those files over components.

## Content rules (hard)

- **Fundraising only.** Advertisement to SCAD Giving. No payment collection on this site.
- **White CTAs never yellow.** `#FFD60A` is for eyebrows, rules, active nav, and the goal strip only.
- **Tokens.** Surfaces `#1C1C1C` / `#262626` / `#333333`. Text `#F2F2F2` / `#C8C8C8` / `#8A8A8A`. Font: Archivo.
- **Four routes.** `/` · `/technology/` · `/designtomorrow/` · `/give/`. No extra pages in Phase 1.
- **Placeholders stay placeholders.** `TECH_FUND_URL` and `DT_FUND_URL` in `content/funds.ts` until Advancement pastes live SCAD Giving links. Do not wait on those links.
- **Bracket missing photos and logos.** Do not invent marks, headshots, or partner logos.
- **No invented gift amounts.** TITLE / PRESENTING / TRACK / PARTNER are named tiers only until Advancement approves levels.
- **No Agent Arena. No Satellite Lab.** No lab tracks, residents, Montgomery Sheds, or arena product copy.
- **Copy in `content/`.** Do not hard-code visitor-facing body copy in components.

## Do not

- Merge. Nye merges.
- Add a CMS, analytics, or extra routes in Phase 1.
- Turn white Giving buttons yellow.
- Nest Satellite Lab or Agent Arena content here.
