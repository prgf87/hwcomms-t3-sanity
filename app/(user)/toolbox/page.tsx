import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const queryToolbox = groq`
*[_type=='toolbox'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60; // revalidate this page every /n seconds

async function ToolboxPage() {
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
        <PreviewToolboxList query={queryToolbox} />
      </PreviewSuspense>
    );
  }
  const toolboxes = await client.fetch(queryToolbox);

  return (
    <main className="bg-gradient p-10 md:p-3">
      <div className="mx-auto ">
        {/* <h1 className="text-3xl xl:text-7xl text-center text-gray-300 tracking-[10px] uppercase transition transform mx-auto my-16">
          Graphic Designer&apos;s
          <br></br> Bag of Tricks
        </h1> */}
        <div className="text-gray-200 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-full">
          {toolboxes.map((toolbox: any) => {
            return (
              <ClientSideRoute key={toolbox._id} route={toolbox.linktotoolbox}>
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
    </main>
  );
}

export default ToolboxPage;
