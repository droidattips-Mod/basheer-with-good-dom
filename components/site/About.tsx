import { CheckCircle2 } from "lucide-react";
import { translations } from "@/data/content";
import type { Locale } from "@/types/site";

export default function About({ locale }: { locale: Locale }) {
  const t = translations[locale].about;

  return (
    <section id="about" className="py-20">
      <div className="section-container grid gap-8 rounded-3xl bg-[#F0F4EF] p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <span className="gold-label">{t.label}</span>
          <h2 className="text-3xl font-extrabold text-[#004B26] md:text-4xl">{t.title}</h2>
          <p className="mt-5 leading-8 text-[#374151]">{t.text}</p>
        </div>
        <ul className="space-y-4 self-center">
          {t.points.map((point) => (
            <li key={point} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-[#111827] shadow-soft">
              <CheckCircle2 className="text-[#006C35]" size={20} />
              <span className="font-semibold">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
