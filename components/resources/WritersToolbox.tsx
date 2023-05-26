import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import BackToTop from '../navigation/BackToTop';
import ClientSideRoute from '../navigation/ClientSideRoute';

function WritersToolbox({ toolboxes }: any) {
  return (
    <section id="toolbox" className="relative px-10 md:p-3">
      <div className="relative mx-auto mt-8">
        <h1 className="absolute top-0 left-0 right-0 text-center text-gray-200 tracking-widest md:tracking-[8px] uppercase underline text-2xl lg:text-3xl">
          creative writer&apos;s toolbox{' '}
        </h1>
        <div className="flex place-content-center pt-20 sm:pt-12">
          <BackToTop path={'resources/#resources'}>
            <button className="btn4 text-gray-200 pb-4">Back To Top</button>
          </BackToTop>
        </div>
        <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 items-center mx-auto max-w-[500px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-full mt-4">
          {toolboxes.map((toolbox: any) => {
            return (
              <ClientSideRoute key={toolbox._id} route={toolbox.linktotoolbox}>
                <div className="overflow-hidden rounded-xl">
                  <div className="grid grid-cols-1 mx-auto md:mx-none md:grid-cols-2 group cursor-pointer bg-slate-600/70 h-none md:h-40 lg:h-60">
                    <div className="relative w-full h-52 md:h-full md:w-60 drop-shadow-xl group-hover:scale-110 transition-transform duration-200 ease-out ">
                      <Image
                        className="overflow-hidden object-cover object-center md:rounded-xl m-auto"
                        src={urlFor(toolbox.mainImage).url()}
                        alt={toolbox.title}
                        fill
                      />
                      <div className="absolute hidden xl:block w-full h-52 md:h-full md:w-60 bg-opacity-10 bg-black rounded text-white" />
                    </div>
                    <div className="z-[2] px-4 md:px-0 md:text-left mt-10 lg:mt-4 md:ml-[-100px] md:mr-4 lg:ml-10 xl:ml-[-20px] xl:mr-0 xl:px-0 group-hover:underline">
                      <p className="font-bold text-xl">{toolbox.title}</p>
                      <div className="flex justify-center md:justify-start items-center">
                        <p className="mt-5 font-bold flex items-center text-sm">
                          Go to Resource{' '}
                          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                        </p>
                      </div>
                      <p className="font-bold py-4 md:pr-10 lg:pr-0 xl:pr-5 text-sm">
                        {toolbox.description}
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

export default WritersToolbox;
