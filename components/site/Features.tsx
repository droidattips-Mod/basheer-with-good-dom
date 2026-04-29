import { ShieldCheck, Timer, Wrench } from "lucide-react";
import type { Locale } from "@/types/site";
import { translations } from "@/data/content";

const icons = [Wrench, Timer, ShieldCheck];

export default function Features({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-3">
          {t.features.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <article key={item.title} className="card transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-flex rounded-xl bg-[#006C35]/10 p-3 text-[#006C35]">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
