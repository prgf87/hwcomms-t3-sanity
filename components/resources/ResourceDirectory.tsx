import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import { RichTextComponents } from '../modules/RichTextComponents';
import BackToTop from '../navigation/BackToTop';

function ResourceDirectory({ directories }: any) {
  return (
    <section id="directory" className="relative px-2 pb-4 sm:px-10 md:p-3">
      <div className="relative mx-auto mt-8">
        <h1 className="absolute top-0 left-0 right-0 text-center text-gray-200 tracking-widest md:tracking-[8px] uppercase underline text-2xl lg:text-3xl">
          Free Resources
        </h1>
        <div className="flex place-content-center pt-10 sm:pt-12">
          <BackToTop path={'resources/#resources'}>
            <button className="btn4 text-gray-200 pb-4">Back To Top</button>
          </BackToTop>
        </div>
        <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4 items-center mx-auto max-w-[500px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-full">
          {directories.map((directory: any) => {
            return (
              <div key={directory._id} className="overflow-hidden rounded-xl">
                <div className="grid grid-cols-1 mx-auto md:mx-none md:grid-cols-2 group cursor-pointer bg-slate-600/70 min-h-[22.5rem]">
                  <div className="relative w-full h-52 md:h-full md:w-60 drop-shadow-xl">
                    <Image
                      className="overflow-hidden object-cover object-center md:rounded-xl m-auto"
                      src={urlFor(directory.mainImage).url()}
                      alt={directory.title}
                      fill
                    />
                    <div className="absolute hidden xl:block w-full h-52 md:h-full md:w-60 bg-opacity-10 bg-black rounded text-white" />
                  </div>
                  <div className="z-[2] px-4 md:px-0 md:text-left mt-10 lg:mt-2 md:ml-[-100px] md:mr-4 lg:ml-10 xl:ml-[-80px] xl:mr-0 xl:px-0 sm:pt-8">
                    <p className="font-bold text-xl">{directory.title}</p>

                    <p className="py-4 md:pr-10 lg:pr-0 xl:pr-5 text-sm">
                      {directory.description}
                    </p>
                    <div className="grid mx-auto gap-x-5 text-base">
                      <PortableText
                        value={directory.body}
                        components={RichTextComponents}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResourceDirectory;
