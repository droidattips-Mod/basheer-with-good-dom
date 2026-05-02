import { equipmentCategories, translations } from "@/data/content";
import type { Locale } from "@/types/site";
import EquipmentCategory from "./EquipmentCategory";

export default function EquipmentSection({ locale }: { locale: Locale }) {
  const t = translations[locale].equipment;

  return (
    <section id="equipment" className="bg-white py-12 md:py-20">
      <div className="section-container">
        <div className="mx-auto mb-14 max-w-4xl rounded-[18px] bg-[#111827] p-7 text-center text-white shadow-[0_10px_22px_rgba(15,23,42,0.22)] md:p-10">
          <span className="mb-3 block text-sm font-black text-[#C9A227]">{t.label}</span>
          <h2 className="text-3xl font-black md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-lg">{t.subtitle}</p>
        </div>
        <div className="mx-auto max-w-5xl space-y-16 md:space-y-20">
          {equipmentCategories.map((category) => (
            <EquipmentCategory
              key={category.id}
              category={category}
              locale={locale}
              requestNowLabel={t.requestNow}
              viewAllLabel={t.viewAll}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
