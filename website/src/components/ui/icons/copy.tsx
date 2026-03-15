import { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <rect x="4" y="4" width="11" height="11" rx="2" />
    </svg>
);

export { SvgComponent as CopyIcon };
