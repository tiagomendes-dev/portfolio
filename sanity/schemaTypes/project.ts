import {defineField, defineType} from 'sanity'

export const projectsType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
        },
      ],
    }),
    defineField({
      name: 'github',
      title: 'Github Link',
      type: 'url',
    }),
    defineField({
      name: 'livePreview',
      title: 'Live Preview Link',
      type: 'url',
    }),
    defineField({
      name: 'slug',
      title: 'Slug of your project',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
