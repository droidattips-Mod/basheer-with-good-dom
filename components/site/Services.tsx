"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { translations } from "@/data/content";
import type { Locale } from "@/types/site";

const slides = [
  "/images/slideshow/6051134373882433029.jpg",
  "/images/slideshow/6051134373882433030.jpg",
  "/images/slideshow/6051134373882433031.jpg",
  "/images/slideshow/6051134373882433032.jpg",
  "/images/slideshow/6051134373882433033.jpg",
  "/images/slideshow/6051134373882433034.jpg",
  "/images/slideshow/6051134373882433035.jpg",
  "/images/slideshow/6051134373882433036.jpg",
  "/images/slideshow/6051134373882433037.jpg",
  "/images/slideshow/6051134373882433038.jpg",
  "/images/slideshow/6051134373882433039.jpg",
];

export default function Services({ locale }: { locale: Locale }) {
  const t = translations[locale].services;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 3500);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section id="services" className="bg-white py-12 md:py-20">
      <div className="section-container">
        <div className="mx-auto mb-12 max-w-4xl rounded-[18px] bg-[#06281A] p-7 text-center text-white shadow-[0_10px_22px_rgba(6,40,26,0.22)] md:p-10">
          <span className="mb-3 block text-sm font-black text-[#00A651]">{t.label}</span>
          <h2 className="text-3xl font-black md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-lg">{t.subtitle}</p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="relative aspect-[3/4] w-full bg-[#06281A] sm:aspect-[9/10] md:aspect-[3/4] lg:aspect-[9/11]">
            {slides.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <Image
                  src={src}
                  alt={`${locale === "ar" ? "معدات رافعات النصر" : "Al Nasr Cranes Equipment"} ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute start-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute end-3 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
