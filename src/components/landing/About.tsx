import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Users, Clock, Heart, Shield } from "lucide-react";

const aboutItems = [
    { title: "Our Mission", icon: Target, description: "To create unforgettable experiences that connect people and drive meaningful outcomes for brands and organizations." },
    { title: "Excellence", icon: Award, description: "Award-winning productions with attention to detail and commitment to delivering exceptional results every time." },
    { title: "Expert Team", icon: Users, description: "Seasoned professionals with decades of combined experience in event management and production." },
    { title: "Proven Track Record", icon: Clock, description: "Successfully delivered hundreds of events across industries, from intimate gatherings to large-scale productions." },
    { title: "Client-Focused", icon: Heart, description: "We prioritize building lasting relationships and understanding each client's unique vision and objectives." },
    { title: "Reliable Operations", icon: Shield, description: "Robust planning processes and contingency management ensure smooth execution under any circumstances." },
];

export default function About() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="about">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">About Events of Distinction</h2>
                <p className="mt-2 text-muted-foreground">Dedicated to creating impactful experiences that resonate with audiences and achieve your business objectives.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {aboutItems.map((item) => (
                    <Card key={item.title} className="h-full">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <item.icon className="h-5 w-5 text-primary" />
                                <CardTitle className="text-base">{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

