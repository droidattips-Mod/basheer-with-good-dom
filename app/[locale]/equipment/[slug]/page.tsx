import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locale";
import { getPayloadClient } from "@/lib/payload";
import { translations } from "@/data/content";
import { equipmentFaq } from "@/data/equipment-details";
import type { EquipmentDetailData } from "@/data/equipment-details";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import EquipmentDetailPage from "@/components/site/EquipmentDetailPage";

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function EquipmentDetailRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "equipment",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  });

  if (!docs.length) notFound();
  const doc = docs[0] as any;

  const relatedSlugs: string[] = (doc.relatedSlugs ?? []).map((r: any) => r.slug).filter(Boolean);

  const { docs: relatedDocs } = relatedSlugs.length
    ? await payload.find({
        collection: "equipment",
        where: { slug: { in: relatedSlugs } },
        limit: 10,
        depth: 1,
      })
    : { docs: [] };

  const toDetail = (d: any): EquipmentDetailData => ({
    slug: d.slug,
    categoryId: d.category?.categoryId ?? "",
    categoryNameAr: d.category?.nameAr ?? "",
    categoryNameEn: d.category?.nameEn ?? "",
    nameAr: d.nameAr,
    nameEn: d.nameEn,
    image: d.imageUrl ?? "",
    descriptionAr: d.descriptionAr ?? "",
    descriptionEn: d.descriptionEn ?? "",
    specs: {
      capacity: d.specs?.capacity,
      height: d.specs?.height,
      powerType: d.specs?.powerType,
    },
    availableCities: (d.availableCities ?? []).map((c: any) => c.city),
    pricingDaily: d.pricingDaily ?? 0,
    pricingMonthly: d.pricingMonthly ?? 0,
    relatedSlugs,
  });

  const equipment = toDetail(doc);
  const related = (relatedDocs as any[]).map(toDetail);
  const t = translations[isLocale(locale) ? locale : "ar"];

  return (
    <main className="bg-[#F7F8F6]">
      <Header locale={locale} brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />
      <EquipmentDetailPage locale={locale} equipment={equipment} related={related} />
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </main>
  );
}
