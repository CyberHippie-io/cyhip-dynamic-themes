import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { chartLabels, chartPoints, maxChartPoint } from './data';

export default function ChartExample({ props }: { props?: DivProps }) {
    return (
        <div className={cn(props?.className)}>
            <Card className="bg-card shadow-sm">
                <CardHeader>
                    <CardTitle>Traffic Momentum</CardTitle>
                    <CardDescription>
                        Simple monthly bar chart styled by active theme tokens
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-sm border border-border/70 bg-muted/40 p-4">
                        <div className="relative h-52 overflow-hidden rounded-xs border border-border/60 bg-background px-3 py-3">
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_24%,oklch(var(--accent-900)/0.06)_25%,transparent_26%,transparent_49%,oklch(var(--accent-900)/0.06)_50%,transparent_51%,transparent_74%,oklch(var(--accent-900)/0.06)_75%,transparent_76%)] dark:bg-[linear-gradient(to_bottom,transparent_24%,oklch(var(--accent-100)/0.12)_25%,transparent_26%,transparent_49%,oklch(var(--accent-100)/0.12)_50%,transparent_51%,transparent_74%,oklch(var(--accent-100)/0.12)_75%,transparent_76%)]" />

                            <div className="relative flex h-full items-end gap-1.5">
                                {chartPoints.map((point, index) => (
                                    <div
                                        key={`${point}-${index}`}
                                        className="group flex h-full flex-1 items-end cursor-pointer"
                                    >
                                        <div
                                            className="w-full rounded-xs bg-primary/90 transition-opacity group-hover:opacity-100 group-hover:bg-primary"
                                            style={{
                                                height: `${Math.round((point / maxChartPoint) * 100)}%`,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                            {chartLabels.map((label) => (
                                <span key={label}>{label}</span>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
