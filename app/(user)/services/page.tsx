import ServicesList from '@/components/modules/ServicesList';

export const revalidate = 60;

async function Services() {
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
