'use client'; // enable on Nextjs

import { updateTheme, useTheme } from './theme-hook';
import React, { useEffect, useState, type ReactNode } from 'react';
import { ThemeConfig } from './theme.config';

interface ThemeProviderProps {
    children: ReactNode;
    themeConfig: ThemeConfig;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeConfig }) => {
    const { theme } = useTheme();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            setIsInitialized(true);
            updateTheme(themeConfig);
        }
    }, [theme, isInitialized]);

    if (!isInitialized) return null;

    return <>{children}</>;
};

export { ThemeProvider };
