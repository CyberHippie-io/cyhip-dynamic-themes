import { cn } from "~/lib/utils";
import { GitHubIcon } from "~/ui/icons/github";
import { NextjsIcon } from "~/ui/icons/nextjs";
import { SassIcon } from "~/ui/icons/sass";
import { TailwindIcon } from "~/ui/icons/tailwind";

export const Banner = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("", props.className)}>
            <h1 className="text-5xl sm:text-6xl text-center drop-shadow-lg font-medium ">
                Dynamic Color Themes
            </h1>
            <div className="dev-stack drop-shadow-lg grid grid-rows-1 grid-cols-3 gap-x-4 justify-around items-center mx-auto">
                <TailwindIcon className="h-28 w-28" />
                <SassIcon className="h-24 w-24" />
                <NextjsIcon className="h-28 w-28" />
            </div>

            <div className="references flex flex-col items-center text-center space-y-4 font-mono bg-accent-700/80 dark:bg-accent-700/20 rounded p-5 mx-5 shadow">
                <div>
                    <a
                        href=""
                        className="flex flex-row items-center hover:underline "
                    >
                        <GitHubIcon className="me-4 h-7 w-7 " />
                        <span className=""> Source - @KassioRF </span>
                    </a>
                </div>

                <div>
                    <p>CyberHippie 2024 </p>
                </div>
            </div>
        </div>
    );
};
