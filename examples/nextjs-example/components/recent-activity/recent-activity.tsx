import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { activityData } from './data';

export default function RecentActivity({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'bg-card shadow-sm')}>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Theme changes keep all semantic states coherent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {activityData.map((row) => (
                    <div
                        key={row.event}
                        className="flex items-center gap-3 rounded-sm border border-border/70 bg-background/60 px-3 py-2"
                    >
                        <Avatar size="sm">
                            <AvatarFallback>{row.initials}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm">{row.event}</p>
                            <p className="text-xs text-muted-foreground">{row.time}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
