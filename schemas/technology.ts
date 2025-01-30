import { defineField, defineType } from "sanity";

export const technologyType = defineType({
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    defineField({
      name: 'technologyName',
      type: 'string',
      title: 'Technology Name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'technologyName',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
});