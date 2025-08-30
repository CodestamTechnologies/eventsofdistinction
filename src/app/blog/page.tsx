import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogNewsletter from '@/components/blog/BlogNewsletter';

export const metadata: Metadata = {
  title: 'Blog - Events of Distinction | Event Management Insights',
  description: 'Discover the latest trends, tips, and insights in event management. From corporate conferences to product launches, get expert advice from Events of Distinction.',
  keywords: 'event management blog, event planning tips, corporate events, event trends, event industry insights',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
}