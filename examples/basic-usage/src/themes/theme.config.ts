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

import {
    defaultThemeStorage,
    getChroma,
    type ThemeConfig,
    type ThemeStorage,
} from 'cyhip-dynamic-themes';

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
 * Declares the available color palette.
 */

type ITheme = {
    [name: string]: string;
};

export const availableThemes: ITheme = Object.keys(hueScheme).reduce((acc, key) => {
    const hueValue = hueScheme[key];
    acc[key] = 'oklch(' + getChroma(5, hueValue, chromaData) + ')';
    return acc;
}, {} as ITheme);

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
export const defaultTheme: ThemeConfig = {
    hue: 250,
    mode: 'light',
    chromaData: chromaData,
};

/**
 * Theme persistence handler.
 *
 * Defines how the user's theme preferences (hue and mode)
 * are loaded and saved.
 *
 * By default, the library provides a localStorage-based
 * implementation (defaultThemeStorage).
 *
 * If you prefer to manage persistence using a different
 * strategy (cookies, API, indexedDB, etc.), you can replace
 * this with your own ThemeStorage implementation.
 */
export const themeStorage: ThemeStorage = defaultThemeStorage;