import { defineField, defineType } from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location / Caption',
      type: 'string',
      description: 'Shown on hover, e.g. "Tokyo, JP"',
    }),
    defineField({
      name: 'wide',
      title: 'Wide (spans two columns)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'location', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Untitled photo', media }
    },
  },
})
