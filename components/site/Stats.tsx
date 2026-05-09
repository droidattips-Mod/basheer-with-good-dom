import type { StatItem } from "@/types/site";

export default function Stats({ items }: { items: StatItem[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
          <p className="text-2xl font-bold text-[#00A651]">{item.value}</p>
          <p className="text-sm text-white/90">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
