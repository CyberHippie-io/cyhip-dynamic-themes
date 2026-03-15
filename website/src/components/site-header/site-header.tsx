import { GitHubIcon } from '@/components/ui/icons/github';
import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';

export default function SiteHeader({ props }: { props?: DivProps }) {
    const { className, ...rest } = props ?? {};

    return (
        <header {...rest} className={cn(className, 'cy-container sticky top-0 z-40')}>
            <div className="bg-background/70 ring-foreground/10 mt-4 flex items-center justify-between rounded-lg px-4 py-3 ring-1 backdrop-blur">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/15 ring-primary/25 grid h-9 w-9 place-items-center rounded-lg ring-1">
                        <span className="text-primary text-sm font-extrabold">cy</span>
                    </div>
                    <div className="leading-tight">
                        <div className="text-sm font-bold">cyhip-dynamic-themes</div>
                        <div className="text-foreground/70 text-xs">
                            Dynamic themes for React + Tailwind
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        className="cy-btn cy-btn-ghost hidden sm:inline-flex"
                        href="https://cyhip-dynamic-themes-nextjs-example.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Nextjs Demo
                    </a>
                    <a
                        className="cy-btn cy-btn-ghost hidden sm:inline-flex"
                        href="https://github.com/CyberHippie-io/cyhip-dynamic-themes"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                        <GitHubIcon className="size-4" />
                    </a>
                </div>
            </div>
        </header>
    );
}
