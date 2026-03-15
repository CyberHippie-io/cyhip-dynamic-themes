import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';
import CodeSnippet from '@/components/ui/code-snippet';

type UsageProps = {
    props?: DivProps;
    providerSnippet: string;
    tailwindUsageSnippet: string;
};

export default function Usage({ props, providerSnippet, tailwindUsageSnippet }: UsageProps) {
    const { className, ...rest } = props ?? {};

    return (
        <section {...rest} id="usage" className={cn(className, 'pt-16 sm:pt-20')}>
            <div className="cy-divider mb-10" />
            <h2 className="text-2xl font-extrabold tracking-tight">Quick start</h2>
            <p className="text-foreground/75 mt-2 max-w-2xl text-sm leading-relaxed">
                Initialize the theme files, import `root.css`, and wrap the app with
                `ThemeProvider`.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.0fr_1.0fr]">
                <div className="cy-card p-6">
                    <div className="text-sm font-semibold">Provider</div>
                    <p className="text-foreground/75 mt-2 text-sm leading-relaxed">
                        Set the default theme and persistence.
                    </p>
                    <CodeSnippet className="mt-4" value={providerSnippet} />
                </div>

                <div className="cy-card p-6">
                    <div className="text-sm font-semibold">Tokens in components</div>
                    <p className="text-foreground/75 mt-2 text-sm leading-relaxed">
                        The whole UI changes just by remapping `--background`, `--primary`, etc.
                    </p>
                    <CodeSnippet className="mt-4" value={tailwindUsageSnippet} />
                </div>
            </div>
        </section>
    );
}
