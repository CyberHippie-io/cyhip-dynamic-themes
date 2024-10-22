import { useColorTheme } from "cyhip-dynamic-themes";
import { useState } from "react";
import { hueScheme } from "./themes/hue-palettes";

import { consistentChroma } from "cyhip-dynamic-themes";

const buildThemeSample = (hue: string, monoCromatic: boolean = false) => {
    const oklchA = `oklch(${consistentChroma(4, +hue, monoCromatic)})`;
    const oklchB = `oklch(${consistentChroma(5, +hue, monoCromatic)})`;
    const oklchC = `oklch(${consistentChroma(6, +hue, monoCromatic)})`;
    const gradient = `linear-gradient(70deg, ${oklchA}, ${oklchB}, ${oklchC})`;
    return gradient;
};

const availableThemes: Record<string, string> = Object.keys(hueScheme).reduce(
    (acc, key) => {
        const value = hueScheme[key];
        acc[key] = buildThemeSample(value, value === "-1");
        return acc;
    },
    {} as Record<string, string>
);

function App() {
    // See themes/hue-scheme.ts try different values or add new ones.
    const [hue, setHue] = useState(hueScheme.blue);
    const [darkMode, setDarkMode] = useState(false);
    useColorTheme(hue, darkMode);

    return (
        <>
            <main className="h-screen flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-4xl font-bold text-center">
                    Cyhip Dynamic Themes - Basic Usage
                </h1>
                <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-3 rounded-sm gap-2 p-6">
                    {Object.keys(availableThemes).map((key) => (
                        <button
                            key={key}
                            className="bg-background px-4 py-1 text-sm font-medium rounded-ms border flex space-x-2 hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setHue(hueScheme[key])}
                        >
                            <span
                                className="w-4 h-4 rounded-full"
                                style={{
                                    background: availableThemes[key],
                                }}
                            ></span>
                            <span>{key}</span>
                        </button>
                    ))}
                    <div className="col-span-3 grid grid-cols-2 gap-x-2 mx-auto">
                        <button
                            className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setDarkMode(false)}
                        >
                            Light
                        </button>
                        <button
                            className="bg-background border px-4 py-1 text-sm font-medium rounded-ms hover:ring-1 hover:ring-offset-2 hover:ring-offset-background hover:ring-primary"
                            onClick={() => setDarkMode(true)}
                        >
                            Dark
                        </button>
                    </div>
                </div>

                <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
                    <button className="bg-primary text-primary-foreground px-5 py-2 shadow rounded-sm font-medium mx-auto">
                        Button
                    </button>
                    <samp className="bg-accent-950/80 text-accent-100/90 text-sm rounded-sm px-4 py-1 shadow">
                        className="bg-primary text-primary-foreground ..."
                    </samp>
                </div>
            </main>
        </>
    );
}

export default App;
