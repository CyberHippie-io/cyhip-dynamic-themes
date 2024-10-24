import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";
import { CheckIcon } from "~/ui/icons/check";

type CheckDotProps = HTMLAttributes<HTMLDivElement> & {
    selected?: boolean;
};

const CheckDot = forwardRef<HTMLDivElement, CheckDotProps>(
    ({ selected, ...props }, ref): JSX.Element => {
        const background = props.style?.background || "tomato";
        return (
            <div
                ref={ref}
                className={cn(
                    "w-5 h-5 rounded-full shadow text-white",
                    props.className
                )}
                style={{ background }}
            >
                <span>
                    {selected && (
                        <CheckIcon className={cn("text-white  font-medium")} />
                    )}
                </span>
            </div>
        );
    }
);

// Define o nome do componente para depuração
CheckDot.displayName = "CheckDot";

export { CheckDot };
