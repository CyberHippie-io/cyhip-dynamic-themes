import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';

type FeaturesProps = {
    props?: DivProps;
};

export default function Features({ props }: FeaturesProps) {
    const { className, ...rest } = props ?? {};

    return (
        <section {...rest} id="features" className={cn(className, 'pt-16 sm:pt-20')}>
            <div className="cy-divider mb-10" />
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight">
                        Features built for product
                    </h2>
                    <p className="text-foreground/75 mt-2 max-w-2xl text-sm leading-relaxed">
                        A small setup with semantic tokens and an ergonomic focus: switch themes
                        without rebuilds and without manually duplicating palettes.
                    </p>
                </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="cy-card p-6">
                    <div className="text-sm font-semibold">Hue driven</div>
                    <p className="text-foreground/75 mt-2 text-sm leading-relaxed">
                        Pick a hue and get a full, consistent scale via OKLCH.
                    </p>
                </div>
                <div className="cy-card p-6">
                    <div className="text-sm font-semibold">Semantic tokens</div>
                    <p className="text-foreground/75 mt-2 text-sm leading-relaxed">
                        Use `bg-primary`, `bg-background`, `text-foreground`, and let the theme
                        decide the rest.
                    </p>
                </div>
                <div className="cy-card p-6">
                    <div className="text-sm font-semibold">Built-in dark mode</div>
                    <p className="text-foreground/75 mt-2 text-sm leading-relaxed">
                        Mode switching without hacks, keeping contrast and legibility.
                    </p>
                </div>
            </div>
        </section>
    );
}
