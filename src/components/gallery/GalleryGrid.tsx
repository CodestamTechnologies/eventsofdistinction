"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, Calendar, MapPin, Users } from "lucide-react";

const galleryItems = [
    {
        id: 1,
        src: "/images/EOD1.jpg",
        title: "Tech Innovation Summit",
        category: "Corporate Conference",
        date: "March 2024",
        location: "San Francisco",
        attendees: "2,000+",
        description: "A groundbreaking technology conference featuring industry leaders and innovative startups."
    },
    {
        id: 2,
        src: "/images/EOD2.jpg",
        title: "Annual Gala Dinner",
        category: "Corporate Event",
        date: "February 2024",
        location: "New York",
        attendees: "500+",
        description: "An elegant evening celebrating achievements and fostering business relationships."
    },
    {
        id: 3,
        src: "/images/EOD3.jpg",
        title: "Product Launch Event",
        category: "Product Launch",
        date: "January 2024",
        location: "Los Angeles",
        attendees: "800+",
        description: "An immersive product launch experience with live demonstrations and media coverage."
    },
    {
        id: 4,
        src: "/images/EOD4.jpg",
        title: "Music & Arts Festival",
        category: "Cultural Event",
        date: "December 2023",
        location: "Austin",
        attendees: "10,000+",
        description: "A vibrant celebration of music and arts bringing together diverse communities."
    },
    {
        id: 5,
        src: "/images/EOD5.jpg",
        title: "Wedding Celebration",
        category: "Private Event",
        date: "November 2023",
        location: "Napa Valley",
        attendees: "200+",
        description: "An intimate and elegant wedding celebration in a picturesque vineyard setting."
    },
    {
        id: 6,
        src: "/images/EOD6.jpg",
        title: "Charity Fundraiser",
        category: "Non-Profit Event",
        date: "October 2023",
        location: "Chicago",
        attendees: "1,500+",
        description: "A meaningful fundraising event supporting local community initiatives."
    }
];

export default function GalleryGrid() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    return (
        <section className="py-20 bg-background" id="gallery-grid">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Featured Events
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our most memorable events across different industries and occasions
                    </p>
                </div>

                {/* Gallery Grid - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            onMouseEnter={() => setHoveredImage(item.id)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={90}
                                />
                                
                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                                    hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
                                }`} />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                                        {item.category}
                                    </Badge>
                                </div>

                                {/* Zoom Icon */}
                                <div className={`absolute top-4 right-4 transition-all duration-300 ${
                                    hoveredImage === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                }`}>
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                
                                {/* Content on Hover */}
                                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                                    hoveredImage === item.id 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}>
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-white/80 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {item.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center">
                    <Button size="lg" variant="outline" className="px-8">
                        Load More Events
                    </Button>
                </div>
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid lg:grid-cols-2 h-full">
                            {/* Image */}
                            <div className="relative aspect-[4/3] lg:aspect-auto">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-cover"
                                    quality={95}
                                />
                            </div>

                            {/* Details */}
                            <div className="p-8 flex flex-col justify-center">
                                <Badge variant="outline" className="w-fit mb-4">
                                    {selectedImage.category}
                                </Badge>
                                <h3 className="text-3xl font-bold mb-4">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {selectedImage.description}
                                </p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <span>{selectedImage.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span>{selectedImage.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-primary" />
                                        <span>{selectedImage.attendees} Attendees</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}