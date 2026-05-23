import { MetadataRoute } from "next";
import { equipmentDetails } from "@/data/equipment-details";

const baseUrl = "https://alnasrcranes.vercel.app/en";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const equipmentPages = equipmentDetails.map((eq) => ({
    url: `${baseUrl}/equipment/${eq.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = categorySlugs.map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...categoryPages,
    ...equipmentPages,
  ];
}
