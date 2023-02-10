import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Banner from '@/components/modules/Banner';
import BannerBio from '@/components/modules/BannerBio';
import ReviewCarousel from '@/components/modules/ReviewCarousel';
import ServicesList from '@/components/modules/ServicesList';
import Snapshots from '@/components/modules/Snapshots';

type Props = {};

const queryReview = groq`
*[_type=='review'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;

async function Services() {
  const reviews = await client.fetch(queryReview);

  return (
    <section>
      <div className="overflow-y-hidden">
        <div className="flex justify-center items-center text-center">
          <div id="services" className="relative top-[-70px]" />
          <ServicesList />
        </div>
        <div>
          <ReviewCarousel reviews={reviews} />
        </div>
        <div>
          <div id="snapshot" className="relative top-[-70px]" />
          <Snapshots />
        </div>
        <div>
          <div id="bannerbio" className="relative top-[-70px]" />
          <BannerBio />
        </div>
        <div>
          <div id="banner" className="relative top-[-70px]" />
          <Banner />
        </div>
      </div>
    </section>
  );
}

export default Services;
