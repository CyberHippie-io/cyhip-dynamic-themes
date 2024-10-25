"use client";

import { useEffect, useRef, useState } from "react";
import { Banner } from "~/components/banner/banner";
import { Info } from "~/components/banner/info";
import { BgOverlay } from "~/components/bg-overlay/bg-overlay";
import { DashBoard } from "~/components/dashboard/dashboard";
import { ThemeSelectorBtn } from "~/components/theme-selector/theme-selector";
import { cn } from "~/lib/utils";

export default function Home() {
    const [themeBtnPosition, setThemeBtnPosition] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const navElement = navRef.current;
        if (navElement) {
            const offsetTop = navElement.offsetHeight;
            const scrollPosition = window.scrollY;
            setThemeBtnPosition(scrollPosition > offsetTop - 300);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="relative grid grid-cols-3 gap-x-8 bg-accent-200/5 dark:bg-accent-900/20">
            <BgOverlay className="opacity-20" />
            <div className="col-span-3 xl:col-span-1">
                <nav
                    ref={navRef}
                    className={cn(
                        "relative xl:fixed w-auto xl:w-[30vw]",
                        "flex flex-col justify-center items-center h-full px-4",
                        "min-h-[35vh] xl:min-h-full",
                        "bg-accent-500/90 dark:bg-accent-800/90 text-accent-50 dark:text-accent-100",
                        "shadow-lg"
                    )}
                >
                    <Banner className=" mt-12 xl:mt-0" />
                    <Info className="mt-6 xl:mt-24" />
                    <BgOverlay className="opacity-100 xl:opacity-10" />
                </nav>
            </div>
            <div className="col-span-3 xl:col-span-2 ">
                <main className="mb-24">
                    <ThemeSelectorBtn
                        className={cn(
                            "transition-all duration-200 ease-in-out",
                            "z-50 absolute xl:fixed",
                            "right-1 sm:right-5",
                            themeBtnPosition
                                ? "fixed top-5 "
                                : "fixed top-[30rem] xl:top-5"
                        )}
                    />
                    <div className="max-w-[60em] mt-48 mx-auto ">
                        <DashBoard className="mx-4 bg-accent-50 border dark:bg-accent-950/5 p-6 rounded-md backdrop-blur-xl shadow-md" />
                    </div>
                </main>
            </div>
        </div>
    );
}
