"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground border-b border-border/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Star Marriage Hall Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <Link href="/" className="font-heading text-xl font-bold text-background tracking-wider">
              STAR MARRIAGE HALL
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-background/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#gallery"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-background/20 bg-transparent text-background hover:bg-background hover:text-foreground px-6 py-2 h-auto text-sm font-medium transition-all duration-300"
              )}
            >
              Explore Gallery
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full bg-primary hover:bg-primary-dark text-background border-none px-6 py-2 h-auto text-sm font-medium transition-all duration-300 shadow-md"
              )}
            >
              Book Your Date
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-background hover:text-primary focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-foreground/95 border-b border-border/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-background/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2 w-full max-w-xs">
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full rounded-full border-background/20 bg-transparent text-background hover:bg-background hover:text-foreground py-3 h-auto text-sm font-medium transition-all duration-300 text-center"
                )}
              >
                Explore Gallery
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full rounded-full bg-primary hover:bg-primary-dark text-background border-none py-3 h-auto text-sm font-medium transition-all duration-300 text-center"
                )}
              >
                Book Your Date
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
