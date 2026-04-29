import Image from "next/image";
import { services } from "@/data/siteData";

export default function Services() {
  return (
    <section id="services" className="bg-slate-100 py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">بعض من خدماتنا</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width:1024px) 50vw, 33vw" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-semibold text-amber-600 transition hover:text-amber-700">
                  اطلب الخدمة
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
