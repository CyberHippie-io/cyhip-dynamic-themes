"use client";

import { Banner } from "~/components/banner/banner";
import { BgOverlay } from "~/components/bg-overlay/bg-overlay";
import { DashBoard } from "~/components/dashboard/dashboard";
import { ThemeSelectorBtn } from "~/components/theme-selector/theme-selector";
import { cn } from "~/lib/utils";

export default function Home() {
    return (
        <div className="relative grid grid-cols-3 gap-x-8 bg-accent-200/5 dark:bg-accent-900/20">
            <BgOverlay className="opacity-20" />
            <div className="col-span-3 xl:col-span-1">
                <nav
                    className={cn(
                        "flex flex-col items-center h-full px-4 relative",
                        "min-h-[35vh] xl:min-h-full",
                        "bg-accent-500/90 dark:bg-accent-800/90 text-accent-50 dark:text-accent-100",
                        "shadow-md"
                    )}
                >
                    <Banner />
                    <BgOverlay />
                </nav>
            </div>
            <div className="col-span-3 xl:col-span-2 ">
                <main className="">
                    <ThemeSelectorBtn className="fixed top-5 right-5 z-50" />
                    <div className="max-w-[60em] mt-48 mx-auto ">
                        <DashBoard className="mx-4 bg-accent-50 border dark:bg-accent-950/20 p-6 rounded-md backdrop-blur-xl shadow-md" />
                    </div>
                </main>
                <footer className="h-[8vh]"> footer </footer>
            </div>
        </div>
    );
}
