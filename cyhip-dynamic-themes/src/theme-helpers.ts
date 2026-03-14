import { getVariables } from '../lib/tw-dynamic-themes/runtime';
import { ThemeConfig } from './theme.config';

/**
 * getThemeProperties
 *
 *  Defines CSS class and style properties based on the provided HUE value and dark mode setting.
 *
 * - If `hue` is "-1", the theme is monochromatic, which affects the accent color behavior.
 * - Returns an object with:
 *    - `dataTheme`: A string containing the class for dark mode ("dark") or an empty string for light mode.
 *    - `style`: A record with dynamically generated CSS variables for the accent colors.
 *
 */
export const getThemeProperties = (
    themeConfig: ThemeConfig,
): { dataTheme: string; style: Record<string, string> } => {
    const whitePalette = themeConfig.hue == -1;
    const darkMode = themeConfig.mode == 'dark';

    const accent = getVariables({
        baseName: 'accent',
        hue: themeConfig.hue,
        chromaData: themeConfig.chromaData,
    });

    // white pallet have a different accent behavior
    if (whitePalette) {
        accent.push(['--accent-500', darkMode ? '1.000 0.000 89.876' : '0.212 0.000 359.000']);
        accent.push(['--accent-50', darkMode ? '0.212 0.000 359.000' : '1.000 0.000 89.876']);
    }

    return {
        dataTheme: darkMode ? 'dark' : 'light',
        style: Object.fromEntries(accent),
    };
};

/**
 * Retrieves the current value of a specified CSS variable from the root element.
 *
 * - If the function is executed in a non-browser environment (e.g., during server-side rendering), it returns `null`.
 * - If the CSS variable is not found or its value is empty, it also returns `null`.
 *
 * @param variableName - The name of the CSS variable to retrieve, e.g., "--accent-500".
 * @returns The OKLCH color value for the provided CSS variable, e.g., "0.614 0.136 250.000", or `null` if not available.
 */
export const currentAccentValue = (variableName: string): string | null => {
    if (typeof window === 'undefined') {
        return null;
    }
    const rootElement = document.documentElement;
    const computedStyle = getComputedStyle(rootElement);
    return computedStyle.getPropertyValue(variableName).trim() || null;
};
