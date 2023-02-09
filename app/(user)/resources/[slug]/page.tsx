import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/modules/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every /n seconds

export async function generateStaticParams() {
  const query = groq`*[_type=='tip']
  {
    slug
  }`;

  const slugs: Tip[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Tip({ params: { slug } }: Props) {
  const queryTip = groq`
  *[_type=='tip' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->,
    mainImage,
  }
    `;
  const tip: Tip = await client.fetch(queryTip, { slug });

  return (
    <main className="mt-20">
      <article id="article" className="px-10 pb-28 max-w-7xl mx-auto">
        <section className="space-y-2 border-[#5EBCAA] text-gray-200 font-bold">
          <div className="relative min-h-[10rem] flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(tip.mainImage).url()}
                alt={tip.author.name}
                fill
              />
            </div>
            <section className="p-5 bg-[#5EBCAA] w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                  <h1 className="text-4xl font-extrabold">{tip.title}</h1>
                  <p>
                    {new Date(tip._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    className="rounded-full"
                    src={urlFor(tip.author.image).url()}
                    alt={tip.author.name}
                    height={50}
                    width={50}
                  />
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{tip.author.name}</h3>
                    <div>{/* Author Description */}</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="italic pt-10">{tip.description}</h2>
              </div>
              <div>
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {tip.categories.map((category) => {
                    return (
                      <div
                        key={category._id}
                        className="bg-slate-700 text-white px-5 py-1 rounded-full txt-sm font-semibold mt-4"
                      >
                        {category.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </section>
        <PortableText value={tip.body} components={RichTextComponents} />
      </article>
    </main>
  );
}

export default Tip;
