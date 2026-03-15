'use client';
import { ThemeProvider } from 'cyhip-dynamic-themes';
import { defaultTheme, themeStorage } from './theme.config';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider themeConfig={defaultTheme} storage={themeStorage}>
            {children}
        </ThemeProvider>
    );
}
