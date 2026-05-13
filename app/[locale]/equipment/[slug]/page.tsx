import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/lib/locale";
import {
  getEquipmentBySlug,
  getRelatedEquipment,
  equipmentDetails,
} from "@/data/equipment-details";
import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import EquipmentDetailPage from "@/components/site/EquipmentDetailPage";
import { EquipmentSchema, BreadcrumbSchema } from "@/components/SchemaOrg";

const baseUrl = "https://alnasrcranes.vercel.app";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    equipmentDetails.map((eq) => ({ locale, slug: eq.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const equipment = getEquipmentBySlug(slug);
  if (!equipment) return {};

  const isAr = locale === "ar";
  const name = isAr ? equipment.nameAr : equipment.nameEn;
  const category = isAr ? equipment.categoryNameAr : equipment.categoryNameEn;
  const canonicalUrl = `${baseUrl}/${locale}/equipment/${slug}`;
  const imageUrl = `${baseUrl}${equipment.image}`;

  const capacityNote = equipment.specs.capacity
    ? isAr ? ` بحمولة ${equipment.specs.capacity}` : ` with ${equipment.specs.capacity} capacity`
    : "";
  const heightNote = equipment.specs.height
    ? isAr ? ` وارتفاع ${equipment.specs.height}` : ` and ${equipment.specs.height} height`
    : "";

  const title = isAr
    ? `تأجير ${name} | رافعات النصر`
    : `Rent ${name} | Al Nasr Cranes`;

  const description = isAr
    ? `استأجر ${name}${capacityNote}${heightNote} من رافعات النصر. أسعار تنافسية، معدات حديثة، خدمة في جميع مناطق المملكة. اتصل الآن: 0558204317`
    : `Rent ${name}${capacityNote}${heightNote} from Al Nasr Cranes. Competitive prices, modern equipment, service across Saudi Arabia. Call: 0558204317`;

  return {
    title,
    description,
    keywords: isAr
      ? `تأجير ${name}, ${category}, إيجار معدات, رافعات النصر, السعودية`
      : `rent ${name}, ${category}, equipment rental, Al Nasr Cranes, Saudi Arabia`,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `${baseUrl}/ar/equipment/${slug}`,
        en: `${baseUrl}/en/equipment/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: isAr ? "رافعات النصر" : "Al Nasr Cranes",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: imageUrl, width: 900, height: 1200, alt: name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function EquipmentDetailRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const equipment = getEquipmentBySlug(slug);
  if (!equipment) notFound();

  const related = getRelatedEquipment(equipment.relatedSlugs);
  const t = translations[locale];
  const isAr = locale === "ar";
  const name = isAr ? equipment.nameAr : equipment.nameEn;
  const categoryName = isAr ? equipment.categoryNameAr : equipment.categoryNameEn;
  const homeUrl = locale === "ar" ? baseUrl : `${baseUrl}/en`;
  const categorySlug =
    equipment.categoryId === "scissor" ? "scissor-lifts" : equipment.categoryId;

  const breadcrumbItems = [
    { name: isAr ? "الرئيسية" : "Home", url: homeUrl },
    { name: categoryName, url: `${baseUrl}/${locale}/category/${categorySlug}` },
    { name, url: `${baseUrl}/${locale}/equipment/${slug}` },
  ];

  return (
    <main className="bg-[#F7F8F6]">
      <EquipmentSchema equipment={equipment} locale={locale} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header
        locale={locale}
        brandName={t.brandName}
        links={t.nav}
        languageLabel={t.languageSwitchLabel}
      />
      <EquipmentDetailPage locale={locale} equipment={equipment} related={related} />
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </main>
  );
}
