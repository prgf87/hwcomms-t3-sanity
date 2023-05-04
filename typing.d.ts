import { Url } from 'url';

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Quote extends Base {
  author: Author;
  mainImage: Image;
  slug: Slug;
  title: string;
  quotation: string;
}

interface Review extends Base {
  author: Author;
  mainImage: Image;
  bgImage: Image;
  slug: Slug;
  title: string;
  review: string;
}

interface Directory extends Base {
  title: string;
  slug: Slug;
  description: string;
  mainImage: Image;
  categories: Category[];
  body: Block[];
  linktotrick: string;
}

interface Experience extends Base {
  jobtitle: string;
  slug: Slug;
  company: string;
  dateStarted: date;
  dateEnded: date;
  categories: Category[];
  body: Block[];
}

interface Trick extends Base {
  title: string;
  slug: Slug;
  description: string;
  mainImage: Image;
  categories: Category[];
  linktotrick: string;
}

interface News extends Base {
  title: string;
  slug: Slug;
  description: string;
  mainImage: Image;
  categories: Category[];
  linkToNews: string;
}

interface Toolbox extends Base {
  title: string;
  slug: Slug;
  description: string;
  mainImage: Image;
  categories: Category[];
  body: Block[];
  linktotoolbox: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface BgImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}

interface Button {
  _type: 'string';
  current: string;
}

interface Review {
  _type: 'review';
  current: string;
}
