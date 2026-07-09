"use client";

import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      
      {/* Top Strip: Newsletter Signup (Contrasting Band) */}
      <div className="border-b border-border/10 bg-primary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-background">
                Join our <span className="text-primary italic">Exclusive Newsletter</span>
              </h3>
              <p className="text-xs sm:text-sm text-background/60 font-body">
                Get wedding tips, décor inspiration, and notifications about open booking slots.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                required
                className="rounded-full border-background/20 text-background bg-foreground/20 focus:ring-primary focus:border-primary placeholder-background/40"
              />
              <Button
                type="submit"
                className="rounded-full bg-primary hover:bg-primary-dark text-background border-none px-6 py-2 shrink-0 font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer: 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Blurb */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Star Marriage Hall Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-lg font-bold text-background tracking-wider">
                STAR MARRIAGE HALL
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-background/60 leading-relaxed font-body">
              Providing majestic venue settings and unparalleled service for grand weddings, intimate gatherings, and celebratory banquets in Indore.
            </p>

            {/* Social Icons near logo */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-background/5 hover:bg-primary/20 text-background/80 hover:text-primary transition-all duration-300 border border-border/10"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-background/5 hover:bg-primary/20 text-background/80 hover:text-primary transition-all duration-300 border border-border/10"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-background/5 hover:bg-primary/20 text-background/80 hover:text-primary transition-all duration-300 border border-border/10"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-background tracking-wider uppercase text-primary">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-background/60 font-body">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Grand Wedding Celebrations</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Intimate Family Gatherings</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Reception & Royal Banquets</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Mehendi & Sangeet Parties</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links repeated */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-background tracking-wider uppercase text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-background/60 font-body">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">Venue Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Working Hours & Address */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-background tracking-wider uppercase text-primary">
              Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-background/60 font-body">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>42, MG Road, Near City Center Mall, Indore, MP 452001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 731 555 0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@starmarriagehall.com</span>
              </div>
              
              <div className="pt-2 border-t border-border/10 space-y-1">
                <div className="font-semibold text-background text-xs uppercase tracking-wider">Visiting Hours</div>
                <div className="text-[11px]">Mon – Fri: 10:00 AM – 8:00 PM</div>
                <div className="text-[11px]">Saturday: 9:00 AM – 9:00 PM</div>
                <div className="text-[11px]">Sunday: 10:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-border/10 py-6 text-center text-xs text-background/40 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {currentYear} Star Marriage Hall. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
