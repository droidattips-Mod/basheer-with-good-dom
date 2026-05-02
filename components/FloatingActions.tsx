"use client";

import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/data/content";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        aria-label="التواصل عبر واتساب"
      >
        <Image src="/whatsapp-icon.svg" alt="" width={30} height={30} />
      </a>

      {showTop && (
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="العودة للأعلى"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
