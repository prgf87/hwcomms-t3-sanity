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
          heading="Get a peak behind the curtains"
          message="And find out what drives Hailey"
          btnmsg="Learn More"
          custombg="custom-img2"
        />
        {children}
      </body>
    </html>
  );
}
