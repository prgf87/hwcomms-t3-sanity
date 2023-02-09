import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/PreviewSuspense';
import TipList from '@/components/TipList';
import PreviewTipList from '@/components/PreviewTipList';
import TipBanner from '@/components/TipBanner';
import PreviewPostList from '@/components/PreviewPostList';
import PostBanner from '@/components/PostBanner';
import PostList from '@/components/PostList';

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
    <main className="bg-gradient text-gray-200 grid grid-cols-2 gap-10 p-10">
      <div>
        <h1 className="text-5xl text-center pt-20 text-gray-300 tracking-[15px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl">
          Resources &amp; Tips
        </h1>
        <TipBanner />
        <TipList tips={tips} />
      </div>
      <div>
        <h1 className="text-5xl text-center mt-20 text-gray-300 tracking-[15px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl">
          Hailey&apos;s Blog
        </h1>
        <PostBanner />
        <PostList posts={posts} />
      </div>
    </main>
  );
}

export default Resources;
