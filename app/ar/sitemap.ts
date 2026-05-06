import { MetadataRoute } from 'next'

const baseUrl = 'https://alnasrcranes.vercel.app/ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const equipmentSlugs = [
    'forklift-komatsu-5ton',
    'forklift-toyota-3ton-diesel',
    'forklift-mitsubishi-5ton',
    'forklift-linde-5ton-electric',
    'scissor-lift-gtjz10-10m',
    'scissor-lift-jlg-10m',
    'scissor-lift-zoomlion-7m',
    'scissor-lift-genie-6m',
    'scissor-lift-jlg-18m-diesel',
    'scissor-lift-jlg-8m',
  ]

  const equipmentPages = equipmentSlugs.map((slug) => ({
    url: `${baseUrl}/equipment/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...equipmentPages,
  ]
}