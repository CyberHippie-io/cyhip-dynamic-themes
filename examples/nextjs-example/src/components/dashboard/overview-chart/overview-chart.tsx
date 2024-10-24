"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { cn } from "~/lib/utils";

const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
];

export function OverviewChart(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="overview-info-header">
                <h4>Overview</h4>
                <p className="text-sm opacity-70"> Sales overview </p>
            </div>

            <ResponsiveContainer
                width="100%"
                height={350}
                className={cn(props.className, "")}
            >
                <BarChart data={data}>
                    <XAxis
                        dataKey="name"
                        stroke="gray"
                        fontSize={12}
                        tickLine={false}
                        axisLine={true}
                    />
                    <YAxis
                        stroke="gray"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Bar
                        dataKey="total"
                        radius={[4, 4, 0, 0]}
                        className="fill-accent-500"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
