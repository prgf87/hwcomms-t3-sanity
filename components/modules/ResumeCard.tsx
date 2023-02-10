import Image from 'next/image';
import React from 'react';
import urlFor from '@/lib/urlFor';
import { Experience } from '@/typing';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';

type Props = {
  experience: Experience;
};

function ResumeCard({ experience }: Props) {
  return (
    <article className="max-w-full flex flex-col rounded-lg items-center space-x-10 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-100/70 opacity-90 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-x-hidden overflow-y-scroll text-gray-800/70">
      <div className="px-20 py-10">
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt="/"
          width={100}
          height={100}
          className="h-40 w-40 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
      </div>

      <div className="px-0 md:px-10">
        <h1 className="text-3xl font-light">{experience?.jobtitle}</h1>
        <h2 className="text-xl font-bold mt-1">{experience?.company}</h2>
        {/* <h3 className="uppercase py-5 text-gray-300">Started... - Ended...</h3> */}
        <p className="uppercase py-5 text-slate-900">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="max-h-[10rem]">
          <PortableText
            value={experience.body}
            components={RichTextComponents}
          />
        </div>
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
