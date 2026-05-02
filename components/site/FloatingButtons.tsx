"use client";

import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappMessages, WHATSAPP_NUMBER } from "@/data/content";
import type { Locale } from "@/types/site";

export default function FloatingButtons({ locale }: { locale: Locale }) {
  const [showTop, setShowTop] = useState(false);
  const whatsappText = encodeURIComponent(whatsappMessages[locale]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 z-40 flex flex-col gap-3 ${locale === "ar" ? "left-6" : "right-6"}`}>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="WhatsApp"
      >
        <Image src="/whatsapp-icon.svg" alt="" width={30} height={30} />
      </a>
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#004B26] text-white shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
