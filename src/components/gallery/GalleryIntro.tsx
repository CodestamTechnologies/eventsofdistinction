import { Badge } from "@/components/ui/badge";
import { Camera, Users, Calendar, Award } from "lucide-react";

const stats = [
    {
        icon: Camera,
        number: "500+",
        label: "Events Captured"
    },
    {
        icon: Users,
        number: "50K+",
        label: "Happy Attendees"
    },
    {
        icon: Calendar,
        number: "5+",
        label: "Years Experience"
    },
    {
        icon: Award,
        number: "25+",
        label: "Awards Won"
    }
];

export default function GalleryIntro() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6">
                        Our Story in Pictures
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Every Event Tells a Story
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Behind every successful event lies meticulous planning, creative vision, and flawless execution. 
                        Our gallery showcases the diverse range of experiences we've crafted, from corporate conferences 
                        that inspire innovation to cultural celebrations that bring communities together.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                                <stat.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Capturing Moments That Matter
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Each photograph in our gallery represents more than just a moment in time—it's a testament 
                                to the emotions, connections, and experiences we help create. From the anticipation before 
                                an event begins to the joy and satisfaction as it concludes.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our team of professional photographers and videographers work seamlessly with our event 
                                planners to ensure every significant moment is preserved, creating lasting memories for 
                                our clients and their guests.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/EOD6.jpg"
                                    alt="Behind the scenes"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}