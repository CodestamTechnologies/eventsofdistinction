import Image from "next/image";

type Member = { name: string; role: string; prompt: string };

const members: Member[] = [
    { name: "Pawan Bansal", role: "Director", prompt: "corporate headshot of male executive in suit on neutral backdrop, ultra high definition" },
    { name: "Durgesh Gera", role: "Operations Lead", prompt: "professional headshot of confident male operations manager, studio lighting, ultra high definition" },
    { name: "Sandeep Singh", role: "Production Head", prompt: "studio portrait of experienced male production head, crisp lighting, ultra high definition" },
    { name: "Sushil Jaryal", role: "Creative Director", prompt: "creative director portrait, modern studio, thoughtful pose, ultra high definition" },
    { name: "Sumit Gaur", role: "Accounts", prompt: "corporate headshot of finance professional, ultra high definition" },
    { name: "Rohit Arora", role: "Design Lead", prompt: "designer headshot, clean studio, minimal background, ultra high definition" },
    { name: "Arvind Khanna", role: "Client Success", prompt: "friendly client success manager portrait, studio light, ultra high definition" },
    { name: "Binoy Mathew", role: "Strategy", prompt: "strategist headshot, confident look, ultra high definition" },
];

export default function Team() {
    return (
        <section id="team" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <div className="mb-8 text-center">
                <div className="text-xs font-medium text-primary">Meet Our Team</div>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Experienced Team Members</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((m) => (
                    <div key={m.name} className="rounded-xl border bg-card p-4 text-center">
                        <div className="relative mx-auto mb-3 aspect-square w-28 overflow-hidden rounded-full border">
                            <Image
                                src={`https://maxm-imggenurl.web.val.run/${encodeURIComponent(m.prompt)}`}
                                alt={m.name}
                                fill
                                className="object-cover"
                                sizes="112px"
                            />
                        </div>
                        <div className="text-sm font-medium">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.role}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

