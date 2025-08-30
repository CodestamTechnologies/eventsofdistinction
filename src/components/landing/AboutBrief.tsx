import Image from "next/image";

export default function AboutBrief() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="grid items-center gap-8 sm:grid-cols-2">
                <div>
                    <div className="text-xs font-medium text-primary">About Us</div>
                    <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">We power impactful brand experiences</h2>
                    <p className="mt-3 text-muted-foreground">
                        From award-winning activations to arena-scale productions, our team crafts holistic
                        event strategies backed by reliable operations and measurable outcomes.
                    </p>
                </div>
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
                    <Image
                        src={"/images/EOD9.jpg"}
                        alt="Our workspace"
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 50vw, 100vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
