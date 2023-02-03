import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewPostList from '@/components/PreviewPostList';
import PreviewSuspense from '@/components/PreviewSuspense';
import PreviewTipList from '@/components/PreviewTipList';
import Intro from '@/components/Intro';
import QuoteCarousel from '@/components/QuoteCarousel';
import Snapshots from '@/components/Snapshots';
import ReviewCarousel from '@/components/ReviewCarousel';
// import HomePreviews from '@/components/HomePreviews';
import Banner from '@/components/Banner';
import PostList from '@/components/PostList';
import TipList from '@/components/TipList';
import PostBanner from '@/components/PostBanner';
import TipBanner from '@/components/TipBanner';

const query = groq`
*[_type=='post'][0..3] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
const queryTip = groq`
*[_type=='tip'][0..3] {
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
    <main>
      <div id="home" className="relative top-[-80px] " />
      <div>
        <div id="intro" className="relative top-[-80px] " />
        <Intro />
      </div>
      <div>
        <div id="quotes" className="relative top-[-80px] " />
        <QuoteCarousel quotes={quotes} />
      </div>
      <div>
        <div id="snapshot" className="relative top-[-80px] " />
        <Snapshots />
      </div>
      <div>
        <div id="review" className="relative top-[-80px] " />
        <ReviewCarousel reviews={reviews} />
      </div>

      {/* Blog and Resources */}

      <div className="custom-img9 relative">
        <div className="grid grid-cols-1 max-w-3xl lg:max-w-7xl mx-auto text-gray-100">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-black/60 to-black/90 z-[0]" />
          <div className=" ml-2 z-[2]">
            <div id="blog" className="relative top-[-80px] " />

            <PostBanner />
            <PostList posts={posts} />
          </div>
          <div id="resources" className=" mr-2  z-[2]">
            <TipBanner />
            <TipList tips={tips} />
          </div>
        </div>
        <div>
          <div id="banner" className="relative top-[-80px] " />
          <Banner />
        </div>
      </div>
    </main>
  );
}
