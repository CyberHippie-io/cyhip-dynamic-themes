import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitHubIcon } from '@/components/ui/icons/github';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { ArrowUpRight } from 'lucide-react';

export default function Overview({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'w-full max-w-4xl shadow-sm')}>
            <CardHeader className="text-center">
                <CardTitle className="font-display text-3xl tracking-tight md:text-4xl">
                    <div className="mb-1 text-xl font-bold">
                        <code className="bg-linear-to-r from-accent-600 via-accent-400 to-accent-700 bg-clip-text text-transparent dark:from-accent-300 dark:via-accent-500 dark:to-accent-200">
                            cyhip-dynamic-themes
                        </code>
                    </div>
                    <span>
                        <span> Next.js </span> demo
                    </span>
                </CardTitle>
                <CardDescription className="mx-auto max-w-prose text-sm leading-relaxed my-5">
                    Use the controls in the top-right to switch hue and mode. The whole page stays
                    visually consistent because it relies on semantic tokens instead of fixed color
                    values.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground ">
                <div className="flex space-x-5 justify-center">
                    <a
                        href="https://cyhip-dynamic-themes.vercel.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-medium hover:underline"
                    >
                        Read Docs
                        <ArrowUpRight className="size-4" />
                    </a>

                    <a
                        href="https://github.com/CyberHippie-io/cyhip-dynamic-themes"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-medium hover:underline"
                    >
                        GitHub
                        <GitHubIcon className="size-4" />
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
