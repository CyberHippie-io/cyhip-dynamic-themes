import { ThemeMenu } from "~/components/theme-menu/theme-menu";

export default function Home() {
    return (
        <main className="h-screen flex flex-col justify-center items-center gap-y-16">
            <div>
                <ThemeMenu />
            </div>

            <div>
                <h1 className="text-5xl font-bold">CyHip Dynamic Themes</h1>
            </div>
        </main>
    );
}
