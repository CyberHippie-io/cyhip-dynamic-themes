const rootCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
 * This is how your global.css or index.css should look like. 
 *
 * To see how to apply this variables declared here on tailwind
 * check ./theme-colors.ts properties examples.
 * 
 */

@layer base {
    :root {
        /* oklch vars - Applied by dynamic accent colors */
        --background: oklch(var(--accent-100));
        --foreground: oklch(var(--accent-900));
        --primary: oklch(var(--accent-500));
        --primary-foreground: oklch(var(--accent-50));
        --secondary: oklch(var(--accent-800));
        --secondary-foreground: oklch(var(--accent-200));
        --ring: oklch(var(--accent-500));
        --box-shadow: oklch(var(--accent-800) / 0.15);
        --border: oklch(var(--accent-900) / 0.2);
        /* hsl vars */
        --muted: hsl(240 4.8% 95.9%);
        --muted-foreground: hsl(240 3.8% 45%);
        --input: hsl(240 5.9% 80%);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @apply outline-accent-500 dark:outline-accent-400;
    }
    *,
    :after,
    :before {
        border-color: theme("colors.border");
    }
}

.dark {
    /* oklch vars - Applied by dynamic accent colors */
    --background: oklch(var(--accent-900));
    --foreground: oklch(var(--accent-100));
    --primary: oklch(var(--accent-500));
    --primary-foreground: oklch(var(--accent-50));
    --box-shadow: oklch(var(--accent-100) / 0.15);
    --border: oklch(var(--accent-100) / 0.4);

    /* hsl vars */
    --muted: hsl(240 4.8% 30%);
    --muted-foreground: hsl(240 3.8% 70%);
}

body {
    background-color: var(--background);
    color: var(--foreground);
}
`;

export default rootCss;
