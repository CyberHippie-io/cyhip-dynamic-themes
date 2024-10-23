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

### Install cyhip-dynamic-themes

```
npm install cyhip-dynamic-themes
```

**Init base theme files**

In your project's root:

```
npx cyhip-dynamic-themes init
```

As a result, the following files are generated in the `/themes/` folder:

```
src/themes
├── hue-palettes.ts      # To set your available hue-based colors.
├── root.css             # To use as main css file.
└── theme-colors.ts      # To be included on your talwind.conf.ts.
└── theme-switcher.tsx   # An example of how theme switching can be done.
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

To apply those changes stop the app and run it again

### Add the root.css on your main tsx file.

To apply css styles connected to the themes defined for tailwind, you can directly add `themes/root.css` to your root tsx file. Or, copy the contents of `root.css` to your base `.css` file.

```tsx
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// import css here
// or ensure that your css applied here has the base structure of root.css
import "./themes/root.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
```

```bash
yarn && yarn dev
```

## Switching the main color dynamically.

Finally, the fun part! Switch the main palette by setting a selector for the colors.

This basic example demonstrates how you can do this.

Check the `theme-switcher` component to see how to initialize and alternate themes.

Finally, take a look at this example and see how we can combine the accent variable with tailwind classes like bg-accent-<value> and text-accent-<value>.

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
