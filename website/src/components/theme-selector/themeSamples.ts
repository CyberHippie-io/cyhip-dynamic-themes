import { chromaData, hueScheme } from '~/themes/theme.config';

import { getChroma } from 'cyhip-dynamic-themes';

const buildThemeSample = (hue: number) => {
    const oklchA = `oklch(${getChroma(4, +hue, chromaData)})`;
    const oklchB = `oklch(${getChroma(5, +hue, chromaData)})`;
    const oklchC = `oklch(${getChroma(6, +hue, chromaData)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value);
        return acc;
    },
    {} as Record<string, string>
);

export { availableThemes };
