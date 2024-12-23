import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryName',
      type: 'string',
      title: 'Category Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'categoryName',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
});