import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const capitalize = (str: string, lower = false) =>
    str.charAt(0).toUpperCase() + (lower ? str.toLowerCase() : str).slice(1);

// cn prevents classNames collisions by overwriting conflicting tailwind classes
// for ex: cn('text-blue-500', invalid && 'text-red-500') will output only 'text-red-500' if invalid is true
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
