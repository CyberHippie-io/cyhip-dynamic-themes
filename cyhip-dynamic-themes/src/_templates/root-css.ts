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
        --background: var(--accent-50);
        --foreground: var(--accent-900);
        --primary: var(--accent-500);
        --primary-foreground: var(--accent-50);
        --secondary: var(--accent-200);
        --secondary-foreground: var(--accent-900);
        --ring: oklch(var(--accent-500) / 0.2);
        --box-shadow: oklch(var(--accent-800) / 0.15);
        --border: oklch(var(--accent-950) / 0.2);
        /* hsl vars */
        --muted: hsl(240 4.8% 95.9% / 0.6);
        --muted-foreground: hsl(240 3.8% 65%);
        --input: hsl(240 5.9% 90% / 0.5);
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
        border-color: theme('colors.border');
    }
}

.dark {
    /* oklch vars - Applied by dynamic accent colors */
    --background: var(--accent-950);
    --foreground: var(--accent-100);
    --primary: var(--accent-500);
    --primary-foreground: var(--accent-50);
    --secondary: var(--accent-800);
    --secondary-foreground: var(--accent-200);
    --box-shadow: oklch(var(--accent-100) / 0.1);
    --border: oklch(var(--accent-100) / 0.25);

    /* hsl vars */
    --muted: hsl(240 4.8% 25% / 0.7);
    --muted-foreground: hsl(240 3.8% 70%);
    --input: hsl(240 5.9% 80% / 0.8);
}

body {
    @apply bg-background dark:bg-background;
    @apply text-foreground;
    overflow-x: hidden;
}

`;

export default rootCss;
