import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
    { title: "Gallery1", image: "/images/EOD5.jpg" },
    { title: "Gallery2", image: "/images/EOD6.jpg" },
    { title: "Gallery3", image: "/images/EOD10.jpg" },
];

export default function Showcase() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="gallery">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Our work gallery</h2>
                <p className="mt-2 text-muted-foreground">A snapshot of events we powered across industries and formats.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((i) => (
                    <Card key={i.title} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-[4/3] w-full h-[300px]">
                                <Image 
                                    src={i.image} 
                                    alt={i.title} 
                                    fill 
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={100}
                                    priority
                                />
                            </div>
                            <div className="p-4 text-sm font-medium">{i.title}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
