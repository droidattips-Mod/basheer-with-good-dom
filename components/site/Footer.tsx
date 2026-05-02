import { contactInfo, translations } from "@/data/content";
import type { Locale } from "@/types/site";

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <footer className="bg-[#111827] py-14 text-white">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-extrabold">{t.footer.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/80">{t.footer.description}</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">{t.footer.linksTitle}</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {t.nav.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="hover:text-[#C9A227]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-7 text-white/85">
          <p>{locale === "ar" ? `الهاتف: ${contactInfo.phone}` : `Phone: ${contactInfo.phone}`}</p>
          <p>{locale === "ar" ? `البريد: ${contactInfo.email}` : `Email: ${contactInfo.email}`}</p>
          <p>{locale === "ar" ? `الموقع: ${contactInfo.locationAr}` : `Location: ${contactInfo.locationEn}`}</p>
        </div>
      </div>
      <p className="section-container mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/60">{t.footer.copyright}</p>
    </footer>
  );
}
