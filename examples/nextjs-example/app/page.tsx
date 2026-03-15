import ChartExample from '@/components/chart-example/chart-example';
import FormDemo from '@/components/form-demo/form-demo';
import KpisExample from '@/components/kpis-example/kpis-example';
import Overview from '@/components/overview/overview';
import RecentActivity from '@/components/recent-activity/recent-activity';
import SiteFooter from '@/components/site-footer/site-footer';
import SiteHeader from '@/components/site-header/site-header';
import TableShowcase from '@/components/table-showcase/table-showcase';
import ThemeContext from '@/components/theme-context/theme-context';
import UiElementMatrix from '@/components/ui-element-matrix/ui-element-matrix';
import { cn } from '@/lib/utils';

export default function Home() {
    return (
        <div className="min-h-screen cy-pattern-bg">
            <SiteHeader props={{ className: cn() }} />

            <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8 md:py-10">
                <section id="overview" className="flex justify-center">
                    <Overview props={{ className: cn() }} />
                </section>

                <section className="">
                    <KpisExample props={{ className: 'grid gap-4 grid-cols-2 lg:grid-cols-4' }} />
                </section>

                <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <ChartExample props={{ className: cn() }} />
                    <RecentActivity props={{ className: cn() }} />
                </section>

                <section id="components" className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                    <UiElementMatrix props={{ className: cn() }} />
                    <TableShowcase props={{ className: cn() }} />
                </section>

                <section id="form" className="grid gap-4 md:grid-cols-[1fr_1fr]">
                    <FormDemo props={{ className: cn() }} />
                    <ThemeContext props={{ className: cn() }} />
                </section>
            </main>

            <SiteFooter props={{ className: cn() }} />
        </div>
    );
}
