export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} EventCo. All rights reserved.</div>
                    <div className="flex gap-4 text-sm">
                        <a href="#services" className="hover:underline">Services</a>
                        <a href="#features" className="hover:underline">Features</a>
                        <a href="#showcase" className="hover:underline">Work</a>
                        <a href="#pricing" className="hover:underline">Pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

