import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Intro from '@/components/modules/Intro';
import QuoteCarousel from '@/components/modules/QuoteCarousel';
import ReviewCarousel from '@/components/modules/ReviewCarousel';
import BannerBio from '@/components/navigation/BannerBio';
import LatestNews from '@/components/modules/LatestNews';
import Snapshots from '@/components/modules/Snapshots';

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
          <div id="snapshots" className="relative top-[-80px]" />
          <Snapshots />
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
