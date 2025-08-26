import { Card, CardContent } from "@/components/ui/card";

const items = [
    { title: "Ticketing", desc: "Tiers, promo codes, check-in." },
    { title: "Agenda", desc: "Drag-and-drop schedule builder." },
    { title: "CRM", desc: "Audience segments and emails." },
];

export default function MiniFeatures() {
    return (
        <section id="features" className="mx-auto max-w-4xl px-6 py-8">
            <div className="grid gap-4 sm:grid-cols-3">
                {items.map((i) => (
                    <Card key={i.title}>
                        <CardContent className="p-4">
                            <div className="text-sm font-medium">{i.title}</div>
                            <div className="text-xs text-muted-foreground">{i.desc}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

