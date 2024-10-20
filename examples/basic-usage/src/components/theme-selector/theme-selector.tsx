import { HTMLAttributes, forwardRef, useEffect, useState } from "react";

import { defaultHueScheme, useColorTheme } from "cyhip-dynamic-themes";
import { cn } from "~/lib/utils";
import { MoonIcon } from "~/ui/icons/moon";
import { SolarIcon } from "~/ui/icons/solar";

import styles from "./theme-selector.module.css";

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const [isMounted, setIsMounted] = useState(false);

        const [darkMode, setDarkMode] = useState(false);
        const hue = defaultHueScheme.blue;
        const { setTheme } = useColorTheme(hue, darkMode);

        useEffect(() => {
            if (!isMounted) return;
            setTheme(hue, darkMode);
        }, [hue, darkMode, setTheme, isMounted]);

        useEffect(() => {
            setIsMounted(true);
        }, []);

        return (
            <div ref={ref} className={className} {...props}>
                <p className="text-center mb-4">Mode</p>
                <div className="theme-mode-selector grid grid-cols-2 gap-x-4">
                    <div>
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
