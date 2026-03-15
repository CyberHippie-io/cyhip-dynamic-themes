'use client';
import { MoonIcon } from '@/components/ui/icons/moon';
import { SolarIcon } from '@/components/ui/icons/solar';
import { cn } from '@/lib/utils';
import type { DivProps } from '@/types/dom';
import { useThemeHue, useThemeMode } from 'cyhip-dynamic-themes';
import { useMemo } from 'react';
import { availableThemes, hueScheme } from './theme.config';

export function ThemeSwitcher({ props }: { props?: DivProps }) {
    return (
        <div className={cn(props?.className, 'grid gap-3')}>
            <div className="cy-card bg-background p-3">
                <HueSliderMenu />
            </div>
            <div className="cy-card bg-background p-3">
                <ColorPaletteMenu />
            </div>
            <div className="cy-card bg-background p-3">
                <ThemeModeMenu />
            </div>
        </div>
    );
}

function HueSliderMenu({ props }: { props?: DivProps }) {
    const { hue, setThemeHue } = useThemeHue();

    const hueRounded = Number.isFinite(hue) ? Math.round(hue) : 0;
    const hueClamped = Math.min(360, Math.max(0, hueRounded));

    return (
        <div className={cn(props?.className, 'grid gap-3')}>
            <div className="flex items-center justify-between gap-3">
                <div className="text-foreground/70 text-xs font-semibold tracking-wide uppercase">
                    Hue
                </div>
                <div className="flex items-center gap-2">
                    <span className="ring-foreground/10 bg-accent-500 block h-5 w-5 rounded-full ring-1" />
                    <span className="text-foreground/70 text-xs font-semibold tabular-nums">
                        {hueClamped}°
                    </span>
                </div>
            </div>

            <div className="grid gap-2">
                <div
                    className="ring-foreground/10 h-2 w-full rounded-full ring-1"
                    style={{
                        background:
                            'linear-gradient(90deg, hsl(0 85% 55%), hsl(60 85% 55%), hsl(120 85% 55%), hsl(180 85% 55%), hsl(240 85% 55%), hsl(300 85% 55%), hsl(360 85% 55%))',
                    }}
                />
                <input
                    aria-label="Selecionar hue do tema"
                    type="range"
                    min={0}
                    max={360}
                    step={1}
                    value={hueClamped}
                    onChange={(e) => setThemeHue(Number(e.target.value))}
                    className={cn(
                        'accent-primary w-full cursor-pointer',
                        'focus-visible:ring-primary focus-visible:ring-2',
                        'focus-visible:ring-offset-background focus-visible:ring-offset-2',
                    )}
                />
            </div>
        </div>
    );
}

function ColorPaletteMenu({ props }: { props?: DivProps }) {
    const { hue, setThemeHue } = useThemeHue();

    const selected = useMemo(
        () => Object.keys(hueScheme).find((key) => hueScheme[key] === hue) ?? null,
        [hue],
    );

    const changeColorPalete = (key: string) => {
        setThemeHue(hueScheme[key]);
    };

    return (
        <>
            <div className="text-foreground/70 mb-4 pt-1 text-xs font-semibold tracking-wide uppercase">
                Color Palette
            </div>

            <div
                className={cn(
                    props?.className,
                    'grid auto-cols-max grid-flow-col items-center justify-center gap-3',
                )}
            >
                {Object.keys(availableThemes).map((key) => (
                    <button
                        type="button"
                        key={key}
                        aria-label={`Selecionar tema: ${key}`}
                        className={cn(
                            'relative grid h-9 w-9 cursor-pointer place-items-center rounded-full transition',
                            'ring-offset-background ring-offset-2',
                            'focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2',
                            selected === key
                                ? 'ring-primary/55 ring-2'
                                : 'ring-foreground/10 hover:ring-foreground/25 ring-1',
                        )}
                        onClick={() => changeColorPalete(key)}
                    >
                        <span
                            className="ring-foreground/10 block h-6 w-6 rounded-full shadow-sm ring-1"
                            style={{ background: availableThemes[key] }}
                        />
                    </button>
                ))}
            </div>
        </>
    );
}

function ThemeModeMenu({ props }: { props?: DivProps }) {
    const { mode, setThemeMode } = useThemeMode();

    const changeThemeMode = (mode: 'light' | 'dark') => {
        setThemeMode(mode);
    };

    return (
        <div className={cn(props?.className, 'flex items-center justify-center gap-3')}>
            <button
                type="button"
                aria-label="Ativar modo claro"
                className={cn(
                    'bg-background/50 hover:bg-background cursor-pointer rounded-xl border px-3 py-2 transition',
                    'ring-offset-background ring-offset-2',
                    'hover:ring-foreground/20 hover:ring-1',
                    'focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2',
                    mode === 'light' && 'ring-primary/40 ring-1',
                )}
                onClick={() => changeThemeMode('light')}
            >
                <SolarIcon className="text-foreground/85 h-4 w-5" />
            </button>
            <button
                type="button"
                aria-label="Ativar modo escuro"
                className={cn(
                    'bg-background/50 hover:bg-background cursor-pointer rounded-xl border px-3 py-2 transition',
                    'ring-offset-background ring-offset-2',
                    'hover:ring-foreground/20 hover:ring-1',
                    'focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2',
                    mode === 'dark' && 'ring-primary/40 ring-1',
                )}
                onClick={() => changeThemeMode('dark')}
            >
                <MoonIcon className="text-foreground/85 h-4 w-5" />
            </button>
        </div>
    );
}
