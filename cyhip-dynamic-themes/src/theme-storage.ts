import { ThemeConfig } from './theme.config';

const STORAGE_KEY = 'app-theme';

type StorageTheme = {
    mode: 'light' | 'dark';
    hue: number;
};

export const loadStoredTheme = (): Partial<StorageTheme> | null => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch {
        return null;
    }
};

export const saveStoredTheme = (theme: ThemeConfig) => {
    const data = {
        mode: theme.mode,
        hue: theme.hue,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
