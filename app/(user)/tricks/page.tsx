import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PreviewTrickList from '@/components/preview/PreviewTrickList';
import PreviewPostList from '@/components/preview/PreviewPostList';
import TrickListSmall from '@/components/tricks/TrickListSmall';
import PostListSmall from '@/components/post/PostListSmall';

const queryTrick = groq`
*[_type=='trick'] {
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
        <PreviewTrickList query={queryTrick} />
        <PreviewPostList query={query} />
      </PreviewSuspense>
    );
  }
  const tricks = await client.fetch(queryTrick);
  const posts = await client.fetch(query);

  return (
    <main className="bg-gradient text-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      <div className="mx-auto">
        <h1 className="text-3xl xl:text-5xl text-center text-gray-300 tracking-[10px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl px-20">
          Resources &amp; Tips
        </h1>
        {/* <TrickBanner /> */}
        <TrickListSmall tricks={tricks} />
      </div>
      <div>
        <h1 className="text-3xl xl:text-5xl text-center text-gray-300 tracking-[15px] uppercase transition transform hover:scale-105 hover:text-gray-300 hover:text-opacity-75 mx-auto rounded-3xl">
          Hailey&apos;s Blog
        </h1>
        {/* <PostBanner /> */}
        <PostListSmall posts={posts} />
      </div>
    </main>
  );
}

export default Resources;
