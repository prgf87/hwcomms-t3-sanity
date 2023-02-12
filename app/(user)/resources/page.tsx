import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTipList from '@/components/preview/PreviewTipList';
import PreviewPostList from '@/components/preview/PreviewPostList';
import TipListSmall from '@/components/tip/TipListSmall';
import TrickListSmall from '@/components/tricks/TrickListSmall';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import ToolboxListSmall from '@/components/toolbox/ToolboxListSmall';
import PreviewToolboxList from '@/components/preview/PreviewToolboxList';
import DirectoryListSmall from '@/components/directory/DirectoryListSmall';
import PreviewDirectoryList from '@/components/preview/PreviewDirectoryList';
import Link from 'next/link';
import PostList from '@/components/post/PostList';
import BannerOptions from '@/components/navigation/BannerOptions';

const query = groq`
*[_type=='post'][0..3] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryTip = groq`
*[_type=='tip'][0..2] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
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
        <PreviewPostList query={query} />
        <PreviewTipList query={queryTip} />
        <PreviewTrickList query={queryTrick} />
        <PreviewToolboxList query={queryToolbox} />
        <PreviewDirectoryList query={queryDirectory} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);
  const tricks = await client.fetch(queryTrick);
  const toolboxes = await client.fetch(queryToolbox);
  const directories = await client.fetch(queryDirectory);

  return (
    <main className="bg-gradient text-gray-200 grid grid-cols-1 gap-10 p-10">
      <div className="overflow-x-hidden">
        <div className="mx-auto">
          <h1 className="text-3xl text-center md:text-5xl lg:text-7xl pb-8 tracking-[15px] text-gray-200/80 uppercase px-20">
            Resources &amp; Tips
          </h1>
          <hr className="border-2 border-[#5EBCAA] my-2" />

          <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto">
            <div className="flex justify-center items-center">
              <div>
                <TipListSmall tips={tips} />
                <Link
                  href="/resources"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Useful Tips
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <TrickListSmall tricks={tricks} />
                <Link
                  href="/tricks"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Design Tricks
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <ToolboxListSmall toolboxes={toolboxes} />
                <Link
                  href="/toolbox"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Writer&apos;s Toolbox
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <DirectoryListSmall directories={directories} />
                <Link
                  href="/directory"
                  className="flex justify-center items-center"
                >
                  <button className="btn1-large text-center text-base">
                    Resource Directory
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PostList posts={posts} />
        </div>
      </div>
    </main>
  );
}

export default Resources;
