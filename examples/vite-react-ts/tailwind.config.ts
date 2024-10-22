import type { Config } from "tailwindcss";
import { themeColors } from "./src/themes/theme-colors";

export default {
    content: ["./index.html", "./src\\**\\*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: themeColors,
        },
    },
    plugins: [],
} satisfies Config;
