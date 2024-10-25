import { cn } from "~/lib/utils";
import { GitHubIcon } from "../ui/icons/github";
import { SiteIcon } from "../ui/icons/site";

export const Info = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(props.className)} {...props}>
            <div className="repo-link mx-auto flex justify-center space-x-2 items-center mb-4">
                <SiteIcon className="w-5 h-5" />
                <a
                    href="https://cyhip-dynamic-themes.vercel.app/"
                    className="font-bold hover:underline"
                    target="_blank"
                >
                    Official package website
                </a>
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
            <div className="grid justify-center items-center h-16 mt-4 mb-6">
                <p className="text-center text-sm rounded px-10 py-4 bg-accent-900/30 dark:bg-accent-950/50">
                    by{" "}
                    <a
                        href="https://github.com/KassioRF"
                        className="font-bold hover:underline"
                        target="_blank"
                    >
                        @KassioRF
                    </a>{" "}
                    | Cyhip Packages
                </p>
            </div>
        </div>
    );
};
