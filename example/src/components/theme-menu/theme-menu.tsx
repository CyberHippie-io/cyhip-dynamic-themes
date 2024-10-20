"use client";
import { forwardRef, HTMLAttributes, useEffect, useState } from "react";

import { defaultHueScheme, useColorTheme } from "cyhip-dynamic-themes";

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const [isMounted, setIsMounted] = useState(false);
        const darkMode = true;
        const hue = defaultHueScheme.purple;
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
                Theme Menu
            </div>
        );
    }
);

ThemeMenu.displayName = "ThemeMenu";

export { ThemeMenu };
