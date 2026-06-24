import { defineField, defineType } from 'sanity'

export const shelfItem = defineType({
  name: 'shelfItem',
  title: 'Shelf item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      type: 'string',
      description: 'Author, director, or host',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Book', value: 'book' },
          { title: 'Film', value: 'film' },
          { title: 'Podcast', value: 'podcast' },
        ],
        layout: 'radio',
      },
      initialValue: 'book',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'text',
      rows: 2,
      description: 'Optional one-liner on why it’s here.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers show first. Leave blank to sort newest-first.',
    }),
    defineField({
      name: 'cover',
      title: 'Cover image (override)',
      type: 'image',
      options: { hotspot: true },
      description:
        'Optional. Upload to override the auto-fetched cover. Takes precedence over everything below.',
    }),
    defineField({
      name: 'coverUrl',
      title: 'Cover URL (override)',
      type: 'url',
      description: 'Optional. A direct image URL, used if no image is uploaded.',
    }),
    defineField({
      name: 'searchHint',
      title: 'Search hint (override)',
      type: 'string',
      description:
        'Optional. If the auto cover is wrong, put an exact title or ISBN here to fix the lookup.',
    }),
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'creator', media: 'cover' },
  },
})
