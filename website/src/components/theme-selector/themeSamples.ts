import { hueScheme } from "~/themes/hue-palettes";

import { consistentChroma } from "cyhip-dynamic-themes";

const buildThemeSample = (hue: number, monoCromatic: boolean = false) => {
    const oklchA = `oklch(${consistentChroma(4, +hue, monoCromatic)})`;
    const oklchB = `oklch(${consistentChroma(5, +hue, monoCromatic)})`;
    const oklchC = `oklch(${consistentChroma(6, +hue, monoCromatic)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value, value === -1);
        return acc;
    },
    {} as Record<string, string>
);


export { availableThemes };
