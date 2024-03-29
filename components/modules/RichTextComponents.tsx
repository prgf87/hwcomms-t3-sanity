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
      return <ul className="ml-5 py-2 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-7xl py-2 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-5xl py-2 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-2 font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-xl py-2 font-bold">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <div className="text-lg py-2 font-semibold">{children}</div>;
    },
    h6: ({ children }: any) => {
      return <div className="text-sm py-2">{children}</div>;
    },
    normal: ({ children }: any) => {
      return <div className="py-2">{children}</div>;
    },

    blockquote: ({ children }: any) => {
      return <blockquote className="border-l-[#5EBCAA]">{children}</blockquote>;
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="hover:text-gray-500 underline"
        >
          {children}
        </Link>
      );
    },
  },
};
