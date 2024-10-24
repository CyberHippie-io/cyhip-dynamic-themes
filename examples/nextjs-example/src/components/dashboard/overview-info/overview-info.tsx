import { cn } from "~/lib/utils";

interface UserDummy {
    avatar: string; // URL ou identificador do avatar
    name: string; // Nome do usuário
    email: string; // E-mail do usuário
    amount: string; // Quantia transacionada
}

const transactions: UserDummy[] = [
    {
        avatar: "Avatar",
        name: "Lucas Johnson",
        email: "lucas.johnson@email.com",
        amount: "+$2,150.00",
    },
    {
        avatar: "Avatar",
        name: "Emily Brown",
        email: "emily.brown@email.com",
        amount: "+$50.00",
    },
    {
        avatar: "Avatar",
        name: "Liam Smith",
        email: "liam.smith@email.com",
        amount: "+$400.00",
    },
    {
        avatar: "Avatar",
        name: "Mia Thompson",
        email: "mia.thompson@email.com",
        amount: "+$120.00",
    },
    {
        avatar: "Avatar",
        name: "Noah Garcia",
        email: "noah.garcia@email.com",
        amount: "+$80.00",
    },
];

export function OverViewInfo(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(props.className, "flex flex-col gap-y-6")}
            {...props}
        >
            <div className="overview-info-header">
                <h4>Recent Sales</h4>
                <p className="text-sm opacity-70"> Latest sales </p>
            </div>
            <div className="overview-info-data flex flex-col gap-y-4">
                {transactions.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border-b pb-2"
                    >
                        <div className="flex items-center gap-x-2">
                            <div className="avatar bg-accent-400/50 w-10 h-10 rounded-full"></div>
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm opacity-70">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <div className="font-medium">{user.amount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
