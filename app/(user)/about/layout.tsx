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
          heading="Get a peak behind the curtains"
          message="And find out what drives Hailey"
          btnmsg="Learn More"
        />
        {children}
      </body>
    </html>
  );
}
