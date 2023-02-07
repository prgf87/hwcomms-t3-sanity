import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ResumeCard({}: Props) {
  return (
    <article className="max-w-full flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-700/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src="/images/img1.png"
          alt="/"
          width={100}
          height={100}
          className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h1 className="text-4xl font-light">
          Vice President of Corporate Communications
        </h1>
        <h2 className="text-2xl font-bold mt-1">Atria Wealth Solutions</h2>
        {/* <h3 className="uppercase py-5 text-gray-300">Started... - Ended...</h3> */}
        <h1>July 2022 - October 2022</h1>
        <p>
          Supported the rollout of communications strategies to deliver Atria’s
          content to relevant targets through a multi-channel approach,
          including earned media, social media, owned digital properties, and
          internal communications. Partnered with corporate, commercial, and
          functional leaders across the organization to provide perspective, and
          guidance, and led the development of proactive external and integrated
          communications strategies and programs, including innovative
          storytelling and engagement ideas to communicate and align key
          messages.
        </p>
        {/* <ul className="list-disc space-y-4 ml-5 text-lg my-2">
          <h1>Select Achievements:</h1>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul> */}
      </div>
    </article>
  );
}

export default ResumeCard;
