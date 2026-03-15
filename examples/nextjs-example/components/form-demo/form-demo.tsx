import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';

export default function FormDemo({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'bg-card shadow-sm')}>
            <CardHeader>
                <CardTitle>Form Demo</CardTitle>
                <CardDescription>
                    Inputs and controls with theme-aware focus/ring states
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="project-name">Project name</Label>
                    <Input id="project-name" placeholder="Cyhip Next Dashboard" />
                </div>
                <div className="grid gap-2">
                    <Label>Environment</Label>
                    <Select defaultValue="staging">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select environment" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dev">Development</SelectItem>
                            <SelectItem value="staging">Staging</SelectItem>
                            <SelectItem value="prod">Production</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Separator />
                <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md border border-border/70 p-3">
                        <div>
                            <p className="text-sm font-medium">Email digests</p>
                            <p className="text-xs text-muted-foreground">
                                Weekly updates from analytics
                            </p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-border/70 p-3">
                        <div>
                            <p className="text-sm font-medium">Auto theme sync</p>
                            <p className="text-xs text-muted-foreground">
                                Persist hue and mode preferences
                            </p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>
    );
}
