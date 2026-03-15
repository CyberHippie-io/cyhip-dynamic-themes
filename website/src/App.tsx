import {
    cliSnippet,
    installSnippet,
    providerSnippet,
    tailwindUsageSnippet,
} from './code-snippets/snippets';
import Features from './components/features/features';
import Hero from './components/hero/hero';
import Playground from './components/playground/playground';
import SiteFooter from './components/site-footer/site-footer';
import SiteHeader from './components/site-header/site-header';
import Usage from './components/usage/usage';
import { cn } from './lib/utils';

function App() {
    return (
        <>
            <div className="cy-pattern">
                <div className="cy-pattern-glow" />

                <SiteHeader props={{ className: cn() }} />

                <main className="cy-container pt-10 pb-5 sm:pt-14">
                    <section className="grid items-start gap-10 lg:grid-cols-2">
                        <Hero
                            props={{ className: cn() }}
                            installSnippet={installSnippet}
                            cliSnippet={cliSnippet}
                        />

                        <Playground
                            props={{ className: cn() }}
                            tailwindUsageSnippet={tailwindUsageSnippet}
                        />
                    </section>

                    <Features props={{ className: cn() }} />

                    <Usage
                        props={{ className: cn() }}
                        providerSnippet={providerSnippet}
                        tailwindUsageSnippet={tailwindUsageSnippet}
                    />

                    <SiteFooter props={{ className: cn() }} />
                </main>
            </div>
        </>
    );
}

export default App;
