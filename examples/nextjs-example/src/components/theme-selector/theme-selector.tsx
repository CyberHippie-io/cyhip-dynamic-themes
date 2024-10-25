"use client";

import { useState } from "react";
import { ColorPaletteIcon } from "~/components/ui/icons/colorPalette";
import { cn } from "~/lib/utils";
import { ThemeMenu } from "../theme-menu/theme-menu";

export const ThemeSelectorBtn = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={cn("drop-shadow-lg  flex flex-row", props.className)}>
            <div
                className={cn(
                    "menu-wrapper transform transition-all duration-300 ease-in-out opacity-0 scale-0 origin-top-right",
                    isOpen && "opacity-100 scale-100"
                )}
            >
                <ThemeMenu
                    className={cn(
                        "px-6 py-4 rounded-md backdrop-blur-3xl bg-white/95 text-accent-900",
                        isOpen && "rounded-tr-none"
                    )}
                />
            </div>
            <button
                className={cn(
                    "w-16 h-16 rounded-full bg-white",
                    isOpen && "rounded-s-none backdrop-blur-3xl bg-white/95"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <ColorPaletteIcon
                    className={cn(
                        "transform transition-all duration-300 hover:scale-110 drop-shadow-sm",
                        isOpen && "scale-110",
                        isOpen ? "rotate-[360deg]" : "rotate-0"
                    )}
                />
            </button>
        </div>
    );
};
