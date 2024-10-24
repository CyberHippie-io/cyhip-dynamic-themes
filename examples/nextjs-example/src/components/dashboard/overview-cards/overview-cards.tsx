import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card/card";
import { CreditCardIcon } from "~/components/ui/icons/credit-card";
import { DollarIcon } from "~/components/ui/icons/dollar";
import { PulseIcon } from "~/components/ui/icons/pulse";
import { ShareIcon } from "~/components/ui/icons/share";
import { cn } from "~/lib/utils";

export function OverViewCards(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("", props.className)} {...props}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className="rounded shadow-md bg-accent-50 dark:bg-accent-900/75"
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0">
                        <CardTitle className="text-sm font-medium">
                            {card.title}
                        </CardTitle>
                        {card.icon}
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="text-2xl font-bold text-accent-950 dark:text-accent-100">
                            {card.amount}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {card.footeNote}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

interface CardDummy {
    title: string;
    amount: string;
    footeNote: string;
    icon: JSX.Element | null | string;
}

const cards: CardDummy[] = [
    {
        title: "Total Revenue",
        amount: "$45,231.89",
        footeNote: "+20.1% from last month",
        icon: <DollarIcon />,
    },
    {
        title: "Subscriptions",
        amount: "+2350",
        footeNote: "+180.1% from last month",
        icon: <ShareIcon />,
    },
    {
        title: "Sales",
        amount: "+12,234",
        footeNote: "+19% from last month",
        icon: <CreditCardIcon />,
    },
    {
        title: "Active Now",
        amount: "+573",
        footeNote: "+201 since last hour",
        icon: <PulseIcon />,
    },
];
