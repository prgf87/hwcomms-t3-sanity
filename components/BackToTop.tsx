'use client';

import Link from 'next/link';

type Props = { children: any; path: string };

function BackToTop({ children, path }: Props) {
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <Link href={path}>
        <div onClick={backToTop}>{children}</div>
      </Link>
    </div>
  );
}

export default BackToTop;
