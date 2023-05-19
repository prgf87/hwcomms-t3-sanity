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
      </div>
    </section>
  );
}

export default Services;
