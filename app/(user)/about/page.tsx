import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import Bio from '@/components/modules/Bio';
import Resume from '@/components/modules/Resume';
import Values from '@/components/modules/Values';
import BannerOptions from '@/components/navigation/BannerOptions';

const queryExperience = groq`
*[_type=='experience'] {
  ...,
} | order(dateStarted desc)
`;

export const revalidate = 60;

export default async function AboutPage() {
  const experiences = await client.fetch(queryExperience);
  return (
    <main>
      <div className="overflow-x-hidden">
        <div>
          <div id="about" className="fixed top-0" />
        </div>
        <div>
          <div id="bio" className="relative top-[-80px]" />
          <Bio />
        </div>
        <div>
          <div id="values" className="relative top-[-70px]" />
          <Values />
        </div>
        <div>
          <div id="resume" className="relative top-[-70px]" />
          <Resume experiences={experiences} />
        </div>
        <div>
          <div id="banner" className="relative top-[-80px]" />
          <BannerOptions />
        </div>
      </div>
    </main>
  );
}
