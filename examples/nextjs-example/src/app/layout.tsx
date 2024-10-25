import type { Metadata } from 'next';

import '~/styles/global.scss';

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
            <body>{children}</body>
        </html>
    );
}
