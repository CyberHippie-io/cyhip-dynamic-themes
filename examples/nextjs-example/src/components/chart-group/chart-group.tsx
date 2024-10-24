import { cn } from "~/lib/utils";
import { LineChartExample } from "./line-chart";
import { RadialChartExample } from "./radial-chart";

export const ChartGroup = () => {
    return (
        // <div className={cn("w-fit")}>
        <div className={cn("")}>
            <RadialChartExample className=" bg-accent-50 dark:bg-accent-900/20 rounded shadow" />
            <LineChartExample className=" bg-accent-50 dark:bg-accent-900/20 rounded shadow" />

            {/* <LineChartExample className=" bg-accent-50 dark:bg-accent-900/20 rounded shadow" /> */}
        </div>
    );
};
