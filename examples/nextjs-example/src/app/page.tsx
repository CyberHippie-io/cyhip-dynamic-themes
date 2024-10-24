"use client";
import { useEffect, useRef, useState } from "react";
import { Banner } from "~/components/banner/banner";
import { DashBoard } from "~/components/dashboard/dashboard";
import { ThemeSelectorBtn } from "~/components/theme-selector/theme-selector";
import { cn } from "~/lib/utils";

export default function Home() {
    const [themeBtnPosition, setThemeBtnPosition] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const navElement = navRef.current;
        if (navElement) {
            const offsetTop = navElement.offsetTop;
            const scrollPosition = window.scrollY;
            setThemeBtnPosition(scrollPosition > offsetTop + 200);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="dot-bg absolute inset-0 w-full -z-50" />
            {/* nav : >= xl  */}
            <nav ref={navRef} className="hidden fixed lg:block w-4/12 z-50">
                <Banner
                    className={cn(
                        "h-screen flex flex-col gap-y-10 pt-36 mx-auto",
                        "bg-accent-500/95 text-accent-100 shadow-xl",
                        "dark:bg-accent-950"
                    )}
                />
                <ThemeSelectorBtn className="absolute bottom-[35vh] -right-8 z-50 flex flex-row" />
            </nav>

            {/* nav : <= xl  */}
            <nav className="block lg:hidden w-full relative z-50">
                <ThemeSelectorBtn
                    className={cn(
                        "py-5 px-5 flex flex-row z-10",
                        themeBtnPosition
                            ? "fixed top-5 right-0"
                            : "absolute top-[88%] right-0"
                    )}
                />
                <Banner
                    className={cn(
                        ".banner",
                        "min-h-[45vh] flex flex-col justify-center gap-y-10 py-10 px-5",
                        "bg-accent-500/95 text-accent-100 shadow-xl",
                        "dark:bg-accent-950"
                    )}
                />
            </nav>

            <main className="grid grid-cols-12 h-screen">
                <div className="col-span-4 hidden lg:block"></div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="h-full flex flex-col justify-center max-w-[96vh] mx-auto">
                        <DashBoard />
                    </div>
                </div>
            </main>
            <footer className="grid grid-cols-12">
                <div className="col-span-4 hidden lg:block"></div>
                <div className="col-span-12 lg:col-span-8 grid justify-center items-center h-16 mt-12 mb-6 bg-transparent">
                    <p className="text-center text-sm text-muted-foreground rounded px-10 py-4 bg-accent-200/30 dark:bg-accent-950/50">
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
            </footer>
        </>
    );
}
