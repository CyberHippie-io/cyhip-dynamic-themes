import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/themes/theme-switcher';
import { DivProps } from '@/types/dom';

export default function SiteHeader({ props }: { props?: DivProps }) {
    return (
        <header
            className={cn(
                props?.className,
                'sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl',
            )}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
                <span className="group flex items-center gap-3">
                    <span className="rounded-sm bg-primary/70 dark:bg-primary/25 px-1 md:px-2 py-1.5 text-xs font-semibold tracking-wide text-muted/80  dark:text-muted-foreground">
                        cyhip-dynamic-themes
                    </span>
                </span>

                <ThemeSwitcher compact />
            </div>
        </header>
    );
}
