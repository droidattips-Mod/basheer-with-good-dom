import type { Locale } from "@/types/site";
import { translations } from "@/data/content";
import Stats from "./Stats";

export default function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center pt-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,40,26,.86), rgba(3,22,15,.88)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      <div className="section-container flex min-h-[calc(100vh-7rem)] items-center">
        <div className={`max-w-3xl text-white ${locale === "ar" ? "text-right" : "text-left"}`}>
          <span className="gold-label">{locale === "ar" ? "حلول مشاريع متكاملة" : "Integrated Project Solutions"}</span>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{t.hero.title}</h1>
          <p className="mt-3 text-2xl font-bold text-[#C9A227] md:text-3xl">{t.hero.highlight}</p>
          <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#equipment" className="btn-primary">
              {t.hero.browseCta}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.hero.contactCta}
            </a>
          </div>
          <Stats items={t.stats} />
        </div>
      </div>
    </section>
  );
}
