import { DISPLAY_EMAIL, DISPLAY_PHONE } from "@/data/content";
import { navLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-16 text-slate-200">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-2xl font-bold text-white"> رافعات النصر | تأجير رافعات ومعدات ثقيلة</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">نقدم خدمات تأجير المعدات والرافعات للمشاريع الإنشائية والصناعية مع التزام كامل بالجودة والسلامة.</p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white">معلومات التواصل</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>الهاتف: {DISPLAY_PHONE}</li>
            <li>البريد: {DISPLAY_EMAIL}</li>
            <li>الموقع: المملكة العربية السعودية</li>
          </ul>
        </div>
      </div>
      <p className="section-container mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">جميع الحقوق محفوظة © {new Date().getFullYear()} رافعات النصر   </p>
    </footer>
  );
}
