import { CookieSettings } from "~/components/examples/cookies-settings";
import { SignUp } from "~/components/examples/signup";
import { ThemeMenu } from "~/components/theme-selector/theme-selector";

function App() {
    return (
        <main className=" h-screen flex flex-col justify-center items-center gap-8">
            <div className="container">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="rounded-sm py-6 px-4 md:px-24 text-center">
                        <h1 className="text-4xl font-bold mb-2">
                            CyHip Dynamic Themes
                        </h1>
                        <h2 className="text-4xl font-bold">Tailwind + React</h2>
                    </div>
                    <div>
                        <ThemeMenu className="bg-accent-50 dark:bg-accent-950/30 border px-8 py-5" />
                    </div>
                </div>
            </div>
            <div className="examples container max-w-[54rem]">
                <div className="test">
                    {/* <Button variant="link"> Test </Button> */}
                </div>
                <div className="grid grid-cols-2 gap-8 items-center justify-center">
                    <SignUp className="bg-accent-50 dark:bg-accent-950/30 max-w-[24rem] mx-auto" />
                    <CookieSettings className="bg-accent-50 dark:bg-accent-950/30 max-w-[24rem] mx-auto" />
                </div>
            </div>
        </main>
    );
}

export default App;
