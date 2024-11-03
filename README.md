# cyhip-dynamic-themes

![cyhip-dynamic-themes minzip package size](https://img.shields.io/bundlephobia/minzip/cyhip-dynamic-themes)
[![Version](https://img.shields.io/npm/v/cyhip-dynamic-themes.svg?colorB=green)](https://www.npmjs.com/package/cyhip-dynamic-themes)

Implement dynamic color themes in your React apps with Tailwind CSS in a simple and practical way. This package also includes native support for dark mode.

## Examples

- **Vite + React-ts: [cyhip-dynamic-themes](https://cyhip-dynamic-themes.vercel.app/)**

- **Nextjs + React-ts: [cyhip-dynamic-themes-nextjs-example](https://cyhip-dynamic-themes-nextjs-example.vercel.app/)**

## Features

- **Dynamic Color Theming**: Allow your users to switch the color theme of your application in a simple and practical way.
- **Dark Mode Support**: Easily switch between light and dark modes across your custom themes.

Inspired by the excellent [article](https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic) by Dan Kozlov and Travis Turner, this package uses the library provided by them which provides a series of features for handling colors and defining dynamic css variables. Take a look at:. [https://github.com/dkzlv/tw-dynamic-themes](https://github.com/dkzlv/tw-dynamic-themes)

## How It Works?

`cyhip-dynamic-themes` simplifies theme setup with a unique approach:

- **Single Hue Input**: Define just the **Hue** value, and the package automatically generates all color variants across the spectrum.
- **Automatic Color Variants**: Unlike traditional methods, there’s no need to set up each shade manually—simply select a hue, and the package takes care of the rest.

- **Custom Hook for Dynamic Theme Switching**: Allow your users to switch themes dynamically with the `useColorTheme` hook.

## Installation

To install the package, run:

```bash
npm install cyhip-dynamic-themes
# or
yarn add cyhip-dynamic-themes
```

## Usage

### Prerequisites

Ensure you have Tailwind CSS installed in your project and the `tailwind.config.ts` and `postcss.config.mjs` files in your root directory.

### Initialize Theme basic files

In your project's root directory, run:

```bash
npx cyhip-dynamic-themes init
```

This command generates the following files in the `/themes/` folder:

```bash
/themes/
├── theme.config.ts.ts   # To set your available hue-based colors.
├── root.css             # Main CSS file for styling.
├── theme-colors.ts      # Includes color definitions for Tailwind.
└── theme-switcher.tsx   # Example component for theme switching.
```

### Update `tailwind.config.ts`

To enable dynamic colors and dark mode, modify your `tailwind.config.ts` as follows:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import { themeColors } from "./src/themes/theme-colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: themeColors,
    },
  },
  plugins: [],
} satisfies Config;
```

**Note:** After updating the configuration, restart your application to apply the changes.

### Import `root.css`

To apply CSS styles linked to the defined themes, add `/themes/root.css` to your root TSX file:

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Import CSS
import "./themes/root.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Theme Provider

Use the `ThemeProvider` to initialize a default theme.

```tsx
// src/main.tsx
import { ThemeConfig, ThemeProvider } from "cyhip-dynamic-themes";
import { chromaData, hueScheme } from "./themes/theme.config.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      themeConfig={
        {
          hue: hueScheme.default,
          mode: "light",
          chromaData: chromaData,
        } as ThemeConfig
      }
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

### Switching Themes Dynamically

Switching the main color palette can be done using the `ThemeSwitcher` component. Here's a basic example to illustrate its use:

```tsx
// App.tsx
import { ThemeSwitcher } from "./themes/theme-switcher";
function App() {
  return (
    <>
      <main className="h-screen flex flex-col justify-center items-center gap-y-14">
        <h1 className="text-4xl font-bold text-center">
          Cyhip Dynamic Themes - Basic Usage
        </h1>
        <ThemeSwitcher />
        <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
          <button className="bg-primary text-primary-foreground px-5 py-2 shadow rounded-sm font-medium mx-auto">
            Button
          </button>
          <samp className="bg-accent-950/80 text-accent-100/90 text-sm rounded-sm px-4 py-1 shadow">
            className="bg-primary text-primary-foreground ..."
          </samp>
        </div>
      </main>
    </>
  );
}

export default App;
```

Check the `/templates/theme-switcher.tsx` component to see how to initialize and alternate themes.

Finally, take a look on the last example and see how we can combine the accent variable with tailwind classes like `bg-accent-<value>` and `text-accent-<value>`.

## Defining Color Palettes Based on Hue

You can add or modify hue palettes by visiting [OKLCH Color Preview](https://oklch.com/). To change your hue values, edit the `/themes/hue-palettes.ts` file:

```ts
// themes/hue-palettes.ts
/**
 * HUE THEMES
 * Define the available color palettes here!
 */

const hueScheme: Record<string, string> = {
  white: "-1",
  blue: "250",
  green: "150",
  orange: "35",
  pink: "0",
  purple: "316",
};

export { hueScheme };
```

## API

### `Type ThemeConfig`

The `ThemeConfig` type represents the configuration settings for an application's theme, specifically controlling color and mode settings. This type provides key properties for determining color hues, dark or light mode, and chromatic adjustments based on a data record.

- **Properties:**

  - `hue`: `number`
    It determines the primary color base; if set to -1, the theme uses a white color based scheme.

  - `mode`: `'light' | 'dark'`
    Defines whether the theme is in "light" or "dark" mode. Acceptable

  - `chromaData`: `Record<number,number>`
    A record that maps specific numeric values to chroma levels. This data allows for dynamic chromatic adjustments, enabling fine-tuning of the theme's color saturation or intensity.

### `useColorTheme(theme: ThemeConfig)`

A custom hook that manages the application of color themes based on the provided HUE value and dark mode setting.

### `getThemeProperties(hue: number, darkMode: boolean, chromaData: Record<number,number>)`

Defines CSS class and style properties based on the provided HUE value and dark mode setting.

- **Parameters:**

  - `hue`

  - `darkMode`: A boolean indicating if dark mode is active.

  - `chromaData`

- **Returns:**

  - An object containing:
    - `className`: A string for dark mode ("dark") or an empty string for light mode.
    - `style`: A record of dynamically generated CSS variables for accent colors.

### `currentAccentValue(variableName: string)`

Retrieves the current value of a specified CSS variable from the root element.

- **Parameters**:

  - `variableName`: The name of the CSS variable to retrieve (e.g., "--accent-500").

- **Returns**: The OKLCH color value or `null` if not available.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
