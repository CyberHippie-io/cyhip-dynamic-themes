import { hueScheme } from "~/hueThemes";

import { consistentChroma } from "cyhip-dynamic-themes";

const buildThemeSample = (hue: string, monoCromatic: boolean = false) => {
    const oklchA = `oklch(${consistentChroma(4, +hue, monoCromatic)})`;
    const oklchB = `oklch(${consistentChroma(5, +hue, monoCromatic)})`;
    const oklchC = `oklch(${consistentChroma(6, +hue, monoCromatic)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = {
    monoCromatic: buildThemeSample("-1", true),
    pink: buildThemeSample(hueScheme.pink),
    blue: buildThemeSample(hueScheme.blue),
    purple: buildThemeSample(hueScheme.purple),
    orange: buildThemeSample(hueScheme.orange),
    green: buildThemeSample(hueScheme.green),
};

export { availableThemes };
