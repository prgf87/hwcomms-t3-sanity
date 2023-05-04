import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '@/components/preview/PreviewSuspense';
import Intro from '@/components/modules/Intro';
import PreviewQuoteCarousel from '@/components/preview/PreviewQuoteCarousel';
import PreviewLatestNews from '@/components/preview/PreviewLatestNews';
import PreviewReviewCarousel from '@/components/preview/PreviewReviewCarousel';
import QuoteCarousel from '@/components/modules/QuoteCarousel';
import ReviewCarousel from '@/components/modules/ReviewCarousel';
import BannerBio from '@/components/navigation/BannerBio';
import LatestNews from '@/components/modules/LatestNews';

const queryQuote = groq`
*[_type=='quote'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;
const queryNews = groq`
*[_type=='news'][0...2] {
  ...,
  author->,
  categories[]->
} | order(publishedAt asc)
`;
const queryReview = groq`
*[_type=='review'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
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
        <div>
          <h1 className="fixed text-7xl z-40 opacity-10 bottom-0">
            PREVIEW MODE - PREVIEW MODE - PREVIEW MODE PREVIEW MODE - PREVIEW
            MODE - PREVIEW MODE PREVIEW MODE - PREVIEW MODE - PREVIEW MODE
          </h1>
          <div className="flex flex-col">
            <div>
              <PreviewLatestNews news={queryNews} />
            </div>
            <div>
              <PreviewQuoteCarousel query={queryQuote} />
            </div>
            <div>
              <PreviewReviewCarousel query={queryReview} />
            </div>
          </div>
        </div>
      </PreviewSuspense>
    );
  }
  const quotes = await client.fetch(queryQuote);
  const reviews = await client.fetch(queryReview);
  const news = await client.fetch(queryNews);

  return (
    <main>
      <div className="overflow-y-hidden">
        <div>
          <div id="intro" className="relative top-[-80px]" />
          <Intro />
        </div>

        <div>
          <div id="news" className="relative top-[-80px]" />
          <LatestNews news={news} />
        </div>

        <div>
          <div id="quotes" className="relative top-[-75px]" />
          <QuoteCarousel quotes={quotes} />
        </div>

        <div>
          <div id="review" className="relative top-[-80px]" />
          <ReviewCarousel reviews={reviews} />
        </div>

        <div>
          <div id="banner" className="relative bottom-0" />
          <BannerBio />
        </div>
      </div>
    </main>
  );
}
