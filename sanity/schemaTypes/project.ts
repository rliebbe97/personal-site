import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2024',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. Shown at the top of the project page.',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Optional. Link to the live site/app, shown as a button.',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
      description: 'Optional. Link to the GitHub repo, shown as a button.',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External link (override)',
      type: 'url',
      description:
        'Optional. If set, the project card links straight here instead of opening its own page on the site.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Optional. The write-up shown on the project page.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'coverImage' },
  },
})
