import { type SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000"
        strokeWidth={0.192}
        viewBox="0 0 24 24"
        {...props}
    >
        <g fill="currentColor">
            <path d="M11 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1Z" />
            <path
                fillRule="evenodd"
                d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-9.938 0a3.938 3.938 0 1 0 7.876 0 3.938 3.938 0 0 0-7.876 0Z"
                clipRule="evenodd"
            />
            <path d="M20.485 3.515a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414ZM1 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H1ZM3.515 3.515a1 1 0 0 0 0 1.414l1.414 1.414A1 1 0 0 0 6.343 4.93L4.93 3.515a1 1 0 0 0-1.414 0ZM11 21a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2ZM6.343 17.657a1 1 0 0 0-1.414 0L3.515 19.07a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414ZM21 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2ZM17.657 17.657a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z" />
        </g>
    </svg>
);
export { SvgComponent as SolarIcon };
