import ContactForm from "@/components/ContactForm";
import EquipmentSection from "@/components/EquipmentSection";
import Features from "@/components/Features";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <EquipmentSection />
      <Services />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </main>
  );
}
