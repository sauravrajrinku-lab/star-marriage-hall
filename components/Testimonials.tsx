"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      role: "Wedding Couple",
      image: "/images/avatar-1.png",
      quote: "Star Marriage Hall made our wedding day absolutely magical. Every detail was perfect, from the stunning décor to the impeccable service. Our guests are still talking about it!",
      stars: 5,
    },
    {
      name: "Anita Verma",
      role: "Mother of the Bride",
      image: "/images/avatar-2.png",
      quote: "We've hosted three family events here and each time the team exceeded our expectations. The venue is gorgeous and the staff truly cares about making your day special.",
      stars: 5,
    },
    {
      name: "Amit & Shalini Goel",
      role: "Anniversary Couple",
      image: "/images/avatar-1.png", // reuse same or generic path
      quote: "The banquet arrangement and food catering were exceptional. Planning was stress-free, and their hospitality was top-notch. Highly recommended for couples looking for premium experience.",
      stars: 5,
    },
    {
      name: "Rajesh Singhania",
      role: "Corporate Coordinator",
      image: "/images/avatar-2.png", // reuse same or generic path
      quote: "Star Marriage Hall proved to be a versatile venue for our large-scale gathering. The sound setup and spatial layout made our event run incredibly smoothly. A true 5-star venue.",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  const activeTestimonials = [
    testimonials[currentIndex],
    testimonials[currentIndex + 1],
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Controls */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
              <span>←→</span>
              <span>Testimonials</span>
              <span>←→</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
              What Our Happy <br />
              <span className="text-primary">Guests Say</span>
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Read real stories and words of appreciation from the lovely couples and families who celebrated their special moments with us.
            </p>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-background h-12 w-12 text-primary transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-background h-12 w-12 text-primary transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>

          {/* Right Column: 2 Cards (Side-by-side or stacked on mobile) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTestimonials.map((t, idx) => (
              <Card
                key={idx}
                className="bg-background-alt border-none shadow-none rounded-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
              >
                <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full">
                  
                  {/* Top: Avatar, Name, Role */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={t.image} alt={t.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-heading text-base font-bold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground font-body">{t.role}</div>
                    </div>
                  </div>

                  {/* Middle: Quote */}
                  <p className="text-muted-foreground italic font-body text-base leading-relaxed flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Bottom: Stars */}
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
