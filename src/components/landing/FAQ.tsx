type QA = { q: string; a: string };

const faqs: QA[] = [
    { q: "What types of events do you support?", a: "Conferences, launches, trade shows, festivals, and community meetups." },
    { q: "Can you work with our existing tools?", a: "Yes. We integrate with CRM, email, and analytics platforms." },
    { q: "How long does onboarding take?", a: "Most teams launch in 1–2 weeks depending on complexity." },
    { q: "Do you offer on-site support?", a: "Yes, our team can handle check-in, production, and vendor ops." },
];

export default function FAQ() {
    return (
        <section id="faq" className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
                <p className="mt-2 text-muted-foreground">Everything you need to know about working together.</p>
            </div>
            <div className="divide-y">
                {faqs.map((f) => (
                    <div key={f.q} className="py-4">
                        <div className="text-sm font-medium">{f.q}</div>
                        <div className="text-sm text-muted-foreground">{f.a}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

