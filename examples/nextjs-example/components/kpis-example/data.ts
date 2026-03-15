import { Activity, DollarSign, LucideProps, ShieldCheck, Users } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type KpiData = {
    title: string;
    value: string;
    trend: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
};

export const kpiData: KpiData[] = [
    { title: 'Monthly Revenue', value: '$82,490', trend: '+12.4%', icon: DollarSign },
    { title: 'Active Sessions', value: '19,248', trend: '+7.9%', icon: Users },
    { title: 'Conversion Rate', value: '6.84%', trend: '+1.2%', icon: Activity },
    { title: 'Trust Score', value: '98.2', trend: '+0.8%', icon: ShieldCheck },
];
