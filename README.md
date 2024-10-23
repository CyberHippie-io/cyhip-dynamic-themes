# cyhip-dynamic-themes

![cyhip-dynamic-themes minzip package size](https://img.shields.io/bundlephobia/minzip/cyhip-dynamic-themes)
[![Version](https://img.shields.io/npm/v/cyhip-dynamic-themes.svg?colorB=green)](https://www.npmjs.com/package/cyhip-dynamic-themes)

**Dynamically switch color themes in your React + TypeScript + Tailwind CSS apps.**

## Features

-   **Dynamic Color Theming**: Utilize OKLCH colors for vibrant and accurate color representations.
-   **Dark Mode Support**: Easily switch between light and dark modes across your custom themes.

Inspired by the excellent [article](https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic) by Dan Kozlov and Travis Turner, this package integrates seamlessly with their [tw-dynamic-themes](https://github.com/dkzlv/tw-dynamic-themes) library to manage dynamic CSS variables effectively.

## Installation

To install the package, run:

```bash
npm install cyhip-dynamic-themes
# or
yarn add cyhip-dynamic-themes
```

## Usage

### Prerequisites

Ensure you have Tailwind CSS installed in your project and a tailwind.config.ts file in your root directory.

### Initialize Theme basic files

In your project's root directory, run:

```bash
npx cyhip-dynamic-themes init
```

This command generates the following files in the `/themes/` folder:

```bash
/themes/
├── hue-palettes.ts      # To set your available hue-based colors.
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

### Switching Themes Dynamically

Switching the main color palette can be done using the `ThemeSwitcher` component. Here's a basic example to illustrate its use:

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

## Defining Color Palettes Based on Hue

You can add or modify hue palettes by visiting [OKLCH Color Preview](https://oklch.com/). To change your hue values, edit the `/themes/hue-palettes.ts` file:

```ts
// themes/hue-palettes.ts
/**
 * HUE THEMES
 * Define the available color palettes here!
 */

const hueScheme: Record<string, string> = {
    monoCromatic: "-1",
    blue: "250",
    green: "150",
    orange: "35",
    pink: "0",
    purple: "316",
};

export { hueScheme };
```

## API

### `useColorTheme(hue: string, darkMode: boolean)`

A custom hook that manages the application of color themes based on the provided HUE value and dark mode setting.

-   **Note**: Dispatches a custom event themeChange when the theme changes.

### `getThemeProperties(hue: string, darkMode: boolean)`

Defines CSS class and style properties based on the provided HUE value and dark mode setting.

-   **Parameters:**

    -   `hue`: A string representing the hue value. If -1, the theme is monochromatic.

    -   `darkMode`: A boolean indicating if dark mode is active.

-   **Returns:**

    -   An object containing:
        -   `className`: A string for dark mode ("dark") or an empty string for light mode.
        -   `style`: A record of dynamically generated CSS variables for accent colors.

### `currentAccentValue(variableName: string)`

Retrieves the current value of a specified CSS variable from the root element.

-   **Parameters**:

    -   `variableName`: The name of the CSS variable to retrieve (e.g., "--accent-500").

-   **Returns**: The OKLCH color value or `null` if not available.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
