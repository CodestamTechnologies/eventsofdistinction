type Stat = { label: string; value: string; sub?: string };

const stats: Stat[] = [
    { label: "Brands", value: "100+" },
    { label: "Projects", value: "5000+" },
    { label: "Awards", value: "125+" },
    { label: "Years", value: "10" },
    { label: "Cities", value: "62" },
    { label: "Team", value: "131+" },
];

export default function Stats() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="mb-6 text-center">
                <div className="text-xs font-medium text-primary">Why People Like Us</div>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Proven delivery, measurable impact</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {stats.map((s) => (
                    <div key={s.label} className="rounded-xl border bg-card p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

