import Banner from '@/components/Banner';
import Bio from '@/components/Bio';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Values from '@/components/Values';

export default async function AboutPage() {
  return (
    <main>
      <div>
        <div>
          <div id="home" className="fixed top-0" />
          <Hero
            heading="About Hailey"
            message="Learn about what drives me"
            custombg="custom-img2"
            heroanchor="#bio"
          />
        </div>
        <div>
          <div id="bio" className="relative top-[-80px]" />
          <Bio />
        </div>
        <div>
          <div id="values" className="relative top-[-80px]" />
          <Values />
        </div>
        <div>
          <div id="resume" className="relative top-[-80px]" />
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
