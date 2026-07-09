import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const images = [
    { src: "/images/gallery-1.png", alt: "Wedding Venue Entrance Setup", className: "md:col-span-4 md:row-span-2" },
    { src: "/images/gallery-2.png", alt: "Groom and Bride Mandap Stage", className: "md:col-span-2 md:row-span-1" },
    { src: "/images/gallery-3.png", alt: "Exquisite Table Arrangements & Dining", className: "md:col-span-2 md:row-span-2" },
    { src: "/images/gallery-4.png", alt: "Beautiful Floral Chandelier Ceiling", className: "md:col-span-2 md:row-span-1" },
    { src: "/images/gallery-5.png", alt: "Sparkling Mehendi Ceremony Setup", className: "md:col-span-4 md:row-span-1" },
    { src: "/images/gallery-6.png", alt: "Grand Entrance Walkway Lighting", className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
            <span>←→</span>
            <span>Venue Gallery</span>
            <span>←→</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            A Glimpse of our <span className="text-primary">Splendid Hall</span>
          </h2>
          <p className="text-muted-foreground font-body text-base">
            Take a visual tour through our beautifully customized wedding setups, banquets, and celebration moments.
          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-primary/5 border border-border/10 group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-w-7xl) 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Centered View More Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-primary hover:bg-primary-dark text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300 shadow-md"
            )}
          >
            Inquire for Your Booking
          </a>
        </div>

      </div>
    </section>
  );
}
