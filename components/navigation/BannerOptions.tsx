import Link from 'next/link';
import React from 'react';

type Props = {};

function BannerOptions({}: Props) {
  return (
    <div className="relative min-h-[30vh] bg-fixed custom-img15 z-0">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/60 z-[2] flex justify-center items-center sm:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 z-[4]">
          <div>
            <Link href="/tricks">
              <button className="btn1-large sm:mx-10">Bag of Tricks</button>
            </Link>
          </div>
          <div>
            <Link href="/directory">
              <button className="btn1-large sm:mx-10">
                Writer&apos;s Toolbox
              </button>
            </Link>
          </div>
          <div>
            <Link href="/tricks">
              <button className="btn1-large sm:mx-10">Online Directory</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOptions;
