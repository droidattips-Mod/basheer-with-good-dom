"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-dark/90 backdrop-blur">
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white">
          السامي
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-100 transition hover:text-amber-400">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            اطلب عرض سعر
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="فتح القائمة"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-dark md:hidden">
          <nav className="section-container flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-100 transition hover:text-amber-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center" onClick={() => setOpen(false)}>
              اطلب عرض سعر
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
