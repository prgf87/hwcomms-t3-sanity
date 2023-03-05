/* eslint-disable @next/next/no-img-element */
'use client';

import urlFor from '@/lib/urlFor';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { Quote } from '@/typing';

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
    <section className="relative custom-img7 bg-fixed h-[50vh] sm:h-screen z-[0]">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/90 flex justify-center items-center py-10 z-[2]">
        <div className="w-[1440px] mx-auto">
          <div className="mx-auto">
            {/* Quotes */}
            <div className="relative top-[18rem] flex items-center justify-between z-[2] opacity-0 hover:opacity-100">
              <button onClick={prevQuote}>
                <ChevronLeftIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300" />
              </button>
              <button onClick={nextQuote}>
                <ChevronRightIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300" />
              </button>
            </div>
            {quotes.map((quote, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? 'opacity-[1] transition-opacity duration-500'
                      : 'opacity-0 transition-opacity duration-500'
                  }
                >
                  {index === current && (
                    <div className="bg-[#2d5a52]/90 w-full text-white grid grid-cols-2 z-[0]">
                      <div className="m-auto py-4 ml-20 sm:ml-28  md:ml-[10rem] lg:ml-40 font-bold z-[2]">
                        <h2 className="text-xs md:text-2xl">
                          {quote.quotation}
                        </h2>
                        <p className="text-xs md:text-lg pt-2">
                          {quote.author.name}
                        </p>
                      </div>
                      <div className="relative sm:left-5 md:left-[-2rem] overflow-hidden h-60 w-60 lg:h-[35vh] lg:w-[35vh] p-10 sm:m-5 md:m-20">
                        <img
                          src={urlFor(quote.mainImage).url()}
                          alt={quote.title}
                          className="rounded-full m-auto fill"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="relative">
        <motion.div
          initial={{
            opacity: 1,
          }}
          whileFocus={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          <a href="#snapshot">
            <div className="nav-chev-down absolute right-0 bottom-[-22.5rem] m-5 lg:mx-20 md:pr-5 ">
              <button className="animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </button>
            </div>
          </a>
        </motion.div>
      </div> */}
      </div>
    </section>
  );
}

export default QuoteCarousel;
