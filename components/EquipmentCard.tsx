import Image from "next/image";
import { Phone } from "lucide-react";
import type { Equipment } from "@/data/siteData";
import { WHATSAPP_NUMBER } from "@/data/content";

export default function EquipmentCard({ equipment }: { equipment: Equipment }) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("أود الاستفسار عن تأجير المعدة: " + equipment.name)}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52">
        <Image src={equipment.image} alt={`${equipment.name} - النصر`} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{equipment.category}</span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">متاح</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">{equipment.name}</h3>
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary flex-1 text-center">
            الطلب الآن
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:border-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={`الطلب الآن ${equipment.name} عبر واتساب`}
          >
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={22} height={22} />
          </a>
          <a
            href="tel:0558204317"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-amber-500 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="الاتصال المباشر"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
