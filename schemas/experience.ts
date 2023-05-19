import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobtitle',
      title: 'JobTitle',
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
      name: 'company',
      title: 'Company',
      type: 'text',
    }),

    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'blockContent',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'jobtitle',
      media: 'companyImage',
      dateStarted: 'dateStarted',
    },
    prepare(selection) {
      const { dateStarted } = selection;
      return { ...selection, subtitle: dateStarted && `by ${dateStarted}` };
    },
  },
});
