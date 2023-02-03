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
  reviews: Review[];
};

function ReviewCarousel({ reviews }: Props) {
  const [current, setCurrent] = useState(0);
  if (!Array.isArray(reviews) || reviews.length <= 0) {
    return null;
  }
  const nextReview = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };
  const prevReview = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  return (
    <section className="relative custom-img8 bg-cover">
      <div className="" />
      <div className="bg-gradient-to-b from-black/70 via-black/50 to-black/70 left-0 top-0 right-0 bottom-0 z-[10]">
        <div className="">
          <h1 className="text-6xl text-center pt-40 text-gray-400 tracking-[15px] uppercase">
            Reviews
          </h1>
          {/* Reviews */}
          {reviews.map((review, index) => {
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
                  <div className="z-[0]">
                    <div className="z-[-1] py-10">
                      <img
                        src={urlFor(review.author.image).url()}
                        alt={review.title}
                        className="h-60 w-60 rounded-full mx-auto items-center"
                      />
                    </div>
                    <div className="max-w-3xl mx-auto z-[2] text-gray-200 px-8 pb-20">
                      <p className="p-2">{review.review}</p>
                      <h2 className="text-2xl p-2">{review.author.name}</h2>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="relative left-0 top- right-0 bottom-[15rem] flex justify-between px-2">
            <button onClick={prevReview}>
              <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200 ml-[25rem]" />
            </button>
            <button onClick={nextReview}>
              <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200 mr-[25rem]" />
            </button>
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
            <div className="absolute right-0 bottom-0 m-5 lg:m-20 md:pr-5 ">
              <button className="animate-bounce">
                <a href="#blog">
                  <ChevronDownIcon className="h-6 w-6 md:h-10 md:w-10 text-white" />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;
