'use client';

import HeroHome from '@/components/HeroHome';
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
        <HeroHome
          heading="Contact Hailey"
          message="To get a bespoke quote or to get answers to your questions"
          btnmsg="Learn More"
        />
        {children}
      </body>
    </html>
  );
}
