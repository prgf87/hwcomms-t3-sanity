import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/preview/PreviewPostList';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import PostList from '@/components/post/PostList';
import Banner from '@/components/modules/Banner';
import BannerOptions from '@/components/modules/BannerOptions';

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
    <main className="custom-img15 bg-fixed text-gray-200 z-[0]">
      <div>
        <BannerOptions />
      </div>
      <section className="left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/80 to-black/70 z-[2]">
        <PostList posts={posts} />
      </section>
      <Banner />
    </main>
  );
}
