import Image from "next/image";
import Link from "next/link";
import type { EquipmentItem, Locale } from "@/types/site";
import { WHATSAPP_NUMBER } from "@/data/content";

type Props = {
  item: EquipmentItem;
  locale: Locale;
  categoryLabel: string;
  requestNowLabel: string;
};

export default function EquipmentCard({ item, locale, categoryLabel, requestNowLabel }: Props) {
  const name = locale === "ar" ? item.nameAr : item.nameEn;
  const description = locale === "ar" ? item.descriptionAr : item.descriptionEn;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("أود الاستفسار عن تأجير المعدة: " + name)}`;
  const detailHref = item.slug ? `/${locale}/equipment/${item.slug}` : null;

  return (
    <article className="group relative overflow-hidden rounded-[14px] border border-slate-100 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {detailHref && (
        <Link
          href={detailHref}
          className="absolute inset-0 z-0 rounded-[14px]"
          aria-label={name}
        />
      )}
      <div className="relative h-36 overflow-hidden bg-[#eef2f7] sm:h-44 md:h-48">
        <Image src={item.image} alt={`${name} - النصر`} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
        {item.badge && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2A51A] px-2.5 py-1 text-[10px] font-black text-[#111827] shadow md:text-xs">
            {item.badge}
          </span>
        )}
      </div>
      <div className="bg-white">
        <div className="min-h-[86px] px-3 py-3 text-center md:min-h-[96px] md:px-4">
          <p className="mb-1 text-[11px] font-bold text-[#C9A227] md:text-xs">{categoryLabel}</p>
          <h4 className="line-clamp-2 text-sm font-black leading-6 text-[#111827] md:text-lg md:leading-7">{name}</h4>
          <p className="mt-1 text-xs text-[#6B7280] md:text-sm">{item.spec ?? description}</p>
        </div>
        <div className="relative z-10 border-t border-slate-100 text-[11px] font-bold md:text-sm">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`${requestNowLabel} ${name} عبر واتساب`}
            className="inline-flex w-full min-h-9 items-center justify-center gap-1 bg-[#ECFFF4] px-2 text-[#009E55] transition hover:bg-[#DDF9EA]"
          >
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} className="h-3.5 w-3.5" />
            {requestNowLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
