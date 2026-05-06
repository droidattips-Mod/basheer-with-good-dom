import { MetadataRoute } from 'next'

const baseUrl = 'https://alnasrcranes.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const equipmentSlugs = [
    // الرافعات الشوكية
    'forklift-komatsu-5ton',
    'forklift-toyota-3ton-diesel',
    'forklift-mitsubishi-5ton',
    'forklift-linde-5ton-electric',
    // الرافعات المقصية
    'scissor-lift-gtjz10-10m',
    'scissor-lift-jlg-10m',
    'scissor-lift-zoomlion-7m',
    'scissor-lift-genie-6m',
    'scissor-lift-jlg-18m-diesel',
    'scissor-lift-jlg-8m',
  ]

  const equipmentPages = equipmentSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/ar/equipment/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/equipment/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ])

  return [
    // الصفحات الرئيسية
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // صفحات المعدات
    ...equipmentPages,
  ]
}