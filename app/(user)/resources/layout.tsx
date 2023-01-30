'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import '../../globals.css';

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
          heading="Tips &amp; Resources"
          message="Browse around and enjoy the content"
          btnmsg="Learn More"
        />
        {children}
      </body>
    </html>
  );
}
