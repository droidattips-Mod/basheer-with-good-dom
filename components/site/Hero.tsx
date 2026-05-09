import Image from "next/image";
import type { Locale } from "@/types/site";
import { translations, WHATSAPP_NUMBER } from "@/data/content";
import Stats from "./Stats";

export default function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center pt-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,40,26,.78), rgba(6,40,26,.90)), url('/images/hero-bg.jpg')"
      }}
    >
      <div className="section-container flex min-h-[calc(100vh-7rem)] items-center">
        <div className={`max-w-3xl text-white ${locale === "ar" ? "text-right" : "text-left"}`}>
          <span className="gold-label">{locale === "ar" ? "حلول مشاريع متكاملة" : "Integrated Project Solutions"}</span>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{t.hero.title}</h1>
          <p className="mt-3 text-2xl font-bold text-[#00A651] md:text-3xl">{t.hero.highlight}</p>
          <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#equipment" className="btn-primary">
              {t.hero.browseCta}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === "ar" ? "مرحبا! نريد الحصول على أفضل عرض سعر منكم للمعدات التالية:" : "Hello! We would like to get the best quote from you for the following equipment:")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#06281A] px-6 py-3 font-black text-white shadow-[0_4px_18px_rgba(6,40,26,0.50)] transition hover:bg-[#041c12] hover:shadow-[0_6px_24px_rgba(6,40,26,0.65)] hover:-translate-y-0.5"
            >
              <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
              {locale === "ar" ? "الحصول على عرض سعر" : "GET QUOTE"}
            </a>
          </div>
          <Stats items={t.stats} />
        </div>
      </div>
    </section>
  );
}
