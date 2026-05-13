import { MetadataRoute } from "next";
import { equipmentDetails } from "@/data/equipment-details";

const baseUrl = "https://alnasrcranes.vercel.app";
const lastModified = new Date();

const categorySlugs = [
  "forklifts",
  "cranes",
  "scissor-lifts",
  "boom-trucks",
  "bobcats",
  "excavators",
  "loaders",
  "telehandlers",
];

const citySlugs = ["riyadh", "jeddah", "dammam", "mecca", "medina"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/en`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.flatMap((cat) => [
    { url: `${baseUrl}/ar/category/${cat}`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/en/category/${cat}`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ]);

  const locationPages: MetadataRoute.Sitemap = citySlugs.map((city) => ({
    url: `${baseUrl}/ar/locations/${city}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const equipmentPages: MetadataRoute.Sitemap = equipmentDetails.flatMap((eq) => [
    { url: `${baseUrl}/ar/equipment/${eq.slug}`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/en/equipment/${eq.slug}`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]);

  return [...staticPages, ...categoryPages, ...locationPages, ...equipmentPages];
}
