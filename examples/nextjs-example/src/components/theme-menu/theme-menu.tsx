"use client";

import { consistentChroma, useColorTheme } from "cyhip-dynamic-themes";
import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { capitalize, cn } from "~/lib/utils";
import { hueScheme } from "~/themes/hue-palettes";
import { CheckDot } from "~/ui";
import { MoonIcon } from "~/ui/icons/moon";
import { SolarIcon } from "~/ui/icons/solar";
import styles from "./theme-menu.module.scss";

const buildThemeSample = (hue: number, monoCromatic: boolean = false) => {
    const oklchA = `oklch(${consistentChroma(4, +hue, monoCromatic)})`;
    const oklchB = `oklch(${consistentChroma(5, +hue, monoCromatic)})`;
    const oklchC = `oklch(${consistentChroma(6, +hue, monoCromatic)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value, value === -1);
        return acc;
    },
    {} as Record<string, string>
);

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const [isMounted, setIsMounted] = useState(false);

        const [darkMode, setDarkMode] = useState(false);
        const [hue, setHue] = useState(hueScheme.blue);
        const { setTheme } = useColorTheme(hue, darkMode);

        useEffect(() => {
            if (!isMounted) return;
            setTheme(hue, darkMode);
        }, [hue, darkMode, setTheme, isMounted]);

        useEffect(() => {
            setIsMounted(true);
        }, []);

        return (
            <div ref={ref} className={cn("theme-menu", className)} {...props}>
                <div className="palette-selectors grid grid-cols-2 grid-flow-row gap-x-4 gap-y-2 mb-2">
                    {Object.entries(hueScheme).map(([key, value]) => (
                        <button
                            key={key}
                            className={cn(
                                styles._button,
                                hue === value ? styles._button__active : "",
                                "flex items-center gap-x-2"
                            )}
                            onClick={() => setHue(value)}
                        >
                            <span>
                                <CheckDot
                                    className="w-5 h-5 rounded-full"
                                    style={{
                                        background: availableThemes[key],
                                    }}
                                    selected={hue === value}
                                />
                            </span>

                            <span>
                                {key == "monoCromatic"
                                    ? "Default"
                                    : capitalize(key)}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="dark-mode-selectors gird flex justify-center gap-x-4 ">
                    <div className="mx-1">
                        <button
                            className={cn(
                                styles._button,
                                !darkMode ? styles._button__active : "",
                                "flex items-center gap-x-2"
                            )}
                            onClick={() => setDarkMode(false)}
                        >
                            <SolarIcon className="h-4 w-4 " />
                            Light
                        </button>
                    </div>
                    <div>
                        <button
                            className={cn(
                                styles._button,
                                darkMode ? styles._button__active : "",
                                "flex items-center gap-x-2"
                            )}
                            onClick={() => setDarkMode(true)}
                        >
                            <MoonIcon className="h-4 w-4 " />
                            Dark
                        </button>
                    </div>
                </div>
            </div>
        );
    }
);

ThemeMenu.displayName = "ThemeMenu";

export { ThemeMenu };
