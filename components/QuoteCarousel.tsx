/* eslint-disable @next/next/no-img-element */
'use client';

import urlFor from '@/lib/urlFor';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { useState } from 'react';

type Props = {
  quotes: Quote[];
};

function QuoteCarousel({ quotes }: Props) {
  const [current, setCurrent] = useState(0);
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
    <section className="custom-img7 py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto">
          {/* Quotes */}
          {quotes.map((quote, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? 'opacity-[1] ease-in-out duration-1000'
                    : 'opacity-0'
                }
              >
                {index === current && (
                  <div className="bg-[#2d5a52]/80 w-full text-white grid grid-cols-2 z-[1]">
                    <div className="m-auto pl-80 font-bold z-[2]">
                      <h2 className="text-sm sm:text-2xl">{quote.quotation}</h2>
                      <p className="text-xs sm:text-lg pt-2">
                        {quote.author.name}
                      </p>
                    </div>
                    <div className="overflow-hidden h-[300px] w-[300px] m-20">
                      <img
                        src={urlFor(quote.mainImage).url()}
                        alt={quote.title}
                        className="rounded-full m-auto relative h-76 w-76"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="relative left-0 top-[-250px] right-0 bottom-0 flex justify-between px-8">
            <button onClick={prevQuote}>
              <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
            <button onClick={nextQuote}>
              <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteCarousel;
