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
    <section className="relative min-h-screen custom-img8 bg-fixed">
      <div className="min-h-screen bg-gradient-to-b from-black/40 via-black/70 to-black/90 left-0 top-0 right-0 bottom-0 z-[10] lg:py-20">
        <div>
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
            className="text-3xl md:text-5xl text-center py-5 text-gray-400 tracking-[15px] uppercase"
          >
            Words From Colleagues
          </motion.h1>
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
                  <motion.div
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
                    className="z-[0]"
                  >
                    <div className="z-[-1] py-5">
                      <Image
                        src={urlFor(review.author.image).url()}
                        alt={review.title}
                        width={9999}
                        height={9999}
                        className="h-[30vh] w-[30vh] rounded-full mx-auto items-center"
                      />
                    </div>
                    <div className="max-w-3xl mx-auto z-[2] text-gray-200 px-8 py-5 text-center">
                      <p className="p-2 text-2xl">{review.review}</p>
                      <h2 className="text-3xl p-2">{review.author.name}</h2>
                    </div>
                  </motion.div>
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
            <a href="#blog">
              <div className="nav-chev-down absolute right-0 bottom-[-3rem] m-5 lg:m-20 md:pr-5 ">
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

export default ReviewCarousel;
