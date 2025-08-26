"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Seamless events from idea to applause</span>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Event management that scales with your ambition
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
                    Plan, promote, and execute unforgettable events with powerful tools for ticketing,
                    vendors, schedules, and analytics. Built for agencies, brands, and creators.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#pricing">
                        <Button size="lg">Get a demo</Button>
                    </Link>
                    <Link href="#services">
                        <Button size="lg" variant="secondary">Explore services</Button>
                    </Link>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {["stadium event at night with red and orange lighting, ultra high definition", "award ceremony stage with dramatic lights warm palette ultra high definition", "festival crowd wide shot with warm red orange lights ultra high definition"].map((prompt, idx) => (
                        <div key={idx} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
                            <Image
                                src={`https://maxm-imggenurl.web.val.run/${encodeURIComponent(prompt)}`}
                                alt="Event visual"
                                fill
                                className="object-cover"
                                sizes="(min-width: 640px) 33vw, 100vw"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
