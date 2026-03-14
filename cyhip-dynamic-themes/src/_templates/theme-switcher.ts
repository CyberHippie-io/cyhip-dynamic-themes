const themeSwitcher = `
'use client'; // enable this if you are using Nextjs
/**
 * ThemeSwitcher component
 *
 * A simlpe example about how you can define a ThemeSwitcher component.
 *
 */
import { availableThemes, hueScheme } from '@/themes/theme.config';
import { useThemeHue, useThemeMode } from 'cyhip-dynamic-themes';
import { useMemo } from 'react';

export function ThemeSwitcher() {
    return (
        <div className="auto-cols grid grid-flow-row gap-2">
            <div className="rounded border">
                <ColorPaletteMenu />
            </div>
            <div>
                <ThemeModeMenu />
            </div>
        </div>
    );
}

function ColorPaletteMenu() {
    const { hue, setThemeHue } = useThemeHue();

    const selected = useMemo(
        () => Object.keys(hueScheme).find((key) => hueScheme[key] === hue) ?? null,
        [hue],
    );

    return (
        <div className="m-3 grid auto-cols-max grid-flow-col gap-4">
            {Object.keys(availableThemes).map((key) => (
                <button
                    type="button"
                    key={key}
                    className="relative cursor-pointer"
                    onClick={() => setThemeHue(hueScheme[key])}
                >
                    {selected === key && (
                        <span className="border-accent-400 absolute -inset-1 block h-8 w-8 rounded-full border-2" />
                    )}
                    <span
                        className="block h-6 w-6 rounded-full"
                        style={{ background: availableThemes[key] }}
                    />
                </button>
            ))}
        </div>
    );
}

function ThemeModeMenu() {
    const { mode, setThemeMode } = useThemeMode();

    const btnStyle = 'border px-2 py-2 rounded-md cursor-pointer hover:ring-1';
    return (
        <div className="m-2 flex justify-center gap-4">
            <button
                type="button"
                className={\`\${btnStyle} \${mode === 'light' ? 'ring-1' : ''}\`}
                onClick={() => setThemeMode('light')}
            >
                Light
            </button>
            <button
                type="button"
                className={\`\${btnStyle} \${mode === 'dark' ? 'ring-1' : ''}\`}
                onClick={() => setThemeMode('dark')}
            >
                Dark
            </button>
        </div>
    );
}


`;
export default themeSwitcher;
