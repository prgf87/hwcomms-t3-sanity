'use client';

import urlFor from '@/lib/urlFor';
import { News } from '@/typing';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  news: News[];
};

function LatestNews({ news }: Props) {
  return (
    <section className="news-body">
      <div className="relative min-h-[750px] lg:min-h-[800px] z-[0]">
        <Image
          src={'/images/img35.jpg'}
          alt={'Background Image'}
          width={1600}
          height={914}
          className="w-full min-h-[750px] lg:min-h-[800px] absolute z-[0]"
        />
        <div className="absolute w-full bg-gradient-to-b from-black/70 to-black/10 top-0 object-cover min-h-[750px] lg:min-h-[800px] z-[1]">
          <div className="z-[1]">
            <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pt-16 pb-10 xl:pb-0 tracking-[15px] uppercase">
              latest news
            </h1>

            <div className="grid grid-cols-2 max-w-7xl mx-auto text-center lg:pt-20">
              {news.map((news: any) => {
                return (
                  <div key={news._id} className="grid px-20">
                    <div className="mx-auto p-10 mt-1">
                      <Image
                        src={urlFor(news.mainImage).url()}
                        alt="Talking Points Logo"
                        width={490}
                        height={490}
                        className="h-40 w-40 mx-auto mb-[1.25rem]"
                      />
                      <h1 className="text-2xl uppercase">{news.title}</h1>
                      <p className="font-bold pt-4">{news.title}</p>
                      <p className="text-2xl font-bold pt-4">
                        {news.description}
                      </p>
                      <Link href={`${news.linkToNews}`}>
                        <button className="btn1-large mt-10">
                          {news.title}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-0"></div>
    </section>
  );
}

export default LatestNews;
