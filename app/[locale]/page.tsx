import { notFound } from "next/navigation";
import { translations } from "@/data/content";
import { isLocale } from "@/lib/locale";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import EquipmentSection from "@/components/site/EquipmentSection";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = translations[locale];

  return (
    <main className="bg-[#F7F8F6]">
      <Header locale={locale} brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />
      <Hero locale={locale} />
      <Features locale={locale} />
      <EquipmentSection locale={locale} />
      <Services locale={locale} />
      <About locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
      <FloatingButtons locale={locale} />
    </main>
  );
}
