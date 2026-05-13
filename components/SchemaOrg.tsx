import type { EquipmentDetailData } from "@/data/equipment-details";
import type { Locale } from "@/types/site";

const BASE_URL = "https://alnasrcranes.vercel.app";

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": BASE_URL,
          name: "رافعات النصر",
          alternateName: "Al-Nasr Cranes",
          description: "شركة سعودية متخصصة في تأجير الرافعات والمعدات الثقيلة في جميع مناطق المملكة",
          url: BASE_URL,
          logo: `${BASE_URL}/logo.png`,
          image: `${BASE_URL}/logo.png`,
          telephone: ["+966558204317", "+966505893596"],
          email: "alnasrcranes@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "المملكة العربية السعودية",
          },
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
          openingHours: "Sa-Th 08:00-20:00",
          priceRange: "$$",
          sameAs: [],
        }),
      }}
    />
  );
}

export function EquipmentSchema({
  equipment,
  locale,
}: {
  equipment: EquipmentDetailData;
  locale: Locale;
}) {
  const isAr = locale === "ar";
  const name = isAr ? equipment.nameAr : equipment.nameEn;
  const description = isAr ? equipment.descriptionAr : equipment.descriptionEn;
  const brand = equipment.nameEn.split(" ")[0];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name,
          image: `${BASE_URL}${equipment.image}`,
          description,
          brand: { "@type": "Brand", name: brand },
          category: isAr ? equipment.categoryNameAr : equipment.categoryNameEn,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "SAR",
            ...(equipment.pricingDaily > 0 && { price: equipment.pricingDaily }),
            businessFunction: "https://schema.org/LeaseOut",
            seller: { "@type": "Organization", name: "رافعات النصر" },
          },
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}
