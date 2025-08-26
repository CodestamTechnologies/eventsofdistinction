import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
    title: string;
    description: string;
    cta: string;
    href: string;
};

const services: Service[] = [
    { title: "Corporate conferences", description: "End-to-end planning for multi-track, multi-day experiences.", cta: "Plan conference", href: "/abvp" },
    { title: "Product launches", description: "Immersive brand moments with measurable impact.", cta: "Launch with us", href: "/abvp" },
    { title: "Trade shows", description: "Exhibitor ops, floor plans, and lead capture – fully managed.", cta: "Scale your show", href: "/abvp" },
    { title: "Community meetups", description: "Templates and playbooks for high-frequency local events.", cta: "Grow community", href: "/abvp" },
];

export default function Services() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="services">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Full-service event management</h2>
                <p className="mt-2 text-muted-foreground">Choose what you need – from strategy and creative to day-of execution.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
                {services.map((s) => (
                    <Card key={s.title} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{s.description}</p>
                            <div className="mt-4">
                                <a href={s.href}>
                                    <Button size="sm">{s.cta}</Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

