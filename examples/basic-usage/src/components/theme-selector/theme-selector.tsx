import { HTMLAttributes, forwardRef, useEffect, useState } from "react";

import { useColorTheme } from "cyhip-dynamic-themes";

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const [isMounted, setIsMounted] = useState(false);

        const darkMode = false;
        const hue = "250";
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
