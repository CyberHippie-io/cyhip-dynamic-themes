## Install and apply initial config

### Init a vite react ts app

**Create a new react-ts app with vite.**

```bash
yarn create vite my-app --template react ts
```

**Run the new app:**

```bash
yarn && yarn dev
```

### Init tailwindcss

**Install tailwindcss and its peer dependencies**

```bash
yarn add -D tailwindcss postcss autoprefixer
```

**Generate the tailwind.config.ts**

```
npx tailwind init --ts -p
```

**Create a `postcss.config.mjs` file as follows:**

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};

export default config;
```

### Init theme basic files

**Init base theme files**
`npx cyhip-dynamic-themes init`

As a result, the following files are generated in the themes folder:

```
src/themes
├── hue-palettes.ts
├── root.css
└── theme-colors.ts
```

These files contain everything you need to initialize the themes. From there, you can customize them as you wish.
Take a look at the description contained in each one

### Update tailwind.config.ts

To enable dynamic colors and dark mode, you should make your `tailwind.conf.ts` look like this:

```ts
// tailwind.conf.ts
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

### Add the root.css on your main tsx file.

To apply css styles connected to the themes defined for tailwind, you can directly add `themes/root.css` to your root tsx file. Or, copy the contents of `root.css` to your base `.css` file.

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./themes/root.css"; // import css here

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
```

To apply those changes stop the app and run it again

```bash
yarn && yarn dev
```

## Basic initialization on your app.

See how initialize themes adding this to your `App.tsx`.

```tsx
import { useState } from "react";
import { useColorTheme } from "../../../cyhip-dynamic-themes/dist/src/theme-hook";
import { hueScheme } from "./themes/hue-palettes";

function App() {
    // See themes/hue-scheme.ts try different values or add new ones.
    const hue = hueScheme.blue;
    const [darkMode, setDarkMode] = useState(false);

    useColorTheme(hue, darkMode);

    return (
        <>
            <main className="h-screen flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-4xl font-bold text-center">
                    Cyhip Dynamic Themes - Basic Usage
                </h1>
                <div className="flex flex-row space-x-4 border rounded-sm px-5 py-4">
                    <button
                        className="bg-accent-500 text-accent-50 px-4 py-1 text-sm rounded-ms"
                        onClick={() => setDarkMode(false)}
                    >
                        Light
                    </button>
                    <button
                        className="bg-accent-500 text-accent-50 px-4 py-1 text-sm rounded-ms "
                        onClick={() => setDarkMode(true)}
                    >
                        Dark
                    </button>
                </div>
            </main>
        </>
    );
}

export default App;
```

## Switching the main color dynamically.

Finally, the fun part! Switch the main palette by setting a selector for the colors.

This basic example demonstrates how you can do this.

In your `App.tsx` define the color samples using `consistentChroma` function.

Note that in this example the accent variable is combined with several tailwind classes, such as bg-, text-, ring-, etc.

```tsx
// App.tsx
import { useColorTheme } from "cyhip-dynamic-themes";
import { useState } from "react";
import { hueScheme } from "./themes/hue-palettes";

import { consistentChroma } from "cyhip-dynamic-themes";

const buildThemeSample = (hue: string, monoCromatic: boolean = false) => {
    const oklchA = `oklch(${consistentChroma(4, +hue, monoCromatic)})`;
    const oklchB = `oklch(${consistentChroma(5, +hue, monoCromatic)})`;
    const oklchC = `oklch(${consistentChroma(6, +hue, monoCromatic)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value, value === "-1");
        return acc;
    },
    {} as Record<string, string>
);

function App() {
    // See themes/hue-scheme.ts try different values or add new ones.
    const [hue, setHue] = useState(hueScheme.blue);
    const [darkMode, setDarkMode] = useState(false);
    useColorTheme(hue, darkMode);

    return (
        <>
            <main className="h-screen flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-4xl font-bold text-center">
                    Cyhip Dynamic Themes - Basic Usage
                </h1>
                <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-3 rounded-sm gap-2 p-6">
                    {Object.keys(availableThemes).map((key) => (
                        <button
                            key={key}
                            className="bg-background px-4 py-1 text-sm font-medium rounded-ms border flex space-x-2 hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setHue(hueScheme[key])}
                        >
                            <span
                                className="w-4 h-4 rounded-full"
                                style={{
                                    background: availableThemes[key],
                                }}
                            ></span>
                            <span>{key}</span>
                        </button>
                    ))}
                    <div className="col-span-3 grid grid-cols-2 gap-x-2 mx-auto">
                        <button
                            className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setDarkMode(false)}
                        >
                            Light
                        </button>
                        <button
                            className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setDarkMode(true)}
                        >
                            Dark
                        </button>
                    </div>
                </div>

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
