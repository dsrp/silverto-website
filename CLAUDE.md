# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Ecoaldeia Silverto (eco-community in Northern Portugal), built with Nuxt.js 2.x in SSG (Static Site Generation) mode.

## Commands

```bash
npm run dev        # Dev server at localhost:3000 (must navigate to /en or /pt manually)
npm run generate   # Generate static site to dist/
npm run lint       # ESLint on .js and .vue files
```

**Deploy:** `npm run generate && rsync -arvz --delete dist/ ext:~/public_html/silverto/`

## Architecture

- **Nuxt 2.15 static site** — target is `'static'`, pages are pre-rendered to HTML
- **Bilingual (EN/PT)** via `nuxt-i18n` with `prefix` strategy — all routes get `/en` and `/pt` prefixes
- **Default locale is English** (`en-US`), with Portuguese (`pt-PT`)
- **Pages** in `/pages/` define routes automatically: index, about, volunteering, primavera, subscribe
- **Single layout** (`layouts/default.vue`) and **single shared component** (`components/Navigation.vue`)

## i18n Pattern

Each page/component uses an embedded `<i18n>` block with YAML format containing `en` and `pt` keys. Use `localePath()` for internal links and `switchLocalePath()` for language switching.

## Styling

- SCSS with shared color variables in `assets/scss/colors.scss` (dark green `#19341A`, medium green `#50A54C`, light green `#B7D433`, orange `#EFB81D`)
- Scoped styles in Vue SFCs
- `normalize-scss` for CSS reset

## Video

Landing page uses video.js for HLS background video playback. The webpack config in `nuxt.config.js` has a custom rule for video.js asset URLs. Video files are in `static/background-video/`.
