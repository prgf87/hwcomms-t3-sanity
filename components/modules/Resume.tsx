'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typing';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';

type Props = {
  experiences: Experience[];
};

function Resume({ experiences }: Props) {
  return (
    <div className="relative min-h-screen custom-img11 bg-fixed overflow-y-hidden z-0 max-w-full">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 right-0 bottom-0 bg-cover bg-black z-[0] flex justify-evenly"
      />
      <div className="relative flex flex-col md:flex-row max-w-full px-80 mx-auto">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="absolute left-0 right-0 top-16 text-center text-gray-200 sm:text-5xl lg:text-7xl tracking-widest sm:tracking-[15px] uppercase font-bold"
        >
          My Resume
        </motion.h1>
        <div className="min-h-screen w-full grid px-10 justify-left items-left mx-auto text-gray-200">
          <div className="grid p-10 mt-40 gap-y-20">
            {experiences.map((experience) => {
              return (
                <article key={experience._id} className="w-full">
                  <div className="grid grid-cols-3 mx-auto max-w-7xl">
                    <div className="flex justify-center items-center text-xl font-bold">
                      <div>
                        <h2 className="text-xl font-bold mt-1 text-left uppercase">
                          {experience?.company}
                        </h2>
                        <p className="text-xl font-bold py-5 text-gray-200 text-left">
                          Started -{' '}
                          {new Date(experience.dateStarted).toDateString()}{' '}
                          <br></br>
                          Ended -{' '}
                          {new Date(experience.dateEnded).toDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-2 px-0 md:px-10 rounded-lg items-left bg-slate-100/90 text-gray-800">
                      <h1 className="text-3xl font-bold text-left pt-10">
                        {experience?.jobtitle}
                      </h1>

                      <div>
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
      <div></div>
    </div>
  );
}

export default Resume;
