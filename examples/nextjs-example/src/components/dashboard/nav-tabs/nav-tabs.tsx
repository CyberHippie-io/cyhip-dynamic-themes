"use client";

import Link from "next/link";

import { useState } from "react";
import { cn } from "~/lib/utils";
import styles from "./nav-tabs.module.scss";

type NavLinkRef = {
    id: number;
    href: string;
    text: string;
};

const navLinks: NavLinkRef[] = [
    {
        id: 0,
        href: "",
        text: "Overview",
    },
    {
        id: 1,
        href: "",
        text: "Analytics",
    },
    {
        id: 2,
        href: "",
        text: "Reports",
    },
    {
        id: 3,
        href: "",
        text: "Notifications",
    },
];

export function NavTabs({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const [active, setActive] = useState<NavLinkRef>(navLinks[0]);

    return (
        <nav
            className={cn("flex items-center space-x-2", className)}
            {...props}
        >
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={cn(
                        styles.link,
                        active.id === link.id && styles.active
                    )}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(link);
                    }}
                >
                    {link.text}
                </Link>
            ))}
        </nav>
    );
}
