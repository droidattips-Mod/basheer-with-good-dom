import { stats } from "@/data/siteData";

export default function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
          <p className="text-2xl font-bold text-amber-400">{item.value}</p>
          <p className="mt-1 text-sm text-slate-100">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
