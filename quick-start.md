## How to use

```bash
yarn add cyhip-dynamic-themes
```

### Init Base template files.

In your project's root directory:

```bash
npx cyhip-dynamic-themes init
```

And You will get a result like:

```
Default files created in "./themes".
  - Set your color palettes in "./themes/hue-palettes.ts".
  - Customize your theme in "./themes/root.css".
  - See how to enable accent vars on tailwind.config.ts on "./color-themes.ts".
```

All files here can be modified as you wish. Read the description of each one in their respective files.

### Update your tailwind.config.ts file.

```ts
import type { Config } from "tailwindcss";
import { themeColors } from "./theme/colors";
export default {
   content: ["./index.html", "./src/** /*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
       extend: {
           colors: themeColors,
           ...
       },
   },
   plugins: [],
} satisfies Config;
```

### Update your global css file.
