export type ActivityData = {
    initials: string;
    event: string;
    time: string;
};

export const activityData: ActivityData[] = [
    {
        initials: 'AR',
        event: 'Palette changed to Blue',
        time: '2 min ago',
    },
    {
        initials: 'JM',
        event: 'Dark mode activated',
        time: '10 min ago',
    },
    {
        initials: 'PK',
        event: 'Theme persisted to storage',
        time: '24 min ago',
    },
    {
        initials: 'LT',
        event: 'Accent hue updated',
        time: '1 hour ago',
    },
];
