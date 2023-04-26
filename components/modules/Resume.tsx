'use client';

import React from 'react';
import { Experience } from '@/typing';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';
import Image from 'next/image';

type Props = {
  experiences: Experience[];
};

function Resume({ experiences }: Props) {
  return (
    <section className="bg-black pb-10">
      <div className="relative h-[800px] z-[0] p-8">
        <Image
          src={`/images/img30.png`}
          width={1920}
          height={800}
          alt={'Background Image'}
          priority
          className={`absolute left-0 top-0 right-0 bottom-0 h-[800px] w-full z-[0]`}
        />
        <div className="absolute left-0 top-0 right-0 bottom-0 object-cover bg-gradient-to-b from-black/40 to-black/80 z-[1] text-gray-200">
          <h1 className="text-center text-gray-200 text-4xl sm:text-5xl lg:text-7xl tracking-widest sm:tracking-[15px] uppercase py-10">
            my resume
          </h1>
          <div className="overflow-y-hidden hover:overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] max-w-2xl lg:max-w-7xl h-[800px] lg:h-[600px]  mx-auto lg:px-0">
            <div className="grid gap-y-8">
              {experiences.map((experience) => {
                return (
                  <article key={experience._id} className="w-full">
                    <div className="grid grid-cols-3 mx-auto">
                      <div className="text-xl font-bold col-span-3 lg:col-span-1 lg:flex lg:justify-end">
                        <div className="bg-black w-full p-10 border border-zinc-800">
                          <h2 className="text-xl font-bold mt-1 text-center lg:text-left uppercase">
                            {experience?.company}
                          </h2>
                          <p className="text-xl font-bold py-5 text-gray-200 text-center lg:text-left">
                            Started -{' '}
                            {new Date(experience?.dateStarted).toDateString()}{' '}
                            <br></br>
                            Ended -{' '}
                            {new Date(experience?.dateEnded).toDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-3 lg:col-span-2 w-full px-0 md:px-10 bg-slate-100/90 text-gray-800">
                        <h1 className="text-3xl font-bold mx-2 text-center lg:text-left pt-4 lg:pt-10">
                          {experience?.jobtitle}
                        </h1>

                        <div className="p-4">
                          <PortableText
                            value={experience.body}
                            components={RichTextComponents}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
