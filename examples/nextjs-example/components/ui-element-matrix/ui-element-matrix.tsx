import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';

export default function UiElementMatrix({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'bg-card shadow-sm')}>
            <CardHeader>
                <CardTitle>UI Element Matrix</CardTitle>
                <CardDescription>
                    Buttons, badges and tabs powered by semantic tokens
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="buttons" className="grid w-full grid-rows-[auto_1fr] gap-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="buttons">Buttons</TabsTrigger>
                        <TabsTrigger value="status">Status</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buttons" className="mt-4 space-y-3">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Button>Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                        <p className="mx-5 my-5 text-xs text-muted-foreground">
                            All variants are bound to `primary`, `secondary`, `muted`, and `border`
                            tokens.
                        </p>
                    </TabsContent>
                    <TabsContent value="status" className="mt-4 space-y-5">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <Badge className={'text-sm px-2 py-2.5'}>Live</Badge>
                            <Badge className={'text-sm px-2 py-2.5'} variant="secondary">
                                Stable
                            </Badge>
                            <Badge className={'text-sm px-2 py-2.5'} variant="outline">
                                Draft
                            </Badge>
                            <Badge className={'text-sm px-2 py-2.5'} variant="destructive">
                                Alert
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <Avatar className="ring-1 ring-border">
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <Avatar className="ring-1 ring-border">
                                <AvatarFallback>FM</AvatarFallback>
                            </Avatar>
                            <Avatar className="ring-1 ring-border">
                                <AvatarFallback>QX</AvatarFallback>
                            </Avatar>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
