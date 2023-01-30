'use client';

import PostBanner from '@/components/PostBanner';
import Hero from '@/components/Hero';
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
        <Hero
          heading="Welcome to Hailey's Blog"
          message="A collection of blogs about all sort of subjects that interest me"
          btnmsg="Learn More"
          custombg="custom-img4"
        />
        <PostBanner />
        {children}
      </body>
    </html>
  );
}
