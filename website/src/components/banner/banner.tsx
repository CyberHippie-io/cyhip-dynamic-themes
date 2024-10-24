import { useState } from "react";
import { cn } from "~/lib/utils";
import { CheckIcon } from "~/ui/icons/check";
import { ClipboardIcon } from "~/ui/icons/clipboard";
import { GitHubIcon } from "~/ui/icons/github";

import { version } from "cyhip-dynamic-themes";

const Banner = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const [toClipBoard, setToClipBoard] = useState(false);

    const pkgVersion = version;
    const npmInstall = "npm install cyhip-dynamic-themes";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(npmInstall);
        setToClipBoard(true);
        setTimeout(() => setToClipBoard(false), 1500);
    };

    return (
        <div
            {...props}
            className={cn(
                props.className,
                "grid grid-cols-1 md:grid-cols-2 items-end justify-center px-4 mb-14"
            )}
        >
            <div className="drop-shadow mx-auto flex flex-col">
                <a
                    href="https://www.npmjs.com/package/cyhip-dynamic-themes"
                    target="_blank"
                    className="bg-accent-600/50 text-accent-100 my-2 rounded-3xl w-fit p-1 px-2 text-xs font-medium"
                >
                    <samp>v{pkgVersion}</samp>
                </a>
                <h1 className="text-4xl font-bold mb-2 text-accent-800 dark:text-accent-100">
                    Cyhip Dynamic Themes
                </h1>
                <h2 className="text-xl">
                    Tailwind-powered dynamic color themes for React apps.
                </h2>
            </div>

            {/* npm how to install with clipboard */}
            <div className="grid grid-cols-1 gap-y-4 mx-auto">
                <button
                    className="flex flex-row justify-center items-center mt-2 space-x-4 border py-1 px-4 rounded-lg bg-accent-950/90 text-zinc-200 hover:shadow-md hover:bg-accent-900/90"
                    onClick={() => copyToClipboard()}
                >
                    <span className=""> {npmInstall} </span>
                    <span className=" rounded-full p-1">
                        {!toClipBoard ? (
                            <ClipboardIcon className="w-5 h-5 " />
                        ) : (
                            <CheckIcon className="w-5 h-5 opacity-75" />
                        )}
                    </span>
                </button>
                <div className="repo-link mx-auto flex space-x-2 items-center">
                    <GitHubIcon className="w-5 h-5" />
                    <a
                        href="https://github.com/CyberHippie-io/cyhip-dynamic-themes"
                        className="font-bold hover:underline"
                        target="_blank"
                    >
                        CyberHippie-io/cyhip-dynamic-themes
                    </a>
                </div>
            </div>
        </div>
    );
};

export { Banner };
