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
          heading="Tips &amp; Resources"
          message="Browse around and enjoy the content"
          btnmsg="Learn More"
        />
        {children}
      </body>
    </html>
  );
}
