"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/types/site";

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = () => {
    const targetLocale = locale === "ar" ? "en" : "ar";
    const nextPath = pathname.replace(/^\/(ar|en)/, `/${targetLocale}`);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${nextPath}${hash}`);
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="rounded-lg border border-[#00A651]/70 px-3 py-2 text-sm font-semibold text-[#00A651] transition hover:bg-[#00A651]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A651]"
      aria-label="Switch language"
    >
      {label}
    </button>
  );
}
