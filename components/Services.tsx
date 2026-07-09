import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Services() {
  const servicesList = [
    {
      name: "Grand Wedding",
      description: "Lavish celebrations with 500+ guest capacity and full catering.",
      image: "/images/service-1.png",
    },
    {
      name: "Intimate Ceremonies",
      description: "Elegant setting for close family and small gatherings.",
      image: "/images/service-2.png",
    },
    {
      name: "Reception & Banquet",
      description: "Premium dining halls with custom stage designs.",
      image: "/images/service-3.png",
    },
    {
      name: "Mehendi & Sangeet",
      description: "Vibrant setups with dedicated dance floor and sound systems.",
      image: "/images/service-4.png",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
            <span>←→</span>
            <span>Our Offerings</span>
            <span>←→</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Bespoke Services for <span className="text-primary">Your Big Day</span>
          </h2>
          <p className="text-muted-foreground font-body text-base">
            Choose from our premium array of services, tailored to bring your dream event to life with elegance and perfection.
          </p>
        </div>

        {/* Services Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group space-y-4">
              
              {/* Floating style portrait image container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-primary/5">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-w-7xl) 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>

              {/* Text content stacked below image */}
              <div className="space-y-1 text-center md:text-left">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-primary/30 text-primary hover:bg-primary hover:text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300"
            )}
          >
            View All Offerings
          </a>
        </div>

      </div>
    </section>
  );
}
