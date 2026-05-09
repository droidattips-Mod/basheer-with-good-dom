"use client";

import type { NavLink, Locale } from "@/types/site";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  open: boolean;
  locale: Locale;
  links: NavLink[];
  contactHref: string;
  languageLabel: string;
  onClose: () => void;
};

export default function MobileMenu({ open, locale, links, contactHref, languageLabel, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="border-t border-white/10 bg-[#06281A] md:hidden">
      <div className="section-container flex flex-col gap-4 py-5">
        {links.map((link) => (
          <a key={link.id} href={link.href} onClick={onClose} className="text-white/90 hover:text-[#00A651]">
            {link.label}
          </a>
        ))}
        <div className="flex items-center justify-between gap-3">
          <a href={contactHref} onClick={onClose} className="btn-primary flex-1">
            {locale === "ar" ? "اتصل بنا" : "Contact Us"}
          </a>
          <LanguageSwitcher locale={locale} label={languageLabel} />
        </div>
      </div>
    </div>
  );
}
