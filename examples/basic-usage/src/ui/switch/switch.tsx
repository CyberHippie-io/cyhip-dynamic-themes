import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "~/lib/utils";

import styles from "./switch.module.css";

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn("peer", styles.el_root, className)}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb className={cn(styles.thumb)} />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
