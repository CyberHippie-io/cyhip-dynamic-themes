import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { Sparkles, UserRound } from 'lucide-react';

export default function ThemeContext({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'bg-card shadow-sm')}>
            <CardHeader>
                <CardTitle>Theme Context</CardTitle>
                <CardDescription>About this demo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                    Use the controls in the top-right to switch hue and mode. The whole page stays
                    visually consistent because it relies on semantic tokens instead of fixed color
                    values.
                </p>
                <div className="rounded-sm border border-border/70 bg-background/60 p-4">
                    <p className="mb-2 flex items-center gap-2 text-foreground">
                        <Sparkles className="size-4 text-primary" />
                        Why this is useful
                    </p>
                    <p>
                        This shows how a design system can stay expressive while themes are updated
                        dynamically at runtime.
                    </p>
                </div>
                <div className="rounded-sm border border-border/70 bg-background/60 p-4">
                    <p className="mb-2 flex items-center gap-2 text-foreground">
                        <UserRound className="size-4 text-primary" />
                        Who this is for
                    </p>
                    <p>
                        Teams building white-label products, multi-brand dashboards, or interfaces
                        users can personalize while still keeping a consistent visual language.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
