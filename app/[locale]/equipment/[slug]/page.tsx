import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locale";
import { getEquipmentBySlug, getRelatedEquipment } from "@/data/equipment-details";
import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";
import EquipmentDetailPage from "@/components/site/EquipmentDetailPage";

type Props = { params: { locale: string; slug: string } };

export default function EquipmentDetailRoute({ params }: Props) {
  const { locale, slug } = params;
  if (!isLocale(locale)) notFound();

  const equipment = getEquipmentBySlug(slug);
  if (!equipment) notFound();

  const related = getRelatedEquipment(equipment.relatedSlugs);
  const t = translations[locale];

  return (
    <main className="bg-[#F7F8F6]">
      <Header locale={locale} brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />
      <EquipmentDetailPage locale={locale} equipment={equipment} related={related} />
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </main>
  );
}
