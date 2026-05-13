import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/site";
import type { EquipmentDetailData } from "@/data/equipment-details";
import { equipmentFaq } from "@/data/equipment-details";
import { WHATSAPP_NUMBER } from "@/data/content";
import FAQAccordion from "./FAQAccordion";

type Props = {
  locale: Locale;
  equipment: EquipmentDetailData;
  related: EquipmentDetailData[];
};

const labels = {
  ar: {
    available: "متاح",
    capacity: "الحمولة",
    height: "الارتفاع",
    power: "نوع الطاقة",
    pricing: "الأسعار",
    daily: "يومي",
    weekly: "أسبوعي",
    monthly: "شهري",
    yearly: "سنوي / عقد",
    sar: "ريال",
    cities: "مناطق الخدمة",
    related: "معدات مشابهة",
    faq: "الأسئلة الشائعة",
    orderOnline: "طلب عبر الموقع",
    talkToUs: "تحدث معنا",
    home: "الرئيسية",
    orderNow: "الطلب الآن",
    specs: "المواصفات التقنية",
    whyUs: "لماذا تستأجر من رافعات النصر؟",
    rentalOptions: "خيارات الإيجار المتاحة",
    rentalContact: "للاستفسار عن الأسعار الأسبوعية والسنوية تواصل معنا مباشرة",
    whyPoints: [
      "أسطول حديث يخضع للصيانة الدورية المعتمدة",
      "مشغلون مدربون ومعتمدون على أعلى معايير السلامة",
      "خدمة عملاء 24/7 طوال أيام الأسبوع",
      "تغطية شاملة لجميع مناطق المملكة العربية السعودية",
      "أسعار تنافسية وشفافة بدون رسوم خفية",
      "استجابة سريعة وتوصيل المعدة لموقعك",
    ],
  },
  en: {
    available: "Available",
    capacity: "Capacity",
    height: "Height",
    power: "Power Type",
    pricing: "Pricing",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    yearly: "Yearly / Contract",
    sar: "SAR",
    cities: "Service Areas",
    related: "Similar Equipment",
    faq: "Frequently Asked Questions",
    orderOnline: "Request via Website",
    talkToUs: "Talk to Us",
    home: "Home",
    orderNow: "Order Now",
    specs: "Technical Specs",
    whyUs: "Why Rent from Al Nasr Cranes?",
    rentalOptions: "Available Rental Options",
    rentalContact: "Contact us directly for weekly and yearly pricing",
    whyPoints: [
      "Modern fleet with certified periodic maintenance",
      "Trained and certified operators meeting top safety standards",
      "24/7 customer service throughout the week",
      "Full coverage across all regions of Saudi Arabia",
      "Competitive and transparent pricing with no hidden fees",
      "Fast response and equipment delivery to your site",
    ],
  },
};

export default function EquipmentDetailPage({ locale, equipment, related }: Props) {
  const isAr = locale === "ar";
  const l = labels[locale];
  const name = isAr ? equipment.nameAr : equipment.nameEn;
  const description = isAr ? equipment.descriptionAr : equipment.descriptionEn;
  const categoryName = isAr ? equipment.categoryNameAr : equipment.categoryNameEn;
  const faq = equipmentFaq[locale];

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    isAr
      ? `أود الاستفسار عن تأجير المعدة: ${name}`
      : `I would like to inquire about renting: ${name}`
  )}`;

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#06281A] pt-28 pb-14 text-white">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link href={`/${locale}`} className="hover:text-[#00A651]">{l.home}</Link>
            <span>/</span>
            <Link href={`/${locale}#equipment`} className="hover:text-[#00A651]">{categoryName}</Link>
            <span>/</span>
            <span className="text-white/80">{name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Text side */}
            <div className={isAr ? "order-1" : "order-2"}>
              <span className="gold-label">{categoryName}</span>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{name}</h1>
                <span className="inline-flex items-center rounded-full bg-[#006C35]/80 px-3 py-1 text-xs font-bold text-white">
                  ● {l.available}
                </span>
              </div>
              <p className="mt-5 leading-8 text-white/80 text-sm md:text-base">{description}</p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
                  <Image src="/whatsapp-icon.svg" alt="" width={18} height={18} />
                  {l.talkToUs}
                </a>
                <a href={`/${locale}#contact`} className="btn-secondary">
                  {l.orderOnline}
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className={`${isAr ? "order-2" : "order-1"} mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-xl lg:max-w-full`}>
              <Image
                src={equipment.image}
                alt={isAr ? `تأجير ${name} - رافعات النصر` : `Rent ${name} - Al Nasr Cranes`}
                width={900}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs + Pricing + Cities ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="section-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Specs card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <h2 className="mb-5 text-lg font-extrabold text-[#111827]">{l.specs}</h2>
            <dl className="space-y-4">
              {equipment.specs.capacity && (
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <dd className="font-bold text-[#111827]">{equipment.specs.capacity}</dd>
                  <dt className="text-sm text-[#6B7280]">{l.capacity}</dt>
                </div>
              )}
              {equipment.specs.height && (
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <dd className="font-bold text-[#111827]">{equipment.specs.height}</dd>
                  <dt className="text-sm text-[#6B7280]">{l.height}</dt>
                </div>
              )}
              {equipment.specs.powerType && (
                <div className="flex items-center justify-between">
                  <dd className="font-bold text-[#111827]">{equipment.specs.powerType}</dd>
                  <dt className="text-sm text-[#6B7280]">{l.power}</dt>
                </div>
              )}
            </dl>
          </div>

          {/* Pricing card */}
          <div className="rounded-2xl bg-[#06281A] p-6 text-white shadow-soft">
            <h2 className="mb-5 text-lg font-extrabold text-[#00A651]">{l.pricing}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-2xl font-extrabold">{equipment.pricingDaily.toLocaleString()}</span>
                  <span className="mr-1 text-sm text-white/70"> {l.sar}</span>
                </div>
                <span className="text-sm text-white/70">{l.daily}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold">{equipment.pricingMonthly.toLocaleString()}</span>
                  <span className="mr-1 text-sm text-white/70"> {l.sar}</span>
                </div>
                <span className="text-sm text-white/70">{l.monthly}</span>
              </div>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#006C35] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#004B26]">
              <Image src="/whatsapp-icon.svg" alt="" width={16} height={16} />
              {l.orderNow}
            </a>
          </div>

          {/* Cities card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft md:col-span-2 lg:col-span-1">
            <h2 className="mb-5 text-lg font-extrabold text-[#111827]">{l.cities}</h2>
            <div className="flex flex-wrap gap-2">
              {equipment.availableCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full border border-[#006C35]/40 bg-[#006C35]/10 px-3 py-1 text-xs font-bold text-[#004B26]"
                >
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Equipment ─────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="section-container">
            <div className="mx-auto mb-10 max-w-4xl rounded-[18px] bg-[#06281A] p-6 text-center text-white shadow-[0_10px_22px_rgba(6,40,26,0.22)] md:p-8">
              <h2 className="text-2xl font-black md:text-3xl">{l.related}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {related.map((rel) => {
                const relName = isAr ? rel.nameAr : rel.nameEn;
                const relWhatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("أود الاستفسار عن تأجير المعدة: " + relName)}`;
                return (
                  <article key={rel.slug} className="group relative overflow-hidden rounded-[14px] border border-slate-100 bg-white shadow-[0_8px_22px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <Link href={`/${locale}/equipment/${rel.slug}`} className="absolute inset-0 z-0 rounded-[14px]" aria-label={relName} />
                    <div className="relative h-36 overflow-hidden bg-[#eef2f7] sm:h-44 md:h-48">
                      <Image
                        src={rel.image}
                        alt={isAr ? `تأجير ${relName} - رافعات النصر` : `Rent ${relName} - Al Nasr Cranes`}
                        fill
                        className="object-contain transition duration-300 group-hover:scale-105"
                        sizes="(max-width:768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="bg-white">
                      <div className="min-h-[86px] px-3 py-3 text-center md:min-h-[96px] md:px-4">
                        <p className="mb-1 text-[11px] font-bold text-[#006C35] md:text-xs">{isAr ? rel.categoryNameAr : rel.categoryNameEn}</p>
                        <h4 className="line-clamp-2 text-sm font-black leading-6 text-[#111827] md:text-base md:leading-7">{relName}</h4>
                        <p className="mt-1 text-xs text-[#6B7280]">{rel.specs.height ?? rel.specs.capacity}</p>
                      </div>
                      <div className="relative z-10 border-t border-slate-100 text-[11px] font-bold md:text-sm">
                        <a href={relWhatsapp} target="_blank" rel="noreferrer" aria-label={relName} className="inline-flex w-full min-h-9 items-center justify-center gap-1 bg-[#ECFFF4] px-2 text-[#009E55] transition hover:bg-[#DDF9EA]">
                          <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} className="h-3.5 w-3.5" />
                          {isAr ? "الطلب الآن" : "Order Now"}
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Us ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#06281A] py-12 md:py-16 text-white">
        <div className="section-container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#00A651] md:text-3xl">
            {isAr ? `لماذا تستأجر ${name} من رافعات النصر؟` : `Why Rent ${name} from Al Nasr Cranes?`}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {l.whyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3">
                <span className="mt-0.5 text-[#00A651] text-lg">✓</span>
                <span className="text-sm leading-6 text-white/85">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Image src="/whatsapp-icon.svg" alt="" width={18} height={18} />
              {l.talkToUs}
            </a>
            <a href={`/${locale}#contact`} className="btn-secondary">{l.orderOnline}</a>
          </div>
        </div>
      </section>

      {/* ── Rental Options ───────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-[#111827] md:text-3xl">
            {l.rentalOptions}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { label: l.daily, price: equipment.pricingDaily },
              { label: l.weekly, price: equipment.pricingDaily > 0 ? Math.round(equipment.pricingDaily * 5.5) : 0 },
              { label: l.monthly, price: equipment.pricingMonthly },
              { label: l.yearly, price: 0 },
            ] as { label: string; price: number }[]).map(({ label, price }) => (
              <div key={label} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-soft">
                <p className="mb-2 text-sm font-bold text-[#6B7280]">{label}</p>
                {price > 0 ? (
                  <p className="text-2xl font-extrabold text-[#06281A]">
                    {price.toLocaleString()}
                    <span className="mr-1 text-sm font-normal text-[#6B7280]"> {l.sar}</span>
                  </p>
                ) : (
                  <p className="text-sm font-bold text-[#00A651]">
                    {isAr ? "تواصل معنا" : "Contact Us"}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-[#6B7280]">{l.rentalContact}</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-3xl">
          <div className="mb-8 text-center">
            <span className="gold-label">{isAr ? "لديك استفسار؟" : "Questions?"}</span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#111827] md:text-3xl">{l.faq}</h2>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>
    </div>
  );
}
