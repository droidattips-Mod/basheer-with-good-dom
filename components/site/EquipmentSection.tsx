import { equipmentCategories, translations } from "@/data/content";
import type { Locale } from "@/types/site";
import EquipmentCategory from "./EquipmentCategory";

export default function EquipmentSection({ locale }: { locale: Locale }) {
  const t = translations[locale].equipment;

  return (
    <section id="equipment" className="py-20">
      <div className="section-container">
        <div className="mx-auto mb-12 max-w-4xl rounded-3xl bg-[#004B26] p-8 text-center text-white">
          <span className="gold-label">{t.label}</span>
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-white/90">{t.subtitle}</p>
        </div>
        <div className="space-y-10">
          {equipmentCategories.map((category) => (
            <EquipmentCategory
              key={category.id}
              category={category}
              locale={locale}
              availabilityLabel={t.availability}
              requestNowLabel={t.requestNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
