/**
 * COLORS
 * 
 * You can use this on tailwindcss.config.ts as follows:
 * 
 *  import { themeColors } from "./theme/colors";
 *  
 *  export default {
 *     content: ["./index.html", "./src/** /*.{js,ts,jsx,tsx}"],
 *     darkMode: "class",
 *     theme: {
 *         extend: {
 *             colors: themeColors,
 *             ...
 *         },
 *     },
 *     plugins: [],
 *  } satisfies Config;
 *
 * 
 */

import colors from "tailwindcss/colors";
import { dynamicTwClasses } from "cyhip-dynamic-themes";

export const themeColors = {
    // accent vars to allow dynamic color changes
    accent: dynamicTwClasses("accent", 250),
    // static colors as you wish...
    white: colors.white,
    destructive: colors.red,
    success: colors.green,
    /**
     * You can customize this css vars based on accent values.
     * Take a look at root.css
     */
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
    },
    secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--foreground)",
    },
    muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)",
    },
    border: "var(--border)",
    ring: "var(--ring)",
    input: "var(--input)",
};