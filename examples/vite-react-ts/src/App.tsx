import { ThemeSwitcher } from "./themes/theme-switcher";

function App() {
    return (
        <>
            <main className="h-screen flex flex-col justify-center items-center gap-y-14">
                <h1 className="text-4xl font-bold text-center">
                    Cyhip Dynamic Themes - Basic Usage
                </h1>
                <ThemeSwitcher />
                <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
                    <button className="bg-primary text-primary-foreground px-5 py-2 shadow rounded-sm font-medium mx-auto">
                        Button
                    </button>
                    <samp className="bg-accent-950/80 text-accent-100/90 text-sm rounded-sm px-4 py-1 shadow">
                        className="bg-primary text-primary-foreground ..."
                    </samp>
                </div>
            </main>
        </>
    );
}

export default App;
