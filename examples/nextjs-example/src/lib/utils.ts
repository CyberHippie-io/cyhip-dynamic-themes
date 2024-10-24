import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
    START SECTION: String manipulation
*/

export const camelToText = (str: string) => {
    const result = str.replace(/([A-Z])/g, " $1");
    return (result.charAt(0).toUpperCase() + result.slice(1)).trim();
};

export const kebabToText = (str: string) => {
    const result = str.replace(/-/g, " ");
    return (result.charAt(0).toUpperCase() + result.slice(1)).trim();
};

export const kebabToCamelCase = (kebab: string) => {
    return kebab
        .split("-")
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
};

export const capitalize = (str: string, lower = false) =>
    str.charAt(0).toUpperCase() + (lower ? str.toLowerCase() : str).slice(1);

export const capitalizeAll = (str: string, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
        match.toUpperCase()
    );

/*
    END SECTION: String manipulation
*/

/*
    START SECTION: Date manipulation
*/

export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", options).format(date);

export const isValidDate = (dateOrTimestamp: Date | string | number) =>
    !isNaN(+new Date(dateOrTimestamp));

export const addMinutes = (date: Date, minutes: number) =>
    new Date(date.getTime() + minutes * 60000);

export const subtractMinutes = (date: Date, minutes: number) =>
    new Date(date.getTime() - minutes * 60000);

// Get end of the day
export const getEod = (date: Date) => {
    const eod = new Date(date);
    eod.setHours(23, 59, 59, 999);
    return eod;
};

export const getInputDateFormat = (date: Date, subtractTimezone?: boolean) =>
    !subtractTimezone
        ? date.toISOString().split("T")[0]
        : subtractMinutes(date, date.getTimezoneOffset())
              .toISOString()
              .split("T")[0];

// Get date ranges
export const getTodayRange = () => {
    const todayDate = new Date();
    const today = addMinutes(todayDate, todayDate.getTimezoneOffset());
    today.setHours(0, 0, 0, 0);
    return {
        startDate: today,
        endDate: getEod(today),
    };
};

export const getThisWeekRange = () => {
    const todayDate = new Date();
    const today = addMinutes(todayDate, todayDate.getTimezoneOffset());
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - dayOfWeek);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    return { startDate, endDate: getEod(endDate) };
};

export const getThisMonthRange = () => {
    const todayDate = new Date();
    const today = addMinutes(todayDate, todayDate.getTimezoneOffset());
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return { startDate, endDate: getEod(endDate) };
};

export const getThisYearRange = () => {
    const todayDate = new Date();
    const today = addMinutes(todayDate, todayDate.getTimezoneOffset());
    const startDate = new Date(today.getFullYear(), 0, 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(today.getFullYear(), 11, 31);

    return { startDate, endDate: getEod(endDate) };
};

/*
    END SECTION: Date manipulation
*/

/*
    START SECTION: Miscellaneous
*/

// cn prevents classNames collisions by overwriting conflicting tailwind classes
// for ex: cn('text-blue-500', invalid && 'text-red-500') will output only 'text-red-500' if invalid is true
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/*
    END SECTION: Miscellaneous
*/
