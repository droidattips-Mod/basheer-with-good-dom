import type { EquipmentCategory as EquipmentCategoryType, Locale } from "@/types/site";
import EquipmentCard from "./EquipmentCard";

type Props = {
  category: EquipmentCategoryType;
  locale: Locale;
  requestNowLabel: string;
  viewAllLabel: string;
  viewDetailsLabel: string;
};

export default function EquipmentCategory({ category, locale, requestNowLabel, viewAllLabel, viewDetailsLabel }: Props) {
  const categoryName = locale === "ar" ? category.nameAr : category.nameEn;

  return (
    <section className="space-y-5 md:space-y-7">
      <div className="flex items-center justify-between gap-4">
        <a href="#contact" className="text-sm font-bold text-[#C9A227] transition hover:text-[#8A6A13]">
          {viewAllLabel} ←
        </a>
        <h3 className="text-2xl font-black text-[#111827] md:text-3xl">{categoryName}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {category.items.map((item) => (
          <EquipmentCard
            key={item.id}
            item={item}
            locale={locale}
            categoryLabel={categoryName}
            requestNowLabel={requestNowLabel}
            viewDetailsLabel={viewDetailsLabel}
          />
        ))}
      </div>
    </section>
  );
}
