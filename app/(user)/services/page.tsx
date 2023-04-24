import ServicesList from '@/components/modules/ServicesList';
import Snapshots from '@/components/modules/Snapshots';
import BannerBio from '@/components/navigation/BannerBio';
import BannerOptions from '@/components/navigation/BannerOptions';
import ReviewCarousel from '@/components/modules/ReviewCarousel';
import { client } from '@/lib/sanity.client';
import groq from 'groq';

const queryReview = groq`
*[_type=='review'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)
`;

export const revalidate = 60;

async function Services() {
  const reviews = await client.fetch(queryReview);
  return (
    <section>
      <div>
        <div className="flex justify-center items-center text-center">
          <div id="services" className="relative top-[-70px]" />
          <ServicesList />
        </div>
        <div>
          <div id="bannerbio" className="relative top-[-70px]" />
          <BannerBio />
        </div>
        <div>
          <div id="snapshot" className="relative top-[-70px]" />
          <Snapshots />
        </div>
        <div>
          <div id="snapshot" className="relative top-[-70px]" />
          <ReviewCarousel reviews={reviews} />
        </div>
        <div>
          <div id="banneroptions" className="relative top-[-70px]" />
          <BannerOptions />
        </div>
      </div>
    </section>
  );
}

export default Services;
