import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    { name: "Ava Thompson", role: "VP Events, Northwind", quote: "They elevated our conference into an unforgettable brand experience. Effortless, data-driven, and on budget." },
    { name: "Liam Chen", role: "Founder, CreatorCon", quote: "Our first 5,000-person festival ran smoother than our 300-person meetup. Unreal ops." },
    { name: "Sophia Reyes", role: "Marketing Lead, Fabrikam", quote: "Ticketing to analytics in one stack. Execs finally see ROI clearly." },
];

export default function Testimonials() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="testimonials">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Trusted by teams that ship experiences</h2>
                <p className="mt-2 text-muted-foreground">From intimate gatherings to arena-scale productions.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                    <Card key={t.name}>
                        <CardContent className="p-6">
                            <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                            <div className="mt-4 text-sm font-medium">{t.name}</div>
                            <div className="text-xs text-muted-foreground">{t.role}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

