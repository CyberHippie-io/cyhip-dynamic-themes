import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';

import { ThemeConfig, useTheme } from 'cyhip-dynamic-themes';
import { capitalize, cn } from '~/lib/utils';
import { chromaData, hueScheme } from '~/themes/theme.config';
import { CheckDot } from '~/ui/check-dot/check-dot';
import { ColorPaletteIcon } from '~/ui/icons/colorPalette';
import { MoonIcon } from '~/ui/icons/moon';
import { SolarIcon } from '~/ui/icons/solar';
import styles from './theme-selector.module.css';
import { availableThemes } from './themeSamples';

const ThemeMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { setTheme } = useTheme();
        const [hue, setHue] = useState(hueScheme.blue);
        const [darkMode, setDarkMode] = useState(false);

        useEffect(() => {
            setTheme({
                hue,
                mode: darkMode ? 'dark' : 'light',
                chromaData: chromaData,
            } as ThemeConfig);
        }, [hue, darkMode, setTheme]);

        return (
            <div
                ref={ref}
                className={cn(
                    'relative m-auto background-blur-3xl bg-white  px-8 py-5 shadow rounded grid gird-rows-2 gap-y-2',
                    className
                )}
                {...props}
            >
                <span
                    className={cn(
                        'w-16 h-16 rounded-full bg-white shadow shadow-accent-950/20 absolute  top-0 left-0 -mt-6 -ml-10 '
                    )}
                >
                    <ColorPaletteIcon className={cn('drop-shadow-sm')} />
                </span>

                <div className="palette-selectors grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-4 gap-y-2 mb-2">
                    {Object.entries(hueScheme).map(([key, value]) => (
                        <button
                            key={key}
                            className={cn(
                                styles._button,
                                hue === value ? styles._button__active : '',
                                'flex items-center gap-x-2'
                            )}
                            onClick={() => setHue(value)}
                        >
                            <span>
                                <CheckDot
                                    className="w-5 h-5 rounded-full"
                                    style={{
                                        background: availableThemes[key],
                                    }}
                                    selected={hue === value}
                                />
                            </span>

                            <span>
                                {key == 'monoCromatic'
                                    ? 'Default'
                                    : capitalize(key)}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    <button
                        className={cn(
                            styles._button,
                            !darkMode ? styles._button__active : '',
                            'flex items-center gap-x-2'
                        )}
                        onClick={() => setDarkMode(false)}
                    >
                        <SolarIcon className="h-4 w-4 " />
                        Light
                    </button>

                    <button
                        className={cn(
                            styles._button,
                            darkMode ? styles._button__active : '',
                            'flex items-center gap-x-2'
                        )}
                        onClick={() => setDarkMode(true)}
                    >
                        <MoonIcon className="h-4 w-4 " />
                        Dark
                    </button>
                </div>
            </div>
        );
    }
);

ThemeMenu.displayName = 'ThemeMenu';

export { ThemeMenu };
