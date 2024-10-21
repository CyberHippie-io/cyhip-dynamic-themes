import { type SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M18.347 5.963a1 1 0 0 1 .29 1.384l-6.8 10.4a1 1 0 0 1-1.51.193l-4.4-4a1 1 0 0 1 1.346-1.48l3.532 3.211 6.158-9.418a1 1 0 0 1 1.384-.29Z"
            clipRule="evenodd"
        />
    </svg>
);
export { SvgComponent as CheckIcon };
