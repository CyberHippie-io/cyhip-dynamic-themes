const themeConfig = 
`

/**
 * HUE THEMES
 *
 * Define the available color palettes here!
 *
 * The palettes are based on HUE values.
 *
 * To add or modify a HUE palette, explore and preview colors at:
 * https://oklch.com/#70,0.1,250,100
 *
 */

export const hueScheme: Record<string, number> = {
    default: -1,
    blue: 250,
    green: 150,
    orange: 35,
    pink: 0,
    purple: 316,
};

/**
 *
 * Default Chroma for each shade available on theme. See more at:
 * https://evilmartians.com/chronicles/better-dynamic-themes-in-tailwind-with-oklch-color-magic
 *
 */
export const chromaData: Record<number, number> = {
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

`;

export default themeConfig;