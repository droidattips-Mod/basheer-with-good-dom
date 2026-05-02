import Image from "next/image";
import type { Locale, ServiceItem } from "@/types/site";
import { WHATSAPP_NUMBER } from "@/data/content";

type Props = {
  service: ServiceItem;
  locale: Locale;
  ctaLabel: string;
};

export default function ServiceCard({ service, locale, ctaLabel }: Props) {
  const title = locale === "ar" ? service.titleAr : service.titleEn;
  const description = locale === "ar" ? service.descriptionAr : service.descriptionEn;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("أود الاستفسار عن تأجير المعدة: " + title)}`;

  return (
    <article className="overflow-hidden rounded-[14px] border border-slate-100 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-36 bg-[#eef2f7] sm:h-44 md:h-48">
        <Image src={service.image} alt={`${title} - النصر`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
      </div>
      <div className="px-3 py-3 md:px-4">
        <p className="mb-1 text-[11px] font-bold text-[#C9A227] md:text-xs">{locale === "ar" ? "خدماتنا" : "Services"}</p>
        <h3 className="line-clamp-2 text-sm font-black leading-6 text-[#111827] md:text-lg md:leading-7">{title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#6B7280] md:text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-2 border-t border-slate-100 text-[11px] font-bold md:text-sm">
        <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label={`${locale === "ar" ? "الطلب الآن" : "Order Now"} ${title} عبر واتساب`} className="inline-flex min-h-9 items-center justify-center gap-1 bg-[#ECFFF4] px-2 text-[#009E55] transition hover:bg-[#DDF9EA]">
          <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} className="h-3.5 w-3.5" />
          {locale === "ar" ? "الطلب الآن" : "Order Now"}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${ctaLabel} ${title} عبر واتساب`}
          className="inline-flex min-h-9 items-center justify-center gap-1 bg-[#FFFBEA] px-2 text-[#B57B00] transition hover:bg-[#FFF5C7]"
        >
          <span>{ctaLabel}</span>
          <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
