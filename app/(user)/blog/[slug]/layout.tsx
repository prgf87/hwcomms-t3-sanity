'use client';

import PostBanner from '@/components/post/PostBanner';
import '../../../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <PostBanner />
        {children}
      </>
    </>
  );
}
