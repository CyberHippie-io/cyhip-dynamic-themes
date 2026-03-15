import CodeSnippet from '@/components/ui/code-snippet';
import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';
import { version } from 'cyhip-dynamic-themes';

type HeroProps = {
    props?: DivProps;
    installSnippet: string;
    cliSnippet: string;
};

export default function Hero({ props, installSnippet, cliSnippet }: HeroProps) {
    const { className, ...rest } = props ?? {};

    return (
        <div {...rest} className={cn(className, 'min-w-0 pt-2')}>
            <div className="flex flex-wrap items-center">
                <a
                    href="https://www.npmjs.com/package/cyhip-dynamic-themes"
                    target="_blank"
                    className="bg-accent-600/70 text-accent-100 rounded-lg w-fit p-1 px-2 text-xs font-medium"
                >
                    <samp>v{version}</samp>
                </a>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                Dynamic themes for React apps with Tailwind, made simple.
            </h1>

            <p className="text-foreground/75 mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
                Generate full palettes from a single hue, map to semantic tokens, and let users
                toggle mode and color scheme at runtime.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
                <span className="font-bold text-2xl">Install &amp; use</span>
            </div>

            <div className="mt-10 grid gap-3">
                <div className="cy-card p-5">
                    <div className="text-sm font-semibold">Installation</div>
                    <div className="text-foreground/70 mt-1 text-sm leading-relaxed">
                        Works with pnpm, npm, and yarn.
                    </div>
                    <CodeSnippet className="mt-4" value={installSnippet} />
                </div>
                <div className="cy-card p-5">
                    <div className="text-sm font-semibold">CLI scaffolding</div>
                    <div className="text-foreground/70 mt-1 text-sm leading-relaxed">
                        Generate base theme files in seconds with one command.
                    </div>
                    <CodeSnippet className="mt-4" value={cliSnippet} />
                </div>
            </div>
        </div>
    );
}
