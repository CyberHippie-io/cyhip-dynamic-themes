import { useCallback, useEffect } from "react";
import { getThemeProperties } from "./theme-helpers";

/**
 * useColorTheme
 *
 * A custom hook that manages the application of color themes based on
 * the provided HUE value and dark mode setting.
 *
 * It updates the document's root element with the appropriate
 * class name and CSS variables for the theme.
 *
 * Note: This hook dispatches a custom event 'themeChange' when the theme changes.
 *        You can listen for this event to update components that depend on the theme.
 *
 */

const useColorTheme = (hue: number, darkMode: boolean) => {
    const setTheme = useCallback((newHue: number, newDarkMode: boolean) => {
        const { className, style } = getThemeProperties(newHue, newDarkMode);

        document.documentElement.className = className;

        document.documentElement.style.setProperty(
            "color-scheme",
            newDarkMode ? "dark" : "light"
        );

        Object.entries(style).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });

        const themeChangeEvent = new CustomEvent("themeChange", {
            detail: { hue: newHue, darkMode: newDarkMode },
        });
        window.dispatchEvent(themeChangeEvent);
    }, []);

    useEffect(() => {
        setTheme(hue, darkMode);
    }, [hue, darkMode, setTheme]);

    return { setTheme };
};

export { useColorTheme };
