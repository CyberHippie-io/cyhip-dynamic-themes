'use client'; // enable for next
import { useLayoutEffect, useState } from 'react';
import { useTheme } from './theme-hook';
import { ThemeStorage } from './theme-storage';
import { ThemeConfig } from './theme.config';

interface ThemeProviderProps {
    children: React.ReactNode;
    themeConfig: ThemeConfig;
    storage?: ThemeStorage;
}

function ThemeProvider({ children, themeConfig, storage }: ThemeProviderProps) {
    const { setStorage, setTheme } = useTheme();
    const [ready, setReady] = useState(false);

    useLayoutEffect(() => {
        let theme: ThemeConfig = themeConfig;

        setStorage(storage ?? null);

        if (storage) {
            const stored = storage.load();
            if (stored) {
                theme = {
                    ...themeConfig,
                    ...stored,
                };
            }
        }

        setTheme(theme);
        setReady(true);
    }, [themeConfig, storage, setTheme]);

    if (!ready) return null;

    return <>{children}</>;
}

export { ThemeProvider };
