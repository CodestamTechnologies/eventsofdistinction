import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            <Calendar className="h-3 w-3 mr-1" />
            Event Insights
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Events of Distinction
            <span className="block text-primary">Blog</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends, expert insights, and behind-the-scenes stories from the world of exceptional event management.
          </p>
        </div>
        
        {/* Featured Stats */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Expert Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Events Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5K+</div>
            <div className="text-sm text-muted-foreground">Monthly Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
}