import { Button } from "@/components/ui/button";

export default function CompactCTA() {
    return (
        <section id="contact" className="mx-auto max-w-4xl px-6 py-10">
            <div className="flex flex-col items-center justify-between gap-4 rounded-lg border bg-card p-6 text-center sm:flex-row sm:text-left">
                <div>
                    <h3 className="text-lg font-medium">Ready to see it?</h3>
                    <p className="text-sm text-muted-foreground">We’ll reply in one business day.</p>
                </div>
                <a href="mailto:contact@codestamstore.com?subject=Event%20Management%20Inquiry">
                    <Button size="sm">Request proposal</Button>
                </a>
            </div>
        </section>
    );
}

