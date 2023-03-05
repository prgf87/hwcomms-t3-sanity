import Banner from '@/components/navigation/Banner';
import ServicesList from '@/components/modules/ServicesList';
import Snapshots from '@/components/modules/Snapshots';
import BannerBio from '@/components/navigation/BannerBio';
import BannerOptions from '@/components/navigation/BannerOptions';

async function Services() {
  return (
    <section>
      <div className="overflow-x-hidden">
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
          <div id="banneroptions" className="relative top-[-70px]" />
          <BannerOptions />
        </div>

        {/* <div>
          <div id="banner" className="relative top-[-70px]" />
          <Banner />
        </div> */}
      </div>
    </section>
  );
}

export default Services;
