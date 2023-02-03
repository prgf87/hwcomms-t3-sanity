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
          heading="Contact me"
          message="Use the form below to send me a message"
          custombg="custom-img3"
          href="/contact/#contact"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
