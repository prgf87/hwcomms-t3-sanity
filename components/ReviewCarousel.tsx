/* eslint-disable @next/next/no-img-element */
'use client';

import urlFor from '@/lib/urlFor';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

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
    <section className="custom-img8">
      <div className="">
        <div className="">
          <h1 className="absolute left-[50%] right-[50%] text-7xl">Reviews</h1>
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
                    <div className="h-[25rem] z-[-1]">
                      <img
                        src={urlFor(review.mainImage).url()}
                        alt={review.title}
                        className="bg-cover opacity-10 "
                      />
                    </div>
                    <div className="max-w-xl mx-auto z-[2] text-gray-200 p-2">
                      <p className="p-2">{review.review}</p>
                      <h2 className="text-5xl p-2">{review.author.name}</h2>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="relative left-0 top-[-250px] right-0 bottom-0 flex justify-between px-8">
            <button onClick={prevReview}>
              <ChevronLeftIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
            <button onClick={nextReview}>
              <ChevronRightIcon className="h-6 w-6 md:h-10 md:w-10 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;
