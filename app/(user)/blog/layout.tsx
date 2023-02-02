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
          heading="Hailey's Blog"
          message="Where there's a Wilson, there's a way"
          href="/blog/#blog-banner"
          custombg="custom-img5"
        />

        {children}
      </body>
    </html>
  );
}
