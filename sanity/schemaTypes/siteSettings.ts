import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'hero', title: 'Hero Section' },
    { name: 'contact', title: 'Contact & Hours' },
    { name: 'social', title: 'Social Media' },
  ],
  fields: [
    // ── Identity ──────────────────────────────────────────────────────────────
    defineField({
      name: 'siteNameAr',
      title: 'Site Name — Arabic',
      type: 'string',
      group: 'identity',
      initialValue: 'النصر للرافعات',
    }),
    defineField({
      name: 'siteNameEn',
      title: 'Site Name — English',
      type: 'string',
      group: 'identity',
      initialValue: 'Al Nasr Cranes',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'identity',
      options: { hotspot: true },
      description: 'Upload a logo to replace the text logo in the header.',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'identity',
      description: 'Square image shown in browser tabs (recommended: 32×32 or 64×64 px).',
    }),

    // ── Hero ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitleAr',
      title: 'Hero Title — Arabic',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Hero Title — English',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitleAr',
      title: 'Hero Subtitle — Arabic',
      type: 'text',
      group: 'hero',
      rows: 3,
    }),
    defineField({
      name: 'heroSubtitleEn',
      title: 'Hero Subtitle — English',
      type: 'text',
      group: 'hero',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroCtaLabelAr',
      title: 'Hero Button Label — Arabic',
      type: 'string',
      group: 'hero',
      description: 'e.g. تواصل معنا',
    }),
    defineField({
      name: 'heroCtaLabelEn',
      title: 'Hero Button Label — English',
      type: 'string',
      group: 'hero',
      description: 'e.g. Contact Us',
    }),

    // ── Contact & Hours ───────────────────────────────────────────────────────
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Displayed in header and contact section',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'contact',
      description: 'Digits only with country code — e.g. 966501234567',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'ar', title: 'Arabic', type: 'string' }),
        defineField({ name: 'en', title: 'English', type: 'string' }),
      ],
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({ name: 'ar', title: 'Arabic', type: 'string', description: 'e.g. السبت – الخميس: 8 ص – 6 م' }),
        defineField({ name: 'en', title: 'English', type: 'string', description: 'e.g. Sat – Thu: 8 AM – 6 PM' }),
      ],
    }),

    // ── Social Media ──────────────────────────────────────────────────────────
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'X (Twitter) URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'snapchat',
      title: 'Snapchat URL',
      type: 'url',
      group: 'social',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
