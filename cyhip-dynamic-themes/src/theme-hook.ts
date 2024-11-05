import { getThemeProperties } from "./theme-helpers";
import { create } from 'zustand';
import { chromaData, ThemeConfig } from "./theme.config";


const updateTheme = (themeConfig: ThemeConfig): void => {
    const { className, style } = getThemeProperties(themeConfig.hue, themeConfig.mode === 'dark', themeConfig.chromaData);
    document.documentElement.className = className;
    document.documentElement.style.setProperty('--color-scheme', themeConfig.mode);
    Object.entries(style).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
};

type ThemeState = {
    theme: ThemeConfig;
    setTheme: (theme: ThemeConfig) => void;

};

const useTheme = create<ThemeState>((set, get) => ({
    theme: { hue: 250, mode: 'light', chromaData },
    setTheme: (theme: ThemeConfig) => {
        set({ theme });
        updateTheme(theme);
    },
    
}));

export { updateTheme, useTheme };
