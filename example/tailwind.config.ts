import { dynamicTwClasses } from "cyhip-dynamic-themes";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

/**
 * The palettes are based on HUE values.
 * To add or modify a HUE palette, explore and preview colors at:
 * https://oklch.com/#70,0.1,250,100
 */
const hue = 250;

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                // init accent tw vars
                accent: dynamicTwClasses("accent", hue),
                // Other palettes
                white: colors.white,
                danger: colors.red,
                success: colors.green,
                // Your theme vars
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;
