import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { kpiData, KpiData } from './data';

export default function KpisExample({ props }: { props?: DivProps }) {
    return (
        <div className={cn(props?.className)}>
            {kpiData.map((data) => (
                <KpiCard key={data.title} data={data} />
            ))}
        </div>
    );
}

function KpiCard({ data }: { data: KpiData }) {
    return (
        <Card key={data.title} className="bg-card shadow-sm">
            <CardHeader>
                <CardDescription>{data.title}</CardDescription>
                <CardTitle className="text-2xl tracking-tight">{data.value}</CardTitle>
                <CardAction>
                    <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <data.icon className="size-4" />
                    </span>
                </CardAction>
            </CardHeader>
            <CardFooter>
                <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{data.trend}</span> vs last month
                </p>
            </CardFooter>
        </Card>
    );
}
