import type { EquipmentCategory as EquipmentCategoryType, Locale } from "@/types/site";
import EquipmentCard from "./EquipmentCard";

type Props = {
  category: EquipmentCategoryType;
  locale: Locale;
  availabilityLabel: string;
  requestNowLabel: string;
};

export default function EquipmentCategory({ category, locale, availabilityLabel, requestNowLabel }: Props) {
  const categoryName = locale === "ar" ? category.nameAr : category.nameEn;

  return (
    <section className="space-y-5">
      <h3 className="text-2xl font-bold text-[#004B26]">{categoryName}</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {category.items.map((item) => (
          <EquipmentCard
            key={item.id}
            item={item}
            locale={locale}
            categoryLabel={categoryName}
            availabilityLabel={availabilityLabel}
            requestNowLabel={requestNowLabel}
          />
        ))}
      </div>
    </section>
  );
}
