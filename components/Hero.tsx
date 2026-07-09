import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Decorative Flag/Bunting graphic placeholder */}
            <div className="flex justify-center lg:justify-start items-center gap-2 text-primary">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Exquisite Weddings & Events
              </span>
              <Sparkles className="h-5 w-5" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
              Where Dreams Begin, <br />
              Memories Last <span className="text-primary italic">Forever</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Step into Indore&apos;s most elegant marriage hall. From grand fairy-tale weddings to intimate celebrations, we offer bespoke venue designs, curated catering, and memory-making service.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full bg-primary hover:bg-primary-dark text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl shadow-primary/20"
                )}
              >
                Book Your Date
              </a>
              <a
                href="#gallery"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300"
                )}
              >
                Explore Gallery
              </a>
            </div>
          </div>

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-6 flex justify-center items-center">
            {/* Relative wrapper for the overlapping compositions */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] mt-10 lg:mt-0">
              
              {/* Image 3: Small square image offset behind (Top Right) */}
              <div className="absolute top-[5%] right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-8 border-background shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <Image
                  src="/images/hero-3.png"
                  alt="[HERO_IMAGE_3]"
                  fill
                  sizes="(max-w-7xl) 30vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Image 1: Large rounded rectangle main image (Center Left) */}
              <div className="absolute top-[15%] left-0 w-[70%] h-[75%] rounded-3xl overflow-hidden border-8 border-background shadow-xl z-20 hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/hero-1.png"
                  alt="[HERO_IMAGE_1]"
                  fill
                  sizes="(max-w-7xl) 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Image 2: Smaller circular image offset front (Bottom Right) */}
              <div className="absolute bottom-0 right-[5%] w-[45%] aspect-square rounded-full overflow-hidden border-8 border-background shadow-xl z-30 hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/hero-2.png"
                  alt="[HERO_IMAGE_2]"
                  fill
                  sizes="(max-w-7xl) 30vw"
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
