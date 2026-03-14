// src/App.tsx
import { ThemeSwitcher } from './themes/theme-switcher';

export default function App() {
    return (
        <>
            <main className="flex h-screen flex-col items-center justify-center gap-y-14">
                <h1 className="bg-accent-200/40 dark:bg-accent-700/40 grid grid-cols-1 gap-6 p-4">
                    Cyhip Dynamic Themes
                </h1>
                <ThemeSwitcher />
                <div className="grid grid-cols-1 gap-6 p-4">
                    <button className="bg-primary text-primary-foreground mx-auto rounded-sm px-5 py-2 font-medium shadow">
                        Button
                    </button>
                </div>
            </main>
        </>
    );
}
