import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';

type SiteFooterProps = {
    props?: DivProps;
};

export default function SiteFooter({ props }: SiteFooterProps) {
    const { className, ...rest } = props ?? {};

    return (
        <footer {...rest} className={cn(className, 'pt-16 sm:pt-20')}>
            <div className="cy-divider mb-8" />
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-foreground/50 md:flex-row md:items-center md:justify-between md:px-8">
                <p>© 2026 Cyberhippies</p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.npmjs.com/package/cyhip-dynamic-themes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        NPM
                    </a>

                    <a
                        href="https://github.com/CyberHippie-io/cyhip-dynamic-themes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                </div>

                <p>
                    Developed by{' '}
                    <a
                        href="https://github.com/kassiorf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        @KassioRF
                    </a>
                </p>
            </div>
        </footer>
    );
}
