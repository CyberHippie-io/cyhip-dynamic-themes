import { cn } from "~/lib/utils";
import { ClipboardIcon } from "~/ui/icons/clipboard";
import { GitHubIcon } from "~/ui/icons/github";

const Banner = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const pkgVersion = "0.0.1";
    return (
        <div
            {...props}
            className={cn(
                props.className,
                "grid grid-cols-1 md:grid-cols-2 items-end justify-center px-4 mb-14"
            )}
        >
            <div className="drop-shadow mx-auto flex flex-col">
                <samp className="bg-accent-600/50 text-primary-foreground my-2 rounded-3xl w-fit p-1 px-2 text-xs">
                    v{pkgVersion}
                </samp>
                <h1 className="text-3xl font-bold mb-2 text-accent-800 dark:text-accent-100">
                    Cyhip Dynamic Themes
                </h1>
                <h2 className="text-lg">
                    Use dynamic themes with Tailwind CSS and React
                </h2>
            </div>

            {/* npm how to install with clipboard */}
            <div className="grid grid-cols-1 gap-y-4 text-sm p-4 shadow-sm rounded backdrop-blur-3xl bg-white/50 dark:bg-accent-950/80 mx-auto">
                <div className="flex flex-row justify-center items-center mt-2 space-x-4 border py-2 px-4 rounded-lg ">
                    <span className="text-muted-foreground">
                        {" "}
                        npm install cyhip-dynamic-themes{" "}
                    </span>
                    <button className="bg-accent-500 dark:bg-accent-800 text-white dark:text-accent-100 rounded-lg hover:shadow-lg p-1">
                        <ClipboardIcon className="w-5 h-5 " />
                    </button>
                </div>
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
