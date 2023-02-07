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
import Link from 'next/link';

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
                    <div className="m-auto py-4 pl-20 sm:pl-28  md:pl-[10rem] lg:pl-40 font-bold z-[2]">
                      <h2 className="text-xs md:text-2xl">{quote.quotation}</h2>
                      <p className="text-xs md:text-lg pt-2">
                        {quote.author.name}
                      </p>
                    </div>
                    <div className="relative sm:left-5 md:left-[-2rem] overflow-hidden h-[20vh] w-[20vh] md:h-[25vh] md:w-[25vh] lg:h-[35vh] lg:w-[35vh] p-5 sm:m-5 md:m-20">
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
          <div className="relative left-0 top-[-110px] sm:top-[-130px] md:top-[-225px] right-0 bottom-0 flex justify-between md:px-8 z-[2]">
            <button onClick={prevQuote}>
              <ChevronLeftIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300 ml-10" />
            </button>
            <button onClick={nextQuote}>
              <ChevronRightIcon className="h-6 w-6 md:h-12 md:w-12 text-gray-300 mr-10" />
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
          <a href="#snapshot">
            <div className="nav-chev-down absolute right-0 bottom-[-22.5rem] m-5 lg:mx-20 md:pr-5 ">
              <button className="animate-bounce">
                <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </button>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteCarousel;
