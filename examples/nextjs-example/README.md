# Cyhip Dynamic Themes - Next.js Example

Modern dashboard-style demo built with Next.js and `cyhip-dynamic-themes`.

## What this example demonstrates

- Runtime hue switching (default, blue, green, orange, pink, purple)
- Light/Dark mode toggle
- Semantic token mapping (`primary`, `secondary`, `background`, `foreground`, etc.)
- `shadcn/ui` components using dynamic theme tokens
- Single-page layout with:
  - Header + Navbar
  - Dashboard content (KPI cards, chart block, table, activity)
  - UI showcase (buttons, badges, tabs)
  - Form demo (input/select/switch)
  - Footer placeholder

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Relevant files

- `app/page.tsx`: full demo layout and sections
- `themes/theme-switcher.tsx`: theme controls (compact and full variants)
- `themes/root.css`: dynamic token mapping and base styles
- `themes/theme.config.ts`: hue scheme, chroma config, and default theme
- `app/layout.tsx`: global provider, metadata and typography

## Build and lint

```bash
pnpm lint
pnpm build
```
