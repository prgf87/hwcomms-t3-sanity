import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerOptions({}: Props) {
  return (
    <div className="relative h-[25vh] bg-fixed custom-img15 z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/60 z-[2] flex justify-center items-center px-40">
        <Link href="/resources">
          <button className="btn1-large mx-10">Resources</button>
        </Link>
        <Link href="/directory">
          <button className="btn1-large mx-10">Online Directory</button>
        </Link>
        <Link href="/tricks">
          <button className="btn1-large mx-10">Bag of Tricks</button>
        </Link>
      </div>
    </div>
  );
}

export default BannerOptions;
