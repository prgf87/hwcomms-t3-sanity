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
          heading="Contact Hailey"
          message="To get a bespoke quote or to get answers to your questions"
          btnmsg="Learn More"
          custombg="custom-img3"
        />
        {children}
      </body>
    </html>
  );
}
