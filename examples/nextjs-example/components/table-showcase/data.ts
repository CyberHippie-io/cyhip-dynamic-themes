export type TableShowcaseRow = {
    user: string;
    status: string;
    segment: string;
    spend: string;
};

export const tableShowcaseRows: TableShowcaseRow[] = [
    {
        user: 'Amanda R.',
        status: 'Online',
        segment: 'Enterprise',
        spend: '$1,842',
    },
    {
        user: 'Rafael M.',
        status: 'Pending',
        segment: 'Startup',
        spend: '$920',
    },
    {
        user: 'Julia C.',
        status: 'Online',
        segment: 'SMB',
        spend: '$640',
    },
];
