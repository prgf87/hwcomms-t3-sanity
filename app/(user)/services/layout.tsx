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
          custombg="custom-img6"
          heroanchor="/services/#services-list"
        />
        {children}
        <Footer anchor={'/services/#services'} />
      </body>
    </html>
  );
}
