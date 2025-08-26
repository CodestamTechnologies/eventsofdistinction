import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Ticket, Users2, BarChart3, Workflow, Megaphone } from "lucide-react";

const features = [
    { title: "Smart scheduling", icon: CalendarCheck, description: "Drag-and-drop agendas, speaker slots, and real-time updates." },
    { title: "Ticketing & RSVP", icon: Ticket, description: "Flexible tiers, promo codes, check-in, and waitlists." },
    { title: "Attendee CRM", icon: Users2, description: "Segment audiences, automate emails, measure engagement." },
    { title: "Sponsorships", icon: Megaphone, description: "Showcase partners, manage deliverables, and track ROI." },
    { title: "Vendor ops", icon: Workflow, description: "Booth assignments, contracts, and task workflows in one place." },
    { title: "Analytics", icon: BarChart3, description: "Revenue, attendance, NPS, and attribution dashboards." },
];

export default function Features() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="features">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to run standout events</h2>
                <p className="mt-2 text-muted-foreground">A modern stack that removes friction across the entire event lifecycle.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                    <Card key={f.title} className="h-full">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <f.icon className="h-5 w-5 text-primary" />
                                <CardTitle className="text-base">{f.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{f.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

