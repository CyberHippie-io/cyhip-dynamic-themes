import { ThemeConfig, ThemeProvider } from 'cyhip-dynamic-themes';
import type { Metadata } from 'next';

import '~/styles/global.scss';
import { chromaData, hueScheme } from '~/themes/theme.config';

export const metadata: Metadata = {
    title: 'cyhip-dynamic-themes | Nextjs Example ',
    description: 'Dynamic Color Themes with Tailwindcss for React apps',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeProvider
                themeConfig={
                    {
                        hue: hueScheme.blue,
                        mode: 'light',
                        chromaData: chromaData,
                    } as ThemeConfig
                }
            >
                <body>{children}</body>
            </ThemeProvider>
        </html>
    );
}
