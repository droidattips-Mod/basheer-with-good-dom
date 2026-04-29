import { MessageCircle } from "lucide-react";
import { contactInfo, translations, whatsappMessages } from "@/data/content";
import type { Locale } from "@/types/site";
import ContactForm from "./ContactForm";

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = translations[locale].contact;
  const whatsappText = encodeURIComponent(whatsappMessages[locale]);

  return (
    <section id="contact" className="py-20">
      <div className="section-container grid gap-8 lg:grid-cols-2">
        <ContactForm locale={locale} />

        <aside className="rounded-3xl bg-[#004B26] p-8 text-white shadow-soft">
          <h3 className="text-3xl font-extrabold">{t.infoTitle}</h3>
          <ul className="mt-6 space-y-4 text-white/90">
            <li>{locale === "ar" ? `الهاتف: ${contactInfo.phone}` : `Phone: ${contactInfo.phone}`}</li>
            <li>{locale === "ar" ? `البريد الإلكتروني: ${contactInfo.email}` : `Email: ${contactInfo.email}`}</li>
            <li>{locale === "ar" ? `الموقع: ${contactInfo.locationAr}` : `Location: ${contactInfo.locationEn}`}</li>
            <li>{locale === "ar" ? `ساعات العمل: ${contactInfo.hoursAr}` : `Working Hours: ${contactInfo.hoursEn}`}</li>
          </ul>
          <a
            href={`https://wa.me/966500000000?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 font-bold text-[#06281A] transition hover:brightness-95"
          >
            <MessageCircle size={18} />
            {t.whatsapp}
          </a>
        </aside>
      </div>
    </section>
  );
}
