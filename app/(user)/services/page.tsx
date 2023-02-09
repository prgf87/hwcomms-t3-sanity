import Banner from '@/components/modules/Banner';
import ServicesList from '@/components/modules/ServicesList';
import Snapshots from '@/components/modules/Snapshots';

function Services() {
  return (
    <section>
      <div className="flex justify-center items-center text-center">
        <div id="services" className="relative top-[-70px]" />
        <ServicesList />
      </div>
      <div>
        <div id="snapshot" className="relative top-[-70px]" />
        <Snapshots />
      </div>
      <div>
        <div id="banner" className="relative top-[-70px]" />
        <Banner />
      </div>
    </section>
  );
}

export default Services;
