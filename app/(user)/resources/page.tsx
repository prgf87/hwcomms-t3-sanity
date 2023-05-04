import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import TrickListSmall from '@/components/resources/tricks/TrickListSmall';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import ToolboxListSmall from '@/components/resources/toolbox/ToolboxListSmall';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import DirectoryListSmall from '@/components/resources/directory/DirectoryListSmall';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import Link from 'next/link';
import BannerBio from '@/components/navigation/BannerBio';
import ReviewCarousel from '@/components/modules/ReviewCarousel';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const queryTrick = groq`
*[_type=='trick'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryToolbox = groq`
*[_type=='toolbox'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryDirectory = groq`
*[_type=='directory'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryReview = groq`
*[_type=='review'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
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
        <PreviewTrickList query={queryTrick} />
        <PreviewToolboxList query={queryToolbox} />
        <PreviewDirectoryList query={queryDirectory} />
      </PreviewSuspense>
    );
  }

  const tricks = await client.fetch(queryTrick);
  const toolboxes = await client.fetch(queryToolbox);
  const directories = await client.fetch(queryDirectory);
  const reviews = await client.fetch(queryReview);

  return (
    <main className="bg-gradient text-gray-200 grid grid-cols-1">
      <div className="overflow-x-hidden">
        <div className="mx-auto pt-12 text-center">
          {/* <h1 className="mt-20 text-3xl  md:text-5xl lg:text-7xl pb-8 tracking-[15px] text-gray-200 uppercase px-20">
            Resources &amp; Tips
          </h1> */}
          <p className="max-w-3xl mx-auto pb-4 pt-4">
            Feel free to explore these helpful resources for creators, all
            gathered in one place. <br></br>Check out{' '}
            <a
              href="/contact"
              className="font-semibold hover:text-gray-600 underline"
            >
              my blog
            </a>{' '}
            for the latest tips and resources.
          </p>
          <div className="pb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center tracking-[10px]  sm:px-20 py-5 lg:pt-10 xl:px-[15rem] uppercase">
              Crafted by Hailey
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center sm:px-20 py-5 lg:pt-10 xl:px-[15rem]">
              Free Social Media Calendar
            </h2>
            <p className="max-w-3xl mx-auto pb-8 pt-4">
              This social media content calendar for 2023 features daily
              prompts, holiday content ideas, and concise advice to kickstart
              your social media marketing. Enjoy!
            </p>
            <Link
              href={
                'https://www.dropbox.com/s/abfc73oeukga8z7/Social%20Media%20Content%20Made%20Easy%20Calendar%202023.pdf?dl=0'
              }
            >
              <button className="btn1-large">Download For Free</button>
            </Link>
          </div>

          <section id="directory" className="relative p-10 md:p-3">
            <div className="mx-auto pt-60">
              <h1 className="absolute left-0 right-0 top-20 text-center text-gray-200 sm:text-5xl lg:text-6xl tracking-widest sm:tracking-[15px] uppercase font-bold max-w-7xl mx-auto">
                The Online Resource Directory
              </h1>
              <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-full">
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
          </section>

          <section id="tricks" className="relative p-10 md:p-3">
            <div className="mx-auto pt-80">
              <h1 className="absolute left-0 right-0 top-44 text-center text-gray-200 sm:text-5xl lg:text-6xl tracking-widest sm:tracking-[12px] uppercase font-bold">
                Designer&apos;s Bag of Tricks
              </h1>

              <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[500px] lg:max-w-[1000px] xl:max-w-full">
                {tricks.map((trick: any) => {
                  return (
                    <ClientSideRoute key={trick._id} route={trick.linktotrick}>
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-2 group cursor-pointer bg-slate-600/70">
                          <div className="relative w-60 h-60 drop-shadow-xl group-hover:scale-110 transition-transform duration-200 ease-out">
                            <Image
                              className="overflow-hidden object-cover object-center rounded-xl m-auto"
                              src={urlFor(trick.mainImage).url()}
                              alt={trick.title}
                              fill
                            />
                            <div className="absolute hidden xl:block w-60 h-60 bg-opacity-10 bg-black rounded text-white" />
                          </div>
                          <div className="z-[2] text-left mt-10 ml-5 lg:ml-10 group-hover:underline">
                            <p className="font-bold text-xl">{trick.title}</p>
                            <div className="flex justify-start items-center">
                              <p className="mt-5 font-bold flex items-center text-sm">
                                Read Trick
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                              </p>
                            </div>
                            <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
                              {trick.description}
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

          <section id="toolbox" className="relative p-10 md:p-3">
            <div className="mx-auto pt-80">
              <h1 className="absolute left-0 right-0 top-44 text-center text-gray-200 sm:text-5xl lg:text-7xl tracking-widest sm:tracking-[15px] uppercase font-bold">
                Creative Writer&apos;s Toolbox
              </h1>
              <div className="text-gray-200 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-full">
                {toolboxes.map((toolbox: any) => {
                  return (
                    <ClientSideRoute
                      key={toolbox._id}
                      route={toolbox.linktotoolbox}
                    >
                      <div>
                        <div className="grid grid-cols-2 group cursor-pointer bg-slate-600/70">
                          <div className="relative w-60 h-60 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image
                              className="object-cover object-center rounded-xl m-auto p-1"
                              src={urlFor(toolbox.mainImage).url()}
                              alt={toolbox.title}
                              fill
                            />
                            <div className="absolute hidden xl:block w-60 h-60 bg-opacity-10 bg-black rounded text-white" />
                          </div>
                          <div className="z-[2] text-left mt-10 ml-5 lg:ml-10 group-hover:underline">
                            <p className="font-bold text-xl">{toolbox.title}</p>
                            <div className="flex justify-start items-center">
                              <p className="mt-5 font-bold flex items-center text-sm">
                                Read toolbox
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                              </p>
                            </div>
                            <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
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
        </div>
      </div>
      <BannerBio />
    </main>
  );
}

export default Resources;
