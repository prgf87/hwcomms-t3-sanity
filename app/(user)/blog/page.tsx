import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PostList from '@/components/PostList';
import PreviewSuspense from '@/components/PreviewSuspense';
import PostBanner from '@/components/PostBanner';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
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
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <main className="custom-img9 relative text-gray-200 z-[0]">
      <section className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/60 to-black/90 z-[0]" />
      <div className="z-[4] ">
        <PostBanner />
        <PostList posts={posts} />
      </div>
    </main>
  );
}
