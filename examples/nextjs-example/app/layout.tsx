import { cn } from '@/lib/utils';
import { AppThemeProvider } from '@/themes/app-theme-provider';
import '@/themes/root.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, Sora } from 'next/font/google';

const bodyFont = IBM_Plex_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['300', '400', '500', '600', '700'],
});

const displayFont = Sora({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Cyhip Dynamic Themes - Next.js Demo',
    description: 'Dashboard-style example showcasing dynamic hue themes and light/dark mode.',
    icons: {
        icon: '/color.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(bodyFont.variable, displayFont.variable)}>
            <body className="">
                <AppThemeProvider>{children}</AppThemeProvider>
            </body>
        </html>
    );
}
