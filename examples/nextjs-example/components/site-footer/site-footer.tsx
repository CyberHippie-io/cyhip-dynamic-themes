import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';

export default function SiteFooter({ props }: { props?: DivProps }) {
    return (
        <footer
            id="footer"
            className={cn(props?.className, 'border-t border-border/70 bg-card/60')}
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
                <p>© 2026 Cyberhippies</p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://cyhip-dynamic-themes.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Docs
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
