import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "CyHip Dynamic Themes ",
    description: "Dynamic Tailwind color theming for React apps.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + "antialiased"}>{children}</body>
        </html>
    );
}
