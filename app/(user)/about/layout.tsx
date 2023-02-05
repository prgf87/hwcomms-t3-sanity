'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-invert">
        <Navbar />
        <Hero
          heading="About Hailey"
          message="Learn about what drives me"
          custombg="custom-img2"
          href="/about/#bio"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
