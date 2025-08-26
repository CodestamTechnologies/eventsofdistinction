import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Tier = {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
};

const tiers: Tier[] = [
    {
        name: "Starter",
        price: "$1,999",
        description: "For intimate events and meetups",
        features: ["Ticketing setup", "Agenda builder", "On-site check-in"],
        cta: "Choose Starter",
    },
    {
        name: "Pro",
        price: "$6,999",
        description: "For conferences and launches",
        features: ["Multi-track schedule", "Sponsorships", "Vendor workflows", "Email automations"],
        cta: "Choose Pro",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For multi-day, multi-venue productions",
        features: ["Custom workflows", "Dedicated PM", "Advanced analytics", "SLAs"],
        cta: "Talk to sales",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Pricing that scales with your event</h2>
                <p className="mt-2 text-muted-foreground">Transparent tiers, powered by the same reliable platform.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tiers.map((t) => (
                    <Card key={t.name} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg">{t.name}</CardTitle>
                            <div className="text-2xl font-bold">{t.price}</div>
                            <div className="text-sm text-muted-foreground">{t.description}</div>
                        </CardHeader>
                        <CardContent>
                            <ul className="mt-2 space-y-2 text-sm">
                                {t.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <a href="mailto:contact@codestamstore.com?subject=Pricing%20Inquiry">
                                    <Button size="sm" className="w-full">{t.cta}</Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

