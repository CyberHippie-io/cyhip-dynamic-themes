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
import { GitHubIcon } from "~/ui/icons/github";
import { GoogleIcon } from "~/ui/icons/google";
import { Input } from "~/ui/input/input";
import { Label } from "~/ui/label/label";

export const SignUp = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Card
            {...props}
            className={cn(
                props.className,
                "flex flex-col rounded shadow space-y-4"
            )}
        >
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6 ">
                    <Button variant="outline" className="flex space-x-2">
                        <GitHubIcon className="mr-1 h-4 w-4" />
                        <span>Github</span>
                    </Button>
                    <Button variant="outline" className="flex space-x-2">
                        <GoogleIcon className="mr-1 h-4 w-4" />
                        <span>Google</span>
                    </Button>
                </div>
                <div className="relative mt-2">
                    <div className="relative flex justify-center items-center text-xs uppercase">
                        <span className="w-[25%] border-t" />
                        <span className="px-2 text-center text-muted-foreground grow">
                            Or continue with
                        </span>
                        <span className="w-[25%] border-t" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        className="h-8 px-2 py-4 "
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        className="h-8 px-2 py-4 "
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Create account</Button>
            </CardFooter>
        </Card>
    );
};
