import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Collaboration() {
    return (
        <section className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-accent/20 to-transparent" />
            <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
                <div className="grid items-center gap-8 sm:grid-cols-2">
                    <div>
                        <div className="text-xs font-medium text-primary">Let's Work</div>
                        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Let’s work together to drive impactful outcomes</h2>
                        <p className="mt-3 text-muted-foreground">Collaborate with our producers and creatives to turn objectives into memorable experiences.</p>
                        <div className="mt-5 flex gap-3">
                            <a href="#contact"><Button size="sm">Start a project</Button></a>
                            <a href="#showcase"><Button size="sm" variant="secondary">See our work</Button></a>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
                        <Image
                            src={"https://maxm-imggenurl.web.val.run/handshake%20closeup%20in%20modern%20office%20with%20warm%20red%20and%20orange%20palette%2C%20ultra%20high%20definition"}
                            alt="Collaboration"
                            fill
                            className="object-cover"
                            sizes="(min-width: 640px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

