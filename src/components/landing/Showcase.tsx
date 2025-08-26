import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
    { title: "Tech Summit", prompt: "large tech conference stage with warm orange red lighting, ultra high definition" },
    { title: "Creator Fest", prompt: "music festival main stage crowd at sunset warm orange red, ultra high definition" },
    { title: "Retail Expo", prompt: "trade show floor with modern booths warm orange accents, ultra high definition" },
];

export default function Showcase() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16" id="showcase">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Recent productions</h2>
                <p className="mt-2 text-muted-foreground">A snapshot of events we powered across industries and formats.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((i) => (
                    <Card key={i.title} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-[4/3]">
                                <Image src={`https://maxm-imggenurl.web.val.run/${encodeURIComponent(i.prompt)}`} alt={i.title} fill className="object-cover" />
                            </div>
                            <div className="p-4 text-sm font-medium">{i.title}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
