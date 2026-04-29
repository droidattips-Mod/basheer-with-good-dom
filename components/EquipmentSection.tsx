import { equipments } from "@/data/siteData";
import EquipmentCard from "./EquipmentCard";

export default function EquipmentSection() {
  const groupedEquipments = equipments.reduce<Record<string, typeof equipments>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section id="equipment" className="py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">جميع المعدات المتاحة</h2>
          <p className="mt-4 text-slate-600">اختر المعدة المناسبة لمشروعك من مجموعتنا المتنوعة</p>
        </div>

        <div className="mt-12 space-y-10">
          {Object.entries(groupedEquipments).map(([category, categoryItems]) => (
            <div key={category}>
              <h3 className="mb-5 text-2xl font-bold text-slate-800">{category}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {categoryItems.map((equipment) => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
