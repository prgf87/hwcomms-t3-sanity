import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from '@/components/navigation/ClientSideRoute';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';

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
      <div className="mx-auto pt-[22rem]">
        {/* <h1 className="text-3xl xl:text-7xl text-center text-gray-300 tracking-[10px] uppercase transition transform mx-auto my-16">
          Graphic Designer&apos;s
          <br></br> Bag of Tricks
        </h1> */}
        <h1 className="absolute left-0 right-0 top-44 text-center text-gray-200 sm:text-5xl lg:text-6xl tracking-widest sm:tracking-[15px] uppercase font-bold max-w-7xl mx-auto">
          The Online Resource Directory
        </h1>
        <div className="text-gray-200 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 items-center mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-full">
          {directories.map((directory: any) => {
            return (
              // <ClientSideRoute
              //   key={directory._id}
              //   route={directory.linktodirectory}
              // >
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
              // </ClientSideRoute>
            );
          })}
        </div>
      </div>
    </main>
    // <main className="bg-gradient p-10 gap-10 pt-40">
    //   <BannerOptions />
    //   <div className="mx-auto md:p-3">
    //     <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-20 p-20 items-center mx-auto max-w-[500px] lg:max-w-full">
    //       {directories.map((directory: any) => {
    //         return (
    //           <div key={directory._id}>
    //             <div className="grid grid-cols-1 bg-blue-900/20 rounded-2xl border border-gray-900/20 shadow-2xl">
    //               <div className="relative col-span-2 w-40 h-40 drop-shadow-xl mx-auto">
    //                 <Image
    //                   className="object-cover object-center rounded-full my-5 shadow-xl"
    //                   src={urlFor(directory.mainImage).url()}
    //                   alt={directory.title}
    //                   fill
    //                 />
    //                 {/* <div className="absolute hidden xl:block w-80 h-80 bg-opacity-10 bg-black text-white rounded-full my-5" /> */}
    //               </div>
    //               <div className="z-[2] text-center mt-10 ml-5 lg:ml-10 group-hover:underline">
    //                 <p className="font-bold text-2xl">{directory.title}</p>

    //                 <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
    //                   {directory.description}
    //                 </p>
    //                 <div className="flex flex-col xl:flex-row justify-center items-center gap-x-5 h-60 lg:h-20">
    //                   <PortableText
    //                     value={directory.body}
    //                     components={RichTextComponents}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <BannerBio />
    // </main>
  );
}

export default Resources;
