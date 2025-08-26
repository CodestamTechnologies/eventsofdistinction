import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/Hero";
import AboutBrief from "@/components/landing/AboutBrief";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Collaboration from "@/components/landing/Collaboration";
import Stats from "@/components/landing/Stats";
import Showcase from "@/components/landing/Showcase";
import Team from "@/components/landing/Team";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutBrief />
        <Features />
        <Services />
        <Collaboration />
        <Stats />
        <Showcase />
        <Team />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
