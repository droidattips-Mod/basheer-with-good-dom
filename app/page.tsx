import { translations } from "@/data/content";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import EquipmentSection from "@/components/site/EquipmentSection";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

export default function RootPage() {
  const t = translations["ar"];

  return (
    <main className="bg-[#F7F8F6] min-h-screen">
      <Header locale="ar" brandName={t.brandName} links={t.nav} languageLabel={t.languageSwitchLabel} />
      <Hero locale="ar" />
      <Features locale="ar" />
      <EquipmentSection locale="ar" />
      <Services locale="ar" />
      <About locale="ar" />
      <ContactSection locale="ar" />
      <Footer locale="ar" />
      <FloatingButtons locale="ar" />
    </main>
  );
}
