"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, Clock, Eye } from "lucide-react";

const videos = [
    {
        id: 1,
        title: "Tech Summit 2024 Highlights",
        thumbnail: "/images/EOD1.jpg",
        duration: "3:45",
        views: "12K",
        category: "Event Highlights",
        description: "Experience the energy and innovation of our flagship technology conference.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URLs
    },
    {
        id: 2,
        title: "Behind the Scenes: Product Launch",
        thumbnail: "/images/EOD3.jpg",
        duration: "5:20",
        views: "8.5K",
        category: "Behind the Scenes",
        description: "Go behind the scenes of our most ambitious product launch event.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Music Festival Recap",
        thumbnail: "/images/EOD5.jpg",
        duration: "4:15",
        views: "25K",
        category: "Event Recap",
        description: "Relive the magic of our annual music and arts festival.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Corporate Gala Evening",
        thumbnail: "/images/EOD2.jpg",
        duration: "2:30",
        views: "6.2K",
        category: "Corporate Events",
        description: "An elegant evening celebrating corporate achievements and partnerships.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        title: "Wedding Ceremony Highlights",
        thumbnail: "/images/EOD6.jpg",
        duration: "6:10",
        views: "15K",
        category: "Private Events",
        description: "A beautiful wedding celebration captured in all its intimate moments.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 6,
        title: "Charity Fundraiser Impact",
        thumbnail: "/images/EOD4.jpg",
        duration: "3:55",
        views: "9.8K",
        category: "Non-Profit",
        description: "See how our charity fundraiser made a real difference in the community.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export default function GalleryVideos() {
    const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
    const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="gallery-videos">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6">
                        <Play className="w-4 h-4 mr-2" />
                        Video Gallery
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Events in Motion
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Experience our events through dynamic video content. From highlight reels to behind-the-scenes 
                        footage, see how we bring visions to life and create unforgettable moments.
                    </p>
                </div>

                {/* Featured Video */}
                <div className="mb-16">
                    <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                         onClick={() => setSelectedVideo(videos[0])}>
                        <img
                            src={videos[0].thumbnail}
                            alt={videos[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                            </div>
                        </div>

                        {/* Video Info */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <Badge variant="secondary" className="mb-3 bg-background/90 backdrop-blur-sm">
                                {videos[0].category}
                            </Badge>
                            <h3 className="text-white text-2xl font-bold mb-2">
                                {videos[0].title}
                            </h3>
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {videos[0].duration}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {videos[0].views} views
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {videos.slice(1).map((video) => (
                        <div
                            key={video.id}
                            className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            onMouseEnter={() => setHoveredVideo(video.id)}
                            onMouseLeave={() => setHoveredVideo(null)}
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 ${
                                        hoveredVideo === video.id ? 'scale-110' : 'scale-100'
                                    }`}>
                                        <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute top-3 right-3">
                                    <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                                        {video.duration}
                                    </Badge>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-4 bg-card">
                                <Badge variant="outline" className="mb-2 text-xs">
                                    {video.category}
                                </Badge>
                                <h4 className="font-semibold mb-2 line-clamp-2">
                                    {video.title}
                                </h4>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        {video.views}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center">
                    <Button size="lg" variant="outline" className="px-8">
                        <Play className="w-4 h-4 mr-2" />
                        Load More Videos
                    </Button>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Video Container */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                            <iframe
                                src={selectedVideo.videoUrl}
                                title={selectedVideo.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Details */}
                        <div className="mt-6 text-white">
                            <div className="flex items-center gap-3 mb-3">
                                <Badge variant="secondary" className="bg-primary">
                                    {selectedVideo.category}
                                </Badge>
                                <div className="flex items-center gap-4 text-sm text-white/70">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {selectedVideo.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {selectedVideo.views} views
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                                {selectedVideo.title}
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                {selectedVideo.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}