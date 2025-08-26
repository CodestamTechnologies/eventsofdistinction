import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="grid items-center gap-8 sm:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-semibold sm:text-4xl">Have any project in mind?</h2>
                    <p className="mt-2 text-muted-foreground">Contact us and we’ll get back within one business day.</p>
                    <div className="mt-4 flex gap-3">
                        <a href="mailto:contact@codestamstore.com?subject=Event%20Project%20Inquiry"><Button size="sm">Send us a message</Button></a>
                        <a href="#pricing"><Button size="sm" variant="secondary">See pricing</Button></a>
                    </div>
                </div>
                <Card>
                    <CardContent className="p-6 text-sm">
                        <div className="grid gap-3">
                            <div>
                                <div className="text-xs text-muted-foreground">Email</div>
                                <a className="underline" href="mailto:contact@codestamstore.com">contact@codestamstore.com</a>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Services</div>
                                <div>Brand activations, conferences, launches, trade shows, meetups</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

