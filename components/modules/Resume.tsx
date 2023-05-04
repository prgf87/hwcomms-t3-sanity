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
  const dateOptions = {
    month: 'long',
    year: 'numeric',
  } as const;
  return (
    <section className="bg-gradient-invert pb-10">
      <div className="relative h-[800px] z-[0] p-8">
        {/* <Image
          src={`/images/img30.png`}
          width={1920}
          height={800}
          alt={'Background Image'}
          priority
          className={`absolute left-0 top-0 right-0 bottom-0 h-[800px] bg-fixed w-full z-[0]`}
        /> */}
        <div>
          <h1 className="text-center text-gray-200 text-4xl sm:text-5xl lg:text-7xl tracking-widest sm:tracking-[15px] uppercase py-10">
            my resume
          </h1>
          <div className="overflow-y-hidden hover:overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'2px'] mx-40 h-[800px] lg:h-[600px] lg:px-0">
            <div className="grid gap-y-8">
              {experiences.map((experience) => {
                return (
                  <article key={experience._id} className="w-full">
                    <div className="grid grid-cols-3 mx-auto">
                      <div className="text-xl font-bold col-span-3 lg:col-span-1 lg:flex lg:justify-end">
                        <div className="bg-black/30 w-full p-10 border border-zinc-800">
                          <h1 className="text-xl text-gray-200 font-bold mt-1 text-center lg:text-left uppercase">
                            {experience?.company}
                          </h1>
                          <p className="text-xl font-bold py-5 text-gray-200 text-center lg:text-left">
                            Started -{' '}
                            {new Date(
                              experience?.dateStarted
                            ).toLocaleDateString(
                              process.env.LOCAL,
                              dateOptions
                            )}{' '}
                            {/* <br></br>
                            Ended -{' '}
                            {new Date(
                              experience?.dateEnded
                            ).toLocaleDateString()} */}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-3 lg:col-span-2 w-full px-0 md:px-10 bg-slate-100/80 text-gray-800">
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
