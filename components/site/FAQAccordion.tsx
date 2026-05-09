"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right text-sm font-bold text-[#111827] transition hover:bg-slate-50"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <ChevronDown
              size={18}
              className={`shrink-0 text-[#006C35] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
            <span className="flex-1">{item.q}</span>
          </button>
          {open === i && (
            <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-[#6B7280]">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
