import CodeSnippet from '@/components/ui/code-snippet';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/themes/theme-switcher';
import type { DivProps } from '@/types/dom';

type PlaygroundProps = {
    props?: DivProps;
    tailwindUsageSnippet: string;
};

export default function Playground({ props, tailwindUsageSnippet }: PlaygroundProps) {
    const { className, ...rest } = props ?? {};

    return (
        <div {...rest} className={cn(className, 'cy-card-solid min-w-0 overflow-hidden')}>
            <div className="bg-secondary/40 border-b px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="">
                        <div className="text-sm font-semibold">Theme playground</div>
                        <div className="text-foreground/70 mt-0.5 text-xs">
                            Switch hue and mode to see the tokens change.
                        </div>
                    </div>
                    <span className="bg-primary/12 text-primary ring-primary/20 shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1">
                        Live
                    </span>
                </div>
            </div>

            <div id="playground" className="grid gap-5 p-5">
                <div className="cy-card p-4">
                    <div className="text-foreground/70 mb-3 text-xs font-semibold tracking-wide uppercase">
                        Theme switcher
                    </div>
                    <ThemeSwitcher />
                </div>

                <div className="cy-card p-4">
                    <div className="text-foreground/70 mb-3 text-xs font-semibold tracking-wide uppercase">
                        Components with semantic tokens
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <button className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-3 text-sm font-semibold shadow-sm transition">
                            Primary action
                        </button>
                        <button className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md border px-4 py-3 text-sm font-semibold shadow-sm transition">
                            Secondary action
                        </button>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div className="bg-secondary/60 text-secondary-foreground rounded-md border p-4 text-sm">
                            Secondary surface
                        </div>
                        <div className="bg-background text-foreground rounded-md border p-4 text-sm">
                            Base surface
                        </div>
                    </div>
                </div>

                <div className="cy-card p-4">
                    <div className="text-foreground/70 mb-3 text-xs font-semibold tracking-wide uppercase">
                        Tailwind example
                    </div>
                    <CodeSnippet value={tailwindUsageSnippet} />
                </div>
            </div>
        </div>
    );
}
