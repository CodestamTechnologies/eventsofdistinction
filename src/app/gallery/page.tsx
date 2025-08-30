import { Metadata } from 'next';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryIntro from '@/components/gallery/GalleryIntro';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryVideos from '@/components/gallery/GalleryVideos';

export const metadata: Metadata = {
  title: 'Gallery - Events of Distinction | Our Event Portfolio',
  description: 'Explore our stunning portfolio of events across industries. From corporate conferences to cultural festivals, see how we bring visions to life.',
  keywords: 'event gallery, event portfolio, corporate events, conferences, festivals, event photography, event management showcase',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <GalleryVideos />
    </main>
  );
}