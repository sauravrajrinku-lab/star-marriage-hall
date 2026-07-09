import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Marriage Hall - Where Dreams Begin, Memories Last Forever",
  description: "Discover a premium, elegant wedding venue and banquet hall for grand celebrations and intimate ceremonies in Indore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
