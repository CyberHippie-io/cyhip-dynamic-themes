import { CopyIcon } from '@/components/ui/icons/copy';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';

type CodeSnippetProps = {
    value: string;
    className?: string;
};

export default function CodeSnippet({ value, className }: CodeSnippetProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        if (!value) return;

        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 200);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }, [value]);

    return (
        <div className={cn('relative', className)}>
            <pre className="cy-code pr-12">
                <code>{value}</code>
            </pre>

            <button
                type="button"
                onClick={handleCopy}
                className={cn(
                    'cursor-pointer absolute right-1.5 top-1.5 inline-flex items-center rounded-sm p-1.5 text-accent-100 ring-1 ring-accent-200/10 transition',
                    'hover:bg-accent-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    copied && 'scale-95 bg-accent-700/80',
                )}
                aria-label="Copy code"
            >
                <CopyIcon className="h-3.5 w-3.5" />
            </button>
        </div>
    );
}
