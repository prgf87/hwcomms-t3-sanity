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
      <div className="relative h-[400px] sm:h-[500px] lg:h-[800px] z-[0]">
        <Image
          src={`/images/img21.png`}
          width={1920}
          height={800}
          alt={'/'}
          className={`absolute top-0 bg-cover h-[400px] sm:h-[500px] lg:h-[800px]`}
        />
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/70 flex justify-center items-center py-10 z-[2]">
          <div className="w-full mx-auto">
            <div className="mx-auto">
              {/* Quotes */}
              <div className="relative top-[10.5rem] md:top-[14rem] lg:top-[16rem] flex items-center justify-between z-[2] px-[2vw]">
                <button
                  onClick={prevQuote}
                  className="opacity-70 hover:opacity-100 active:scale-90 transition-transform duration-150"
                >
                  <ChevronLeftIcon className="h-8 w-8 md:h-12 md:w-12 text-gray-300 border rounded-full p-2" />
                </button>
                <button
                  onClick={nextQuote}
                  className="opacity-70 hover:opacity-100 active:scale-90 transition-transform duration-150"
                >
                  <ChevronRightIcon className="h-8 w-8 md:h-12 md:w-12 text-gray-300 border rounded-full p-2" />
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
                        <div className="bg-[#2d5a52]/90 w-full text-white grid grid-cols-2 z-[0] h-[300px] md:h-[350px] lg:h-[450px]">
                          <div className="m-auto py-4 ml-14 sm:ml-28  md:ml-[10rem] lg:ml-44 z-[2]">
                            <h2 className="text-sm md:text-2xl">
                              {quote.quotation}
                            </h2>
                            <p className="text-base md:text-lg pt-2 font-bold">
                              {quote.author.name}
                            </p>
                          </div>
                          <div className="relative top-[22%] sm:top-[19%] md:top-[12%] left-[10%] lg:left-[20%] h-40 w-40 md:h-60 md:w-60 lg:h-[35vh] lg:w-[35vh] flex justify-center items-center">
                            <Image
                              src={urlFor(quote.mainImage).url()}
                              alt={quote.title}
                              className="rounded-full m-auto"
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
