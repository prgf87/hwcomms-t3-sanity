'use client';

import urlFor from '@/lib/urlFor';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Quote } from '@/typing';
import Image from 'next/image';

type Props = {
  quotes: Quote[];
};

function QuoteCarousel({ quotes }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (current === quotes.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [current, quotes.length]);

  if (!Array.isArray(quotes) || quotes.length <= 0) {
    return null;
  }
  const nextQuote = () => {
    setCurrent(current === quotes.length - 1 ? 0 : current + 1);
  };
  const prevQuote = () => {
    setCurrent(current === 0 ? quotes.length - 1 : current - 1);
  };

  return (
    <section>
      <div className="relative h-[600px] lg:h-[800px] z-[0]">
        <Image
          src={`/images/img21.png`}
          width={1920}
          height={800}
          alt={'/'}
          className={`absolute top-0 bg-cover h-[600px] lg:h-[800px]`}
        />
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70 flex justify-center items-center py-10 z-[2]">
          <div className="w-[1440px] mx-auto">
            <div className="mx-auto">
              {/* Quotes */}
              <div className="hidden relative top-[8rem] md:top-[14rem] lg:top-[18rem] sm:flex items-center justify-between z-[2] opacity-0 hover:opacity-100">
                <button onClick={prevQuote}>
                  <ChevronLeftIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300" />
                </button>
                <button onClick={nextQuote}>
                  <ChevronRightIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300" />
                </button>
              </div>
              <div>
                {quotes.map((quote, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        index === current
                          ? ' transition-transform duration-500'
                          : 'transition-transform duration-500'
                      }
                    >
                      {index === current && (
                        <div className="bg-[#2d5a52]/90 w-full text-white grid grid-cols-2 z-[0]">
                          <div className="m-auto py-4 ml-20 sm:ml-28  md:ml-[10rem] lg:ml-40 z-[2]">
                            <h2 className="text-sm md:text-2xl">
                              {quote.quotation}
                            </h2>
                            <p className="text-sm md:text-xl pt-2 font-bold">
                              {quote.author.name}
                            </p>
                          </div>
                          <div className="relative sm:left-5 md:left-[-2rem] overflow-hidden h-40 w-40 m-auto md:h-60 md:w-60 lg:h-[35vh] lg:w-[35vh] p-10 sm:m-5 md:m-20">
                            <Image
                              src={urlFor(quote.mainImage).url()}
                              alt={quote.title}
                              className="rounded-full m-auto fill"
                              fill
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteCarousel;
