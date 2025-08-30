import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Sparkles } from "lucide-react";

export default function BlogNewsletter() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/20 to-transparent py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Stay in the Loop</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get the latest event management insights, industry trends, and exclusive tips delivered straight to your inbox. Join our community of event professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="sm:w-auto">
                <Sparkles className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              <p>Join 5,000+ event professionals. Unsubscribe anytime.</p>
              <p className="mt-1">We respect your privacy and never share your information.</p>
            </div>

            {/* Newsletter Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">📚</span>
                </div>
                <span className="font-medium">Weekly Insights</span>
                <span className="text-muted-foreground text-xs">Expert tips & trends</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">🎯</span>
                </div>
                <span className="font-medium">Exclusive Content</span>
                <span className="text-muted-foreground text-xs">Subscriber-only articles</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary font-bold">🚀</span>
                </div>
                <span className="font-medium">Early Access</span>
                <span className="text-muted-foreground text-xs">New resources first</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}