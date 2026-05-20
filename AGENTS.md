# AGENTS.md — Project Trilemma

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check then bundle); run before deploy
- `npm run lint` — `eslint .` (flat config)
- `npm run preview` — Vite preview of built output
- No tests, no CI, no pre-commit hooks

## Architecture
- **React 19 + TypeScript 6.0 + Vite 8**, single-page app (no router; category state via `useState`)
- **Deploy:** Cloudflare Pages (`functions/api/` for serverless functions, `public/_redirects` for SPA fallback)
- **i18n:** Custom `LanguageContext` (`zh`/`en`), persisted to `localStorage` key `trilemma_lang`. Use `t()` for UI strings and `localize()` for data content
- **Data model:** All trilemma content is in `src/data/trilemmas.ts`; every localizable string is `{ zh: string, en: string }` (`LocalizedText`)
- **Styling:** CSS variables + `.glass-panel` class (no CSS framework); fonts imported via Google Fonts (`Outfit`, `Space Grotesk`)
- **Icons:** `lucide-react`

## Conventions
- `import type` for type-only imports (required by `verbatimModuleSyntax`)
- `FC` type from React for component props
- Inline styles for component-specific layout; CSS classes for shared glass/neon effects
- `export default function App` for root, `export const Component: FC<Props>` for others
- `eslint-disable` comments allowed at top for `react-refresh/only-export-components`

## TypeScript quirks
- `erasableSyntaxOnly: true` — no `enum`, no `namespace`, no `constructor parameter properties`
- `verbatimModuleSyntax: true` — type imports must use `import type`
- `noUnusedLocals` / `noUnusedParameters` — both on
- Two tsconfigs: `tsconfig.app.json` (src/) and `tsconfig.node.json` (config files)

## Directory structure
```
src/
├── main.tsx              — Entrypoint, wraps App in LanguageProvider
├── App.tsx               — Root layout, category filtering
├── index.css             — Global styles, CSS variables
├── context/LanguageContext.tsx — i18n provider + hook
├── data/
│   ├── trilemmas.ts      — All trilemma content (data-driven)
│   └── translations.ts   — UI string translations
├── components/
│   ├── Navbar.tsx        — Top nav with language toggle
│   ├── HeroSection.tsx   — Hero banner
│   ├── CategoryFilter.tsx— Category buttons
│   └── TrilemmaCard/     — Card: TrilemmaTriangle + TradeOffPanel + DimensionsPanel
└── assets/               — hero.png, react.svg, vite.svg
functions/api/feedback.ts — Cloudflare Functions endpoint (POST/OPTIONS)
public/
├── _redirects            — SPA catch-all: `/* /index.html 200`
├── favicon.svg
└── icons.svg
```
