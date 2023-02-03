/* eslint-disable @next/next/no-img-element */
'use client';

import urlFor from '@/lib/urlFor';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="custom-img7 m-auto flex justify-center items-center h-screen">
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
                  <div className="bg-[#2d5a52]/90 w-full text-white grid grid-cols-2 z-[1]">
                    <div className="m-auto py-4 pl-10 md:pl-[7.5rem] lg:pl-80 font-bold z-[2]">
                      <h2 className="text-xs md:text-2xl">{quote.quotation}</h2>
                      <p className="text-xs md:text-lg pt-2">
                        {quote.author.name}
                      </p>
                    </div>
                    <div className="relative left-20 overflow-hidden h-[10vh] w-[10vh] md:h-[25vh] md:w-[25vh] lg:h-[35vh] lg:w-[35vh] m-5 md:m-20">
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
          <div className="relative left-0 top-[-100px] md:top-[-250px] right-0 bottom-0 flex justify-between md:px-8 z-[2]">
            <button onClick={prevQuote}>
              <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
            <button onClick={nextQuote}>
              <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
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
          <div className="absolute right-0 bottom-[-26rem] m-5 lg:m-20 md:pr-5 ">
            <button className="animate-bounce">
              <a href="#snapshot">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteCarousel;
