import { Button } from "@/components/ui/button";

export default function CompactHero() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Plan events. Sell tickets. Measure impact.
            </h1>
            <p className="mt-2 text-muted-foreground">
                A clean, fast stack for modern event teams — built on shadcn defaults.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
                <a href="#contact"><Button size="sm">Get started</Button></a>
                <a href="#features"><Button size="sm" variant="secondary">Learn more</Button></a>
            </div>
        </section>
    );
}

