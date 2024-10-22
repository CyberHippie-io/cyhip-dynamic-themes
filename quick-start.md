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

All files here can be modified as you wish. Read the **description** of each one in **their respective files**.

### Update global css file.

update your project's **global css** with the contents of `./theme/root.css`

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

node:internal/modules/esm/resolve:257
throw new ERR_MODULE_NOT_FOUND(
^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '...caminho.../cyhip-dynamic-themes/cyhip-dynamic-themes/dist/src/\_templates/hue-palettes' imported from ...caminho.../cyhip-dynamic-themes/cyhip-dynamic-themes/dist/src/cli.js
at finalizeResolution (node:internal/modules/esm/resolve:257:11)
at moduleResolve (node:internal/modules/esm/resolve:914:10)
at defaultResolve (node:internal/modules/esm/resolve:1038:11)
at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:554:12)
at ModuleLoader.resolve (node:internal/modules/esm/loader:523:25)
at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:246:38)
at ModuleJob.\_link (node:internal/modules/esm/module_job:126:49) {
code: 'ERR_MODULE_NOT_FOUND',
url: 'file://...caminho.../cyhip-dynamic-themes/cyhip-dynamic-themes/dist/src/\_templates/hue-palettes'
}

Node.js v22.8.0
