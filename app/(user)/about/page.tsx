import Banner from '@/components/modules/Banner';
import Bio from '@/components/modules/Bio';
import Hero from '@/components/modules/Hero';
import Resume from '@/components/modules/Resume';
import Snapshots from '@/components/modules/Snapshots';
import Values from '@/components/modules/Values';

export default async function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <div>
        <div>
          <div id="home" className="fixed top-0" />
          <Hero
            heading="Learn about what drives me"
            message="Scroll down to find out more"
            custombg="custom-img2"
            heroanchor="#bio"
          />
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
          <div>
            <div id="snapshot" className="relative top-[-80px]" />
            <Snapshots />
          </div>
          <div id="resume" className="relative top-[-70px]" />
          <Resume />
        </div>
        <div>
          <div id="banner" className="relative top-[-80px]" />
          <Banner />
        </div>
      </div>
    </main>
  );
}
