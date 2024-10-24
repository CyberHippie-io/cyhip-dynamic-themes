import type { Config } from "tailwindcss";
import { themeColors } from "./src/themes/theme-colors";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-family)"],
            },
            colors: themeColors,
            // Shadows
            boxShadow: {
                sm: "0 1px 2px 0 var(--box-shadow)",
                DEFAULT:
                    "0 1px 3px 0 var(--box-shadow), 0 1px 2px -1px var(--box-shadow)",
                md: "0 4px 6px -1px var(--box-shadow), 0 2px 4px -2px var(--box-shadow)",
                lg: "0 10px 15px -3px var(--box-shadow), 0 4px 6px -4px var(--box-shadow)",
                xl: "0 20px 25px -5px var(--box-shadow), 0 8px 10px -6px var(--box-shadow)",
                "2xl": "0 25px 50px -12px var(--box-shadow)",
                inner: "inset 0 2px 4px 0 var(--box-shadow)",
            },
            dropShadow: {
                sm: "0 1px 1px var(--box-shadow)",
                DEFAULT: [
                    "0 1px 2px var(--box-shadow)",
                    "0 1px 1px var(--box-shadow)",
                ],
                md: [
                    "0 4px 3px var(--box-shadow)",
                    "0 2px 2px var(--box-shadow)",
                ],
                lg: [
                    "0 10px 8px var(--box-shadow)",
                    "0 4px 3px var(--box-shadow)",
                ],
                xl: [
                    "0 20px 13px var(--box-shadow)",
                    "0 8px 5px var(--box-shadow)",
                ],
                "2xl": "0 25px 25px var(--box-shadow)",
                none: "0 0 #000",
            },
        },
        animation: {
            pulseA: "pulse 6s infinite",
            pulseB: "pulse 9s infinite",
        },
    },
    plugins: [],
} satisfies Config;
