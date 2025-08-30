import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus } from 'lucide-react';

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: "10 Essential Elements for Memorable Corporate Events",
      content: `
        <p>Creating memorable corporate events requires careful attention to detail and a deep understanding of what makes experiences truly exceptional. In this comprehensive guide, we'll explore the ten essential elements that can transform your next corporate gathering into an unforgettable experience.</p>

        <h2>1. Clear Objectives and Purpose</h2>
        <p>Every successful corporate event begins with clearly defined objectives. Whether you're launching a product, celebrating achievements, or fostering team building, having a clear purpose guides every decision throughout the planning process.</p>

        <h2>2. Strategic Venue Selection</h2>
        <p>The venue sets the tone for your entire event. Consider factors such as location accessibility, capacity, ambiance, and technical capabilities. The right venue should align with your brand image and support your event objectives.</p>

        <h2>3. Engaging Content and Programming</h2>
        <p>Content is king when it comes to keeping attendees engaged. Develop a program that balances information sharing with interactive elements. Consider incorporating keynote speakers, panel discussions, workshops, and networking opportunities.</p>

        <h2>4. Seamless Technology Integration</h2>
        <p>Modern corporate events rely heavily on technology. From registration systems to live streaming capabilities, ensure your tech stack enhances rather than hinders the attendee experience. Always have backup plans for technical difficulties.</p>

        <h2>5. Thoughtful Catering and Hospitality</h2>
        <p>Food and beverage service can make or break an event. Consider dietary restrictions, timing of meals, and how catering fits into your overall program. Quality hospitality shows respect for your attendees' time and comfort.</p>

        <h2>6. Professional Event Staff</h2>
        <p>Your event staff are the face of your organization during the event. Ensure they're well-trained, professional, and equipped to handle various situations. Clear communication protocols are essential.</p>

        <h2>7. Effective Marketing and Communication</h2>
        <p>Build anticipation before the event with strategic marketing. Use multiple channels to reach your audience and provide clear, consistent messaging about what attendees can expect.</p>

        <h2>8. Interactive Elements and Networking</h2>
        <p>Facilitate meaningful connections between attendees through structured networking activities, interactive sessions, and collaborative spaces. These interactions often provide the most value for participants.</p>

        <h2>9. Brand Consistency and Visual Identity</h2>
        <p>Maintain consistent branding throughout all event materials, signage, and digital presentations. This reinforces your organization's professional image and creates a cohesive experience.</p>

        <h2>10. Post-Event Follow-up and Evaluation</h2>
        <p>The event doesn't end when attendees leave. Follow up with participants, gather feedback, and measure success against your original objectives. This information is invaluable for improving future events.</p>

        <h2>Conclusion</h2>
        <p>Implementing these ten essential elements will significantly improve the quality and impact of your corporate events. Remember that successful event management is about creating experiences that resonate with your audience long after the event concludes.</p>
      `,
      excerpt: "Discover the key components that transform ordinary corporate gatherings into extraordinary experiences that attendees will remember long after the event ends.",
      image: "/images/EOD1.jpg",
      category: "Corporate Events",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read"
    }
  };
  
  return posts[id as keyof typeof posts] || null;
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPost(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found - Events of Distinction Blog',
    };
  }

  return {
    title: `${post.title} - Events of Distinction Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
        <div className="relative aspect-[21/9] sm:aspect-[21/6]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto max-w-4xl px-6">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Article Actions */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Save for Later
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Senior Event Management Consultant with 10+ years of experience in corporate events.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Event Technology Trends 2024</h4>
                      <p className="text-xs text-muted-foreground">5 min read</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Sustainable Event Planning</h4>
                      <p className="text-xs text-muted-foreground">6 min read</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-1">ROI Measurement for Events</h4>
                      <p className="text-xs text-muted-foreground">8 min read</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}