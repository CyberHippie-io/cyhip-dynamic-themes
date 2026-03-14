import { ThemeSwitcher } from '@/themes/theme-switcher';

export default function Home() {
    return (
        <>
            <main className="flex h-screen flex-col items-center justify-center gap-y-14">
                <h1 className="text-center text-4xl font-medium tracking-tighter text-balance">
                    Cyhip Dynamic Themes - Nextjs example
                </h1>
                <ThemeSwitcher />

                <div className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
                    <div className="font-code bg-accent-950/80 text-accent-100/90 rounded-sm px-4 py-1 text-xs shadow">
                        className="bg-primary text-primary-foreground ..."
                    </div>
                    <button
                        type="button"
                        className="bg-primary text-primary-foreground mx-auto cursor-pointer rounded-sm px-5 py-2 font-medium shadow"
                    >
                        Button
                    </button>
                </div>
            </main>
        </>
    );
}
