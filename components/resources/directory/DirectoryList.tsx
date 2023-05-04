'use client';

import { RichTextComponents } from '@/components/modules/RichTextComponents';
import urlFor from '@/lib/urlFor';
import { Directory } from '@/typing';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { PortableText } from '@portabletext/react';
import groq from 'groq';
import Image from 'next/image';
import Link from 'next/link';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';

type Props = {
  directories: Directory[];
};

const queryDirectory = groq`
*[_type=='directory'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

function DirectoryList({ directories }: Props) {
  return (
    <main className="bg-gradient p-10 md:p-3">
      <div className="mx-auto pt-[22rem]">
        <h1 className="absolute left-0 right-0 top-44 text-center text-gray-200 sm:text-5xl lg:text-6xl tracking-widest sm:tracking-[15px] uppercase font-bold max-w-7xl mx-auto">
          The Online Resource Directory
        </h1>
        <div className="text-gray-200 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-full">
          {directories.map((directory: any) => {
            return (
              <div
                key={directory._id}
                className="h-80 overflow-hidden rounded-2xl"
              >
                <div className="grid grid-cols-2 bg-slate-600/70">
                  <div className="relative w-60 h-60 drop-shadow-xl">
                    <Image
                      className="object-cover object-center rounded-xl m-auto p-1"
                      src={urlFor(directory.mainImage).url()}
                      alt={directory.title}
                      height={300}
                      width={300}
                    />
                    <div className="absolute top-0 hidden xl:block w-60 h-60 bg-opacity-10 bg-black rounded text-white" />
                  </div>
                  <div className="z-[2] text-left mt-10">
                    <p className="font-bold text-[1.35rem]">
                      {directory.title}
                    </p>
                    <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
                      {directory.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-x-5 col-span-2">
                    <PortableText
                      value={directory.body}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default DirectoryList;
