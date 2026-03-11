import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { getThemeProperties } from './theme-helpers';
import { saveStoredTheme } from './theme-storage';
import { chromaData, ThemeConfig, ThemeMode } from './theme.config';

const applyTheme = (themeConfig: ThemeConfig, enableStorage: boolean = true): void => {
    const { dataTheme, style } = getThemeProperties(themeConfig);
    document.documentElement.setAttribute('data-theme', dataTheme);
    Object.entries(style).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });

    if (enableStorage) {
        saveStoredTheme(themeConfig);
    }
};

type ThemeState = {
    theme: ThemeConfig;
    setTheme: (theme: ThemeConfig, enableStorage?: boolean) => void;
    setThemeHue: (hue: number, enableStorage?: boolean) => void;
    setThemeMode: (mode: ThemeMode, enableStorage?: boolean) => void;
};

const useTheme = create<ThemeState>((set) => ({
    theme: { hue: 250, mode: 'light', chromaData: chromaData },
    setTheme: (theme: ThemeConfig, enableStorage: boolean = true) => {
        set({ theme });
        applyTheme(theme, enableStorage);
    },
    setThemeHue: (hue: number, enableStorage: boolean = true) => {
        set((state) => {
            const theme = { ...state.theme, hue };
            applyTheme(theme, enableStorage);
            return { theme };
        });
    },
    setThemeMode: (mode: ThemeMode, enableStorage: boolean = true) => {
        set((state) => {
            const theme = { ...state.theme, mode };
            applyTheme(theme, enableStorage);
            return { theme };
        });
    },
}));

/* selectors (derived hooks) */
const themeModeSelector = (s: ThemeState) => ({
    mode: s.theme.mode,
    setThemeMode: s.setThemeMode,
});
const themeHueSelector = (s: ThemeState) => ({
    hue: s.theme.hue,
    setThemeHue: s.setThemeHue,
});

const useThemeMode = () => useTheme(useShallow(themeModeSelector));
const useThemeHue = () => useTheme(useShallow(themeHueSelector));

export { useTheme, useThemeHue, useThemeMode };
