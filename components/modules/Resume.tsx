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
        <motion.h3
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
          className="absolute left-0 right-0 top-16 text-center uppercase tracking-[20px] text-gray-300 text-5xl"
        >
          My Resume
        </motion.h3>
        <div className="min-h-screen w-full grid px-10 justify-left items-left mx-auto text-gray-200">
          <div className="grid p-10 mt-40 gap-y-20">
            {experiences.map((experience) => {
              return (
                <article
                  key={experience._id}
                  className="w-full flex flex-row rounded-lg items-left bg-slate-100/90 opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 text-gray-800"
                >
                  <div className="px-0 md:px-10">
                    <h1 className="text-3xl font-bold text-left pt-10">
                      {experience?.jobtitle}
                    </h1>
                    <h2 className="text-xl font-bold mt-1 text-left">
                      {experience?.company}
                    </h2>
                    <p className="uppercase py-5 text-slate-900 text-left">
                      Started -{' '}
                      {new Date(experience.dateStarted).toDateString()}{' '}
                      <br></br>
                      Ended - {new Date(experience.dateEnded).toDateString()}
                    </p>
                    <div>
                      <PortableText
                        value={experience.body}
                        components={RichTextComponents}
                      />
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
