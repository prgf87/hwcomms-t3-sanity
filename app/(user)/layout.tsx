'use client';

import BlogBanner from '@/components/BlogBanner';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero
          heading="Hailey Wilson Communications"
          message="Where there's a Wilson, there's a way"
          btnmsg="Learn More"
        />
        <BlogBanner />
        {children}
      </body>
    </html>
  );
}
