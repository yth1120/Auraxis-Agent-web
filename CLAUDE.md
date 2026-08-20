# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Auraxis Agent** marketing website — an Astro 4 single-page landing site for the Auraxis Agent desktop app (an Electron-based agentic workbench with a unified ReAct step engine, Chat / Work / Code modes, 71 built-in tools, multi-agent scheduling, Code Mode orchestration, document generation, cloud connectors, native sandboxing, MCP support, Eywa provenance memory, and 11 research/cache-alignment techniques). The site is a **pure static build** (no SSR, no backend API): bilingual (zh-CN / en), deployed to GitHub Pages by default and optionally to Cloudflare Pages as static hosting.

**Brand rule (strict):** Auraxis Black `#111216` (dark bg) / Cool neutral white `#FFFFFF` (light bg, no warm ivory) / Dark-mode text `#F3F3F0` + Aura gray-purple (light `#6A6884` / dark `#8C8AA8`) used ONLY as ~3% accent (focus / selected / status dots). No blue, no large purple areas, no primary gradients. Radius tiers: 5/6/8/12/14/9999 only. Zero-movement animation: no button hover shift/scale, no modal open/close animations — only functional rotation and data-driven motion.

## Commands

```bash
npm run dev          # Start Astro dev server (equiv: npm start)
npm run build        # Production build (static output to dist/)
npm run preview      # Preview production build locally
npm run check        # Run astro check (TypeScript diagnostics, no emit)
```

No test suite is configured yet — `check` is the only validation step.

## Architecture

### Rendering model: Astro static (SSG)

- **`src/pages/index.astro`** is the single-page entry, pre-rendered at build time.
- **React islands** in `src/react/` are hydrated with `client:visible` or `client:idle` directives. They do not share a single React root — each `.astro` component imports the React islands it needs individually.
- **No API layer**: tool and release data ship as bundled JSON and are consumed client-side.

### Data flow

```
src/data/tools-data.json (71 tools) ──▶ ToolsGrid.tsx (React island)
src/data/releases.json + public/releases.json (v3.0.1) ──▶ SmartDownloader.tsx
```

- **Tool definitions** (`src/data/tools-data.json` + typed accessor `src/data/tools.ts`): 71 tools extracted from the desktop app's `electron/tool-defs.ts`. Each tool has `danger` (15 tools, aligned with `DANGEROUS_TOOLS` in `electron/ipc/tool-handlers.ts`), `category` (files / documents / connectors / execution / terminal / web / planning / agent / background / session / capability / verify / interaction), `description` (Chinese) / `descriptionEn` (desktop original), `concurrencySafe`, and `params` (top-level `input_schema` property names).
- **Release info** (`src/data/releases.json`, mirrored in `public/releases.json`): v3.0.1 with real changelog and per-platform download assets, consumed by the SmartDownloader React island.

### i18n system

- `src/i18n/translations.ts` contains all UI strings as a `Translations` interface with full `zh` and `en` objects under `TRANSLATIONS`.
- React islands use `LanguageContext` / `useLanguage()` (`src/i18n/LanguageContext.tsx`). Each island wraps itself in `<LanguageProvider>` independently (no shared React root).
- Static Astro content uses `data-i18n` attributes. A bootstrap script in `BaseLayout.astro` handles initial text replacement; a `CustomEvent` (`auraxis:lang-change`) synchronizes across islands and updates DOM `[data-i18n]` elements.
- Language preference is persisted in `localStorage('lang')`, defaulting to browser `navigator.language`.
- **When adding a translation key used by static Astro elements, also update the inline EN fallback map inside `BaseLayout.astro`.**

### Theme system

- Dark/light mode toggled via `class="dark"` on `<html>`. Tailwind's `darkMode: 'class'` drives all color variants.
- Preference persisted in `localStorage('theme')`. A blocking `<script is:inline>` in `BaseLayout.astro` applies the stored theme before first paint to prevent FOUC.
- The `ThemeToggle` React island reads from the DOM class and syncs to `localStorage`.

### Key files to know

| Path | Purpose |
|---|---|
| `src/pages/index.astro` | Single-page entry, composes all sections |
| `src/layouts/BaseLayout.astro` | HTML shell, theme preload, i18n bootstrap, grid background |
| `src/components/UpdateBanner.astro` | Top update banner: auto-shows on every visit, closable with X |
| `src/components/SolutionSection.astro` | Core features (12 cards: engine / scheduler / Code Mode / permissions / sandbox / MCP / Eywa memory / DeepSeek / SDK / three modes / docs & connectors / account) |
| `src/components/SafetySection.astro` | Security model: approval policies / sandbox backends / runtime presets |
| `src/components/ResearchSection.astro` | Technical core: paper-driven ledger (7 modules) + cache pipeline (4 steps) + full paper-source list, with arXiv links |
| `src/components/EcosystemSection.astro` | Developer ecosystem cards (CLI / TS SDK / Python SDK / plugins) |
| `src/components/FaqSection.astro` | FAQ using native `<details>` disclosure |
| `src/types/index.ts` | All shared TypeScript types (mirrors desktop `electron/contracts/` semantics) |
| `src/data/tools-data.json` | Canonical 71-tool dataset (source of truth: desktop `electron/tool-defs.ts`) |
| `src/data/tools.ts` | Typed accessor over the dataset (ALL_TOOLS / DANGER_TOOLS / SAFE_TOOLS / TOOL_CATEGORIES) |
| `src/data/releases.json` | v3.0.1 release + download assets (keep in sync with `public/releases.json`) |
| `tailwind.config.mjs` | Brand design tokens (brand-black `#111216`, brand-accent light `#5C5A74` / dark `#8C8AA8`, brand-ivory `#F3F3F0`) |

### Styling conventions

- **Brand palette:** page base (light #EAEDF1 / dark #111216), `brand-black` (#111216), `brand-dark` (#1B1D21), `brand-card` (#23262B), `brand-border` (#454B55), `brand-accent` (light #5C5A74 / dark #8C8AA8 "Aura gray-purple", ~3% accent only), `brand-ivory` (#F3F3F0), `brand-muted` (light #2B2F35 / dark #D6DAE0), `brand-faint` (light #33373D / dark #BCC1C8). Theme-switching colors are driven by RGB CSS variables defined in `src/styles/global.css`.
- **Typography:** System UI stack for sans (`-apple-system, Segoe UI, PingFang SC, Microsoft YaHei`), `SF Mono / JetBrains Mono / Fira Code / Consolas` for mono. No web font downloads. Weights: body 400, items/buttons 500, headings 600.
- **Radius tiers:** 5px / 6px (rounded-md) / 8px (rounded-lg) / 12px (rounded-xl) / 14px / 9999px (full). Never 3/4/7/9/10px.
- **Terminal aesthetic:** `.terminal-dark-box` and `.code-dark-box` utility classes force dark backgrounds regardless of theme, ensuring code readability.
- **Grid background:** `.grid-bg` class applies a 40px grid overlay with 1px lines at 2-3% opacity (accent-tinted in dark mode, ink-tinted in light mode).
- **Scrollbar:** Custom WebKit scrollbar styling (8px, 4px radius, graphite-tinted to match the desktop `tokens.css`).
- **FOUC prevention:** Theme is applied in a blocking inline script before DOM parse; language bootstrap also runs inline.
- **Animation rules:** button hover changes background/border color only (no translate/scale); the only motion is functional rotation (spinner, IPC rotate) and data-driven flow (particles, `.reveal` fade-ins ≤8px).

## Adding a new page section

1. Create the Astro component in `src/components/`.
2. If it needs interactivity, create a React island in `src/react/` and import it with the appropriate `client:*` directive.
3. Import and place it in `src/pages/index.astro`.
4. Add all UI strings to the `Translations` interface and both `zh`/`en` objects in `src/i18n/translations.ts`.
5. For static text, use `data-i18n="key"` attributes. For React text, use `useLanguage().t.key`.
6. Keep every color within the brand palette above — no blues, no cyan, no large purple surfaces.

## Updating data

- **Tools**: re-extract from the desktop `electron/tool-defs.ts` (71 tools, 15 dangerous) and keep `danger` aligned with `DANGEROUS_TOOLS` in `electron/ipc/tool-handlers.ts`.
- **Releases**: when the desktop app publishes a new version, update `src/data/releases.json` AND `public/releases.json` together, plus version badges in `Header.astro` / `Footer.astro` and `download_*` translations.

## Deployment

- GitHub Pages via `.github/workflows/deploy.yml` (builds with `BASE_PATH=/Auraxis-Agent-web/`).
- Cloudflare Pages: `npx wrangler pages deploy ./dist --project-name=auraxis-website` (static, no adapter needed).
