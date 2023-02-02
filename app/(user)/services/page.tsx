import ServicesList from '@/components/ServicesList';

function Services() {
  return (
    <div className="flex justify-center items-center text-center">
      <div>
        <h1 className="text-5xl font-bold py-4">Services from Hailey</h1>
        <p>How can I help you communicate better?</p>
        <ServicesList />
      </div>
    </div>
  );
}

export default Services;
