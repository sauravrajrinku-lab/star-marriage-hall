"use client";

import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 text-primary text-sm font-semibold uppercase tracking-widest">
            <span>←→</span>
            <span>Get in Touch</span>
            <span>←→</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Let&apos;s Plan Your <span className="text-primary">Celebration</span>
          </h2>
          <p className="text-muted-foreground font-body text-base">
            Have questions about date availability, packages, or décor options? Send us a message and our team will reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-background p-8 sm:p-10 rounded-3xl shadow-xl shadow-foreground/5 border border-border/10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Inquiry Sent Successfully!</h3>
                <p className="text-muted-foreground font-body max-w-md mx-auto">
                  Thank you for contacting Star Marriage Hall. One of our event specialists will reach out to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Two side-by-side name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="rounded-xl border-border focus:ring-primary focus:border-primary bg-background-alt"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 font-medium">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="rounded-xl border-border focus:ring-primary focus:border-primary bg-background-alt"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500 font-medium">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="rounded-xl border-border focus:ring-primary focus:border-primary bg-background-alt"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Message textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message / Special Requests
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event, expected guest count, and preferred dates..."
                    className="rounded-xl border-border focus:ring-primary focus:border-primary bg-background-alt"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Checkbox with consent label */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleCheckboxChange}
                      className="mt-1 border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:text-background"
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs text-muted-foreground font-body leading-relaxed select-none"
                    >
                      I agree to allow Star Marriage Hall to collect my contact details and reach out to coordinate about venue booking.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-xs text-red-500 font-medium">{errors.consent}</p>
                  )}
                </div>

                {/* Filled pill submit Button */}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-primary hover:bg-primary-dark text-background px-8 py-6 h-auto text-base font-medium tracking-wide transition-all duration-300 shadow-md shadow-primary/10"
                >
                  Send Booking Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Image with Decorative Overlapping Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-visible bg-primary/5">
              
              {/* Large Image */}
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <Image
                  src="/images/contact-1.png"
                  alt="Elegant Banquet Hall Dining Setup"
                  fill
                  sizes="(max-w-7xl) 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Absolute-positioned Badge */}
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background py-4 px-6 rounded-2xl shadow-xl flex items-center gap-3 border border-border/10 animate-bounce">
                <div className="h-3 w-3 rounded-full bg-primary animate-ping" />
                <span className="text-xs uppercase tracking-widest font-semibold font-body text-primary">
                  Booking Open for 2026/27
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
