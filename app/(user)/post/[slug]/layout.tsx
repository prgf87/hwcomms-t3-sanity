'use client';

import BlogBanner from '@/components/BlogBanner';
import HeroHome from '@/components/HeroHome';
import Navbar from '@/components/Navbar';
import '../../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroHome
          heading="Welcome to Hailey's Blog"
          message="A collection of blogs about all sort of subjects that interest me"
          btnmsg="Learn More"
        />
        <BlogBanner />
        {children}
      </body>
    </html>
  );
}
