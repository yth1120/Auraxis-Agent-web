# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Auraxis** marketing website — an Astro 4 landing page for the Auraxis desktop app (an Agentic coding assistant built on Electron with a unified ReAct step engine, multi-agent scheduling, Code Mode orchestration, native sandboxing, and MCP support). The site is bilingual (zh-CN / en), deployed to Cloudflare Pages in hybrid mode.

**Brand rule (strict):** Auraxis Black `#111216` (dark bg) / Ivory `#F1F1EE` (light bg / dark-mode text) + Aura gray-purple `#8C8AA8` used ONLY as ~3% accent (focus / selected / status dots). No blue, no large purple areas, no primary gradients. Radius tiers: 5/6/8/12/14/9999 only. Zero-movement animation: no button hover shift/scale, no modal open/close animations — only functional rotation and data-driven motion.

## Commands

```bash
npm run dev          # Start Astro dev server (equiv: npm start)
npm run build        # Production build (SSG for index + SSR API routes)
npm run preview      # Preview production build locally
npm run check        # Run astro check (TypeScript diagnostics, no emit)
```

No test suite is configured yet — `check` is the only validation step.

## Architecture

### Rendering model: Astro Hybrid

- **SSG (pre-rendered):** `src/pages/index.astro` (`prerender = true`) — the single-page landing page is statically generated at build time.
- **SSR (dynamic):** `src/pages/api/[...route].ts` (`prerender = false`) — all `/api/*` requests are delegated to a Hono app instance at runtime.
- **React islands:** Interactive components in `src/react/` are hydrated with `client:visible` or `client:idle` directives. They do **not** share a single React root — each `.astro` component imports the React islands it needs individually.

### API layer

```
Request → Astro catch-all (src/pages/api/[...route].ts)
        → Hono app (src/server/app.ts)
          ├── GET /api/health
          ├── /api/releases (src/server/routes/releases.ts)
          └── /api/tools   (src/server/routes/tools.ts)
```

- Hono is the API framework; routes are Cloudflare Workers-compatible.
- `src/server/app.ts` exports a `createApp()` factory — a fresh Hono instance per request.
- API responses follow the `ApiResponse<T>` contract defined in `src/types/index.ts`: `{ success, data?, error? }`.

### Data flow

- **Tool definitions** (`src/data/tools-data.json` + typed accessor `src/data/tools.ts`): 63 tools extracted from the desktop app's `electron/tool-defs.ts`. Each tool has `danger` (11 tools, aligned with `DANGEROUS_TOOLS` in `electron/ipc/tool-handlers.ts`), `category` (files/execution/terminal/web/planning/agent/background/session/capability/verify/interaction), `summary`, `concurrencySafe`, and `params` (top-level input schema property names).
- **Release info** (`src/data/releases.json`): v2.0.1 with real changelog and per-platform download assets (currently `#` placeholders until first public release), consumed by the SmartDownloader React island via `GET /api/releases/latest`.
- **Terminal simulation** (`src/data/simSteps.ts`): a sequence of `LogStep` objects modeling a full Auraxis ReAct loop (input → step-engine → plan → Glob/Read → permission → user-approved → Write → RunCode (Code Mode) → LSP → ReviewArtifact → `<FINAL_ANSWER>`).

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
| `src/types/index.ts` | All shared TypeScript types (mirrors desktop `electron/contracts/` semantics) |
| `src/data/tools-data.json` | Canonical 63-tool dataset (source of truth: desktop `electron/tool-defs.ts`) |
| `src/data/tools.ts` | Typed accessor over the dataset (ALL_TOOLS / DANGER_TOOLS / SAFE_TOOLS / TOOL_CATEGORIES) |
| `src/data/simSteps.ts` | Terminal demo step sequence |
| `src/server/app.ts` | Hono app factory with middleware and route mounting |
| `tailwind.config.mjs` | Brand design tokens (brand-black `#111216`, brand-accent `#8C8AA8`, brand-ivory `#F1F1EE`) |

### Styling conventions

- **Brand palette:** `brand-black` (#111216), `brand-dark` (#171822), `brand-card` (#1C1E28), `brand-border` (#262A35), `brand-accent` (#8C8AA8 "Aura gray-purple", ~3% accent only), `brand-ivory` (#F1F1EE), `brand-muted` (#9B9AAE), `brand-faint` (#6E6D82).
- **Typography:** System UI stack for sans (`-apple-system, Segoe UI, PingFang SC, Microsoft YaHei`), `SF Mono / JetBrains Mono / Fira Code / Consolas` for mono. No web font downloads. Weights: body 400, items/buttons 500, headings 600.
- **Radius tiers:** 5px / 6px (rounded-md) / 8px (rounded-lg) / 12px (rounded-xl) / 14px / 9999px (full). Never 3/4/7/9/10px.
- **Terminal aesthetic:** `.terminal-dark-box` and `.code-dark-box` utility classes force dark backgrounds regardless of theme, ensuring code readability.
- **Grid background:** `.grid-bg` class applies a 40px grid overlay with 1px lines at 2-3% opacity (accent-tinted in dark mode, ink-tinted in light mode).
- **Scrollbar:** Custom WebKit scrollbar styling (6px, rounded, accent-tinted).
- **FOUC prevention:** Theme is applied in a blocking inline script before DOM parse; language bootstrap also runs inline.
- **Animation rules:** button hover changes background/border color only (no translate/scale); the only motion is functional rotation (spinner, IPC rotate) and data-driven flow (terminal typing, architecture particles, `.reveal` fade-ins ≤8px).

### Adding a new page section

1. Create the Astro component in `src/components/`.
2. If it needs interactivity, create a React island in `src/react/` and import it with the appropriate `client:*` directive.
3. Import and place it in `src/pages/index.astro`.
4. Add all UI strings to the `Translations` interface and both `zh`/`en` objects in `src/i18n/translations.ts`.
5. For static text, use `data-i18n="key"` attributes. For React text, use `useLanguage().t.key`.
6. Keep every color within the brand palette above — no blues, no cyan, no large purple surfaces.
