'use client';

import BannerOptions from '@/components/navigation/BannerOptions';
import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
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

        {children}
        <BannerOptions />
        <Footer anchor={'resources/#resources'} />
      </body>
    </html>
  );
}
