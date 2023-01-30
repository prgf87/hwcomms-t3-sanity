import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PostList from '@/components/PostList';
import PreviewSuspense from '@/components/PreviewSuspense';
import TipList from '@/components/TipList';
import PreviewTipList from '@/components/PreviewTipList';
import PostBanner from '@/components/PostBanner';
import TipBanner from '@/components/TipBanner';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryTip = groq`
*[_type=='tip'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

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
        <PreviewTipList query={queryTip} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);

  return (
    <main>
      <PostBanner />
      <PostList posts={posts} />
      <TipBanner />
      <TipList tips={tips} />
    </main>
  );
}
