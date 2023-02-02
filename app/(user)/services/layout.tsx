'use client';

import Footer from '@/components/Footer';
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
          heading="Communication Services"
          message="These are the services we can perform"
          btnmsg="Learn More"
          custombg="custom-img2"
          href="/services/#services-list"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
