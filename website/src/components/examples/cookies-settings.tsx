import { cn } from "~/lib/utils";
import { Button } from "~/ui/button/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/ui/card/card";
import { Label } from "~/ui/label/label";
import { Switch } from "~/ui/switch/switch";

export const CookieSettings = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Card
            className={cn(props.className, "flex flex-col rounded space-y-4")}
        >
            <CardHeader>
                <CardTitle className="text-2xl">Cookie Settings</CardTitle>
                <CardDescription>
                    Manage your cookie settings here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center justify-between space-x-2">
                    <Label
                        htmlFor="necessary"
                        className="flex flex-col space-y-1"
                    >
                        <span>Strictly Necessary</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            These cookies are essential in order to use the
                            website and use its features.
                        </span>
                    </Label>
                    <Switch id="necessary" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <Label
                        htmlFor="functional"
                        className="flex flex-col space-y-1"
                    >
                        <span>Functional Cookies</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            These cookies allow the website to provide
                            personalized functionality.
                        </span>
                    </Label>
                    <Switch id="functional" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2">
                    <Label
                        htmlFor="performance"
                        className="flex flex-col space-y-1"
                    >
                        <span>Performance Cookies</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            These cookies help to improve the performance of the
                            website.
                        </span>
                    </Label>
                    <Switch id="performance" />
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">
                    Save preferences
                </Button>
            </CardFooter>
        </Card>
    );
};
