import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Elements for Memorable Corporate Events",
    excerpt: "Discover the key components that transform ordinary corporate gatherings into extraordinary experiences that attendees will remember long after the event ends.",
    image: "/images/EOD2.jpg",
    category: "Corporate Events",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Art of Product Launch Events: Creating Buzz That Matters",
    excerpt: "Learn how to orchestrate product launches that generate genuine excitement and drive meaningful engagement with your target audience.",
    image: "/images/EOD2.jpg",
    category: "Product Launches",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    title: "Sustainable Event Planning: Green Practices for Modern Events",
    excerpt: "Explore eco-friendly approaches to event management that reduce environmental impact while maintaining exceptional quality and guest experience.",
    image: "/images/EOD3.jpg",
    category: "Sustainability",
    author: "Emma Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Technology Integration in Events: Beyond Basic AV Setup",
    excerpt: "Dive into cutting-edge technologies that are revolutionizing event experiences, from AR/VR to AI-powered networking solutions.",
    image: "/images/EOD4.jpg",
    category: "Technology",
    author: "David Park",
    date: "2024-01-08",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 5,
    title: "Post-Pandemic Event Trends: What's Here to Stay",
    excerpt: "Analyze the lasting changes in event management practices and attendee expectations that emerged from the global pandemic experience.",
    image: "/images/EOD7.jpg",
    category: "Industry Trends",
    author: "Lisa Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 6,
    title: "Maximizing ROI: Measuring Event Success Beyond Attendance",
    excerpt: "Learn comprehensive strategies for evaluating event performance using metrics that truly matter for your business objectives.",
    image: "/images/EOD1.jpg",
    category: "Strategy",
    author: "Robert Kim",
    date: "2024-01-03",
    readTime: "9 min read",
    featured: false
  }
];

const categories = ["All", "Corporate Events", "Product Launches", "Sustainability", "Technology", "Industry Trends", "Strategy"];

export default function BlogGrid() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="default" className="mb-2">Featured Article</Badge>
            <h2 className="text-2xl font-semibold">Editor's Pick</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="w-fit">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </section>
  );
}