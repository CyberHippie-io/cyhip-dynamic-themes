import { Banner } from "~/components/banner/banner";
import { CookieSettings } from "~/components/examples/cookies-settings";
import { SignUp } from "~/components/examples/signup";
import { ThemeMenu } from "~/components/theme-selector/theme-selector";

function App() {
    return (
        <>
            {/* overlay */}
            <div className="fixed inset-y-3/4 inset-x-48 w-96 h-96 rounded-full rotate-45 bg-gradient-to-b from-accent-400/30 to-accent-50/5 blur-3xl -z-50" />
            <div className="fixed inset-y-1/4 right-48 w-96 h-96 rounded-full rotate-45 bg-gradient-to-b from-accent-400/30 to-accent-50/5 blur-3xl -z-50" />
            {/* main */}
            <main className=" grid grid-cols-1 justify-center items-center">
                <Banner className="h-[25vh] flex flex-col justify-end mb-16" />
                <div className="flex flex-col items-center">
                    <ThemeMenu />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 items-center justify-center p-4">
                        <SignUp className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
                        <CookieSettings className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
                    </div>
                </div>
            </main>
            <footer>
                <div className="grid justify-center items-center h-16 mb-4">
                    <p className="text-center text-sm text-muted-foreground rounded px-10 py-4 bg-accent-200/30 dark:bg-accent-950/50">
                        Crafted by CyHIP - @KassioRF
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
/*
<main className="grid justify-center  my-10">
<div className="h-[45vh] grid grid-rows-2 justify-center items-end pb-10 px-4 ">
    <Banner />
</div>

<div className="grid grid-rows-2">
    <ThemeMenu />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 items-center justify-center p-4">
        <SignUp className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
        <CookieSettings className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
    </div>
</div>
</main>
<footer>
<div className="grid justify-center items-center h-16 mb-4">
    <p className="text-center text-sm text-muted-foreground rounded px-10 py-4 bg-accent-200/30 dark:bg-accent-950/50">
        Crafted by CyHIP - @KassioRF
    </p>
</div>
</footer>
*/
