const themeColors = `

/**
 * COLORS
 *
 * You can use this on tailwindcss.config.ts as follows:
 *
 *   import type { Config } from "tailwindcss";
 *   import { themeColors } from "./src/themes/theme-colors";
 *
 *   export default {
 *       content: ["./index.html", ".\src\**\*.{js,ts,jsx,tsx}"],
 *       darkMode: "class",
 *       theme: {
 *           extend: {
 *               colors: themeColors,
 *           },
 *       },
 *       plugins: [],
 *   } satisfies Config;
 *
 *
 */

import { dynamicTwClasses } from 'cyhip-dynamic-themes';
import colors from 'tailwindcss/colors';
import { hueScheme } from './theme.config';

export const themeColors = {
    // accent vars to allow dynamic color changes
    accent: dynamicTwClasses('accent', hueScheme.default),
    // static colors as you wish...
    white: colors.white,
    destructive: colors.red,
    success: colors.green,
    /**
     * You can customize this css vars based on accent values.
     * Take a look at root.css
     */
    background: 'oklch(var(--background) / <alpha-value>)',

    foreground: 'oklch(var(--foreground) / <alpha-value>)',
    primary: {
        DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
        foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
    },
    secondary: {
        DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
        foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
    },
    muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
    },
    border: 'var(--border)',
    ring: 'var(--ring)',
    input: 'var(--input)',
};

`;

export default themeColors;
