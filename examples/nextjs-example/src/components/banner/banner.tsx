import { NextjsIcon } from "~/components/ui/icons/nextjs";
import { SassIcon } from "~/components/ui/icons/sass";
import { TailwindIcon } from "~/components/ui/icons/tailwind";
import { cn } from "~/lib/utils";

export const Banner = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("grid grid-rows-2 items-center", props.className)}>
            <h1 className="text-4xl drop-shadow-lg font-bold ">
                Dynamic Color Themes
            </h1>
            <div className="dev-stack flex space-x-6 drop-shadow">
                <TailwindIcon className="h-24 w-24" />
                <SassIcon className="h-20 w-20" />
                <NextjsIcon className="h-24 w-24" />
            </div>
        </div>
    );
};
