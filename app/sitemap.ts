import { MetadataRoute } from "next";

const baseUrl = "https://alnasrcranes.vercel.app";

const equipmentSlugs = [
  "forklift-komatsu-5ton",
  "forklift-toyota-3ton-diesel",
  "forklift-mitsubishi-5ton",
  "forklift-linde-5ton-electric",
  "scissor-lift-gtjz10-10m",
  "scissor-lift-jlg-10m",
  "scissor-lift-zoomlion-7m",
  "scissor-lift-genie-6m",
  "scissor-lift-jlg-18m-diesel",
  "scissor-lift-jlg-8m",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const arEquipment = equipmentSlugs.map((slug) => ({
    url: `${baseUrl}/ar/equipment/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const enEquipment = equipmentSlugs.map((slug) => ({
    url: `${baseUrl}/en/equipment/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...arEquipment,
    ...enEquipment,
  ];
}
