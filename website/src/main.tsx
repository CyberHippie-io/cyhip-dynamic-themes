import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { ThemeConfig, ThemeProvider } from 'cyhip-dynamic-themes';
import './themes/root.css';
import { chromaData, hueScheme } from './themes/theme.config.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider
            themeConfig={
                {
                    hue: hueScheme.default,
                    mode: 'light',
                    chromaData: chromaData,
                } as ThemeConfig
            }
        >
            <App />
        </ThemeProvider>
    </StrictMode>
);
