import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl border bg-card p-6 sm:flex-row sm:items-center">
                <div>
                    <h3 className="text-2xl font-semibold">Ready to create your best event yet?</h3>
                    <p className="mt-1 text-muted-foreground">Tell us your goals and we’ll propose a plan in 24 hours.</p>
                </div>
                <div className="flex gap-3">
                    <a href="mailto:contact@codestamstore.com?subject=Event%20Management%20Inquiry">
                        <Button size="lg">Talk to an expert</Button>
                    </a>
                    <a href="#services">
                        <Button size="lg" variant="secondary">See services</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

