import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Curved/wave SVG divider component to soften transitions between sections
function WaveDivider({ fillClass = "text-background-alt", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] select-none ${flip ? "rotate-180 -mt-1" : "-mb-1"}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C247.16,70.14,160.2,46.57,90.13,27.35,57.05,18.3,26.9,8.75,0,0V120H1200V92.83Z"
          className={`${fillClass} fill-current`}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-grow">
        {/* 1. Hero Section (bg-background) */}
        <Hero />
        
        {/* Wave transition into About (bg-background-alt) */}
        <WaveDivider fillClass="text-background-alt" />
        
        {/* 2. About Section (bg-background-alt) */}
        <About />
        
        {/* Wave transition back into Services (bg-background) */}
        <WaveDivider fillClass="text-background-alt" flip />
        
        {/* 3. Services Section (bg-background) */}
        <Services />
        
        {/* Wave transition into Gallery (bg-background-alt) */}
        <WaveDivider fillClass="text-background-alt" />
        
        {/* 4. Gallery Section (bg-background-alt) */}
        <Gallery />
        
        {/* Wave transition into Stats strip (bg-foreground) */}
        <WaveDivider fillClass="text-foreground" />
        
        {/* 5. Stats Counter Strip (bg-foreground) */}
        <Stats />
        
        {/* Wave transition from Stats strip into Testimonials (bg-background) */}
        <WaveDivider fillClass="text-foreground" flip />
        
        {/* 6. Testimonials Section (bg-background) */}
        <Testimonials />
        
        {/* Wave transition into Contact (bg-background-alt) */}
        <WaveDivider fillClass="text-background-alt" />
        
        {/* 7. Contact / "Get Help" Section (bg-background-alt) */}
        <Contact />
      </main>
      
      {/* 8. Footer (bg-foreground) */}
      <Footer />
    </>
  );
}
