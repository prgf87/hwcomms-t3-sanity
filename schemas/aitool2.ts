import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aitool2',
  title: 'AI Tools (Paid)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      description: 'Enter a description for this AI Tool',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'linktoaitool',
      title: 'Link to the AI Tool',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'mainImage',
      createdAt: 'createdAt',
    },
    prepare(selection) {
      const { createdAt } = selection;
      return { ...selection, subtitle: createdAt && `by ${createdAt}` };
    },
  },
});
