import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

import { dynamicTwClasses } from "cyhip-dynamic-themes";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                accent: dynamicTwClasses("accent", 250),
                white: colors.white,
                destructive: colors.red,
                success: colors.green,
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
