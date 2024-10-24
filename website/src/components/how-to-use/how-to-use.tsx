import { cn } from "~/lib/utils";
import styles from "./how-to-use.module.css";
const HowToUse = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(props.className, styles.howtouse)}>
            <div>
                <h1 className="text-3xl font-bold drop-shadow">Installation</h1>
                <p>Install the package via npm, pnpm, or yarn.</p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{install}</pre>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow">
                    Init theme files
                </h1>
                <p>Initialize your base theme files.</p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{initbasefiles}</pre>
                </div>
                <p>
                    This command generates the following files in the
                    <span className="code-inline"> /themes/ </span>
                    folder:
                </p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{basefilesStructure}</pre>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow">
                    Update your tailwind.config.ts
                </h1>
                <p>
                    To enable dynamic colors and dark mode, modify your
                    <span className="code-inline"> tailwind.config.ts </span> as
                    follows:
                </p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{tailwindcfg}</pre>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow">
                    Import root.css in your app.
                </h1>
                <p>
                    Import{" "}
                    <span className="code-inline"> /themes/root.css </span>
                    into your root TSX file:
                </p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{appbase}</pre>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow">Usage</h1>
                <p>
                    Switch your app theme colors dynamically with
                    <span className="code-inline"> {"<ThemeSwitcher />"} </span>
                    component.
                </p>
                <div className={cn(styles.codeblock, "")}>
                    <pre>{code}</pre>
                </div>
                <p>
                    That's it! Now just adapt your themes following the
                    structure of the theme's base files.
                </p>
            </div>
        </div>
    );
};

const install = `npm install cyhip-dynamic-themes
or 
yarn add cyhip-dynamic-themes
`;

const initbasefiles = `npx cyhip-dynamic-themes init`;

const basefilesStructure = `/themes/
├── hue-palettes.ts      # To set your available hue-based colors.
├── root.css             # Main CSS file for styling.
├── theme-colors.ts      # Includes color definitions for Tailwind.
└── theme-switcher.tsx   # An example of a theme switching component.
`;

const tailwindcfg = `// tailwind.config.ts
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
} satisfies Config;`;

const appbase = `// Your base tsx: main.tsx | index.tsx | app.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Import CSS
import "./themes/root.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);`;

const code = `
// App.tsx
import { ThemeSwitcher } from "./themes/theme-switcher";
function App() {
    return (
        
        <main className="h-screen flex flex-col justify-center items-center gap-y-14">
            <ThemeSwitcher />
            <div className="bg-accent-200/40 dark:bg-accent-700/40 p-4">
                <button className="bg-accent-500 text-accent-100 px-5 py-2 shadow rounded-sm font-medium mx-auto">
                    Button
                </button>
            </div>
        </main>
    
    );
}

export default App;
`;

export { HowToUse };
