import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTipList from '@/components/preview/PreviewTipList';
import PreviewPostList from '@/components/preview/PreviewPostList';
import TipListSmall from '@/components/tip/TipListSmall';
import PostListSmall from '@/components/post/PostListSmall';

const queryTip = groq`
*[_type=='tip'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const query = groq`
*[_type=='post'] {
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
        <PreviewTipList query={queryTip} />
        <PreviewPostList query={query} />
      </PreviewSuspense>
    );
  }
  const tips = await client.fetch(queryTip);
  const posts = await client.fetch(query);

  return (
    <main className="bg-gradient text-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      <div className="overflow-y-hidden">
        <div className="mx-auto">
          <h1 className="text-3xl xl:text-5xl text-center text-gray-300 tracking-[10px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl px-20">
            Resources &amp; Tips
          </h1>
          {/* <TipBanner /> */}
          <TipListSmall tips={tips} />
        </div>
        <div>
          <h1 className="text-3xl xl:text-5xl text-center text-gray-300 tracking-[15px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl">
            Hailey&apos;s Blog
          </h1>
          {/* <PostBanner /> */}
          <PostListSmall posts={posts} />
        </div>
      </div>
    </main>
  );
}

export default Resources;
