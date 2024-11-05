// "use client"; // enable this if you are using Nextjs
/**
 * ThemeSwitcher component
 *
 * A simlpe example about how you can define a ThemeSwitcher component.
 *
 */

import { getChroma, ThemeConfig, useTheme } from 'cyhip-dynamic-themes';
import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import { chromaData, hueScheme } from './theme.config';

/**
 * This methods are used only to build a gradient sample based on the hue value.
 * Used for a visual referrence as a "icon" of the theme on the buttons.
 */
const buildThemeSample = (hue: number) => {
    const oklch = 'oklch(' + getChroma(5, hue, chromaData) + ')';
    return oklch;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value);
        return acc;
    },
    {} as Record<string, string>
);

const ThemeSwitcher = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
    /** To initialize here you can manage cookie values to reminder user preferences. */
    const { theme, setTheme } = useTheme();
    const [hue, setHue] = useState(theme.hue);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setTheme({
            hue,
            mode: darkMode ? 'dark' : 'light',
            chromaData: chromaData,
        } as ThemeConfig);
    }, [hue, darkMode, setTheme]);

    return (
        <>
            <div
                ref={ref}
                className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-3 rounded-sm gap-2 p-6"
                {...props}
            >
                {Object.keys(availableThemes).map((key) => (
                    <button
                        key={key}
                        className="bg-background px-4 py-1 text-sm font-medium rounded-ms border flex space-x-2 hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                        onClick={() => setHue(hueScheme[key])}
                    >
                        <span
                            className="w-4 h-4 rounded-full"
                            style={{
                                background: availableThemes[key],
                            }}
                        ></span>
                        <span>{key}</span>
                    </button>
                ))}
                <div className="col-span-3 grid grid-cols-2 gap-x-2 mx-auto">
                    <button
                        className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                        onClick={() => setDarkMode(false)}
                    >
                        Light
                    </button>
                    <button
                        className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                        onClick={() => setDarkMode(true)}
                    >
                        Dark
                    </button>
                </div>
            </div>
        </>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
