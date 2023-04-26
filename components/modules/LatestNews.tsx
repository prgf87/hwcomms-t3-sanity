import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LatestNews() {
  return (
    <section className="news-body">
      <div className="relative h-[700px] lg:h-[800px] z-[0]">
        <Image
          src={'/images/img35.jpg'}
          alt={'Background Image'}
          width={1600}
          height={914}
          className="w-full h-[700px] lg:h-[800px] absolute z-[0]"
        />
        <div className="absolute w-full bg-gradient-to-b from-black/70 to-black/10 top-0 object-cover h-[700px] lg:h-[800px] z-[1]">
          <div className="z-[1]">
            <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pt-16 pb-10 xl:pb-0 tracking-[15px] uppercase">
              latest news
            </h1>
            <div className="grid grid-cols-2 max-w-7xl mx-auto text-center lg:pt-20">
              <div className="grid px-20">
                <div className="mx-auto p-10 mt-1">
                  <Image
                    src="/images/tpfl-logo.png"
                    alt="Talking Points Logo"
                    width={490}
                    height={490}
                    className="h-40 w-40 mx-auto mb-[1.25rem]"
                  />
                  <h1 className="text-2xl uppercase">talking points</h1>
                  <p className="font-bold pt-4">Talking Points for Life</p>
                  <p className="text-2xl font-bold pt-4">
                    How to say it: words for tricky social situations.
                  </p>
                  <Link href={'https://www.talkingpointsforlife.com/'}>
                    <button className="btn1-large mt-10">Talking Points</button>
                  </Link>
                </div>
              </div>
              <div className="grid px-20">
                <div className="mx-auto">
                  <Image
                    src="/images/aimpactlogo.png"
                    alt="Talking Points Logo"
                    width={490}
                    height={490}
                    className="h-52 w-52 mx-auto mt-4"
                  />
                  <h1 className="text-2xl uppercase">aimpact</h1>
                  <p className="font-bold pt-4">
                    October 29 - 30 Charlotte, NC
                  </p>
                  <p className="text-2xl font-bold pt-4">
                    Don&apos;t miss the first virtual conference designed by AI!
                  </p>
                  <Link href={'https://www.aimpactevent.com/'}>
                    <button className="btn1-large mt-10">AImpact</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-0"></div>
    </section>
  );
}

export default LatestNews;
