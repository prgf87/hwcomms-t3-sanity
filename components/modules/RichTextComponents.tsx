import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-5 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Reference Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="ml-5 py-5 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl py-5 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-5 font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-5 font-bold">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <div className="text-lg py-5 font-semibold">{children}</div>;
    },

    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-[#5EBCAA] pl-5 py-5 my-5">
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <div className="underline decoration-[#5EBCAA] hover:decoration-black text-xl">
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        </div>
      );
    },
  },
};
