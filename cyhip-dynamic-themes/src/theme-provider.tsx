'use client'; // enable for next
import React, { useLayoutEffect, type ReactNode } from 'react';
import { useTheme } from './theme-hook';
import { ThemeConfig } from './theme.config';

interface ThemeProviderProps {
    children: ReactNode;
    themeConfig: ThemeConfig;
    enableStorage?: boolean;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    themeConfig,
    enableStorage = true,
}) => {
    const { setTheme } = useTheme();

    useLayoutEffect(() => {
        setTheme(themeConfig, enableStorage);
    }, [themeConfig, enableStorage, setTheme]);

    return <>{children}</>;
};

export { ThemeProvider };
