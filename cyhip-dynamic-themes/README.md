# cyhip-dynamic-themes

![cyhip-dynamic-themes minzip package size](https://img.shields.io/bundlephobia/minzip/cyhip-dynamic-themes)
[![Version](https://img.shields.io/npm/v/cyhip-dynamic-themes.svg?colorB=green)](https://www.npmjs.com/package/cyhip-dynamic-themes)

Implement dynamic color themes in your React apps with Tailwind CSS in a simple and practical way. This package also includes native support for dark mode.

## Examples

- **Vite + React-ts: [cyhip-dynamic-themes](https://cyhip-dynamic-themes.vercel.app/)**

## Features

- **Dynamic Color Theming**: Allow your users to switch the color theme of your application in a simple and practical way.
- **Dark Mode Support**: Easily switch between light and dark modes across your custom themes.

Inspired by the excellent [article](https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic) by Dan Kozlov and Travis Turner, this package uses the library provided by them which provides a series of features for handling colors and defining dynamic CSS variables. Take a look at: [https://github.com/dkzlv/tw-dynamic-themes](https://github.com/dkzlv/tw-dynamic-themes)

## How It Works?

`cyhip-dynamic-themes` simplifies theme setup with a unique approach:

- **Single Hue Input**: Define just the **Hue** value, and the package automatically generates all color variants across the spectrum.
- **Automatic Color Variants**: Unlike traditional methods, there’s no need to set up each shade manually -- simply select a hue, and the package takes care of the rest.

- **Custom Hooks for Dynamic Theme Switching**: Switch themes dynamically with `useTheme`, `useThemeHue`, and `useThemeMode`.

## Installation

To install the package, run:

```bash
npm install cyhip-dynamic-themes
# or
yarn add cyhip-dynamic-themes
```

## Usage

### Prerequisites

Ensure you have Tailwind CSS v4 installed in your project.

### Initialize theme files

In your project's root directory, run:

```bash
npx cyhip-dynamic-themes init
```

This command generates the following files in the `/themes/` folder:

```bash
/themes/
├── app-theme-provider.tsx   # Wraps ThemeProvider for your app.
├── root.css                 # Tailwind v4 tokens + theme mapping.
├── theme.config.ts          # Theme palette + defaults.
└── theme-switcher.tsx       # Example component for theme switching.
```

### Import `root.css`

To apply the Tailwind v4 tokens and theme mapping, import `/themes/root.css` in your root file.

```tsx
// src/main.tsx (Vite)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppThemeProvider } from './themes/app-theme-provider.tsx';
import './themes/root.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppThemeProvider>
            <App />
        </AppThemeProvider>
    </StrictMode>,
);
```

### Theme Provider

Use the `ThemeProvider` to initialize a default theme and optional storage.

```tsx
// themes/app-theme-provider.tsx
'use client';

import { ThemeProvider } from 'cyhip-dynamic-themes';
import { defaultTheme, themeStorage } from './theme.config';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider themeConfig={defaultTheme} storage={themeStorage}>
            {children}
        </ThemeProvider>
    );
}
```

### Switching Themes Dynamically

Switch the main color palette and mode using `useThemeHue()` and `useThemeMode()`.

```tsx
// src/themes/theme-switcher.tsx
import { availableThemes, hueScheme } from './theme.config';
import { useThemeHue, useThemeMode } from 'cyhip-dynamic-themes';
import { useMemo } from 'react';

export function ThemeSwitcher() {
    return (
        <div className="auto-cols grid grid-flow-row gap-2">
            <div className="rounded border">
                <ColorPaletteMenu />
            </div>
            <div>
                <ThemeModeMenu />
            </div>
        </div>
    );
}

function ColorPaletteMenu() {
    const { hue, setThemeHue } = useThemeHue();

    const selected = useMemo(
        () => Object.keys(hueScheme).find((key) => hueScheme[key] === hue) ?? null,
        [hue],
    );

    return (
        <div className="m-3 grid auto-cols-max grid-flow-col gap-4">
            {Object.keys(availableThemes).map((key) => (
                <button
                    type="button"
                    key={key}
                    className="relative cursor-pointer"
                    onClick={() => setThemeHue(hueScheme[key])}
                >
                    {selected === key && (
                        <span className="border-accent-400 absolute -inset-1 block h-8 w-8 rounded-full border-2" />
                    )}
                    <span
                        className="block h-6 w-6 rounded-full"
                        style={{ background: availableThemes[key] }}
                    />
                </button>
            ))}
        </div>
    );
}

function ThemeModeMenu() {
    const { mode, setThemeMode } = useThemeMode();

    const btnStyle = 'border px-2 py-2 rounded-md cursor-pointer hover:ring-1';
    return (
        <div className="m-2 flex justify-center gap-4">
            <button
                type="button"
                className={`${btnStyle} ${mode === 'light' ? 'ring-1' : ''}`}
                onClick={() => setThemeMode('light')}
            >
                Light
            </button>
            <button
                type="button"
                className={`${btnStyle} ${mode === 'dark' ? 'ring-1' : ''}`}
                onClick={() => setThemeMode('dark')}
            >
                Dark
            </button>
        </div>
    );
}
```

```tsx
// src/App.tsx
import { ThemeSwitcher } from './themes/theme-switcher';

export default function App() {
    return (
        <>
            <main className="flex h-screen flex-col items-center justify-center gap-y-14">
                <h1 className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
                    Cyhip Dynamic Themes
                </h1>
                <ThemeSwitcher />
                <div className="grid grid-cols-1 gap-6 p-4">
                    <button className="bg-primary text-primary-foreground mx-auto rounded-sm px-5 py-2 font-medium shadow">
                        Button
                    </button>
                </div>
            </main>
        </>
    );
}
```

See `dev-apps/test-app/src/themes/theme-switcher.tsx` for a compact example with both hue and mode toggles.

Finally, take a look at the example above and see how we can combine the accent variable with tailwind classes like `bg-accent-<value>` and `text-accent-<value>`.

## Defining Color Palettes Based on Hue

You can add or modify hue palettes by visiting [OKLCH Color Preview](https://oklch.com/). To change your hue values, edit `/themes/theme.config.ts`:

```ts
// themes/theme.config.ts
/**
 * HUE THEMES
 * Define the available color palettes here!
 */

export const hueScheme: Record<string, number> = {
    default: -1,
    blue: 250,
    green: 150,
    orange: 35,
    pink: 0,
    purple: 316,
};
```

## API

### `Type ThemeConfig`

The `ThemeConfig` type represents the configuration settings for an application's theme, specifically controlling color and mode settings. This type provides key properties for determining color hues, dark or light mode, and chromatic adjustments based on a data record.

- **`hue: number`** Determines the primary color base. If set to `-1`, the theme uses a white-based palette.
- **`mode: 'light' | 'dark'`** Controls light or dark mode.
- **`chromaData: Record<number, number>`** Maps shade numbers to chroma values for generating color scales.

### `Type ThemeMode`

Type alias for `'light' | 'dark'`.

### `Type ThemeColor`

Type alias for the numeric hue value.

### `useTheme()`

State hook with `setTheme`, plus granular setters `setThemeHue` and `setThemeMode`.

### `useThemeHue()`

Derived hook to read and update only the hue.

### `useThemeMode()`

Derived hook to read and update only the mode.

### `ThemeProvider`

React provider that applies theme settings and optionally loads/saves user preferences via storage.

### `ThemeStorage` and `defaultThemeStorage`

`ThemeStorage` defines `load()` and `save()` for persisting user theme settings. `defaultThemeStorage` uses `localStorage`.

### `getThemeProperties(themeConfig: ThemeConfig)`

Returns `{ dataTheme, style }` where `dataTheme` is `'light' | 'dark'` and `style` maps `--accent-*` CSS variables.

### `currentAccentValue(variableName: string)`

Returns the current OKLCH value for a CSS variable from `:root`, or `null` if not available.

## Tailwind v4 and Dark Mode Notes

- Theme tokens and semantic colors are defined in `themes/root.css` using `@theme inline`.
- Dark mode is controlled via `data-theme="dark" | "light"` on the root element, not `class="dark"`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
