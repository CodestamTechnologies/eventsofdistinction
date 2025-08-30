"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/EOD1.jpg",
    "/images/EOD2.jpg",
    "/images/EOD3.jpg",
    "/images/EOD4.jpg",
    "/images/EOD5.jpg"
];

export default function GalleryHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % heroImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery-grid');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Slideshow */}
            <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`Gallery hero ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={90}
                        />
                    </div>
                ))}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Visual Portfolio
                </Badge>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Our Event Gallery
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Discover the magic we create through stunning visuals from our most memorable events. 
                    From intimate gatherings to grand celebrations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button 
                        size="lg" 
                        className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg"
                        onClick={scrollToGallery}
                    >
                        <Camera className="w-5 h-5 mr-2" />
                        View Gallery
                    </Button>
                    <Button 
                        size="lg" 
                        className="text-lg px-8 py-4 bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-sm transition-all duration-300 shadow-lg"
                        onClick={() => {
                            const videoSection = document.getElementById('gallery-videos');
                            if (videoSection) {
                                videoSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Videos
                    </Button>
                </div>

                {/* Scroll indicator */}
                <div className="animate-bounce">
                    <ArrowDown className="w-6 h-6 mx-auto text-white/70" />
                </div>
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                                ? 'bg-primary w-8' 
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}