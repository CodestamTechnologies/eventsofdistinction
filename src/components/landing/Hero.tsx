"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
    "/images/EOD1.jpg",
    "/images/EOD2.jpg", 
    "/images/EOD3.jpg",
    "/images/EOD4.jpg",
    "/images/EOD5.jpg",
    "/images/EOD6.jpg",
    "/images/EOD7.jpg",
    "/images/EOD8.jpg",
    "/images/EOD9.jpg",
    "/images/EOD10.jpg"
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Hero Content at Top */}
            <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground mb-6">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Seamless events from idea to applause</span>
                </div>

                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                    Event management that scales with your ambition
                </h1>
                <p className="max-w-3xl mx-auto text-pretty text-base text-muted-foreground sm:text-lg md:text-xl mb-8">
                    Plan, promote, and execute unforgettable events with powerful tools for ticketing,
                    vendors, schedules, and analytics. Built for agencies, brands, and creators.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link href="#pricing">
                        <Button size="lg" className="text-lg px-8 py-4">Get a demo</Button>
                    </Link>
                    <Link href="#services">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-4">Explore services</Button>
                    </Link>
                </div>
            </div>

            {/* Image Marquee */}
            <div className="relative py-12 bg-gradient-to-r from-muted/30 to-muted/50">
                <div className="overflow-hidden">
                    <div className="flex animate-marquee">
                        {/* First set of images */}
                        {heroImages.map((imagePath, idx) => (
                            <div
                                key={`first-${idx}`}
                                className="flex-shrink-0 mx-4 relative w-80 h-48 rounded-xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={imagePath}
                                    alt={`Event showcase ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="320px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {heroImages.map((imagePath, idx) => (
                            <div
                                key={`second-${idx}`}
                                className="flex-shrink-0 mx-4 relative w-80 h-48 rounded-xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={imagePath}
                                    alt={`Event showcase ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="320px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
