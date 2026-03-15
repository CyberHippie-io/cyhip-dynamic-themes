export const installSnippet = `npm i cyhip-dynamic-themes`;

export const providerSnippet = `import { ThemeProvider } from "cyhip-dynamic-themes";
import { defaultTheme, themeStorage } from "./themes/theme.config";
import "./themes/root.css";

export function AppProviders({ children }) {
  return (
    <ThemeProvider themeConfig={defaultTheme} storage={themeStorage}>
      {children}
    </ThemeProvider>
  );
}`;

export const tailwindUsageSnippet = `<button className="bg-primary text-primary-foreground">
  Primary action
</button>

<div className="bg-secondary text-secondary-foreground">
  Secondary surface
</div>`;

export const cliSnippet = `npx cyhip-dynamic-themes init
# It generates /themes/root.css, /themes/theme.config.ts, etc`;
