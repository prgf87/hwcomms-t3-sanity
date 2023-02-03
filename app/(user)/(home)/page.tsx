import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PreviewSuspense from '@/components/PreviewSuspense';
import PreviewTipList from '@/components/PreviewTipList';
import Intro from '@/components/Intro';
import QuoteCarousel from '@/components/QuoteCarousel';
import Snapshots from '@/components/Snapshots';
import Banner from '@/components/Banner';
import ReviewCarousel from '@/components/ReviewCarousel';
import PostList from '@/components/PostList';
import TipList from '@/components/TipList';
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
const queryQuote = groq`
*[_type=='quote'] {
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
        <PreviewTipList query={queryTip} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  const tips = await client.fetch(queryTip);
  const quotes = await client.fetch(queryQuote);
  const reviews = await client.fetch(queryReview);

  return (
    <main className="snap-mandatory snap-y">
      <div id="intro" className="snap-center">
        <Intro />
      </div>
      <div id="snapshot" className="snap-start">
        <Snapshots />
      </div>
      <div>
        <Banner />
      </div>
      <div id="quotes" className="snap-center">
        <QuoteCarousel quotes={quotes} />
      </div>
      <div id="review" className="snap-center">
        <ReviewCarousel reviews={reviews} />
      </div>
      <div id="blog" className="snap-center">
        <PostBanner />
        <PostList posts={posts} />
      </div>
      <div id="resources" className="snap-center">
        <TipBanner />
        <TipList tips={tips} />
      </div>
    </main>
  );
}
