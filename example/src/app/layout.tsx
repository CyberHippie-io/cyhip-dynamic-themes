import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Dynamic Tailwind color theming for React apps.",
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
