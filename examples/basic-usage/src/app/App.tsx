import { Banner } from "~/components/banner/banner";
import { CookieSettings } from "~/components/examples/cookies-settings";
import { SignUp } from "~/components/examples/signup";
import { ThemeMenu } from "~/components/theme-selector/theme-selector";

function App() {
    return (
        <main className="h-screen grid justify-center items-center my-10">
            <div className="grid grid-rows-2 justify-center items-center pb-10 px-4 ">
                <Banner />
                <ThemeMenu />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8 items-center justify-center p-4">
                <SignUp className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
                <CookieSettings className="bg-accent-50 dark:bg-accent-950/90 max-w-[24rem] shadow" />
            </div>
        </main>
    );
}

export default App;
