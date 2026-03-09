const themeConfig = `
/**
 * HUE THEMES
 *
 * Define the available color palettes here!
 *
 * The palettes are based on HUE values.
 *
 * To add or modify a HUE palette, explore and preview colors at:
 * https://oklch.com/#70,0.1,250,100
 *
 */

import { loadStoredTheme, type ThemeConfig } from 'cyhip-dynamic-themes';

export const hueScheme: Record<string, number> = {
    default: -1,
    blue: 250,
    green: 150,
    orange: 35,
    pink: 0,
    purple: 316,
};

/**
 *
 * Default Chroma for each shade available on theme. See more at:
 * https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic
 *
 */
export const chromaData: Record<number, number> = {
    0: 0.0108,
    1: 0.0121,
    2: 0.0609,
    3: 0.0908,
    4: 0.1398,
    5: 0.1472,
    6: 0.1299,
    7: 0.1067,
    8: 0.0898,
    9: 0.0726,
    10: 0.005,
};

/**
 * Default theme configuration used by the application.
 *
 * This serves as the base theme when the app initializes.
 * If theme storage is enabled and a user preference exists,
 * the stored values will override these defaults.
 *
 * You can customize this object to define the initial
 * color hue, mode (light/dark), and chroma settings
 * used throughout your application.
 */
const defaultTheme: ThemeConfig = {
    hue: 250,
    mode: 'light',
    chromaData: chromaData,
};

/**
 * Controls whether the library should manage theme persistence
 * using its built-in local-storage handler.
 *
 * When enabled, the user's theme preferences (hue and mode)
 * are automatically saved and restored using the internal
 * storage utilities provided by 'cyhip-dynamic-themes'.
 *
 * If you prefer to manage persistence yourself (for example,
 * using your own storage strategy or server-side logic),
 * you can disable this option and implement a custom solution.
 */
export const enableThemeStorage = true;

/**
 * Initializes the theme configuration for the application.
 *
 * If theme storage is enabled, this function attempts to load
 * the user's previously saved theme preferences and merges them
 * with the default theme configuration.
 *
 * If storage is disabled or no stored theme is found, the
 * 'defaultTheme' values are returned instead.
 */
export const getThemeConfig = (enableStorage: boolean = enableThemeStorage): ThemeConfig => {
    if (!enableStorage) return defaultTheme;

    // Attempt to load the user's previously saved theme preferences.
    // If you are using a custom persistence strategy, replace this
    // with your own method responsible for retrieving the stored theme.
    const themeData = loadStoredTheme();

    return {
        hue: themeData?.hue ?? defaultTheme.hue,
        mode: themeData?.mode ?? defaultTheme.mode,
        chromaData: defaultTheme.chromaData,
    };
};


`;

export default themeConfig;
