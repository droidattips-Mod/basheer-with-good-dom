import { defineField, defineType } from 'sanity'

export const equipmentCategoryType = defineType({
  name: 'equipmentCategory',
  title: 'Equipment Category',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'slug',
      description: 'Unique key used in code (e.g. forklifts, cranes)',
      options: { source: 'nameEn', maxLength: 60 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameAr',
      title: 'Name (Arabic)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'Name (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'nameEn', subtitle: 'categoryId.current' },
  },
})
