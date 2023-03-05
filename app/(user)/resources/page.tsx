import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import TrickListSmall from '@/components/tricks/TrickListSmall';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import ToolboxListSmall from '@/components/toolbox/ToolboxListSmall';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import DirectoryListSmall from '@/components/directory/DirectoryListSmall';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import Link from 'next/link';
import { Directory } from '@/typing';
import BannerOptions from '@/components/navigation/BannerOptions';
import BannerBio from '@/components/navigation/BannerBio';
import ReviewCarousel from '@/components/modules/ReviewCarousel';

const queryTrick = groq`
*[_type=='trick'][0..2] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryToolbox = groq`
*[_type=='toolbox'][0..2] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryDirectory = groq`
*[_type=='directory'][0..2] {
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
        <div className="mx-auto pt-12">
          <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pb-8 tracking-[15px] text-gray-200 uppercase px-20">
            Resources &amp; Tips
          </h1>
          <hr className="border-2 border-[#5EBCAA] my-2" />
          <BannerOptions />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto p-10">
            <div className="grid justify-center items-center">
              <h1 className="text-center mt-10 text-2xl tracking-widest">
                Graphic Designer&apos;s Bag of Tricks
              </h1>
              <div>
                <TrickListSmall tricks={tricks} />
                <Link
                  href="/tricks"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Click for More
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid justify-center items-center">
              <h1 className="text-center mt-10 text-2xl tracking-widest">
                Creative Writer&apos;s Toolbox
              </h1>
              <div>
                <ToolboxListSmall toolboxes={toolboxes} />
                <Link
                  href="/toolbox"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Click for More
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid justify-center items-center">
              <h1 className="text-center mt-10 text-2xl tracking-widest">
                Online Resource Directory
              </h1>
              <div>
                <DirectoryListSmall directories={directories} />
                <Link
                  href="/directory"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Click for More{' '}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewCarousel reviews={reviews} />
      <BannerBio />
    </main>
  );
}

export default Resources;
