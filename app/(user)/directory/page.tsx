import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { Directory } from '@/typing';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';

type Pros = {
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

async function Resources() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#5EBCAA]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewDirectoryList query={queryDirectory} />
      </PreviewSuspense>
    );
  }
  const directories = await client.fetch(queryDirectory);

  return (
    <main className="bg-gradient p-10 md:p-3">
      <div className="mx-auto ">
        {/* <h1 className="text-3xl xl:text-7xl text-center text-gray-300 tracking-[10px] uppercase transition transform mx-auto my-16">
          Graphic Designer&apos;s
          <br></br> Bag of Tricks
        </h1> */}
        <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mx-auto max-w-[500px] lg:max-w-full">
          {directories.map((directory: any) => {
            return (
              <div key={directory._id}>
                <div className="grid grid-cols-2 group cursor-pointer bg-slate-600/70">
                  <div className="relative col-span-2 w-full h-60 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      className="object-cover object-center rounded-xl m-auto p-1"
                      src={urlFor(directory.mainImage).url()}
                      alt={directory.title}
                      fill
                    />
                    <div className="absolute hidden xl:block w-60 h-60 bg-opacity-10 bg-black rounded text-white" />
                  </div>
                  <div className="z-[2] text-left mt-10 ml-5 lg:ml-10 group-hover:underline">
                    <p className="font-bold text-xl">{directory.title}</p>
                    <div className="flex justify-start items-center">
                      <p className="mt-5 font-bold flex items-center text-sm">
                        Read directory
                        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                      </p>
                    </div>
                    <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
                      {directory.description}
                    </p>
                  </div>
                  <div>
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

export default Resources;
