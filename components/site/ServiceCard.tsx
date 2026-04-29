import Image from "next/image";
import type { Locale, ServiceItem } from "@/types/site";

type Props = {
  service: ServiceItem;
  locale: Locale;
  ctaLabel: string;
};

export default function ServiceCard({ service, locale, ctaLabel }: Props) {
  const title = locale === "ar" ? service.titleAr : service.titleEn;
  const description = locale === "ar" ? service.descriptionAr : service.descriptionEn;

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48">
        <Image src={service.image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
        <p className="text-sm leading-7 text-[#6B7280]">{description}</p>
        <a href="#contact" className="inline-flex text-sm font-bold text-[#006C35] hover:text-[#004B26]">
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
