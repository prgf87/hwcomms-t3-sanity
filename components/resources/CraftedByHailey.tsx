import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import BackToTop from '../navigation/BackToTop';
import ClientSideRoute from '../navigation/ClientSideRoute';

function CraftedByHailey({ crafted }: any) {
  return (
    <section id="crafted" className="relative p-10 md:p-3">
      <div className="absolute top-[-80px]" />
      <div className="mx-auto pt-10 mt-10">
        <h1 className="absolute top-10 left-0 right-0 text-center text-gray-200 tracking-widest sm:tracking-[8px] uppercase underline text-3xl">
          Crafted by Hailey
        </h1>
        <div className="flex place-content-center">
          <BackToTop path={'resources/#resources'}>
            <button className="btn4 text-gray-200 pb-4">Back To Top</button>
          </BackToTop>
        </div>
        <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[500px] lg:max-w-[1000px] xl:max-w-full">
          {crafted.map((crafted: any) => {
            return (
              <ClientSideRoute key={crafted._id} route={crafted.linktocrafted}>
                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 group cursor-pointer bg-slate-600/70">
                    <div className="relative w-52 h-52 sm:h-60 sm:w-60 drop-shadow-xl group-hover:scale-110 transition-transform duration-200 ease-out">
                      <Image
                        className="overflow-hidden object-cover object-center rounded-xl m-auto"
                        src={urlFor(crafted.mainImage).url()}
                        alt={crafted.title}
                        fill
                      />
                      <div className="absolute hidden xl:block w-52 h-52 sm:h-60 sm:w-60 bg-opacity-10 bg-black rounded text-white" />
                    </div>
                    <div className="z-[2] text-left mt-10 ml-5 lg:ml-0 group-hover:underline">
                      <p className="font-bold text-xl">{crafted.title}</p>
                      <div className="flex justify-start items-center">
                        <p className="mt-5 font-bold flex items-center text-sm">
                          Go to Resource{' '}
                          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                        </p>
                      </div>
                      <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
                        {crafted.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ClientSideRoute>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CraftedByHailey;
