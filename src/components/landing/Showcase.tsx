"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
    {
        id: 1,
        src: "/images/EOD1.jpg",
        alt: "Event showcase 1",
        name: "Tech Summit 2024"
    },
    {
        id: 2,
        src: "/images/EOD3.jpg",
        alt: "Event showcase 2",
        name: "Product Launch Gala"
    },
    {
        id: 3,
        src: "/images/EOD5.jpg",
        alt: "Event showcase 3",
        name: "Music & Arts Festival"
    }
];

export default function Showcase() {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    return (
        <section className="py-16 sm:py-24" id="gallery">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl mb-4">Our work gallery</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A snapshot of events we powered across industries and formats.
                    </p>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            onMouseEnter={() => setHoveredImage(image.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={90}
                                />
                                
                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                                }`} />
                                
                                {/* Subtle shine effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent transition-opacity duration-300 ${
                                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                                }`} />
                                
                                {/* Image Name on Hover */}
                                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                                    hoveredImage === image.id 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}>
                                    <h3 className="text-white text-xl font-semibold">
                                        {image.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Explore Button */}
                <div className="text-center mt-12">
                    <Link href="/gallery">
                        <Button size="lg" className="px-8 py-3">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}