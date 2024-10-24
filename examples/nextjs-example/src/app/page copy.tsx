import { Banner } from "~/components/banner/banner";
import { DashBoard } from "~/components/dashboard/dashboard";
import { CookieSettings } from "~/components/forms/cookie-settings/cookie-settings";
import { SignUp } from "~/components/forms/signup/signup";
import { ThemeSelectorBtn } from "~/components/theme-selector/theme-selector";
import { cn } from "~/lib/utils";

export default function Home() {
    return (
        <>
            {/* nav : >= xl  */}
            <nav className="hidden fixed xl:block w-4/12">
                {/* <ThemeSelectorBtn className="py-5 px-5 fixed top-5 left-[31.5vh] z-10 flex flex-row" /> */}
                <Banner
                    className={cn(
                        "h-screen flex flex-col justify-center  gap-y-10 pt-36 mx-auto",
                        "bg-accent-500/95 text-accent-100 shadow-xl",
                        "dark:bg-accent-900/80"
                    )}
                />
                <ThemeSelectorBtn className="absolute top-10 -right-8 z-10 flex flex-row" />
            </nav>

            {/* nav : <= xl  */}
            <nav className="block xl:hidden w-full">
                <ThemeSelectorBtn className="py-5 px-5 fixed top-5 right-0 z-10 flex flex-row" />
                <Banner
                    className={cn(
                        "min-h-[45vh] flex flex-col justify-center gap-y-10 py-10 px-5",
                        "bg-accent-500/95 text-accent-100 shadow-xl",
                        "dark:bg-accent-900/80"
                    )}
                />
            </nav>

            <main className="grid grid-cols-12">
                <div className="col-span-4 hidden xl:block"></div>
                <div className="col-span-12 xl:col-span-8">
                    <div className="py-14 px-2">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="col-span-2 sm:col-span-1 sm:contents ">
                                <SignUp className="max-w-[28rem] mx-auto bg-accent-50 dark:bg-accent-950/90 p-5 justify-between" />
                            </div>
                            <div className="col-span-2 sm:col-span-1 sm:contents">
                                <CookieSettings className="max-w-[28rem] mx-auto bg-accent-50 dark:bg-accent-950/90 p-5 justify-between " />
                            </div>
                            <div className="col-span-2">
                                <DashBoard />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
