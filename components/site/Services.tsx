import { services, translations } from "@/data/content";
import type { Locale } from "@/types/site";
import ServiceCard from "./ServiceCard";

export default function Services({ locale }: { locale: Locale }) {
  const t = translations[locale].services;

  return (
    <section id="services" className="bg-white py-20">
      <div className="section-container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="gold-label">{t.label}</span>
          <h2 className="text-3xl font-extrabold text-[#111827] md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-[#6B7280]">{t.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} ctaLabel={t.cta} />
          ))}
        </div>
      </div>
    </section>
  );
}
