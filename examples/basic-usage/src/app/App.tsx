import { ThemeMenu } from "~/components/theme-selector/theme-selector";

function App() {
    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <div className="container">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="rounded-sm py-6 px-4 md:px-24 text-center">
                        <h1 className="text-4xl font-bold mb-2">
                            CyHip Dynamic Themes
                        </h1>
                        <h2 className="text-4xl font-bold">Tailwind + React</h2>
                    </div>
                    <div>
                        <ThemeMenu />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
