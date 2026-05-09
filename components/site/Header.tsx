"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const resolve = (href: string) => (isHome ? href : `/${locale}${href}`);

  const resolvedLinks = links.map((link) => ({ ...link, href: resolve(link.href) }));
  const contactHref = resolve("#contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition bg-[#06281A]/95 backdrop-blur ${scrolled ? "shadow-lg" : ""}`}>
      <div className="section-container flex h-20 items-center justify-between">
        <a href={resolve("#home")} aria-label={`${brandName} home`} className="flex shrink-0 items-center gap-3">
          <Image src="/logo.png" alt={brandName} width={56} height={56} className="h-14 w-14 rounded-full object-cover" priority />
          <span className="text-sm font-bold text-white">{brandName}</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {resolvedLinks.map((link) => (
            <a key={link.id} href={link.href} className="text-sm font-medium text-white/90 transition hover:text-[#00A651]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={contactHref} className="btn-primary">
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
      <MobileMenu open={open} locale={locale} links={resolvedLinks} contactHref={contactHref} languageLabel={languageLabel} onClose={() => setOpen(false)} />
    </header>
  );
}
