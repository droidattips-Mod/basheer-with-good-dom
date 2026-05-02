"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale, NavLink } from "@/types/site";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

type Props = {
  locale: Locale;
  brandName: string;
  links: NavLink[];
  languageLabel: string;
};

export default function Header({ locale, brandName, links, languageLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-[#111827]/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#home" aria-label={`${brandName} home`} className="shrink-0">
          <Image src="/logo.png" alt={brandName} width={56} height={56} className="h-14 w-14 rounded-full object-cover" priority />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.id} href={link.href} className="text-sm font-medium text-white/90 transition hover:text-[#C9A227]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="btn-primary">
            {locale === "ar" ? "اتصل بنا" : "Contact Us"}
          </a>
          <LanguageSwitcher locale={locale} label={languageLabel} />
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <MobileMenu open={open} locale={locale} links={links} languageLabel={languageLabel} onClose={() => setOpen(false)} />
    </header>
  );
}
