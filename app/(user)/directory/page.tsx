import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { Directory } from '@/typing';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';
import BannerOptions from '@/components/navigation/BannerOptions';
import BannerBio from '@/components/navigation/BannerBio';

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
    <main className="bg-gradient p-10 gap-10">
      <BannerOptions />
      <div className="mx-auto md:p-3">
        <div className="text-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-20 p-20 items-center mx-auto max-w-[500px] lg:max-w-full">
          {directories.map((directory: any) => {
            return (
              <div key={directory._id}>
                <div className="grid grid-cols-1 bg-blue-900/20 rounded-2xl border border-gray-900/20 shadow-2xl">
                  <div className="relative col-span-2 w-40 h-40 drop-shadow-xl mx-auto">
                    <Image
                      className="object-cover object-center rounded-full my-5 shadow-xl"
                      src={urlFor(directory.mainImage).url()}
                      alt={directory.title}
                      fill
                    />
                    {/* <div className="absolute hidden xl:block w-80 h-80 bg-opacity-10 bg-black text-white rounded-full my-5" /> */}
                  </div>
                  <div className="z-[2] text-center mt-10 ml-5 lg:ml-10 group-hover:underline">
                    <p className="font-bold text-2xl">{directory.title}</p>

                    <p className="font-bold py-4 pr-10 md:pr-0 xl:pr-5 text-sm">
                      {directory.description}
                    </p>
                    <div className="flex flex-col xl:flex-row justify-center items-center gap-x-5 h-60 lg:h-20">
                      <PortableText
                        value={directory.body}
                        components={RichTextComponents}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BannerBio />
    </main>
  );
}

export default Resources;
