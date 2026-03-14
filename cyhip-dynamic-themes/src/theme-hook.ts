import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { getThemeProperties } from './theme-helpers';
import { ThemeStorage } from './theme-storage';
import { chromaData, ThemeConfig, ThemeMode } from './theme.config';

const applyTheme = (themeConfig: ThemeConfig, storage?: ThemeStorage | null): void => {
    const { dataTheme, style } = getThemeProperties(themeConfig);
    document.documentElement.setAttribute('data-theme', dataTheme);
    Object.entries(style).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });

    if (storage) {
        storage.save(themeConfig);
    }
};

type ThemeState = {
    theme: ThemeConfig;
    storage: ThemeStorage | null;
    setStorage: (storage: ThemeStorage | null) => void;
    setTheme: (theme: ThemeConfig) => void;
    setThemeHue: (hue: number) => void;
    setThemeMode: (mode: ThemeMode) => void;
};

const useTheme = create<ThemeState>((set) => ({
    theme: { hue: 250, mode: 'light', chromaData: chromaData },
    storage: null,
    setTheme: (theme: ThemeConfig) => {
        set((state) => {
            applyTheme(theme, state.storage);
            return { theme };
        });
    },

    setStorage: (storage: ThemeStorage | null) => {
        set({ storage });
    },

    setThemeHue: (hue: number) => {
        set((state) => {
            const theme = { ...state.theme, hue };
            applyTheme(theme, state.storage);
            return { theme };
        });
    },

    setThemeMode: (mode: ThemeMode) => {
        set((state) => {
            const theme = { ...state.theme, mode };
            applyTheme(theme, state.storage);
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
