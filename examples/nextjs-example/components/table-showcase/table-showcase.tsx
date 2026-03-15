import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { DivProps } from '@/types/dom';
import { tableShowcaseRows } from './data';

export default function TableShowcase({ props }: { props?: DivProps }) {
    return (
        <Card className={cn(props?.className, 'bg-card shadow-sm')}>
            <CardHeader>
                <CardTitle>Table Showcase</CardTitle>
                <CardDescription>
                    Data widgets adapting to the active theme in real time
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Segment</TableHead>
                            <TableHead className="text-right">Spend</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableShowcaseRows.map((row) => (
                            <TableRow key={row.user}>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={row.status === 'Online' ? 'default' : 'outline'}
                                    >
                                        {row.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{row.segment}</TableCell>
                                <TableCell className="text-right font-medium">
                                    {row.spend}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
