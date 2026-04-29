import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { EquipmentItem, Locale } from "@/types/site";

type Props = {
  item: EquipmentItem;
  locale: Locale;
  categoryLabel: string;
  availabilityLabel: string;
  requestNowLabel: string;
};

export default function EquipmentCard({ item, locale, categoryLabel, availabilityLabel, requestNowLabel }: Props) {
  const name = locale === "ar" ? item.nameAr : item.nameEn;
  const description = locale === "ar" ? item.descriptionAr : item.descriptionEn;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#006C35]/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image src={item.image} alt={name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#C9A227]/15 px-3 py-1 text-xs font-semibold text-[#8A6A13]">{categoryLabel}</span>
          <span className="rounded-full bg-[#006C35]/15 px-3 py-1 text-xs font-semibold text-[#006C35]">{availabilityLabel}</span>
        </div>
        <h4 className="text-lg font-bold text-[#111827]">{name}</h4>
        <p className="text-sm leading-7 text-[#6B7280]">{description}</p>
        <div className="flex gap-3">
          <a href="#contact" className="btn-primary flex-1">
            {requestNowLabel}
          </a>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#006C35]/30 text-[#006C35] transition hover:bg-[#006C35]/10"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
