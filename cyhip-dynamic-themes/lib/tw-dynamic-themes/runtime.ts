import {
    Color,
    Oklch,
    toGamut as _toGamut,
    converter,
    differenceEuclidean,
} from "culori";

import { makeVariable, shades } from "./common";

const toGamut = _toGamut as (...args: unknown[]) => (color: string) => Color;



/**
 * A map of CSS varable name to color
 */
type SingleVariable = [string, string];

export function getVariables({
    baseName,
    hue,
    chromaData = chromaDataDefault,
}: {
    baseName: string;
    hue: number;
    chromaData?: Record<number,number>;
}): SingleVariable[] {
    const variables: SingleVariable[] = shades.map((shade, shadeIndex) => [
        makeVariable({name: baseName, shade}),
        consistentChroma(shadeIndex, hue, chromaData),
    ]);
    return variables;
};


const lightnessForShade = (shade: number) => {
    const highestL = 100;
    const lowestL = 13;
    const diffL = highestL - lowestL;

    const shadeDiff = shades[shades.length - 1] - shades[0];

    // Maintaining the proximity of colors with a step of 50 and 100
    const multiplier = shade / shadeDiff;

    return (lowestL + (highestL - diffL * multiplier)) / 100;
};
const lightness = shades.map(lightnessForShade);


export const consistentChroma = (
    shadeIndex: number,
    hue: number,
    chromaData: Record<number,number> = chromaDataDefault,

) => {
    
    const oklch = converter("oklch");

    const asWhite = hue === -1;

    // Using a pinned chroma
    const chroma = !asWhite ? chromaData[shadeIndex] : 0.0;
    const light =  !asWhite ? lightness[shadeIndex] * 0.95 : lightness[shadeIndex];  

    const color = `oklch(${light} ${chroma} ${+hue})`;
    return serializeColor(
        oklch(toGamut("p3", "oklch", differenceEuclidean("oklch"), 0)(color))
    );    
}

const serializeColor = (c: Oklch): string =>
    `${c.l.toFixed(3)} ${c.c.toFixed(3)} ${c.h?.toFixed(3)}`;


const chromaDataDefault: Record<number, number> = {
    0: 0.0108,
    1: 0.0121,
    2: 0.0609,
    3: 0.0908,
    4: 0.1398,
    5: 0.1472,
    6: 0.1299,
    7: 0.1067,
    8: 0.0898,
    9: 0.0726,
    10: 0.005,
};
