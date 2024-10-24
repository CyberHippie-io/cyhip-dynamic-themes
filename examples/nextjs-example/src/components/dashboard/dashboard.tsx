import { cn } from "~/lib/utils";
import { Button } from "~/ui";
import styles from "./dashbooard.module.scss";
import { NavTabs } from "./nav-tabs/nav-tabs";
import { OverViewCards } from "./overview-cards/overview-cards";
import { OverviewChart } from "./overview-chart/overview-chart";
import { OverViewInfo } from "./overview-info/overview-info";

const DashBoard = () => {
    return (
        <div
            className={cn(
                "dashboard-example shadow  p-10 sm:p-4 rounded bg-accent-50 backdrop-blur-sm dark:bg-accent-950/90",
                styles.dashboard__container
            )}
        >
            <h2 className="text-4xl font-bold">Dashboard</h2>

            <div className="flex flex-col sm:flex-row-reverse justify-center items-center sm:justify-between gap-4 ">
                <Button> Export </Button>
                <div>
                    <NavTabs className="main-nav bg-accent-400/15 dark:bg-accent-400/25 w-fit p-1 rounded " />
                </div>
            </div>

            <div
                className={cn(
                    "dashboard-content flex flex-col gap-y-4",
                    styles.dashboard__content
                )}
            >
                <OverViewCards className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" />

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="overview border rounded  shadow-md bg-accent-50 dark:bg-accent-900/75">
                        <OverviewChart />
                    </div>
                    <div className="overview-info border rounded shadow-md bg-accent-50 dark:bg-accent-900/75">
                        <OverViewInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DashBoard };
