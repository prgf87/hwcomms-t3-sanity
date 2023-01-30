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
          heading="Hailey Wilson Communications"
          message="Where there's a Wilson, there's a way"
          btnmsg="Learn More"
        />
        {children}
      </body>
    </html>
  );
}
