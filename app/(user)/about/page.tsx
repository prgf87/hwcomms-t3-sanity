import Banner from '@/components/Banner';
import Bio from '@/components/Bio';
import Values from '@/components/Values';

export default async function AboutPage() {
  return (
    <main>
      <Bio />
      <Values />
      <Banner />
    </main>
  );
}
