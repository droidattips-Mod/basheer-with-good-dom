import { defineField, defineType } from 'sanity'

export const equipmentType = defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info', default: true },
    { name: 'specs', title: 'Specs & Pricing' },
    { name: 'content', title: 'Descriptions' },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    // ── Basic ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'nameAr',
      title: 'Name — Arabic',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameEn',
      title: 'Name — English',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: { source: 'nameEn', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'basic',
      to: [{ type: 'equipmentCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'basic',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image Path (existing)',
      type: 'string',
      group: 'basic',
      description: 'Used automatically for existing equipment images (e.g. /images/equipment/forklift-komatsu-5ton.png). Upload an image above to override.',
      readOnly: true,
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      group: 'basic',
      description: 'Short label on the card — e.g. "Ton 5", "kg 320", "Diesel"',
    }),
    defineField({
      name: 'spec',
      title: 'Spec Label',
      type: 'string',
      group: 'basic',
      description: 'Short spec shown on card — e.g. "4.7m", "10m", "Diesel"',
    }),

    // ── Specs & Pricing ───────────────────────────────────────────────────────
    defineField({
      name: 'specs',
      title: 'Technical Specifications',
      type: 'object',
      group: 'specs',
      fields: [
        defineField({
          name: 'capacity',
          title: 'Capacity (طاقة الرفع)',
          type: 'string',
          description: 'e.g. 5 طن / 5 Ton',
        }),
        defineField({
          name: 'height',
          title: 'Height / Reach (الارتفاع)',
          type: 'string',
          description: 'e.g. 4.7 متر / 4.7m',
        }),
        defineField({
          name: 'powerType',
          title: 'Power Type (نوع الطاقة)',
          type: 'string',
          options: {
            list: [
              { title: 'ديزل / Diesel', value: 'ديزل' },
              { title: 'كهرباء / Electric', value: 'كهرباء' },
              { title: 'بنزين / Petrol', value: 'بنزين' },
              { title: 'هيدروليك / Hydraulic', value: 'هيدروليك' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'pricingDaily',
      title: 'Daily Price (SAR)',
      type: 'number',
      group: 'specs',
      initialValue: 0,
    }),
    defineField({
      name: 'pricingMonthly',
      title: 'Monthly Price (SAR)',
      type: 'number',
      group: 'specs',
      initialValue: 0,
    }),
    defineField({
      name: 'availableCities',
      title: 'Available Cities',
      type: 'array',
      group: 'specs',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'الرياض', value: 'الرياض' },
          { title: 'جدة', value: 'جدة' },
          { title: 'الدمام', value: 'الدمام' },
          { title: 'الجبيل', value: 'الجبيل' },
          { title: 'الخبر', value: 'الخبر' },
          { title: 'مكة المكرمة', value: 'مكة المكرمة' },
          { title: 'المدينة المنورة', value: 'المدينة المنورة' },
          { title: 'أبها', value: 'أبها' },
          { title: 'تبوك', value: 'تبوك' },
        ],
      },
    }),

    // ── Descriptions ──────────────────────────────────────────────────────────
    defineField({
      name: 'descriptionAr',
      title: 'Description — Arabic',
      type: 'text',
      group: 'content',
      rows: 4,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description — English',
      type: 'text',
      group: 'content',
      rows: 4,
    }),

    // ── Meta ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'relatedSlugs',
      title: 'Related Equipment Slugs',
      type: 'array',
      group: 'meta',
      of: [{ type: 'string' }],
      description: 'Slugs of related equipment shown on the detail page',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'meta',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name (EN)', name: 'nameEnAsc', by: [{ field: 'nameEn', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'nameEn',
      subtitle: 'category.nameEn',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ?? 'No category', media }
    },
  },
})
