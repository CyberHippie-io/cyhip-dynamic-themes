import { cn } from "~/lib/utils";

const BgOverlay = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn(className, "overlay-dot")} {...props} />;
};

export { BgOverlay };
