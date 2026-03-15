'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon } from '@/components/ui/icons/moon';
import { SolarIcon } from '@/components/ui/icons/solar';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { availableThemes, hueScheme } from '@/themes/theme.config';
import { useThemeHue, useThemeMode } from 'cyhip-dynamic-themes';
import { useMemo } from 'react';

type ThemeSwitcherProps = {
    className?: string;
    compact?: boolean;
};

type HueKey = keyof typeof hueScheme;

const hueEntries = Object.entries(hueScheme) as [HueKey, number][];

const hueLabels: Record<HueKey, string> = {
    default: 'Default',
    blue: 'Blue',
    green: 'Green',
    orange: 'Orange',
    pink: 'Pink',
    purple: 'Purple',
};

export function ThemeSwitcher({ className, compact = false }: ThemeSwitcherProps) {
    if (compact) {
        return <CompactThemeSwitcher className={className} />;
    }

    return (
        <div
            className={cn(
                'rounded-2xl border border-border/80 bg-card/90 p-4 shadow-sm backdrop-blur-sm',
                className,
            )}
        >
            <div className="mb-4 flex items-center justify-between gap-2">
                <p className="text-sm font-medium">Theme Controls</p>
                <ThemeModeMenu />
            </div>
            <ColorPaletteMenu />
        </div>
    );
}

function CompactThemeSwitcher({ className }: { className?: string }) {
    const { hue, setThemeHue } = useThemeHue();
    const { mode, setThemeMode } = useThemeMode();

    const selectedHue = useMemo(
        () => hueEntries.find(([, value]) => value === hue)?.[0] ?? 'default',
        [hue],
    );

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Select
                value={selectedHue}
                onValueChange={(value) => {
                    const key = value as HueKey;
                    setThemeHue(hueScheme[key]);
                }}
            >
                <SelectTrigger className="w-34 bg-background/90">
                    <span className="flex items-center gap-2">
                        <span
                            className="size-2.5 rounded-full"
                            style={{ backgroundColor: availableThemes[selectedHue] }}
                        />
                        {hueLabels[selectedHue]}
                    </span>
                </SelectTrigger>
                <SelectContent align="end" className="min-w-36">
                    {hueEntries.map(([key]) => (
                        <SelectItem key={key} value={key}>
                            <span className="flex items-center gap-2">
                                <span
                                    className="size-2.5 rounded-full"
                                    style={{ backgroundColor: availableThemes[key] }}
                                />
                                {hueLabels[key]}
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex items-center gap-1 rounded-xl border border-border/80 bg-background/90 p-1">
                <Button
                    type="button"
                    variant={mode === 'light' ? 'default' : 'ghost'}
                    size="icon-sm"
                    aria-label="Switch to light mode"
                    onClick={() => setThemeMode('light')}
                >
                    <SolarIcon className="h-4 w-4" />
                </Button>
                <Button
                    type="button"
                    variant={mode === 'dark' ? 'default' : 'ghost'}
                    size="icon-sm"
                    aria-label="Switch to dark mode"
                    onClick={() => setThemeMode('dark')}
                >
                    <MoonIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

function ColorPaletteMenu() {
    const { hue, setThemeHue } = useThemeHue();

    const selected = useMemo(
        () => hueEntries.find(([, value]) => value === hue)?.[0] ?? null,
        [hue],
    );

    return (
        <div className="grid auto-cols-max grid-flow-col gap-3">
            {hueEntries.map(([key]) => (
                <button
                    type="button"
                    key={key}
                    className="group relative cursor-pointer"
                    aria-label={`Select ${hueLabels[key]} theme`}
                    onClick={() => setThemeHue(hueScheme[key])}
                >
                    <span
                        className={cn(
                            'absolute -inset-1 rounded-full border-2 border-transparent transition-colors',
                            selected === key && 'border-accent-500',
                        )}
                    />
                    <span
                        className="block h-6 w-6 rounded-full ring-1 ring-foreground/20 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: availableThemes[key] }}
                    />
                </button>
            ))}
        </div>
    );
}

function ThemeModeMenu() {
    const { mode, setThemeMode } = useThemeMode();

    return (
        <div className="flex items-center gap-1 rounded-xl border border-border/80 bg-background/90 p-1">
            <Button
                type="button"
                variant={mode === 'light' ? 'default' : 'ghost'}
                size="icon-sm"
                aria-label="Switch to light mode"
                onClick={() => setThemeMode('light')}
            >
                <SolarIcon className="h-4 w-4" />
            </Button>
            <Button
                type="button"
                variant={mode === 'dark' ? 'default' : 'ghost'}
                size="icon-sm"
                aria-label="Switch to dark mode"
                onClick={() => setThemeMode('dark')}
            >
                <MoonIcon className="h-4 w-4" />
            </Button>
        </div>
    );
}
