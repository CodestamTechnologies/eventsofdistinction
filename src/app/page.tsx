import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/Hero";
import AboutBrief from "@/components/landing/AboutBrief";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Collaboration from "@/components/landing/Collaboration";
import Stats from "@/components/landing/Stats";
import Showcase from "@/components/landing/Showcase";
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
        <About />
        <Services />
        <Collaboration />
        <Stats />
        <Showcase />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
