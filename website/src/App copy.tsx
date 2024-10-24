import SimpleParallax from "simple-parallax-js";
import { Banner } from "./components/banner/banner";
import { CookieSettings } from "./components/examples/cookies-settings";
import { SignUp } from "./components/examples/signup";
import { HowToUse } from "./components/how-to-use/how-to-use";
import { ThemeMenu } from "./components/theme-selector/theme-selector";

function App() {
    return (
        <>
            <div className="overlay max-w-[80vw] relative mx-auto">
                <SimpleParallax orientation="right">
                    <div className="animate-pulseA fixed inset-y-[70vh] inset-x-48 w-[22rem] h-[22rem] rounded-full rotate-45 bg-gradient-to-b from-accent-400/40 to-accent-200/30 blur-2xl -z-50" />
                </SimpleParallax>
                <SimpleParallax orientation="left">
                    <div className="animate-pulseB  fixed inset-y-[16vh] right-48 w-[22rem] h-[22rem] rounded-full rotate-45 bg-gradient-to-b from-accent-400/40 to-accent-200/30 blur-2xl -z-50" />
                </SimpleParallax>
            </div>
            <main className=" grid grid-cols-1 justify-center items-center gap-y-8">
                <div className="mx-auto">
                    <Banner className="h-[25vh]" />
                </div>

                <div className="flex flex-col items-center">
                    <ThemeMenu />

                    {/* How to use */}
                    <div className="md:col-span-2">
                        <HowToUse className="mt-8" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 items-center justify-center p-4">
                        <SignUp className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
                        <CookieSettings className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
                    </div>
                </div>
            </main>
            <footer>
                <div className="grid justify-center items-center h-16 mt-12 mb-6">
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

export default App;
