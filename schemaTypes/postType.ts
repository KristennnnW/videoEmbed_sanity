// ./schemaTypes/postType.ts
import {defineType, defineField} from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    }),
  ]
})
