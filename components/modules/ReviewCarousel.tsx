/* eslint-disable @next/next/no-img-element */
'use client';

import urlFor from '@/lib/urlFor';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Review } from '@/typing';
import Image from 'next/image';

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
    <section className="relative h-[800px] md:h-[900px] z-0">
      <Image
        src={`/images/img28.png`}
        width={1920}
        height={800}
        alt={'/'}
        className="absolute h-[800px] md:h-[900px] object-cover"
      />
      <div className="absolute h-[800px] md:h-[900px] bg-gradient-to-b from-black/90 via-black/60 to-black/90 left-0 top-0 right-0 bottom-0 z-[1] lg:py-20 opacity-100" />
      <div className="absolute z-[10]">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-2xl md:text-3xl lg:text-5xl text-center pt-20 text-gray-200 md:tracking-[15px] uppercase md:px-20 xl:px-[28rem]"
        >
          Words From Clients & Colleagues
        </motion.h1>
        {/* Reviews */}
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'transition-transform ease-in-out duration-300'
                  : 'transition-transform ease-in-out duration-300'
              }
            >
              {index === current && (
                <div className="z-[0]">
                  <div className="z-[-1] py-5">
                    <Image
                      src={urlFor(review.author.image).url()}
                      alt={review.title}
                      width={1024}
                      height={1024}
                      className="h-[250px] w-[250px] rounded-full mx-auto items-center"
                    />
                  </div>
                  <div className="max-w-3xl mx-auto z-[2] text-gray-200 px-8 py-4 text-center">
                    <p className="pb-2 text-sm sm:text-lg">{review.review}</p>
                    <h2 className="text-3xl pt-2">{review.author.name}</h2>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="relative left-0 top-0 right-0 bottom-0 flex lg:hidden justify-center items-center gap-40 pb-10">
          <button onClick={prevReview}>
            <ChevronLeftIcon className="h-10 w-10 md:h-10 md:w-10 text-gray-200" />
          </button>
          <button onClick={nextReview}>
            <ChevronRightIcon className="h-10 w-10 md:h-10 md:w-10 text-gray-200" />
          </button>
        </div>
        <div className="hidden relative left-0 top-0 right-0 bottom-[14rem] lg:flex justify-between animate-pulse px-60">
          <button onClick={prevReview}>
            <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200 ml-[10rem] xl:ml-[25rem]" />
          </button>
          <button onClick={nextReview}>
            <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200 mr-[10rem] xl:mr-[25rem]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;
