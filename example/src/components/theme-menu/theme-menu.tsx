import { forwardRef, HTMLAttributes } from "react";

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return (
            <div ref={ref} className={className} {...props}>
                Theme Menu
            </div>
        );
    }
);

ThemeMenu.displayName = "ThemeMenu";

export { ThemeMenu };
