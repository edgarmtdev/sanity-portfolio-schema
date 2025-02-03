import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: "featuredDescription",
      type: "text",
      title: "Featured Description",
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
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
      name: 'mainStack',
      type: 'array',
      title: 'Main Stack',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }],
        },
      ],
    }),
  ],
});