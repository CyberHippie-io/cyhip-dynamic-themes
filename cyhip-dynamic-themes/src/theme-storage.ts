import { ThemeConfig } from './theme.config';

const STORAGE_KEY = 'app-theme';

type ThemeStorageData = {
    mode: 'light' | 'dark';
    hue: number;
};

const loadStoredTheme = (): ThemeStorageData | null => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch {
        return null;
    }
};

const saveStoredTheme = (theme: ThemeConfig) => {
    const data = {
        mode: theme.mode,
        hue: theme.hue,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export type ThemeStorage = {
    load: () => ThemeStorageData | null;
    save: (theme: ThemeConfig) => void;
};

export const defaultThemeStorage: ThemeStorage = {
    load: loadStoredTheme,
    save: saveStoredTheme,
};
