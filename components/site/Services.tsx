import { services, translations } from "@/data/content";
import type { Locale } from "@/types/site";
import ServiceCard from "./ServiceCard";

export default function Services({ locale }: { locale: Locale }) {
  const t = translations[locale].services;

  return (
    <section id="services" className="bg-white py-12 md:py-20">
      <div className="section-container">
        <div className="mx-auto mb-12 max-w-4xl rounded-[18px] bg-[#111827] p-7 text-center text-white shadow-[0_10px_22px_rgba(15,23,42,0.22)] md:p-10">
          <span className="mb-3 block text-sm font-black text-[#C9A227]">{t.label}</span>
          <h2 className="text-3xl font-black md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-lg">{t.subtitle}</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} ctaLabel={t.cta} />
          ))}
        </div>
      </div>
    </section>
  );
}
