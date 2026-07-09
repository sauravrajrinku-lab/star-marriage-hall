import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Award, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Blob Image */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Organic blob mask wrapper */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] shadow-2xl border-4 border-background bg-primary/10">
              <Image
                src="/images/about-1.png"
                alt="Star Marriage Hall Venue Interior"
                fill
                sizes="(max-w-7xl) 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Section Eyebrow flanked by decorative arrows */}
            <div className="flex justify-center lg:justify-start items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
              <span>←→</span>
              <span>About Us</span>
              <span>←→</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
              A Magnificent Setting <br />
              for Your <span className="text-primary">Everlasting Love</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                Since our inception, Star Marriage Hall has stood as Indore’s premier destination for luxury weddings, banquets, and grand events. We offer a gorgeous mix of majestic architectural details, spacious layouts, and custom curation services.
              </p>
              <p>
                Our professional event planners and dedicated support teams ensure every aspect of your wedding is managed with perfection. From dazzling floral arrangements to gourmet cuisines, we promise a seamless experience.
              </p>
            </div>

            {/* Stat Blocks (2 side-by-side) */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/15 text-primary shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-foreground">2,000+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold font-body">Weddings Hosted</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/15 text-primary shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold font-body">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full bg-primary hover:bg-primary-dark text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300 shadow-md"
                )}
              >
                Schedule a Venue Tour
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
